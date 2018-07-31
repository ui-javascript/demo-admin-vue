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
    {path: '/login', component: _import('login/index')},
    {path: '/', redirect: '/welcome'},
    {path: '/404', component: _import('common/404')},
    {path: '/welcome', component: _import('common/welcome'), name: 'welcome_index'},
    {path: '/guide', component: _import('common/guide'), name: 'common_guide'},
    {
        path: '/rule',
        component: _import('rule/index'),
        name: 'rule_index'
    },
    {
        path: '/seconds',
        component: _import('seconds/index'),
        redirect: '/seconds/question',
        children: [
            {
                path: 'question',
                component: _import('seconds/seconds-question'),
                name: 'seconds_question'
            },
            {
                path: 'details',
                component: _import('seconds/seconds-details'),
                name: 'seconds_details'
            },
            {
                path: 'overview',
                component: _import('seconds/seconds-overview'),
                name: 'seconds_overview'
            },
        ]
    },
    {
        path: '/higher',
        component: _import('higher/index'),
        redirect: '/higher/question',
        children: [
            {
                path: 'question',
                component: _import('higher/higher-question'),
                name: 'higher_question'
            },
            {
                path: 'overview',
                component: _import('higher/higher-overview'),
                name: 'higher_overview'
            }
        ]
    },
    {
        path: '/narrow',
        component: _import('narrow/index'),
        redirect: '/narrow/question',
        children: [
            {
                path: 'question',
                component: _import('narrow/narrow-question'),
                name: 'narrow_question'
            },
            {
                path: 'details',
                component: _import('narrow/narrow-details'),
                name: 'narrow_details'
            }
        ]
    },
    {
        path: '/ranking',
        component: _import('ranking/index'),
        name: 'ranking_index'
    },
]


export default new Router({
    // mode: 'history', //后端支持可开
    // scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
})