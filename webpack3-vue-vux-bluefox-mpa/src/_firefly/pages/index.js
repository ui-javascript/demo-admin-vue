// 全局样式
require('assets/css/common.less')

import Vue from 'vue'
import VueRouter from 'vue-router'

import CalendarApp from '~/model/MCalendar'
import TanApp from './app/tanApp'

const routes = [
    {path: '/', component: CalendarApp},
    {path: '/tantan', component: TanApp}
]

Vue.use(VueRouter)

const router = new VueRouter({
    routes: routes
})


new Vue({
    router: router
}).$mount('#app')