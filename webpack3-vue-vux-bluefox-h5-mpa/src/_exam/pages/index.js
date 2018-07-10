// 全局样式
require('assets/css/common.less')

// Vue
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 骨架
import App from './App'

//解决click点击300毫秒延时问题
import FastClick from 'fastclick'
FastClick.attach(document.body)
// if ('addEventListener' in document) {
//     document.addEventListener('DOMContentLoaded', function () {
//         FastClick.attach(document.body)
//     }, false)
// }

// Vux
import { Tabbar, TabbarItem } from 'vux'
import { Group, Cell } from 'vux'
import { Calendar } from 'vux'
Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
Vue.component('group', Group)
Vue.component('cell', Cell)
Vue.component('calendar', Calendar)
// Vue.use(Group).use(Calendar).use(Cell)

// import Axios from './utils/diyaxios'
// Vue.prototype.$axios = Axios

// 路径配置
const baseUrl = ''
const routes = [
    { path: baseUrl + '/', redirect: baseUrl + 'exam' },
    { path: baseUrl + '/exam', component: r => require.ensure([], () => r(require('./views/examPaper/index')), 'carousel_Home') },
    { path: baseUrl + '/history', component: r => require.ensure([], () => r(require('./views/historyGrade/index')), 'carousel_boot') },
    { path: baseUrl + '/userInfo', component: r => require.ensure([], () => r(require('./views/userInfo/index')), 'error') },
    { path: '*', component: r => require.ensure([], () => r(require('./views/userInfo/index')), 'error') }
]

const router = new VueRouter({
    hashbang: true, // 将路径格式化为#!开头
    history: true, // use history=false when testing
    // mode: 'history',
    base: __dirname,
    linkActiveClass: 'v-link-active',
    routes // （缩写）相当于 routes: routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App),
});