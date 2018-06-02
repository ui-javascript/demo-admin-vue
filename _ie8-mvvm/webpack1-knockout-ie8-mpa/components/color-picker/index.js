const { parseProps, bindingExtends } = require('../utils/ko-component-utils')
const { Colors, Total } = require('./constants')

const props = {
  value: {
    type: String,
    observable: true
  },
  // 每行颜色数量
  rowCount: {
    type: Number,
    default: Total
  },
  onChange: {
    type: Function
  },
  // 颜色块点击事件
  onClick: {
    type: Function
  }
}

const ViewModel = function (params, componentInfo) {
  let self = this;
  parseProps(props, params, self)
  bindingExtends(componentInfo, self)

  self.init()

  self.onItemClick = self.onItemClick.bind(self)
  self.total = Total

  self.value.subscribe((newValue) => {
    self.onChange && self.onChange(newValue)
  })
}

ViewModel.prototype.onItemClick = function (data) {
  self.value(data)
  self.onClick && self.onClick()
}

ViewModel.prototype.init = function () {
  self.colors = Colors
}

ko.components.register('k-color-picker', {
  viewModel: {
    createViewModel: function(params, componentInfo) {
      return new ViewModel(params, componentInfo)
    }
  },
  template: require('./template.html')
});