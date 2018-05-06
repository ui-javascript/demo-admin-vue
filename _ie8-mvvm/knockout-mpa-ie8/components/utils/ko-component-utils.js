/** ************************************
 *  ko 组件工具类：通常在组件component的<script/>中使用
 *************************************** **/

const { root } = require('./constants.js')
const { getComponentNodes, getSlotNodes } = require('./ko-template-utils')
const nodeType = {
  ELEMENT: 1,
  TEXT: 3,
  COMMENT: 8,
}

// ==========⬇ export functions ⬇=========

/**
 * 扩展组件上下文 viewModel
 *
 * @param componentInfo
 * @param context {Object} viewModel
 */
const bindingExtends = (componentInfo, context) => {
  // 绑定方法
  const fns = {
    getComponentNodes,
    getSlotNodes,
  }
  bindingTemplateFns(fns, context)

  // 绑定属性
  context['$componentRoot'] = $(getComponentRoot(componentInfo)) // become a jquery object
  context['$contextPath'] = root
}

/**
 * 绑定通用方法到指定的 viewModel 上
 * @param fns     {Object}
 * @param context
 */
const bindingTemplateFns = (fns = {}, context) => {
  for (let fnName in fns) {
    context[fnName] = fns[fnName]
  }
}

/**
 * 获取 component 的根元素，
 * 说明：如果模板中使用 virtual element 的方式声明一个组件，那么该组件的模板定义中有且只有一个非 virtual 的根元素时，
 *      该方法才会返回一个 component 的根元素，否则会返回当前 virtual element 的下一个非 virtual 的兄弟元素
 * 建议：定义一个需要根元素的自定义组件时，最好存在一个单一根元素
 * @param componentInfo
 * @returns {Element}
 */
const getComponentRoot = (componentInfo) => {
  if (componentInfo.element.nodeType === nodeType.COMMENT) {
    return $(componentInfo.element).next() // (`.${name}:first-child`)[0]
  }
  return componentInfo.element
}

/**
 * 获取 component 的渲染元素：可能是 自定义标签，注释标签（virtual element），其它标签
 */
const getComponentRenderNode = (componentInfo) => {
  return componentInfo.element
}

/**
 * 根据类型返回默认值
 * @param {*} type
 */
const getDefaultValue = (type) => {
  if (type === Number) {
    return 0
  } else if (type === String) {
    return ''
  } else if (type === Boolean) {
    return false
  } else if (type === Array) {
    return []
  }
}

/**
 * 解析创建 viewModel 时传入的 params
 * @param props 当前组件定义的 params
 * @param params 传入的 params
 * @param context viewModel
 */
const parseProps = (props = {}, params = {}, context) => {
  if (typeof props === 'function') {
    props = {
      type: props
    }
  }

  for (let key in props) {
    let prop = props[key]
    let value = params[key]
    const defaultVal = prop['default']
    if (value === undefined) {
      value = !(defaultVal === undefined) ? defaultVal : getDefaultValue(prop.type)
    }
    if (prop.observable) {
      if (typeof value !== 'function') {
        if (prop.type === Array) {
          context[key] = ko.observableArray(value)
        } else if (!(value === undefined) && Object.prototype.toString.call(value) === '[object Array]') {
          context[key] = ko.observableArray(value)
        } else {
          context[key] = ko.observable(value)
        }
      } else {
        context[key] = value
      }
    } else {
      context[key] = value
    }
  }
}

/**
 *
 * @param element
 * @param selector
 * @returns {*}
 */
const getWrapper = (element, selector) => {
  return $(element).closest(selector)
}

/**
 * 列表的 选中/全选
 * 当页面上有一组列表，需要列表支持选择和全选时，调用该方法
 *
 * @param context - ViewModel 上下文
 * @param checkAllProperty - 全选属性名称
 * @param checkedItemsProperty - 选中内容属性名称
 * @param listProperty - 列表属性名称
 */
const bindListCheckable = (context, { checkAllProperty = 'checkAll', checkedItemsProperty = 'checkedItems', listProperty = 'list' } = {}) => {
  let checkAllFlag = false
  let checkItemFlag = false
  context[checkAllProperty].subscribe(checkAll => {
    if (checkItemFlag) {
      return
    }
    checkAllFlag = true
    if (checkAll) {
      context[checkedItemsProperty](JSON.parse(JSON.stringify(context[listProperty]())))
    } else {
      context[checkedItemsProperty]([])
    }
    checkAllFlag = false
  })

  context[checkedItemsProperty].subscribe(items => {
    if (checkAllFlag) {
      return
    }
    checkItemFlag = true
    const checkAll = items.length === context[listProperty]().length
    context[checkAllProperty](checkAll)
    checkItemFlag = false
  })
}

module.exports = {
  parseProps,
  getComponentRoot,
  getComponentRenderNode,
  bindingTemplateFns,
  bindingExtends,
  getWrapper,
  bindListCheckable
}
