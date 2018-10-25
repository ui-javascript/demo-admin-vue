/**
 * 整个app的路由设置
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/index',
    component: require('../views/index').default,
    children: [
      {
        path: 'rage',
        component: require('../views/rage').default
      },
      {
        path: 'songList',
        component: require('../views/songList').default
      },
      {
        path: 'leaderBoard',
        component: require('../views/leaderBoard').default
      },
      {
        path: 'hotSinger',
        component: require('../views/hotSinger').default
      }
    ]
  }, {
    name: 'playerDetail',
    path: '/playerDetail/:id',
    component: require('../views/playerDetail').default
  }, {
    path: '/playListDetail/:id',
    name: 'playListDetail',
    component: require('../views/playListDetail').default
  }, {
    path: '*', redirect: '/index/rage'
  }]
})

export default router
