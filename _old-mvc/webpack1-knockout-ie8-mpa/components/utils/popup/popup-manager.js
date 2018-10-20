let hasModal = false

const getModal = function () {
  let modalDom = PopupManager.modalDom
  if (modalDom) {
    hasModal = true
  } else {
    hasModal = false
    modalDom = document.createElement('div')
    PopupManager.modalDom = modalDom

    $(modalDom).on('touchmove', function (event) {
      event.preventDefault()
      event.stopPropagation()
    })

    $(modalDom).on('click', function () {
      PopupManager.doOnModalClick && PopupManager.doOnModalClick()
    })
  }

  return modalDom
}

const instances = {}

const PopupManager = {
  zIndex: 2000,

  modalFade: true,

  getInstance: function (id) {
    return instances[id]
  },

  register: function (id, instance) {
    if (id && instance) {
      instances[id] = instance
    }
  },

  deregister: function (id) {
    if (id) {
      instances[id] = null
      delete instances[id]
    }
  },

  nextZIndex: function () {
    return PopupManager.zIndex++
  },

  modalStack: [],

  doOnModalClick: function () {
    const topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1]
    if (!topItem) return

    const instance = PopupManager.getInstance(topItem.id)
    if (instance && instance.closeOnClickOutside) {
      instance.close()
    }
  },

  openModal: function (id, zIndex, dom, modalClass, modalFade) {
    let self = this
    if (!id || zIndex === undefined) return
    self.modalFade = modalFade

    const modalStack = self.modalStack

    for (let i = 0, j = modalStack.length; i < j; i++) {
      const item = modalStack[i]
      if (item.id === id) {
        return
      }
    }

    const modalDom = getModal()

    $(modalDom).addClass('k-modal')
    if (modalClass) {
      const classArr = modalClass.trim().split(/\s+/)
      for (let i = 0; i < classArr.length; i++) {
        $(modalDom).addClass(classArr[i])
      }
    }

    if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
      dom.parentNode.appendChild(modalDom)
    } else {
      document.body.appendChild(modalDom)
    }
    if (self.modalFade && !hasModal) {
      setTimeout(function () {
        $(modalDom).addClass('k-modal--in')
      }, 0)
    }

    if (zIndex) {
      modalDom.style.zIndex = zIndex
    }
    modalDom.style.display = ''

    self.modalStack.push({ id: id, zIndex: zIndex, modalClass: modalClass })
  },

  closeModal: function (id) {
    let self = this
    const modalStack = self.modalStack
    const modalDom = getModal()

    if (modalStack.length > 0) {
      const topItem = modalStack[modalStack.length - 1]
      if (topItem.id === id) {
        if (topItem.modalClass) {
          const classArr = topItem.modalClass.trim().split(/\s+/)
          for (let i = 0; i < classArr.length; i++) {
            $(modalDom).removeClass(classArr[i])
          }
        }

        modalStack.pop()
        if (modalStack.length > 0) {
          modalDom.style.zIndex = modalStack[modalStack.length - 1].zIndex
        }
      } else {
        for (let i = modalStack.length - 1; i >= 0; i--) {
          if (modalStack[i].id === id) {
            modalStack.splice(i, 1)
            break
          }
        }
      }
    }

    if (modalStack.length === 0) {
      if (self.modalFade) {
        $(modalDom).removeClass('k-modal--in')
      }
      setTimeout(() => {
        if (modalStack.length === 0) {
          if (modalDom.parentNode) modalDom.parentNode.removeChild(modalDom)
          modalDom.style.display = 'none'
          PopupManager.modalDom = undefined
        }
      }, 200)
    }
  }
}

const getTopPopup = function () {
  if (PopupManager.modalStack.length > 0) {
    const topPopup = PopupManager.modalStack[PopupManager.modalStack.length - 1]
    if (!topPopup) return
    const instance = PopupManager.getInstance(topPopup.id)
    return instance
  }
}

// handle `esc` key when the popup is shown
$(document).on('keydown', function (event) {
  if (event.keyCode === 27) {
    const topPopup = getTopPopup()

    if (topPopup && topPopup.closeOnPressEscape) {
      topPopup.handleClose
        ? topPopup.handleClose()
        : (topPopup.handleAction ? topPopup.handleAction('cancel') : topPopup.close())
    }
  }
})

module.exports = PopupManager
