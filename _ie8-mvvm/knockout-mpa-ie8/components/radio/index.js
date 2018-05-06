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
  checked: {
    type: '*', //
    observable: true
  },
  value: {
    type: String,
    observable: true
  },
  checkedValue: {
    type: '*',
    observable: true
  },
  // 自定义内容
  customized: Boolean
}

const ViewModel = function (params, componentInfo) {
  let self = this;
  parseProps(props, params, self)
  bindingExtends(componentInfo, self)

  const css = {}
  let clazzs = self.clazz.trim().split(/\s+/);
  for (let i = 0; i < clazzs.length; i++) {
    css[clazzs[i]] = true
  }

  self.hasFocus = ko.observable()

  if (self.value() === null || self.value() === undefined) {
    self.value(self.label())
  }

  self.useThickened = ko.pureComputed(() => {
    return self.disabled() && self.checked() === self.value()
  })

  self.labelCssObj = ko.pureComputed(() => {
    const ret = JSON.parse(JSON.stringify(css))
    ret['is-checked'] = self.checked() === self.value()
    ret['is-disabled'] = self.disabled()
    ret['is-focus'] = self.hasFocus()
    return ret
  })

  self.innerCssObj = ko.pureComputed(() => {
    const ret = {}
    ret['is-checked'] = self.checked() === self.value()
    ret['is-disabled'] = self.disabled()
    ret['is-focus'] = self.hasFocus()
    return ret
  })
}

/**
 * 单选框 - Radio
 */

ko.components.register('k-radio', {
  viewModel: {
    createViewModel: function (params, componentInfo) {
      return new ViewModel(params, componentInfo)
    }
  },
  template: require('./template.html')
});