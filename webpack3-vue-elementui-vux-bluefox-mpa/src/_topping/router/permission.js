import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import router from './index'
import store from '../store'
import { getToken } from './_auth' // 验权

// 不重定向白名单
const whiteList = ['/login']
const moduleList = ['/seconds', '/higher', '/narrow']

router.beforeEach((to, from, next) => {

    if (getToken()) {

        let progress = store.getters.progress
        if (progress.module !== 0) {
            debugger
            if (to.path.indexOf(moduleList[progress.module-1]) !== -1
                || to.path === '/rule/main'
                || to.path === '/notice'
                || to.path === '/rule/details') {
                next()
            }
            else {
                next({
                    path: moduleList[progress.module-1]
                })
            }
        }

        // 登录情况下
        if (to.path === '/login') {
            next({ path: '/' })
            // NProgress.done()
        } else {

            // if (store.getters.roles.length === 0) {
            //
            //     // 拉取用户信息
            //     store.dispatch('GetInfo').then(res => {
            //         next()
            //     }).catch((err) => {
            //
            //         // store.dispatch('FedLogOut').then(() => {
            //         //     // Message.error(err || 'Verification failed, please login again')
            //         //     next({ path: '/' })
            //         // })
            //
            //         next({ path: '/' })
            //     })
            // } else {
            //     next()
            // }

            next()
        }
    }

    // 未登录时
    else {

        // next('/login')

        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login')
        }
    }
})

router.afterEach(() => {

})