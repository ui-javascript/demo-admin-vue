import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './views/main'
import Calendar from './views/calendar'

const routes = [
    {path: '/', redirect: '/calendar'},
    {path: '/calendar', component: Calendar}
]

Vue.use(VueRouter)

const router = new VueRouter({
    routes: routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App),
});