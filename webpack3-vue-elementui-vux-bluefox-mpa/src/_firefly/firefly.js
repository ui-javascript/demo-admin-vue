import Vue from 'vue'
import VueRouter from 'vue-router'

import FireFlyApp from './views/firefly-page'
import LeanApp from './views/lean-app'

const routes = [
    {path: '/', component: FireFlyApp},
    {path: '/lean', component: LeanApp}
]

Vue.use(VueRouter)

const router = new VueRouter({
    routes: routes
})


new Vue({
    router: router
}).$mount('#app')