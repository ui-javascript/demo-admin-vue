import Vue from 'vue'
import Router from 'vue-router'

import OverView from '../components/OverView'
import TaskList from '../components/TaskList'

Vue.use(Router)

Vue.config.productionTip = false


export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'OverView',
      component: OverView
    },
    {
      path: '/OverView',
      name: 'OverView2',
      component: OverView
    },
    {
      path: '/TaskList',
      name: 'TaskList',
      component: TaskList
    }
  ]
})
