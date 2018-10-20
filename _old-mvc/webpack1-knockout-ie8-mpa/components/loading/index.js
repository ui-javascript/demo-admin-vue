
const template = `<div
      class="k-loading-mask">
      <div class="k-loading-spinner has-text-centered">
        <i class="fa fa-loading is-enormous is-light"></i>
        <p class="k-loading-text is-mt-10 is-text-medium">处理中，请稍等..</p>
      </div>
    </div>`
const $body = $(document.body)
ko.bindingHandlers.loading = {
  init: function (el, valueAccessor, allBindings, viewModel, bindingContext) {
    const $el = $(el);
    const $mask = $(template)
    const binding = allBindings()
    if (binding.loadingCurrent) {
      el.originalPosition = $el.css('position');
      el.originalOverflow = $el.css('overflow');
    } else {
      el = document.body
      el.originalPosition = $body.css('position');
      el.originalOverflow = $('html').css('overflow');
    }
    el.mask = $mask.get(0)
    el.maskStyle = {}
    toggleLoading(el, binding)
  },
  update: function (el, valueAccessor, allBindings, viewModel, bindingContext) {
    const value = ko.unwrap(valueAccessor())
    const binding = allBindings()
    if (!binding.loadingCurrent) {
      el = document.body
    }
    toggleLoading(el, allBindings())
  }
}
const toggleLoading = (el, binding) => {
  if (binding.loading()) {
    if (!binding.loadingCurrent) {
      $(el.mask).addClass('is-fullscreen');
      insertDom(document.body, el, binding)
    } else {
      $(el.mask).remove('is-fullscreen');
      insertDom(el, el, binding);
    }
  } else {
    if (el.domVisible) {
      setTimeout(function () {
        el.domVisible = false;
        if (!binding.loadingCurrent && el.originalOverflow !== 'hidden') {
          $('html').css('overflow', el.originalOverflow);
        } else if (binding.loadingCurrent && el.originalOverflow !== 'hidden') {
          $(el).css('overflow', el.originalOverflow);
        }
        if (!binding.loadingCurrent) {
          $body.css('position', el.originalPosition);
        } else {
          $(el).css('position', el.originalPosition);
        }
      }, 0)
      $(el.mask).hide()
    }
  }
}
const insertDom = (parent, el, binding) => {
  if (!el.domVisible && $(el).css('display') !== 'none' && $(el).css('visibility') !== 'hidden') {
    for (let property in el.maskStyle) {
      el.mask.style[property] = el.maskStyle[property];
    }

    if (el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed') {
      parent.style.position = 'relative';
    }
    if (!binding.loadingCurrent) {
      $('html').css('overflow', 'hidden');
    } else {
      $(parent).css('overflow', 'hidden');
    }
    el.domVisible = true;
    if (binding.loadingText !== undefined) {
      $(el.mask).find('.k-loading-text').text(binding.loadingText)
    }
    $(el.mask).addClass('k-loading-mask--dark')
    parent.appendChild(el.mask);
    el.domInserted = true;
    $(el.mask).show()
  }
}
const defaults = {
  visible: false,
  text: '处理中，请稍等..'
}

const doLoading = (el, options) => {
  options.loadingCurrent = !(el === document.body)
  if (!options.loadingCurrent) {
    el.originalPosition = $(el).css('position');
    el.originalOverflow = $(el).css('overflow');
  } else {
    el.originalPosition = $body.css('position');
    el.originalOverflow = $('html').css('overflow');
  }
  toggleLoading(el, options)
  return {
    hide: function () {
      options.loading(false)
      toggleLoading(el, options)
    },
    show: function () {
      options.loading(true)
      toggleLoading(el, options)
    }
  }
}

module.exports.loading = function (options, el) {
  const $mask = $(template)
  if (Object.prototype.toString.call(options) === '[object Object]') {
    options = {
      visible: options
    }
  }
  if (el instanceof $) {
    el = el.get(0)
  }
  el = el || document.body
  el.mask = el.mask || $mask.get(0)
  el.maskStyle = el.maskStyle || {}
  options.loading = ko.observable(options.visible)
  options.loadingText = options.text

  let newObj = {};
  for (var key1 in defaults){
    newObj[key1] = defaults[key1];
  }
  for (var key2 in options){
    newObj[key2] = defaults[key2];
  }
  return doLoading(el, newObj)
}