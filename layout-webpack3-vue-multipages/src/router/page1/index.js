import Vue from 'vue'
import Router from 'vue-router'
import Page1 from 'components/page1/page1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/page1',
      component: Page1
    }
  ]
})
