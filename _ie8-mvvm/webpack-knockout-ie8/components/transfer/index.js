const { parseProps, bindingExtends } = require('../utils/ko-component-utils')

const props = {
  clazz: {
    type: String
  },
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

  // 右侧选中数据
  checkedList: {
    type: Array,
    observable: true
  },

  limit: {
    type: Number,
    default: -1
  },

  // 自定义头部
  renderHeader: {
    type: Array,
    default: []
  },

  // 是否有搜索
  showSearch: {
    // type: Array,
    default: [true, false]
  },

  // 是否有移动按钮
  showSort: {
    type: Boolean,
    default: false
  }
}

const ViewModel = function (params, componentInfo) {
  let self = this
  parseProps(props, params, self)
  bindingExtends(componentInfo, self)
  self.init()
}

ViewModel.prototype.init = function () {
  let self = this
  self.showLeftSearch = false
  self.showRightSearch = false
  self._renderLeftHeader = (list) => {
    return `共 ${list.length} 个`
  }
  self._renderRightHeader = (list) => {
    return `已选择 ${list.length} 个`
  }

  if (Object.prototype.toString.call(self.showSearch) === '[object String]') {
    self.showLeftSearch = self.showRightSearch = self.showSearch
  } else if (Object.prototype.toString.call(self.showSearch) === '[object Array]') {
    self.showLeftSearch = self.showSearch[0]
    if (self.showSearch.length > 1) {
      self.showRightSearch = self.showSearch[1]
    }
  }

  if (self.renderHeader && self.renderHeader.length > 0) {
    self._renderLeftHeader = self.renderHeader[0]
  }

  if (self.renderHeader && self.renderHeader.length > 1) {
    self._renderRightHeader = self.renderHeader[1]
  }

  // TODO: add auto-bind method?
  // https://github.com/cassiozen/React-autobind/blob/master/src/autoBind.js
  self.handleAction = self.handleAction.bind(self)
  self.handleAdd = self.handleAdd.bind(self)
  self.handleRemove = self.handleRemove.bind(self)
  self.handleUp = self.handleUp.bind(self)
  self.handleDown = self.handleDown.bind(self)
  self.sortList = self.sortList.bind(self)
}

// TODO 能否通过 watch list，实现自动 highlight
ViewModel.prototype.highlight = function (key) {
  let self = this
  const $target = self.$componentRoot.find(`.k-transfer__item[data-key="${key}"]`)
  // use velocify, can not use the css variables...
  $target.velocity({ backgroundColor: '#d3dbe8' }, 'easeIn', 150, () => {
    $target.velocity({ backgroundColor: '#ffffff' }, 'easeOut', 150, () => {
      // 移除 style, 以免影响 hover 改变背景颜色 !
      $target.css({ backgroundColor: '' })
    })
  })
  // use CSS animation, is not compatible with ie8...
  // this.$componentRoot.find('.k-transfer__item').removeClass('is-moved')
  // this.$componentRoot.find(`.k-transfer__item[data-key="${key}"]`).addClass('is-moved')
}

ViewModel.prototype.handleAction = function (action, data, index) {
  let self = this
  //const method = _.camelCase(`handle-${action}`)
  const method = `handle-${action}`
  if (self[method]) {
    self[method](data, index)
  } else {
    console.error(`未找到方法: ${method}`)
  }
}

ViewModel.prototype.handleAdd = function (data, index) {
  let self = this
  if (self.limit !== -1 && self.checkedList().length >= self.limit) {
    return
  }
  self.list.splice(index, 1)
  let exist = false
  let list = self.checkedList()
  for (let i = 0; i < list.length; i++) {
    let item = list[i]
    if (item.key === data.key){
      exist = true;
    }
  }
  if (!exist) {
    self.checkedList.push(data)
    self.highlight(data.key)
  }
}

ViewModel.prototype.handleRemove = function (data, index) {
  let self = this
  self.checkedList.splice(index, 1)
  let exist = false
  let list = self.list()
  for (let i = 0; i < list.length; i++) {
    let item = list[i]
    if (item.key === data.key){
      exist = true;
    }
  }
  if (!exist) {
    self.list.push(data)
    self.sortList()
    self.highlight(data.key)
  }
}

ViewModel.prototype.handleUp = function (data, index) {
  let self = this
  if (index === 0) {
    return
  }
  self.checkedList.splice(index, 1)
  self.checkedList.splice(index - 1, 0, data)
  self.highlight(data.key)
}

ViewModel.prototype.handleDown = function (data, index) {
  let self = this
  if (index === self.checkedList().length - 1) {
    return
  }
  self.checkedList.splice(index, 1)
  self.checkedList.splice(index + 1, 0, data)
  self.highlight(data.key)
}

ViewModel.prototype.sortList = function (data) {
  let self = this
  self.list.sort(function (left, right) {
    return left.key === right.key ? 0 : (left.key < right.key ? -1 : 1)
  })
}

ko.components.register('k-transfer', {
  viewModel: {
    createViewModel: function (params, componentInfo) {
      return new ViewModel(params, componentInfo)
    }
  },
  template: require('./template.html')
});