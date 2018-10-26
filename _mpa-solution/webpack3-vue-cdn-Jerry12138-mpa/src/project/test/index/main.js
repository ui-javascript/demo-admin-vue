import Vue from 'vue'

import App from './App'
import router from './router/index'
import 'amfe-flexible'
// 解决移动端300ms点击穿透
import FastClick from 'fastclick'
FastClick.attach(document.body)

Vue.use({
  install(Vue) {
    Vue.component('customBtn', () => import('../../../components/customBtn.vue'))
  }
})
console.log('aa')
// import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import '../../../common/styles/common.less'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
