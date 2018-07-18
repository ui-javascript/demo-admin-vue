// 全局样式
require('assets/css/theme/vux/_output.less')

// Vue
import Vue from 'vue'
Vue.config.productionTip = false

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
import { Tab, TabItem } from 'vux'
import { Swiper, SwiperItem } from 'vux'
import { Grid, GridItem } from 'vux'
import { XHeader } from 'vux'
import { Group, Cell } from 'vux'
import { Calendar, Datetime } from 'vux'
import { XButton, XInput, Selector, XSwitch, Radio, Checklist } from 'vux'
import { LoadingPlugin, AlertPlugin, ConfirmPlugin, ToastPlugin } from 'vux'
import { XDialog } from 'vux'
import { XTable } from 'vux'
// import { XAddress } from 'vux'

Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
Vue.component('tab', Tab)
Vue.component('tab-item', TabItem)
Vue.component('swiper', Swiper)
Vue.component('swiper-item', SwiperItem)
Vue.component('grid', Grid)
Vue.component('grid-item', GridItem)
Vue.component('x-header', XHeader)
Vue.component('group', Group)
Vue.component('cell', Cell)
Vue.component('calendar', Calendar)
Vue.component('datetime', Datetime)
Vue.component('x-button', XButton)
Vue.component('x-input', XInput)
Vue.component('selector', Selector)
Vue.component('x-switch', XSwitch)
Vue.component('radio', Radio)
Vue.component('checklist', Checklist)

// 弹框
// Vue.component('loading', Loading)
// Vue.component('alert', Alert)
// Vue.component('confirm', Confirm)
Vue.use(LoadingPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin)
Vue.component('x-dialog', XDialog)
Vue.component('x-table', XTable)
// Vue.component('x-address', XAddress)

// import Axios from './utils/diyaxios'
// Vue.prototype.$axios = Axios

// 路径配置
const baseUrl = ''
const routes = [
    { path: baseUrl + '/', redirect: baseUrl + 'exam' },
    { path: baseUrl + '/exam', component: r => require.ensure([], () => r(require('./views/examPaper/index')), 'exam_home')},
    { path: baseUrl + '/single', component: r => require.ensure([], () => r(require('./views/examPaper/details/single')), 'exam_single')},
    { path: baseUrl + '/multi', component: r => require.ensure([], () => r(require('./views/examPaper/details/multi')), 'exam_multi')},
    { path: baseUrl + '/judge', component: r => require.ensure([], () => r(require('./views/examPaper/details/judge')), 'exam_judge')},
    { path: baseUrl + '/blank', component: r => require.ensure([], () => r(require('./views/examPaper/details/blank')), 'exam_blank')},
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