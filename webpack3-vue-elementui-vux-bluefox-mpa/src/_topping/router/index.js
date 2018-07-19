import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// in development-env not use lazy-loading,
// because lazy-loading too many pages will cause webpack hot update too slow.
// so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

const _import = require('./_import_' + process.env.NODE_ENV)

/** note: submenu only apppear when children.length>=1
 *   detail see  https://panjiachen.github.io/vue-element-admin-site/#/router-and-nav?id=sidebar
 **/

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
 **/
const constantRouterMap = [
    { path: '/login', component: _import('login/main') },
    { path: '/', redirect: '/index' },
    { path: '/index',
        redirect: 'index_main',
        children: [
            {
                path: 'main',
                component: _import('index/main'),
                name: 'index_main',
                meta: {}
            },
            {
                path: 'rule',
                component: _import('index/rule'),
                name: 'index_rule',
                meta: {}
            }
        ]
    },
    { path: '/seconds',
      redirect: 'seconds_main',
      children: [
          {
              path: 'main',
              component: _import('seconds/main'),
              name: 'seconds_main',
              meta: {}
          }
      ]
    },
    { path: '/higher', component: _import('higher/main') },
    { path: '/chat', component: _import('chat/main') },
    { path: '/narrow', component: _import('narrow/main') },
    { path: '/404', component: _import('error/404') },
    { path: '*', component: _import('error/404') }
]


export default new Router({
    // mode: 'history', //后端支持可开
    // scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
})