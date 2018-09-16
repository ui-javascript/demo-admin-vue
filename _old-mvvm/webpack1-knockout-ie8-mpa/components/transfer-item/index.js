const { parseProps, bindingExtends } = require('../utils/ko-component-utils')

const props = {
  // 左侧数据
  // {
  //   label: String,
  //   key: String,
  //   disabled: Boolean
  // }
  list: {
    type: Array,
    observable: true
  },

  // 自定义头部
  renderHeader: {
    type: Function
  },

  // 是否有搜索
  showSearch: {
    type: Boolean,
    default: false
  },

  // 右侧是否有移动按钮
  showSort: {
    type: Boolean,
    default: false
  },

  // 目标窗口
  isTarget: {
    type: Boolean,
    default: false
  },

  // 处理事件
  handleAction: {
    type: Function
  }
}

const ViewModel = function (params, componentInfo) {
  let self = this;
  parseProps(props, params, self)
  bindingExtends(componentInfo, self)

  self.keyword = ko.observable('')

  self.filterList = ko.pureComputed(() => {
    const keyword = self.keyword().trim()
    if (!keyword) {
      return self.list()
    }
    let value
    let list = self.list()
    for (let i = 0; i < list.length; i++) {
      let item = list[i]
      if ((item.label || '').indexOf(keyword) !== -1){
        value = item
      }
    }
    return value
  })

  self._renderHeader = ko.pureComputed(() => {
    if (self.renderHeader) {
      return self.renderHeader(self.list())
    } 
    return ''
  })
}

ViewModel.prototype.onItemClick = function (data, index) {
  let self = this
  if (!self.isTarget) {
    // 左侧窗口点击行时执行添加操作
    self.handleAction('add', data, index)
  } else {
    // 右侧窗口不处理行点击事件
  }
}

ViewModel.prototype.clearKeyword = function () {
  this.keyword('')
}

ko.components.register('k-transfer-item', {
  viewModel: {
    createViewModel: function (params, componentInfo) {
      return new ViewModel(params, componentInfo)
    }
  },
  template: require('./template.html')
});