const popupManager = require('./popup-manager.js')
const utils = require('../ko-utils.js')
const { getScrollBarWidth } = require('../getScrollBarWidth.js')

let scrollBarWidth
let idSeed = 1
const $html = $('html')

const getDOM = function (dom) {
  if (dom.nodeType === 3) {
    dom = dom.nextElementSibling || dom.nextSibling
    getDOM(dom)
  }
  return dom
}

function setMixin() {
  const self = this
  // props
  self.modalAppendToBody = true
  self._popupId = ''
  // methods:
  self.register = ($el) => {
    self._popupId = 'popup-' + idSeed++
    popupManager.register(self._popupId, self)
    self.$el = $el
  }
  self.visible.subscribe(function (val) {
    if (val) {
      self.triggerVisible()
    } else {
      self.close()
    }
  })
  self.triggerVisible = function () {
    self.uid++
    if (self._opening) { return }
    if (!self.rendered) {
      self.rendered = true
      setTimeout(function () {
        self.open()
      }, 0)
    } else {
      self.open()
    }
  }
  self.open = () => {
    if (!self.rendered) {
      self.rendered = true
    }

    if (self._closeTimer) {
      clearTimeout(self._closeTimer)
      self._closeTimer = null
    }
    clearTimeout(self._openTimer)

    const openDelay = Number(self.openDelay)
    if (openDelay > 0) {
      self._openTimer = setTimeout(() => {
        self._openTimer = null
        self.doOpen()
      }, openDelay)
    } else {
      self.doOpen()
    }
  }
  self.doOpen = () => {
    if (self.willOpen && !self.willOpen()) { return }
    if (self.opened) { return }

    self._opening = true

    const dom = self.$el.get(0)

    const modal = self.modal

    const zIndex = self.zIndex
    if (zIndex) {
      popupManager.zIndex = zIndex
    }

    if (modal) {
      if (self._closing) {
        popupManager.closeModal(self._popupId)
        self._closing = false
      }
      popupManager.openModal(self._popupId, popupManager.nextZIndex(), self.modalAppendToBody ? undefined : dom, self.modalClass, self.modalFade)
      if (self.lockScroll) {
        window.kamala = window.kamala || {}
        window.kamala.modalCount = window.kamala.modalCount || 0
        window.kamala.modalCount++
        if (!self.bodyOverflow) {
          self.bodyPaddingRight = $html.css('paddingRight')
          self.bodyOverflow = $html.css('overflow')
        }
        scrollBarWidth = getScrollBarWidth()
        const bodyHasOverflow = document.documentElement.clientHeight < $html.get(0).scrollHeight
        const bodyOverflowY = $html.css('overflowY')
        if (scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === 'scroll')) {
          $html.css('paddingRight', scrollBarWidth)
        }
        $html.css('overflow', 'hidden')
      }
    }

    if (utils.getCurrentStyle(dom).position === 'static') {
      dom.style.position = 'absolute'
    }

    dom.style.zIndex = popupManager.nextZIndex()
    self.opened = true

    self.onOpen && self.onOpen()
    self.$el.show()
    setTimeout(() => {
      self.$el.removeClass('k-modal--fade')
    }, 50)
    if (!self.transition) {
      self.doAfterOpen()
    }
  }
  self.doAfterOpen = () => {
    self._opening = false
  }
  self.close = () => {
    if (self.willClose && !self.willClose()) return

    if (self._openTimer !== null) {
      clearTimeout(self._openTimer)
      self._openTimer = null
    }
    clearTimeout(self._closeTimer)

    const closeDelay = Number(self.closeDelay)

    if (closeDelay > 0) {
      self._closeTimer = setTimeout(() => {
        self._closeTimer = null
        self.doClose()
      }, closeDelay)
    } else {
      self.doClose()
    }
  }
  self.doClose = () => {
    self.visible(false)
    self._closing = true

    self.$el.addClass('k-modal--fade')
    self.onClose && self.onClose()

    setTimeout(() => {
      if (self.lockScroll) {
        window.kamala.modalCount--
        popupManager.closeModal(self._popupId)
        if (self.modal && self.bodyOverflow !== 'hidden') {
          $html.css('overflow', self.bodyOverflow)
          $html.css('paddingRight', self.bodyPaddingRight)
        }
        self.bodyOverflow = null
        self.bodyPaddingRight = null
      }
      self.$el.hide()
    }, 200)
    self.opened = false

    if (!self.transition) {
      self.doAfterClose()
    }
    if (self.action) { self.callback(self.action, self) }
  }
  self.doAfterClose = () => {
    popupManager.closeModal(self._popupId)
    self._closing = false
  }
}

module.exports = {
  setMixin
}
