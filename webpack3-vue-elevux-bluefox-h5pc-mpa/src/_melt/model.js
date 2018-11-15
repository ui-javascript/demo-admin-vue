// 全局样式
// require('assets/css/theme/vux/_output.less')

import Vue from 'vue'
import VueRouter from 'vue-router'

// 全局注册
import CamelUI from 'camel-ui'
Vue.use(CamelUI)

import CalendarApp from '~/model/MCalendar'
import CamelApp from './views/model/camelPage'
import LoadingApp from './views/effects/loadingPage'
import TableApp from './views/model/tablePage'

const routes = [
    {path: '/', component: CamelApp},
    {path: '/camel', component: CamelApp},
    {path: '/calendar', component: CalendarApp},
    {path: '/loading', component: LoadingApp},
    {path: '/table', component: TableApp},
    {path: '*', component: CamelApp}
]

Vue.use(VueRouter)

const router = new VueRouter({
    routes: routes
})

new Vue({
    router: router
}).$mount('#app')