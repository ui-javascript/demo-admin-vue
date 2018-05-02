require('../utils/ko-transition')
const { parseProps, bindingExtends } = require('../utils/ko-component-utils')
const popMixins = require('../utils/popup')
const { SCROLL_PAGE } = require('../utils/constants').gevents

const props = {
  visible: {
    type: Boolean,
    observable: true,
  },
  closeOnClickOutside: {
    type: Boolean,
    'default': true
  },
  lockScroll: {
    type: Boolean,
    'default': true
  },
  closeOnPressEscape: {
    type: Boolean,
    'default': true
  },
  beforeClose: {
    type: Function
  }
}

const ViewModel = function (params, componentInfo) {
  let self = this;
  parseProps(props, params, self)
  popMixins.setMixin.call(self)

  self.modal = true
  self.modalFade = true

  setTimeout(() => {
    bindingExtends(componentInfo, self)
    self.init()
    if (self.visible()) { self.triggerVisible() }
  }, 0)
}

ViewModel.prototype.init = function () {
  let self = this;
  const $root = self.$componentRoot

  $root.on('click', e => {
    if (self.closeOnClickOutside && (e.target || e.srcElement) === e.currentTarget) {
      self.handleClose()
    }
  })

  self.register($root)
  $root.appendTo(document.body)

  $root.on('scroll', function () {
    $.gevent.publish(SCROLL_PAGE)
  })
}

ViewModel.prototype.handleClose = function () {
  let self = this;
  if (typeof self.beforeClose === 'function') {
    self.beforeClose(() => {
      self.visible(false)
    })
  } else {
    self.visible(false)
  }
}

/**
 * Modal
 */
ko.components.register('k-dialog', {
  viewModel: {
    createViewModel: function(params, componentInfo) {
      return new ViewModel(params, componentInfo)
    }
  },
  template: require('./template.html')
});
