// 全局样式
require('./assets/css/style.less')

// Vue
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false

// 适应
// 暂时注释
// import 'lib-flexible'

import axios from 'axios'
Vue.prototype.$axios = axios

import qs from 'qs'
Vue.prototype.$qs = qs

// 路由
import router from './router'
import store from './store'

// permission control
import './router/permission'

// 骨架
import App from './App'

// 解决click点击300毫秒延时问题
import FastClick from 'fastclick'
FastClick.attach(document.body)


// require('../../static/js/socket.io')

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});