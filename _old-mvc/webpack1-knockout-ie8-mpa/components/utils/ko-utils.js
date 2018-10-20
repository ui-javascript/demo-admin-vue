module.exports = {
  formatTime(timestamp, format = 'YYYY-MM-DD') {
    if (moment(timestamp).isValid()) {
      return moment(timestamp).format(format)
    }
    return '不合法哦' + timestamp
  },
  getCurrentStyle(dom) {
    if (window.getComputedStyle) {
      return window.getComputedStyle(dom)
    } else {
      return dom.currentStyle
    }
  }
}
