const nameSpace = 'zpfe_'

// 因为 zpfe-config.js 要引用，所以不用 export 语法
/**
 * 全局常量 !
 */
module.exports = {
  root: '/',

  storeKey: {
    NAME: nameSpace + 'NAME',
    EMAIL: nameSpace + 'EMAIL'
  },
  // 全局点击事件，每个popper实例会注册
  gevents: {
    CLICK_OUTSIDE_POPPER: 'click-outside-popper',
    SCROLL_PAGE: 'scroll-page',
    RESIZE_PAGE: 'resize-page'
  }
}
