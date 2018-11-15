import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Exam = r => require.ensure([], () => r(require('../views/examPaper/main')), 'carousel_Home')
const HistoryGrade = r => require.ensure([], () => r(require('../views/historyGrade/main')), 'carousel_boot')
const UserInfo = r => require.ensure([], () => r(require('../views/userInfo/main')), 'carousel_vma')
const Error = r => require.ensure([], () => r(require('../views/userInfo/main')), 'error')

// 多页面路径配置
const baseUrl = ''

const routes = [
  { path: baseUrl + '/', redirect: baseUrl + '/exam' },
  { path: baseUrl + '/exam', component: Exam },
  { path: baseUrl + '/history', component: HistoryGrade },
  { path: baseUrl + '/userInfo', component: UserInfo },
  { path: '*', component: Error }
]

const router = new VueRouter({
  hashbang: true, // 将路径格式化为#!开头
  history: true, // use history=false when testing
  // mode: 'history',
  base: __dirname,
  linkActiveClass: 'v-link-active',
  routes // （缩写）相当于 routes: routes
})

export default router
