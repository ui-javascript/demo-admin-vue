import Vue from 'vue'
import Router from 'vue-router'
import Page2 from 'components/page2/page2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/page2',
      component: Page2
    }
  ]
})
