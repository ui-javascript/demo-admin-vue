require('../utils/ko-transition')
const template = require('./index.html')
const popup = require('../utils/popup/popup-manager')
const $body = $('body')
const instances = []
const msg = {}

let seed = 1
let instance

const DEFAULT = {
  type: 'info',
  duration: 3000,
  message: '',
  showClose: false,
  iconClassName: '',
  onClose: function () {
  }
}
const ViewModel = function () {
  const self = this
  self.show = ko.observable(true)
  self.typeClassName = ko.pureComputed(function () {
    return self.type === 'error' ? 'k-message--danger' : `k-message--${self.type}`
  }, self)
  self.iconClassName = ko.pureComputed(function () {
    switch (self.type) {
    case 'success':
      return 'fa fa-check-circle k-message--icon-success'
    case 'info':
      return 'fa fa-info-circle k-message--icon-info'
    case 'warning':
      return 'fa fa-exclamation-circle k-message--icon-warning'
    case 'error':
      return 'fa fa-times-circle k-message--icon-danger'
    }
    return ''
  }, self)
  self.close = function ($el) {
    self.$el.remove()
    if (Object.prototype.toString.call(self.onClose) === '[object Object]') {
      self.onClose($el)
    }
  }
  self.afterSlide = function () {
    self.$el.remove()
  }
}

msg.show = function (options) {
  return new Promise(function (res, rej) {
    const id = 'message_' + seed++
    const $tmpl = $(template)
    options = options || {}
    if (!Object.prototype.toString.call(options) === '[object Object]') {
      options = {
        message: options
      }
    }
    const userOnClose = options.onClose
    $tmpl.get(0).id = id
    $tmpl.get(0).style.zIndex = popup.nextZIndex() + 1000

    for (var key in DEFAULT) {
      if (options[key] === undefined) {
        options[key] = DEFAULT[key]
      }
    }
    ViewModel.prototype = options
    ViewModel.prototype.constructor = ViewModel
    const vm = new ViewModel()
    vm.onClose = function () {
      msg.close(id, userOnClose)
      res('close', instance)
    }
    $body.append($tmpl)
    vm.$el = $tmpl
    ko.applyBindings(vm, $tmpl.get(0))
    instance = {
      id: id,
      vm: vm,
      dom: $tmpl
    }
    instances.push(instance)
    setTimeout(() => {
      vm.show(false)
      msg.close(id)
    }, vm.duration)
    return instance.vm
  })
};

let warnArr = ['success', 'warning', 'info', 'error']
for (let i = 0; i < warnArr.length; i++) {
  let type = warnArr[i];
  msg[type] = options => {
    if (!(Object.prototype.toString.call(options) === '[object Object]')) {
      options = {
        message: options
      }
    }
    options.type = type
    return msg.show(options)
  }
}

msg.close = function (id, userOnClose) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (Object.prototype.toString.call(userOnClose) === '[object Function]') {
        userOnClose(instances[i])
      }
      instances.splice(i, 1)
      break
    }
  }
}

msg.closeAll = function () {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].vm.close()
  }
}

module.exports.msg = msg
