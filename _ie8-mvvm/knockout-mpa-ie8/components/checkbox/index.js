
const { parseProps, bindingExtends } = require('../utils/ko-component-utils')

const props = {
  clazz: {
    type: String
  },
  label: {
    type: String,
    observable: true
  },
  disabled: {
    type: Boolean,
    observable: true
  },
  name: {
    type: String // 原生 name 值
  },
  checked: { // 是否选中
    type: '*', // String or Array
    observable: true
  },
  value: { // 当 checked 是数组时，value 代表当前选项对应的值, 如果没有 value, 则会使用 label
    type: String,
    observable: true
  },
  checkedValue: { // 当 checked 是数组时, 提供 checkedValue，会忽略 value 属性
    type: '*',
    observable: true
  },
  indeterminate: { // 纯样式控制
    type: Boolean
  },
  onClick: { // 点击时触发的事件，目前用于业务判断是否阻止选中
    type: Function
  },
  clickBubble: {
    type: Boolean
  }
}

const ViewModel = function (params, componentInfo) {
  let self = this;
  parseProps(props, params, self)
  bindingExtends(componentInfo, self)

  const css = {}
  if (self.clazz){
    let clazzs = self.clazz.trim().split(/\s+/);
    for (let i = 0; i < clazzs.length; i++) {
      return css[clazzs[i]] = true
    }
  }

  self.hasFocus = ko.observable()

  if (self.value() === null || self.value() === undefined || self.value() === '') {
    self.value(self.label())
  }

  self.labelCssObj = ko.pureComputed(() => {
    const ret = JSON.parse(JSON.stringify(css))
    if (Object.prototype.toString.call(self.checked()) === '[object Object]') {
      if (!(self.checkedValue() === null || self.checkedValue() === undefined)) {
        ret['is-checked'] = self.checked().indexOf(self.checkedValue()) > -1
      } else {
        ret['is-checked'] = self.checked().indexOf(self.value()) > -1
      }
    } else {
      ret['is-checked'] = self.checked()
    }
    ret['is-disabled'] = self.disabled()
    ret['is-focus'] = self.hasFocus()
    return ret
  })
}

/**
 * 多选框 - Checkbox
 */
ko.components.register('k-checkbox', {
  viewModel: {
    createViewModel: function(params, componentInfo) {
      return new ViewModel(params, componentInfo)
    }
  },
  template: require('./template.html')
});