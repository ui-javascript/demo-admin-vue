require('../utils/ko-transition')
const template = require('./index.html')
const popMixins = require('../utils/popup')

const defaults = {
  title: ko.observable('提示'),
  message: ko.observable(''),
  action: 'alert',
  type: ko.observable(''),
  showInput: ko.observable(false),
  showClose: ko.observable(true),
  modalFade: true,
  lockScroll: true,
  closeOnClickOutside: true,
  closeOnPressEscape: true,
  inputValue: ko.observable(null),
  inputPlaceholder: ko.observable(''),
  inputPattern: null,
  inputValidator: null,
  inputErrorMessage: ko.observable(''),
  editorErrorMessage: ko.observable(''),
  showConfirmButton: ko.observable(true),
  showCancelButton: ko.observable(false),
  confirmButtonText: ko.observable('确定'),
  cancelButtonText: ko.observable('取消'),
  confirmButtonClass: ko.observable(''),
  confirmButtonLoading: ko.observable(false),
  cancelButtonClass: ko.observable(''),
  customClass: ko.observable(''),
  beforeClose: ''
}

const IconMap = {
  success: 'circle-check',
  info: 'information',
  warning: 'warning',
  error: 'circle-cross'
}

const colorMap = {
  alert: 'is-primary',
  confirm: 'is-warning',
  info: 'is-primary',
  warning: 'is-warning',
  success: 'is-success',
  error: 'is-danger'
}

let currentMsg, instance
let msgQueue = []
const $body = $('body')
const $tmpl = $(template)

const defaultCallback = action => {
  if (currentMsg) {
    const callback = currentMsg.callback
    if (Object.prototype.toString.call(callback) === '[object Function]') {
      if (instance.showInput) {
        callback(instance.inputValue(), action)
      } else {
        callback(action)
      }
    }
  }
}

const ViewModel = function () {
  this.init()
}
ViewModel.prototype.init = function () {
  const self = this
  // props & callback
  self.uid = 1
  self.modal = true
  self.visible = ko.observable(false)
  // mixins
  popMixins.setMixin.call(self)
  self.setDefaults(defaults)

  // methods & computed
  self.nowClassName = ko.pureComputed(() => {
    const classList = []
    colorMap[self.type()] && classList.push(colorMap[self.type()])
    self.customClass() && classList.push(self.customClass())
    return classList.join(' ')
  })

  self.typeClassName = ko.pureComputed(() => {
    return self.type() && IconMap[self.type()] ? `k-message-box__icon__status-${IconMap[self.type()]}` : ''
  })
  self.getSafeClose = () => {
    const currentId = self.uid
    return () => {
      setTimeout(() => {
        if (currentId === self.uid) { self.doClose() }
      }, 0)
    }
  }
  self.handleAction = (action) => {
    if (self.type === 'prompt' && action === 'confirm' && !self.validate()) {
      return
    }
    self.action = action
    if (typeof self.beforeClose === 'function') {
      self.close = self.getSafeClose()
      self.beforeClose(action, self, self.close)
    } else {
      self.visible(false)
    }
  }

  self.afterFade = function () {
    console.log('afterFade')
  }
  self.handleWrapperClick = (vm, e) => {
    if (self.closeOnClickOutside && e.target === e.currentTarget) {
      self.handleAction('cancel')
    }
  }
}
ViewModel.prototype.setDefaults = function (defaults) {
  const self = this
  for (var prop in defaults) {
    if (defaults.hasOwnProperty(prop)){
      if (defaults[prop] !== undefined) {
        const value = defaults[prop]
        if (ko.isObservable(value)) {
          self[prop] = ko.observable(value())
        } else {
          self[prop] = value
        }
      }
    }
  }
}
const initInstance = () => {
  $body.append($tmpl)
  instance = new ViewModel()
  instance.register($tmpl)
  instance.callback = defaultCallback
  ko.applyBindings(instance, $tmpl.get(0))
}

const showNextMsg = () => {
  return new Promise(function (res, rej) {
    if (!instance) {
      initInstance()
    }
    instance.action = ''
    if (!instance.visible()) {
      if (msgQueue.length > 0) {
        currentMsg = msgQueue.shift()
        const options = currentMsg.options
        for (const prop in options) {
          if (defaults.hasOwnProperty(prop)) {
            const val = ko.isObservable(options[prop]) ? options[prop]() : options[prop]
            ko.isObservable(instance[prop]) ? instance[prop](val) : instance[prop] = val
          }
        }
        if (options.callback === undefined) {
          instance.callback = defaultCallback
        }

        const oldCb = instance.callback
        instance.callback = (action, instance) => {
          oldCb(action, instance)
          showNextMsg()
          if (action === 'cancel') {
            rej(instance.inputValue && instance.inputValue())
          } else {
            res(instance.inputValue && instance.inputValue())
          }
        }
        let tmpArr = ['modal', 'showClose', 'closeOnClickOutside', 'closeOnPressEscape']
        for (let i = 0; i < tmpArr.length; i++) {
          let prop = tmpArr[i]
          if (instance[prop] === undefined) {
            instance[prop] = true
          }
        }
        setTimeout(function () {
          instance.visible(true)
          instance.$el.find('.k-message-box__input>input').focus()
        }, 0)
      }
    }
  })
}

const MessageBox = function (options, callback) {
  if (Object.prototype.toString.call(options) === '[object String]') {
    options = {
      message: options
    }
    if (arguments[1]) {
      options.title = arguments[1]
    }
    if (arguments[2]) {
      options.type = arguments[2]
    }
  } else if (options.callback && !callback) {
    callback = options.callback
  }

  msgQueue.push({
    options: Object.assign({}, defaults, MessageBox.defaults, options),
    callback: callback
  })

  return showNextMsg()
}

MessageBox.setDefaults = defaults => {
  MessageBox.defaults = defaults
}

let warnArr = ['info', 'success', 'warning', 'error']
for (let i = 0; i < warnArr.length; i++) {
  let type = warnArr[i]
  MessageBox[type] = (message, title, options) => {
    if (Object.prototype.toString.call(message) === '[object Object]') {
      options = message
      message = options.message
    } else if (Object.prototype.toString.call(title) === '[object Object]') {
      options = title
      title = undefined
    }
    options = options || {}
    options.type = options.type || type
    switch (options.action) {
    case 'alert':
      return MessageBox.alert(message, title, options);
    case 'prompt':
      return MessageBox.prompt(message, title, options);
    default:
      return MessageBox.confirm(message, title, options);
    }
  };
}
MessageBox.alert = (message, title, options) => {
  if (Object.prototype.toString.call(message) === '[object Object]') {
    options = message
    message = options.message
  } else if (Object.prototype.toString.call(title) === '[object Object]') {
    options = title
    title = undefined
  }
  return MessageBox(Object.assign({
    message: message,
    title,
    type: 'info',
    closeOnPressEscape: false,
    closeOnClickOutside: false
  }, options))
}

MessageBox.confirm = (message, title, options) => {
  if (Object.prototype.toString.call(message) === '[object Object]') {
    options = message
    message = options.message
  } else if (Object.prototype.toString.call(title) === '[object Object]') {
    options = title
    title = undefined
  }
  return MessageBox(Object.assign({
    message,
    title,
    type: 'warning',
    showCancelButton: true
  }, options))
}

MessageBox.prompt = (message, title, options) => {
  if (Object.prototype.toString.call(message) === '[object Object]') {
    options = message
    message = options.message
  } else if (Object.prototype.toString.call(title) === '[object Object]') {
    options = title
    title = undefined
  }
  return MessageBox(Object.assign({
    message,
    title,
    showCancelButton: true,
    showInput: true,
    type: 'info'
  }, options))
}

MessageBox.close = () => {
  instance.visible(false)
  msgQueue = []
  currentMsg = null
}

module.exports.msgBox = MessageBox
