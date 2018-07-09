import Vue from 'vue'
import VueRouter from 'vue-router'

import CalendarApp from '~/model/calendar/Calendar'

const routes = [
    {path: '/', component: CalendarApp}
]

Vue.use(VueRouter)

const router = new VueRouter({
    routes: routes
})


new Vue({
    router: router
}).$mount('#app')