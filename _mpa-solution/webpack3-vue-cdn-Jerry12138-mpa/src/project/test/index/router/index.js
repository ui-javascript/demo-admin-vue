import Vue from 'vue'
import VueRouter from 'vue-router'

// Vue.use(Router)
Vue.use(VueRouter)

const routes = [
  { path: '/foo', component: () => import('../components/foo.vue') },
  { path: '/bar', component: () => import('../components/bar.vue') }
]

// const router = new Router({
const router = new VueRouter({
  routes
})

export default router
