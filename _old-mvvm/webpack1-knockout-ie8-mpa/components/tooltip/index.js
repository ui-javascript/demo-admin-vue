
const { Popper } = require('../popper/index.js')

const popperInstances = []

ko.bindingHandlers.tooltip = {
  init: function (el, valueAccessor, allBindings, viewModel, bindingContext) {
    const $el = $(el)
    const value = ko.unwrap(valueAccessor())
    let title = allBindings.get('tooltipTitle')
    title = ko.isObservable(title) ? title() : title
    const uniqueId = 'ko-tooltip--' + new Date().getTime()
    const $template = $(`<div id="${uniqueId}" class="k-tooltip__popper k-popper is-dark"><div class="k-tooltip__content">${title}</div><div class="k-popper__arrow"></div></div>`).appendTo('body')
    const placement = $el.data('placement') || 'top,start'
    const html = !!$el.data('html')
    $template.toggleClass('is-html', html)
    $el.data('tooltip-target', uniqueId)
    const popper = new Popper($template, $el, {
      placement
    })

    popperInstances.push({
      id: uniqueId,
      instance: popper
    })

    $el.on('mouseenter mouseover', () => {
      popper.show()
    }).on('mouseout', () => {
      popper.hide()
    })
  },
  update: function (el, valueAccessor, allBindings, viewModel, bindingContext) {
    const $el = $(el)
    const value = ko.unwrap(valueAccessor())
    let title = allBindings.get('tooltipTitle')
    title = ko.isObservable(title) ? title() : title
    const uniqueId = $el.data('tooltip-target')
    const $template = $(`#${uniqueId}`)
    const placement = $el.data('placement') || 'top,start'

    let popper
    for (let i = 0; i < popperInstances.length; i++) {
      let item = popperInstances[i]
      if (item.id === uniqueId){
        popper = item
      }
    }
    if (popper) {
      $template.find('.k-tooltip__content').html(title)
      popper.instance.setOptions({
        placement
      })
    }
  }
}
