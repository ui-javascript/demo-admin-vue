import Vue from 'vue'
import VueRouter from 'vue-router'

import CalendarApp from '~/model/MCalendar'
// import CalendarApp from '~/model/Tan'

const routes = [
    {path: '/', component: CalendarApp},
    // {path: '/tantan', component: CalendarApp}
]

Vue.use(VueRouter)

const router = new VueRouter({
    routes: routes
})


new Vue({
    router: router
}).$mount('#app')