const { parseProps, bindingExtends } = require('../utils/ko-component-utils')
const { Popper } = require('../popper')
const Picker = require('./picker')

const props = {
  type: {
    type: String,
    'default': 'date' // year[todo], month[todo], date, week[todo], datetime[todo], datetimerange[todo], daterange
  },
  format: {
    type: String,
    'default': 'YYYY-MM-DD'
  },
  value: {
    type: '*', // timestamp or [beginTimestamp, endTimestamp]
    observable: true
  },
  align: { // 相对位置
    type: String,
    'default': 'left'
  },
  disabledDate: { // 禁用状态，参数为当前日期，要求返回 Boolean
    type: Function
  },
  clearable: { // 是否显示清除按钮
    type: Boolean,
    'default': true
  },
  weekStartDay: { // 日历的周从周几开始显示
    type: Number,
    'default': 7 // 周一 ~ 周日：1 ~ 7
  },
  minValue: {
    type: Number,
    'default': null,
    observable: true
  },
  maxValue: {
    type: Number,
    'default': null,
    observable: true
  }
}

const init = function () {
  let self = this;
  const $root = self.$componentRoot
  self.$dropdown = $root.find('.k-popper').addClass('k-picker-panel')
  if (self.type === 'daterange') {
    self.$trigger = $root
    self.$input = self.$trigger.find('.k-range-input:eq(0)')
    self.$input2 = self.$trigger.find('.k-range-input:eq(1)')
  } else {
    self.$trigger = $root.find('.k-input')
    self.$input = self.$trigger.find('.k-input__inner')
    self.$input2 = self.$trigger.find('th-does-not-exist')
  }
  self.$btnClear = self.$trigger.find('.k-date-editor__close-icon')
  self.isShow = false

  self.dropdownPopper = new Popper(self.$dropdown, self.$trigger, {
    verticalOnly: true,
  }).on('show', () => {
    self.isShow = true
  }).on('hide', () => {
    self.isShow = false
  })

  self.app = new Picker(self.$dropdown, {
    type: self.type,
    minValue: self.minValue,
    maxValue: self.maxValue,
    weekStartDay: self.weekStartDay,
    onValueChange: (newValue) => {
      self.value(newValue)
    }
  })

  self.$trigger.on('click', e => {
    e.preventDefault()
    if ($.contains(self.$btnClear[0], e.target) || self.$btnClear[0] === e.target) {
      return
    }
    self.toggle()
  }).on('click', '.k-date-editor__close-icon', e => {
    e.preventDefault()
    self.clear()
  })

  self.dropdownPopper.on('show', () => {
    self.$trigger.addClass('is-active')
  }).on('hide', () => {
    self.$trigger.removeClass('is-active')
  })

  self.value.subscribe(newValue => {
    self.onValueChange(newValue)
  })

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

ViewModel.prototype.clear = function () {
  let self = this;
  let clearValue = ''
  if (self.type === 'daterange') {
    clearValue = []
  }
  self.onValueChange(clearValue)
  self.hide()
}

ViewModel.prototype.onValueChange = function (newValue) {
  let self = this;
  let hasValue = false
  if (self.type === 'daterange') {
    if (newValue.length === 2) {
      hasValue = true
      self.$btnClear.show()
      self.$input.val(moment(newValue[0]).format(self.format))
      self.$input2.val(moment(newValue[1]).format(self.format))
    } else {
      self.$input.val('')
      self.$input2.val('')
    }
  } else {
    hasValue = !!newValue
    if (newValue) {
      self.$input.val(moment(newValue).format(self.format))
    } else {
      self.$input.val('')
    }
  }
  if (hasValue) {
    self.$btnClear.css({ display: '' })
  } else {
    self.$btnClear.css({ display: 'none' })
  }
  self.app.setValue(newValue)
  self.hide()
}

ViewModel.prototype.show = function () {
  let self = this
  self.dropdownPopper.show()
  self.app.reset()
  self.isShow = true
}

ViewModel.prototype.hide = function () {
  let self = this
  self.dropdownPopper.hide()
  self.isShow = false
}

ViewModel.prototype.toggle = function () {
  let self = this
  if (self.isShow) {
    self.hide()
  } else {
    self.show()
  }
}

ko.components.register('k-datepicker', {
  viewModel: {
    createViewModel: function(params, componentInfo) {
      return new ViewModel(params, componentInfo)
    }
  },
  template: require('./template.html')
});