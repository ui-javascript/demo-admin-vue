/**
 * 整个app的路由设置
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/index',
    component: require('../views/index'),

    // index下的子导航
    children: [
      {
        path: 'rage',
        component: require('../views/rage')
      },
      {
        path: 'songList',
        component: require('../views/songList')
      },
      {
        path: 'leaderBoard',
        component: require('../views/leaderBoard')
      },
      {
        path: 'hotSinger',
        component: require('../views/hotSinger')
      }
    ]
  },

    // 歌手详情
    {
      name: 'playerDetail',
      path: '/playerDetail/:id',
      component: require('../views/playerDetail')
    },

    // 专辑详情
    {
      path: '/playListDetail/:id',
      name: 'playListDetail',
      component: require('../views/playListDetail')
    }, {
      path: '*', redirect: '/index/rage'
    }]
})

export default router
