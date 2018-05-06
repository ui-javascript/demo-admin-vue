/**
 * Created by erry on 2017/9/29.
 */

ko.bindingHandlers.slideUp = {
  update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
    const value = valueAccessor()
    const valueUnwrapped = ko.unwrap(value)
    const duration = allBindings.get('duration') || 400
    const $el = $(element)
    if (valueUnwrapped) {
      setTimeout(() => {
        if ($el.hasClass('k-message--fade')) {
          $el.removeClass('k-message--fade')
        }
      }, 50)
    } else {
      if (!$el.hasClass('k-message--fade')) {
        $el.addClass('k-message--fade')
        if (typeof allBindings().afterSlide === 'function') {
          setTimeout(allBindings().afterSlide, 500)
        }
      }
    }
  }
}
let update = false
ko.bindingHandlers.fadeIn = {
  init: function () {
    update = false
  },
  update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
    const value = valueAccessor()
    const valueUnwrapped = ko.unwrap(value)
    const $el = $(element)
    if (update) {
      if (valueUnwrapped) {
        $el.show()
        setTimeout(() => {
          if ($el.hasClass('k-modal--fade')) {
            $el.removeClass('k-modal--fade')
          }
        }, 0)
      } else {
        if (!$el.hasClass('k-modal--fade')) {
          $el.addClass('k-modal--fade')
          setTimeout(function () {
            $el.hide()
            if (typeof allBindings().afterFade === 'function') {
              allBindings().afterFade()
            }
          }, 300)
        }
      }
    } else {
      update = true
    }
  }
}
