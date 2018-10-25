// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)


import App from './App'
import router from './router'

import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: {App},
//   template: '<App/>'
// })

new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})