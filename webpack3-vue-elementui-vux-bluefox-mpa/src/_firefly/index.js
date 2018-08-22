// 全局样式
require('assets/css/theme/vux/_output.less')

import Vue from 'vue'
import VueRouter from 'vue-router'

// 全局注册
import CamelUI from 'camel-ui'
Vue.use(CamelUI)


import CalendarApp from '~/m/Time/MCalendar'
import TanApp from './views/tantan-app'
import CamelApp from './views/camel-page'
import LoadingApp from './views/loading-app'
import LoadingWaterApp from './views/loading-water-app'
import TableApp from './views/table-app'


const routes = [
    {path: '/', component: CalendarApp},
    {path: '/tantan', component: TanApp},
    {path: '/tan', component: TanApp},
    {path: '/camel', component: CamelApp},
    {path: '/loading', component: LoadingApp},
    {path: '/water', component: LoadingWaterApp},
    {path: '/table', component: TableApp},
    {path: '*', component: TanApp}
]

Vue.use(VueRouter)

const router = new VueRouter({
    routes: routes
})


new Vue({
    router: router
}).$mount('#app')