import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/hello/hello'
// const ComponentName=() => import('components/hello/hello')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: Hello
    }
  ]
})
