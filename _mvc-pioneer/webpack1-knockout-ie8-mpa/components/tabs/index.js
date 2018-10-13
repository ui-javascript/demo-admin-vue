const { parseProps, bindingExtends } = require('../utils/ko-component-utils')

const props = {
  value: { // 选中选项卡的 name, 默认会选择第一个选项卡的 name
    type: String,
    observable: true
  },
  onChange: {
    type: String,
    'default': undefined
  },
}

const init = function () {
  let self = this;
  const $root = self.$componentRoot
  self.$navContainer = $root.find('>.k-tabs__header>.k-tabs__nav-wrapper>.k-tabs__nav')
  self.$paneContainer = $root.find('>.k-tabs__content')
  self.$activeBar = self.$navContainer.find('>.k-tabs__active-bar')

  self.value.subscribe((newValue) => {
    self.activate(newValue)
    const onChange = self.onChange
    onChange(newValue)
  })

  self.$navContainer.on('click', '.k-tabs__item', (e) => {
    e.preventDefault()
    const $nav = $(e.target || e.srcElement).closest('.k-tabs__item')
    const value = $nav.attr('href').replace('#', '')
    self.value(value)
  })

  if (self.value) {
    self.activate(self.value())
  }
}

const ViewModel = function (params, componentInfo) {
  let self = this;
  parseProps(props, params, self)
  setTimeout(() => {
    bindingExtends(componentInfo, self)
    init.bind(self)()
  }, 0)
}

ViewModel.prototype.activate = function (target) {
  let self = this;
  const $nav = self.$componentRoot.find(`[href="#${target}"]`).first()
  if (!$nav.length) {
    return
  }
  self.$navContainer.find('>.k-tabs__item').removeClass('is-active')
  $nav.addClass('is-active')

  self.$paneContainer.find('>.k-tab-pane').removeClass('is-active')
  self.$paneContainer.find(`#${target}`).addClass('is-active')

  if (self.$activeBar.length) {
    const left = $nav.position().left
    const width = $nav.outerWidth()
    self.$activeBar.css({
      left: left + 'px',
      width: width + 'px'
    })
  }
}

ko.components.register('k-tabs', {
  viewModel: {
    createViewModel: function (params, componentInfo) {
      return new ViewModel(params, componentInfo)
    }
  },
  template: require('./template.html')
});