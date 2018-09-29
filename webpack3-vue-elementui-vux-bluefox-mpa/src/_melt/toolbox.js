// 全局样式
// require('assets/css/theme/vux/_output.less')

import Vue from 'vue'
import VueRouter from 'vue-router'

// 全局注册
import TanApp from './views/toolbox/tantanPage'

const routes = [
    {path: '/', component: TanApp},
    {path: '/tan', component: TanApp},
    {path: '*', component: TanApp}
]

Vue.use(VueRouter)

const router = new VueRouter({
    routes: routes
})

new Vue({
    router: router
}).$mount('#app')