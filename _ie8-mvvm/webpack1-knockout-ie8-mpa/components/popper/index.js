
require('../utils/gevent')
const { CLICK_OUTSIDE_POPPER, SCROLL_PAGE, RESIZE_PAGE } = require('../utils/constants').gevents
const PopupManager = require('../utils/popup/popup-manager')

$(document).on('click', function (e) {
  $.gevent.publish(CLICK_OUTSIDE_POPPER, e.target || e.srcElement)
})

$(window).on('scroll', function () {
  $.gevent.publish(SCROLL_PAGE)
}).on('resize', function () {
  $.gevent.publish(RESIZE_PAGE)
})

/**
 * 计算弹出框的位置
 * @param $popper
 * @param $target
 * @param options
 * @returns {{showClass: *, hideClass: *, left: *, top: *, pW: *, pH: *, xPlacement: *, xDisplacement: *}}
 */
const calculatePosition = function ($popper, $target, options) {
  const getDirection = function () {
    if (direction === 'bottom') {
      if (wH - offset.top - tH - gutter * 2 >= pH) { // 下
        top = offset.top + tH + gutter
        xPlacement = 'bottom'
      } else if (offset.top - pH - gutter * 2 >= 0) { // 上
        top = offset.top - pH - gutter
        xPlacement = 'top'
      } else if (options.verticalOnly) {
        if (wH - offset.top - tH >= offset.top) { // 下 >= 上
          xPlacement = 'bottom'
          top = offset.top + tH + gutter
          pH = wH - offset.top - tH - gutter * 2
        } else {
          xPlacement = 'top'
          top = gutter
          pH = offset.top - gutter * 2
        }
      } else {
        vertical = false
      }
    } else if (direction === 'top') {
      if (offset.top - pH - gutter * 2 >= 0) { // 上
        top = offset.top - pH - gutter
        xPlacement = 'top'
      } else if (wH - offset.top - tH - gutter * 2 >= pH) { // 下
        top = offset.top + tH + gutter
        xPlacement = 'bottom'
      } else if (options.verticalOnly) {
        if (offset.top >= wH - offset.top - tH) { // 上 >= 下
          xPlacement = 'top'
          top = gutter
          pH = offset.top - gutter * 2
        } else {
          xPlacement = 'bottom'
          top = offset.top + tH + gutter
          pH = wH - offset.top - tH - gutter * 2
        }
      } else {
        vertical = false
      }
    } else if (direction === 'left') {
      if (offset.left - pW - gutter * 2 >= 0) { // 左
        left = offset.left - pW - gutter
        xPlacement = 'left'
      } else if (wW - offset.left - tW - pW - gutter * 2 >= 0) { // 右
        left = offset.left + tW + gutter
        xPlacement = 'right'
      } else if (options.horizontalOnly) {
        if (offset.left >= wW - offset.left - tW) { // 左 > 右
          xPlacement = 'left'
          left = gutter
          pW = offset.left - gutter * 2
        } else {
          xPlacement = 'right'
          pW = wW - offset.left - tW - pW - gutter * 2
          left = offset.left + gutter
        }
      } else {
        horizon = false
      }
    } else if (direction === 'right') {
      if (wW - offset.left - tW - pW - gutter * 2 >= 0) { // 右
        left = offset.left + tW + gutter
        xPlacement = 'right'
      } else if (offset.left - pW - gutter * 2 >= 0) { // 左
        left = offset.left - pW - gutter
        xPlacement = 'left'
      } else if (options.horizontalOnly) {
        if (wW - offset.left - tW > offset.left) { // 右 > 左
          xPlacement = 'right'
          pW = wW - offset.left - tW - pW - gutter * 2
        } else {
          xPlacement = 'left'
          pW = offset.left - gutter * 2
        }
      } else {
        horizon = false
      }
    }
  }

  const getPosition = function () {
    if (vertical === true || horizon === false || options.verticalOnly) { // popper 在垂直方向，计算水平位移
      if (pW + 2 * gutter > wW) {
        pW = wW - 2 * gutter
      }
      if (position === 'start') {
        if (wW - offset.left - gutter >= pW) {
          left = offset.left
        } else {
          left = wW - pW - gutter
        }
      } else if (position === 'end') {
        if (offset.left + tW - gutter >= pW) {
          left = offset.left + tW - pW
        } else {
          left = gutter
        }
      } else if (position === 'center') {
        const widthDiff = (tW - pW) / 2
        left = offset.left + widthDiff
        if (left + pW + gutter > wW) {
          left = wW - gutter - pW
        }
      }
      if (left < gutter) {
        left = gutter
      }
    } else { // popper 在水平方向，计算垂直位移
      if (pH + 2 * gutter > wH) {
        pH = wH - 2 * gutter
      }
      if (position === 'start') {
        if (wH - offset.top - gutter >= pH) {
          top = offset.top
        } else {
          top = wH - gutter - pH
        }
      } else if (position === 'end') {
        if (offset.top + tH - gutter >= pH) {
          top = offset.top + tH - pH
        } else {
          top = gutter
        }
      } else if (position === 'center') {
        const heightDiff = (tH - pH) / 2
        top = offset.top + heightDiff
        if (top + pH + gutter > wH) {
          top = wW - gutter - pH
        }
      }
      if (top < gutter) {
        top = gutter
      }
    }
  }

  const getArrowPosition = function () {
    const getPosition = function (size, position) {
      switch (position) {
      case 'start':
        return size * 0.3
      case 'end':
        return size * 0.62
      case 'center':
      default:
        return size / 2
      }
    }

    if (xPlacement === 'bottom') {
      showClass = 'popFadeInUp'
      hideClass = 'popFadeOutDown'
      xDisplacement = {
        left: offset.left - left + getPosition(tW, position)
      }
    } else if (xPlacement === 'top') {
      showClass = 'popFadeInDown'
      hideClass = 'popFadeOutUp'
      xDisplacement = {
        left: offset.left - left + getPosition(tW, position)
      }
    } else if (xPlacement === 'right') {
      showClass = 'popFadeInRight'
      hideClass = 'popFadeOutRight'
      xDisplacement = {
        top: offset.top - top + getPosition(tH, position)
      }
    } else {
      showClass = 'popFadeInLeft'
      hideClass = 'popFadeOutLeft'
      xDisplacement = {
        top: offset.top - top + getPosition(tH, position)
      }
    }
  }

  options = $.extend({
    showArrow: true,
    verticalOnly: false,
    horizontalOnly: false,
    maxWidth: 0,
    maxHeight: 0,
    adjust2Relative: false
  }, options || {})

  const $win = $(window)
  const offset = $target[0].getBoundingClientRect()
  const tW = $target.outerWidth()
  const tH = $target.outerHeight()
  let pW = $popper.outerWidth()
  if (!options.adjust2Relative) {
    // 防止小数点舍入后导致 text-ellipsis 的样式出现
    ++pW
  }
  let pH = $popper.outerHeight()
  const wW = $win.width()
  const wH = $win.height()
  const gutter = 8
  let left = 0
  let top = 0
  let vertical
  let horizon
  let showClass
  let hideClass
  // 确定 arrow 的位置
  let xPlacement
  let xDisplacement

  let direction = 'bottom'
  let position = 'start'
  if (options.placement && options.placement.split(',').length === 2) {
    const _placement = options.placement.split(',')
    direction = _placement[0].trim()
    position = _placement[1].trim()
    let arr1 = ['top', 'bottom']
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === direction) {
        options.verticalOnly = true
        options.horizontalOnly = false
      }
    }
    let arr2 = ['left', 'right']
    for (let i = 0; i < arr2.length; i++) {
      if (arr2[i] === direction) {
        options.verticalOnly = false
        options.horizontalOnly = true
      }
    }
    let arr3 = ['start', 'center', 'end']
    for (let i = 0; i < arr3.length; i++) {
      if (arr3[i] === direction) {
        position = 'start'
      }
    }
  }

  if (!options.verticalOnly && !options.horizontalOnly) { // 默认按照 下上右左 优先次序计算 popper 的位置
    vertical = true
    horizon = true
  }

  if (options.verticalOnly && options.adjust2Relative) {
    pW = tW
  }
  if (options.horizontalOnly && options.adjust2Relative) {
    pH = tH
  }
  if (options.maxWidth && options.maxWidth > pW) {
    pW = options.maxWidth
  }
  if (options.maxHeight && options.maxHeight > pH) {
    pH = options.maxHeight
  }

  // 根据参数计算 popper 的位置：
  // 1 计算方向
  getDirection()
  // 2 计算位置
  getPosition()
  // 3 计算arrow的为止
  getArrowPosition()

  return {
    showClass,
    hideClass,
    left: left + $(document).scrollLeft(),
    top: top + $(document).scrollTop(),
    pW,
    pH,
    xPlacement,
    xDisplacement,
  }
}

/**
 * 控制动态弹出内容的位置
 * @param $popper 弹出层
 * @param $relative 相对参考元素
 * @param options -
 *          showArrow - 显示箭头
 *          verticalOnly - 相对于参考元素，只做垂直方向的位置判断
 *          horizontalOnly - 相对于参考元素，只做水平方向的位置判断
 *          maxWidth - 最大宽度
 *          maxHeight - 最大高度
 *          adjust2Relative - 相对于参考元素做调整：
 *                            默认情况下，$popper 根据自身内容来决定自身的宽度/高度，当 adjust2Relative 为 true，
 *                            并且 verticalOnly 或是 horizontalOnly 为 true，则 $popper 的宽度/高度等于 $relative 的宽度/高度
 *          placement - 方向（top，bottom，left，right）+ 靠齐方式（start，center，end）
 *                      比如 "top,start"：popper 将展示在 $relative 的上面，并且左测对齐
 *                          "right,end"：popper 将展示在 $relative 的右边，并且底部对其
 *                    - 如果设置了 placement 则会根据方向信息将 verticalOnly 或者 horizontalOnly 设置为 true
 * @constructor
 */
const Popper = function($popper, $relative, options = {}) {
  const that = this
  that.$popper = $popper
  that.$popper.appendTo('body')
  that.$arrow = $popper.find('.k-popper__arrow')
  that.$relative = $relative
  that.options = options || {}
  that.eventBus = $('<div>')

  $.gevent.subscribe(that.$popper, CLICK_OUTSIDE_POPPER, function (event, target) {
    if (!that.contains(target)) {
      that.hide()
    }
  })
  $.gevent.subscribe(that.$popper, SCROLL_PAGE, function (event, target) {
    setTimeout(function () {
      if (that.$popper.is(':visible')) {
        that.resize()
      }
    }, 300)
  })
  $.gevent.subscribe(that.$popper, RESIZE_PAGE, function (event, target) {
    setTimeout(function () {
      if (that.$popper.is(':visible')) {
        that.resize()
      }
    }, 300)
  })
}

Popper.prototype.setOptions = function (options) {
  $.extend(this.options, options || {})
}

Popper.prototype.contains = function (target) {
  let self = this
  const result = self.$popper[0] === target ||
    $.contains(self.$popper[0], target) ||
    self.$relative[0] === target ||
    $.contains(self.$relative[0], target)

  return result
}

Popper.prototype.resize = function () {
  let self = this
  self.$arrow.css({
    left: 'none',
    top: 'none'
  })
  self.$popper.css({
    width: 'auto',
    height: 'auto',
  })
  const result = calculatePosition(self.$popper, self.$relative, self.options)
  self.$arrow.css(result.xDisplacement)
  self.$popper.css({
    left: result.left,
    top: result.top,
    width: result.pW,
    height: result.pH,
  }).attr('x-placement', result.xPlacement)
}

Popper.prototype.show = function () {
  let self = this
  const result = calculatePosition(self.$popper, self.$relative, self.options)
  self.showClass = result.showClass
  self.hideClass = result.hideClass
  // this.$popper.velocity({
  //   left: result.left,
  //   top: result.top,
  //   width: result.pW,
  //   height: result.height
  // }, {
  //   duration: 1000
  // })
  self.$arrow.css(result.xDisplacement)
  self.$popper.css({
    left: result.left,
    top: result.top,
    width: result.pW,
    height: result.pH,
    zIndex: PopupManager.nextZIndex()
  }).attr('x-placement', result.xPlacement).show()
  self.eventBus.trigger('show')
}

Popper.prototype.hide = function () {
  let self = this
  self.$popper.hide()
  self.$arrow.css({
    left: 'none',
    top: 'none'
  })
  self.$popper.css({
    width: 'auto',
    height: 'auto',
  })

  self.eventBus.trigger('hide')
  // this.$popper.velocity({
  //   opacity: 0
  // }, {
  //   duration: 1000
  // },)
}

/**
 * support event: show  hide
 * @param event
 */
Popper.prototype.on = function (event, fn) {
  this.eventBus.bind(event, fn)
  return this
}

module.exports = {
  Popper: Popper
}
