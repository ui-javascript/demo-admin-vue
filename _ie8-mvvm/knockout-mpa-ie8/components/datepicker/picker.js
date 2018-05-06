const pickerTemplate = require('./picker.html')
const rangePickerTemplate = require('./range-picker.html')
const DateTable = require('./date-table')

const getCurrentValue = function (leftValue) {
  if (!leftValue) {
    return moment()
  }
  return moment(leftValue)
}

const getRangeValue = function (rangeValue) {
  if (!rangeValue) {
    return ''
  }
  return moment(rangeValue)
}

const RangePicker = function ($container, options) {
  let self = this;
  let tmpOptions = {
    weekStartDay: 7,
    value: [],
    onValueChange: null
  }
  for (let key in options) {
    if (options.hasOwnProperty(key)) {
      tmpOptions[key] = options[key]
    }
  }
  options = tmpOptions

  self.$container = $container
  self.$container.append(rangePickerTemplate)
  self.$tableContainer1 = $container.find('.is-left .k-date-table')
  self.$tableContainer2 = $container.find('.is-right .k-date-table')

  self.firstDayOfWeek = options.firstDayOfWeek
  self.value = ko.observableArray(options.value)

  self.beginDate = ko.observable(getRangeValue(self.value()[0]))
  self.endDate = ko.observable(getRangeValue(self.value()[1]))
  self.hoverCell = ko.observable()

  self.currentValue = ko.observable(getCurrentValue(self.value()[0]))
  self.nextCurrentValue = ko.pureComputed(() => {
    return self.currentValue().clone().add(1, 'M')
  })

  self.leftDate = ko.pureComputed(() => {
    return self.currentValue().format('YYYY 年 MM 月')
  })

  self.rightDate = ko.pureComputed(() => {
    return self.nextCurrentValue().format('YYYY 年 MM 月')
  })

  self.onValueChange = options.onValueChange

  self.dateTable1 = new DateTable(self.$tableContainer1, {
    rangeMode: true,
    beginDate: self.beginDate,
    endDate: self.endDate,
    hoverCell: self.hoverCell,
    currentValue: self.currentValue,
    weekStartDay: self.weekStartDay,
    onCellClick: self.onCellClick.bind(self)
  })

  self.dateTable2 = new DateTable(self.$tableContainer2, {
    rangeMode: true,
    beginDate: self.beginDate,
    endDate: self.endDate,
    hoverCell: self.hoverCell,
    currentValue: self.nextCurrentValue,
    weekStartDay: self.weekStartDay,
    onCellClick: self.onCellClick.bind(self)
  })

  self.endDate.subscribe(endDate => {
    if (endDate && !self.lock) {
      if (self.onValueChange) {
        self.onValueChange([self.beginDate().valueOf(), endDate.valueOf()])
      }
    }
  })

  self.value.subscribe(value => {
    self.lock = true
    self.beginDate(getRangeValue(value[0]))
    self.endDate(getRangeValue(value[1]))
    self.currentValue(getCurrentValue(value[0]))
    self.lock = false
  })

  self.$container.on('mouseover', '.k-date-table td', e => {
    if (self.beginDate() && !self.endDate()) {
      const data = ko.dataFor(e.target)
      self.hoverCell(data.cellValue)
    }
  }).on('mouseleave', '.k-date-table td', () => {
    if (self.beginDate() && !self.endDate()) {
      self.hoverCell('')
    }
  })

  ko.applyBindings(self, $container[0])
}

RangePicker.prototype.setValue = function (rangeValue) {
  let self = this
  self.value(rangeValue)
}

RangePicker.prototype.reset = function () {
  let self = this
  self.setValue(self.value())
}

RangePicker.prototype.onCellClick = function (date) {
  let self = this
  const beginDate = self.beginDate()
  const endDate = self.endDate()
  self.hoverCell('')
  if (!beginDate) {
    self.beginDate(date)
  } else if ((beginDate && endDate) || date.isBefore(beginDate, 'day')) {
    self.beginDate(date)
    self.endDate('')
  } else {
    self.endDate(date)
  }
}

RangePicker.prototype.setCurrentValue = function (newValue) {
  let self = this
  self.currentValue(newValue)
}

RangePicker.prototype.nextMonth = function () {
  let self = this
  self.setCurrentValue(self.currentValue().add(1, 'M'))
}

RangePicker.prototype.nextYear = function () {
  this.setCurrentValue(this.currentValue().add(1, 'Y'))
}

RangePicker.prototype.prevMonth = function () {
  let self = this
  self.setCurrentValue(self.currentValue().subtract(1, 'M'))
}

RangePicker.prototype.prevYear = function () {
  let self = this
  self.setCurrentValue(self.currentValue().subtract(1, 'Y'))
}

/**
 * @param $container
 * @constructor
 */
const Picker = function ($container, options) {
  let self = this
  let tmpOptions = {
    weekStartDay: 7,
    value: '',
    onValueChange: null
  }
  for (let key in options) {
    if (options.hasOwnProperty(key)) {
      tmpOptions[key] = options[key]
    }
  }
  options = tmpOptions

  self.$container = $container
  self.$container.append(pickerTemplate)
  self.$tableContainer = $container.find('.k-picker-panel__content')

  this.weekStartDay = options.weekStartDay
  self.firstDayOfWeek = options.firstDayOfWeek
  self.value = ko.observable(options.value)
  self.currentValue = ko.observable(getCurrentValue(self.value()))

  this.minValue = options.minValue
  this.maxValue = options.maxValue

  self.onValueChange = options.onValueChange

  self.year = ko.pureComputed(() => {
    return self.currentValue().year() + ' 年'
  })

  self.month = ko.pureComputed(() => {
    return self.currentValue().month() + 1 + ' 月'
  })

  self.dateTable = new DateTable(self.$tableContainer, {
    value: self.value,
    currentValue: self.currentValue,
    weekStartDay: self.weekStartDay,
    minValue: this.minValue,
    maxValue: this.maxValue,
    onCellClick: self.onCellClick.bind(self)
  })

  self.value.subscribe(value => {
    self.currentValue(getCurrentValue(value))
  })

  ko.applyBindings(self, $container[0])
  return self
}

// OPEN API
Picker.prototype.setValue = function (newValue) {
  let self = this
  self.value(newValue)
}

// OPEN API
Picker.prototype.reset = function () {
  let self = this
  self.setCurrentValue(getCurrentValue(self.value()))
}

Picker.prototype.onCellClick = function (date) {
  let self = this
  if (self.onValueChange) {
    self.onValueChange(date.valueOf())
  }
}

Picker.prototype.setCurrentValue = function (newValue) {
  let self = this
  self.currentValue(newValue)
}

Picker.prototype.nextMonth = function () {
  let self = this
  self.setCurrentValue(self.currentValue().add(1, 'M'))
}

Picker.prototype.nextYear = function () {
  let self = this
  self.setCurrentValue(self.currentValue().add(1, 'Y'))
}

Picker.prototype.prevMonth = function () {
  let self = this
  self.setCurrentValue(self.currentValue().subtract(1, 'M'))
}

Picker.prototype.prevYear = function () {
  let self = this
  self.setCurrentValue(self.currentValue().subtract(1, 'Y'))
}

const Proxy = function ($container, options) {
  let tmpOptions = {
    type: 'date',
    weekStartDay: 7,
    value: '',
    onValueChange: null
  }
  for (let key in options) {
    if (options.hasOwnProperty(key)) {
      tmpOptions[key] = options[key]
    }
  }
  options = tmpOptions

  if (options.type !== 'daterange') {
    return new Picker($container, options)
  }
  return new RangePicker($container, options)
}

module.exports = Proxy
