const { parseProps, bindingExtends } = require('../utils/ko-component-utils')

const itemClass = 'k-carousel__item'
const indicatorClass = 'k-carousel__indicator'
const activeClass = 'is-active'
const slidingClass = 'is-sliding'
const indicatorBtnClass = 'k-carousel__indicator-button'

const IndicatorType = {
  number: 'number',
  rectangle: 'rectangle'
}

const props = {
  // 高度
  height: {
    type: String,
    default: ''
  },
  // 默认激活的索引
  value: {
    type: Number,
    default: 0,
    observable: true
  },
  // 自动播放
  autoplay: {
    type: Boolean,
    default: true,
    observable: true
  },
  // 间隔时间
  interval: {
    type: Number,
    default: 3000
  },
  // 滚动动画时长
  duration: {
    type: Number,
    default: 500,
    observable: true
  },
  // number | rectangle
  indicatorType: {
    type: String,
    default: 'rectangle'
  }
}

const ViewModel = function (params, componentInfo) {
  let self = this;
  parseProps(props, params, self)
  bindingExtends(componentInfo, self)
  self.init.bind(self)()
}

ViewModel.prototype.init = function () {
  let self = this;
  // 计时器
  self.timer = null
  // 循环播放
  self.wrap = true
  self.indicators = ko.observableArray([])
  self.$active = null
  self.$activeIndicator = null
  self.cssObject = ko.pureComputed(() => {
    return `k-carousel--${self.indicatorType}`
  })
  self.isNumberIndicator = ko.pureComputed(() => {
    return self.indicatorType === IndicatorType.number
  })

  setTimeout(() => {
    self.$items = self.getItems()
    self.initIndicators()
    self.$indicators = self.getIndicators()
    self.setActive()
    self.initEvent()
    self.cycle()
  }, 0)
}

ViewModel.prototype.getItems = function () {
  return this.$componentRoot.find(`.${itemClass}`)
}

ViewModel.prototype.getIndicators = function () {
  return this.$componentRoot.find(`.${indicatorClass}`)
}

ViewModel.prototype.setActive = function () {
  let self = this;
  self.$items.removeClass(activeClass)
  self.$indicators.removeClass(activeClass)

  if (self.value() > self.$items.length || !$.isNumeric(self.value())) {
    self.value(0)
  }

  self.$active = self.$items.eq(self.value())
  self.$activeIndicator = self.$indicators.eq(self.value())

  self.$active.addClass(activeClass)
  self.$activeIndicator.addClass(activeClass)
}

ViewModel.prototype.initEvent = function () {
  let self = this;
  self.$componentRoot.on('mouseenter', () => {
    self.stop()
  }).on('mouseleave', () => {
    self.cycle()
  }).on('click', `.${indicatorBtnClass}`, (event) => {
    const currentIndex = self.getIndicatorIndex()
    const nextIndex = self.getIndicatorIndex($(event.currentTarget).children(`.${indicatorClass}`))
    const next = self.$items.eq(nextIndex)
    if (nextIndex > currentIndex) {
      self.slide('next', next)
    } else if (nextIndex < currentIndex) {
      self.slide('prev', next)
    }
  })
}

ViewModel.prototype.initIndicators = function () {
  this.indicators(Array(this.$items.length))
}

ViewModel.prototype.cycle = function () {
  let self = this
  if (self.timer) {
    clearInterval(self.timer)
  }
  self.timer = setInterval($.proxy(self.next, self), self.interval)
}

ViewModel.prototype.stop = function () {
  let self = this
  if (self.timer) {
    clearInterval(self.timer)
  }
}

ViewModel.prototype.next = function () {
  return this.slide('next')
}

ViewModel.prototype.slide = function (direction, next) {
  let self = this;
  const $active = self.$items.filter(`.${activeClass}`)
  const $next = next || self.getItemForDirection(direction, $active)
  self.value(self.getItemIndex($next))
  self.stop()
  const sequence = [
    {
      e: $next,
      p: { translateX: direction === 'next' ? '100%' : '-100%' },
      o: {
        duration: 0,
        complete: () => $next.addClass(slidingClass)
      }
    },
    {
      e: $active,
      p: { translateX: direction === 'next' ? '-100%' : '100%' },
      o: {
        easing: 'easeIn',
        duration: self.duration(),
        complete: () => self.setActive()
      }
    },
    {
      e: $next,
      p: { translateX: 0 },
      o: {
        easing: 'easeOut',
        duration: self.duration(),
        sequenceQueue: false,
        complete: () => {
          $next.removeClass(slidingClass)
          self.setActive()
          self.cycle()
        }
      }
    }
  ]
  $.Velocity.RunSequence(sequence) // eslint-disable-line
}

ViewModel.prototype.getItemIndex = function ($item) {
  let self = this
  return self.$items.index($item || self.$active)
}

ViewModel.prototype.getIndicatorIndex = function ($item) {
  let self = this
  return self.$indicators.index($item || self.$activeIndicator)
}

ViewModel.prototype.getItemForDirection = function (direction, $active) {
  let self = this
  const activeIndex = self.getItemIndex($active)
  const willWrap = (direction === 'prev' && activeIndex === 0) ||
    (direction === 'next' && activeIndex === (self.$items.length - 1))
  if (willWrap && !self.wrap) { return $active }
  const delta = direction === 'prev' ? -1 : 1
  const itemIndex = (activeIndex + delta) % self.$items.length
  return self.$items.eq(itemIndex)
}

ko.components.register('k-carousel', {
  viewModel: {
    createViewModel: function(params, componentInfo) {
      return new ViewModel(params, componentInfo)
    }
  },
  template: require('./template.html')
});