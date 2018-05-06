const { parseProps, bindingExtends, getWrapper } = require('../utils/ko-component-utils')
const { Popper } = require('../popper/index.js')

const itemClass = '.k-select-dropdown__item'
const listClass = '.k-select-dropdown__list'
const emptyClass = '.k-select-dropdown__empty'
const caretClass = '.k-select__caret'
const clearClass = '.k-select__clear'

const props = {
  value: {
    type: String,
    observable: true
  },
  optionsText: {
    type: String,
    'default': 'label'
  },
  optionsValue: {
    type: String,
    'default': 'value'
  },
  optionsCaption: {
    type: String,
    'default': ''
  },
  clearable: {
    type: Boolean,
    'default': false
  },
  disabled: {
    type: Boolean,
    'default': false,
    observable: true
  },
  // below is popper relative
  adjust2Relative: {
    type: Boolean,
    'default': true
  },
}

const init = function () {
  let self = this;
  const $root = self.$componentRoot
  self.$dropdown = $root.find('.k-popper')
  self.$trigger = $root.find('.k-input')
  self.$input = self.$trigger.find('.k-input__inner')
  self.$caret = self.$trigger.find(caretClass)
  self.$clear = self.$trigger.find(clearClass)
  self.isShow = false

  self.dropdownPopper = new Popper(self.$dropdown, self.$trigger, {
    verticalOnly: true,
    adjust2Relative: self.adjust2Relative
  }).on('show', () => {
    self.isShow = true
  }).on('hide', () => {
    self.isShow = false
  })

  self.$trigger.on('click', (e) => {
    e.preventDefault()
    if (self.disabled()) return
    if (e.target === self.$clear[0]) return
    self.toggle()
  }).on('click', clearClass, (e) => {
    e.preventDefault()
    self.value('')
  })

  if (self.clearable) {
    self.$trigger.hover(() => {
      if (self.disabled()) return
      self.value() !== '' ? self.showClear() : self.showCaret()
    }, () => {
      if (self.disabled()) return
      self.showCaret()
    })
  }

  self.$dropdown.on('click', itemClass, (e) => {
    const $optionItem = getWrapper(e.target || e.srcElement, itemClass)
    if (!$optionItem.length) {
      return
    }
    const value = $optionItem.data(self.optionsValue)
    self.value(value)
    self.hide()
  })

  self.dropdownPopper.on('show', () => {
    self.$trigger.addClass('is-active')
  }).on('hide', () => {
    self.$trigger.removeClass('is-active')
  })

  self.value.subscribe((newValue) => {
    // 防止在获取到列表后，立即赋值时无效
    setTimeout(() => self.onValueChange(newValue), 0)
  })
  self.disabled.subscribe((newValue) => {
    self.onDisabledChange(newValue)
  })

  if (self.disabled()) {
    self.onDisabledChange(self.disabled())
  }

  self.onValueChange(self.value())
}

const ViewModel = function (params, componentInfo) {
  let self = this;
  parseProps(props, params, self)
  setTimeout(() => {
    bindingExtends(componentInfo, self)
    init.bind(self)()
  }, 0)
}

ViewModel.prototype.hasNilValueOption = function () {
  let has = false
  let itemArr = this.$dropdown.find('.k-select-dropdown__item')
  for (let i = 0; i < itemArr.length; i++) {
    let option = itemArr[i]
    if (!$(option).data('value')) {
      has = true
    }
  }
  return has
}

ViewModel.prototype.onValueChange = function (newValue) {
  let self = this;
  if (newValue !== '' || self.hasNilValueOption()) {
    self.$input.val(self.getSelectedData(newValue).label)
    //self.$input.text(self.getSelectedData(newValue).label) // input might be a span dom
  } else {
    if (self.optionsCaption) {
      self.$input.val(self.optionsCaption)
      //self.$input.text(self.optionsCaption)
    } else {
      self.$input.val(self.$input.attr('placeholder')) // for ie
      //self.$input.text(self.$input.attr('placeholder'))
    }
    self.hide()
    self.showCaret()
  }
  self.$dropdown.find(itemClass).removeClass('selected')
  self.$dropdown.find(`${itemClass}[data-value="${newValue}"]`).addClass('selected hover')
}

ViewModel.prototype.onDisabledChange = function (disabled) {
  let self = this;
  self.$trigger.toggleClass('is-disabled', disabled)
  self.$componentRoot.toggleClass('is-disabled', disabled)
  disabled ? self.$input.attr('disabled', 'disabled') : self.$input.removeAttr('disabled')
}

ViewModel.prototype.getSelectedData = function (value) {
  let self = this;
  return {
    value,
    label: self.$dropdown.find(`[data-${self.optionsValue}="${value}"]`).data(self.optionsText)
  }
}

ViewModel.prototype.show = function () {
  let self = this;
  self.dropdownPopper.show()
  self.$dropdown.one('mouseenter', itemClass, () => {
    self.$dropdown.find(itemClass).removeClass('hover')
  })
  self.isShow = true
}

ViewModel.prototype.hide = function () {
  let self = this;
  self.dropdownPopper.hide()
  self.isShow = false
}

ViewModel.prototype.adjust = function () {
  let self = this;
  const $list = self.$dropdown.find(listClass)
  const $emptyEle = self.$dropdown.find(emptyClass)
  const isEmpty = $list.find(itemClass).length === 0
  if (!isEmpty) {
    $list.show()
    $emptyEle.hide()
  } else {
    $list.hide()
    $emptyEle.show()
  }
}

ViewModel.prototype.showClear = function () {
  this.$caret.hide()
  this.$clear.css('display', 'inline-block')
}

ViewModel.prototype.showCaret = function () {
  this.$caret.css('display', 'inline-block')
  this.$clear.hide()
}

ViewModel.prototype.toggle = function () {
  if (this.isShow) {
    this.hide()
  } else {
    this.adjust()
    this.show()
  }
}

/**
 * 下拉选择器 - Select
 */
ko.components.register('k-select', {
  viewModel: {
    createViewModel: function (params, componentInfo) {
      return new ViewModel(params, componentInfo)
    }
  },
  template: require('./template.html')
});