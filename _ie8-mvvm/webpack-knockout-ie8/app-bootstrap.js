
const ie = require('vendors/browser/ie')

// jQuery plugins
if (!window.$) {
  window.jQuery = window.$ = $
}
require('velocity-animate') // depend on window.jQuery
require('velocity-animate/velocity.ui')

// polyfills
require('es6-promise/auto')
require('vendors/font-awesome/css/font-awesome.css')
require('vendors/cors')

require('components/index.js')

if (ie) {
  if (ie < 9) {
    $('html').addClass('is-old-than-9')
  }
  if (ie < 8) {
    require('vendors/font-awesome/css/font-awesome-ie7.css')
    require('vendors/pseudo')
  }
  window.ie = ie
}
