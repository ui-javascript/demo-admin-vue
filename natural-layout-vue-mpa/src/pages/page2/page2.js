import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from '../../router/page2'
import store from '../../store'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import 'common/stylus/index.styl'

fastclick.attach(document.body)

Vue.use(VueLazyLoad)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
