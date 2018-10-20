const { parseProps } = require('../utils/ko-component-utils')

const now = new Date().getTime()
const props = {
  weekStartDay: {
    type: Number,
    'default': 7
  },
  value: {
    type: Number,
    'default': now,
    observable: true
  },
  rangeMode: { // 时间段选择模式
    type: Boolean,
    'default': false
  },
  beginDate: { // 时间段选择是有效，和 endDate 共同决定时间段
    observable: true
  },
  endDate: {
    observable: true
  },
  hoverCell: { // 时间段选择时有效，表明鼠标目前 hover 到的 cell
    observable: true
  },
  currentValue: { // 用来决定当前试图显示哪个月份
    observable: true
  },
  onCellClick: {
    type: Function,
  },
  minValue: { // 可选最小日期
    observable: true
  },
  maxValue: { // 可选最大日期
    observable: true
  }
}

const WEEKS = ['日', '一', '二', '三', '四', '五', '六']

/**
 * @param dateData - a moment object
 */
const Cell = function (dateData, options) {
  let self = this
  parseProps(props, options, self)
  self.cellValue = dateData
  self.label = dateData.date()
  this.isDisabled = ko.pureComputed(() => {
    return (this.minValue() && this.cellValue.valueOf() < this.minValue()) || (this.maxValue() && this.cellValue.valueOf() > this.maxValue())
  })
  self.clazz = ko.pureComputed(() => {
    const result = {}
    const date = self.cellValue
    const currentValue = self.currentValue()
    const isMonthBefore = date.isBefore(currentValue, 'month')
    const isMonthAfter = !isMonthBefore && date.isAfter(currentValue, 'month')
    const inCurrentMonth = !isMonthBefore && !isMonthAfter
    const isToday = inCurrentMonth && date.isSame(moment(), 'day')
    let isCurrent = false
    let startDate = false
    let endDate = false
    let inRange = false
    if (!self.rangeMode) {
      isCurrent = !isMonthBefore && !isMonthAfter && date.isSame(self.value(), 'day')
    } else {
      startDate = date.isSame(self.beginDate(), 'day')
      if (self.beginDate()) {
        if (self.endDate()) {
          inRange = date.isBetween(self.beginDate(), self.endDate(), 'day', [])
          endDate = inRange && inCurrentMonth && date.isSame(self.endDate(), 'day')
        } else if (self.hoverCell()) {
          inRange = date.isBetween(self.beginDate(), self.hoverCell(), 'day', [])
          endDate = inRange && inCurrentMonth && date.isSame(self.hoverCell(), 'day')
        }
      }
    }
    result['is-disabled'] = this.isDisabled()
    result['prev-month'] = isMonthBefore
    result['next-month'] = isMonthAfter
    result['today'] = isToday
    result['available'] = inCurrentMonth
    result['current'] = isCurrent
    result['start-date'] = startDate
    result['end-date'] = endDate
    result['in-range'] = inCurrentMonth && inRange
    return result
  }).extend({ deferred: true })
}

const DateTable = function ($container, options) {
  let self = this
  parseProps(props, options, self)
  self.$container = $container

  // 星期条
  const week = self.weekStartDay
  // this.offsetDay = week > 3 ? 7 - week : -week // 周日为界限，左右偏移的天数，3217654 例如周一就是 -1，目的是调整前两行日期的位置
  self.WEEKS = WEEKS.concat(WEEKS).slice(week, week + 7)

  self.year = ko.pureComputed(() => {
    return self.currentValue().year()
  })

  self.month = ko.pureComputed(() => {
    return self.currentValue().month() // start from 0
  })

  self.firstDateOfMonth = ko.pureComputed(() => {
    return self.currentValue().clone().date(1)
  })

  self.firstDayOfWeek = ko.pureComputed(() => { // 所属月的第一天是星期几
    return self.firstDateOfMonth().day()
  })

  self.offsetDay = ko.pureComputed(() => {
    let offset = self.firstDayOfWeek() - self.weekStartDay
    offset = offset > 0 ? offset : 7 + offset
    offset = offset === 0 ? 7 : offset
    return offset
  })

  self.tableFirstDate = ko.pureComputed(() => {
    let date = self.firstDateOfMonth().clone()
    let offset = self.offsetDay()
    return date.subtract(offset, 'd')
  })

  self.rows = ko.pureComputed(() => {
    const rows = [[], [], [], [], [], []]
    let offset = 0
    for (let i = 0; i < rows.length; i++) {
      for (let j = 0; j < WEEKS.length; j++) {
        let data = self.tableFirstDate().clone()
        data = data.add(offset, 'd')
        const cell = new Cell(data, options)
        rows[i].push(cell)
        offset++
      }
    }
    return rows
  }).extend({ deferred: true })

  self.$container.on('click', 'td', (e) => {
    const cellData = ko.dataFor(e.target)
    if (this.onCellClick && !cellData.isDisabled()) {
      self.onCellClick(cellData.cellValue)
    }
  })
}

module.exports = DateTable
