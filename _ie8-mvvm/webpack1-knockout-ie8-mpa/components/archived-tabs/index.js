const { parseProps, bindingExtends, getWrapper } = require('../utils/ko-component-utils.js');

require('../archived-tabs-item')

const props = {
  type: {
    type: String,
    observable: true
  },
  value: { // 选中选项卡的 name, 默认会选择第一个选项卡的 name
    type: String,
    observable: true
  },
  onChange: {
    type: String,
    default: undefined
  }
}

const ViewModel = function (params, componentInfo) {
  let self = this;
  // props
  parseProps(props, params, self)
  bindingExtends(componentInfo, self)

  self.currentName = ko.pureComputed(() => {
    return self.value()
  })

  self.barStyle = ko.observable({})

  // computed
  self.classObj = () => {
    const ret = {}
    if (self.type()) {
      ret[`k-tabs--${self.type()}`] = true
    }
    return ret
  }

  // watches
  self.value.subscribe((newValue) => {
    const onChange = self.onChange
    onChange(newValue)
  })

  // events handle
  self.handleTabClick = (data, e) => {
    const $tabItem = getWrapper(e.target || e.srcElement, '.k-tabs__item')
    if (!$tabItem.length) {
      return
    }
    const left = $tabItem.position().left
    const width = $tabItem.outerWidth()
    const tabData = ko.dataFor($tabItem[0])

    self.value(tabData.name)
    if (!self.type()) {
      self.barStyle({
        left: left + 'px',
        width: width + 'px'
      })
    }
  }
}

/**
 * 导航 - Tab页
 */
ko.components.register('k-archived-tabs', {
  viewModel: {
    createViewModel: function(params, componentInfo) {
      return new ViewModel(params, componentInfo)
    }
  },
  template: require('./template.html')
});