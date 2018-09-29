// 全局样式
// require('assets/css/theme/vux/_output.less')

import Vue from 'vue'
import VueRouter from 'vue-router'

// 全局注册

import LeanApp from './views/index'

const routes = [
    {path: '/', component: LeanApp},
    {path: '/lean', component: LeanApp},
]

Vue.use(VueRouter)

const router = new VueRouter({
    routes: routes
})

new Vue({
    router: router
}).$mount('#app')