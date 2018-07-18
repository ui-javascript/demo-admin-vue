// 全局样式
require('./style.less')

// Vue
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false


// 路由
import router from './router'

// 骨架
import App from './App'

//解决click点击300毫秒延时问题
import FastClick from 'fastclick'
FastClick.attach(document.body)

new Vue({
    el: '#app',
    router,
    render: h => h(App),
});