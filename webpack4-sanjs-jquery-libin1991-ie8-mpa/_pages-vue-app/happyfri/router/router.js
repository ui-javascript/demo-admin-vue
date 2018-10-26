import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: r => require.ensure([], () => r(require('src/page/home')), 'home')
            // component: import('../page/home')
        },
        {
            path: '/item',
            name: 'item',
            component: r => require.ensure([], () => r(require('src/page/item')), 'item'),
            // component: import('../page/item')
        },
        {
            path: '/score',
            name: 'score',
            component: r => require.ensure([], () => r(require('src/page/score')), 'score')
            // component: import('../page/score')
        }
    ]
})