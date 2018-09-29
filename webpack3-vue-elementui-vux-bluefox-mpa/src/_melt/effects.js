// 全局样式
// require('assets/css/theme/vux/_output.less')

import Vue from 'vue'
import VueRouter from 'vue-router'

import LoadingWaterApp from './views/effects/loadingWaterPage'
import FireFlyApp from './views/effects/fireflyPage'

const routes = [
    {path: '/', component: LoadingWaterApp},
    {path: '/water', component: LoadingWaterApp},
    {path: '/firefly', component: FireFlyApp},
    {path: '*', component: LoadingWaterApp}
]

Vue.use(VueRouter)

const router = new VueRouter({
    routes: routes
})

new Vue({
    router: router
}).$mount('#app')