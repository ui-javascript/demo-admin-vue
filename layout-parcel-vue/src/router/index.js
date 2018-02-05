import Vue from 'vue'
import Router from 'vue-router'
 
// 开发环境用同步加载，而正式环境用异步加载路由，提高开发环境的渲染效率

import Welcome from '../views/welcome'

Vue.use(Router)

export const constantRouterMap = [
    {
        path: '/',
        redirect(to) {
            return 'welcome'
        }
    },
    {
        path: '/welcome',
        component: Welcome,
    }
]

export default new Router({
    scrollBehavior: () => ({ y: 0 }),  // 滚动到指定位置
    routes: constantRouterMap
})
