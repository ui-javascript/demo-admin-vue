/**
 * Created by zhoou on 2016/12/7.
 */
import Vue from 'vue'
import 'assets/css/bootstrap.min.css'
import 'assets/css/Common.css'

// 引用bootstrap
import 'assets/js/libs/bootstrap.min.js'

import IndexCpm from './Index.vue'
import store from './store/index'
import router from './router/index'

import util from 'jspath/common/util'

Vue.prototype.utilHelper = util

/* eslint-disable*/
new Vue({
    el: '#carousel',
    store,
    router,
    render: page => page(IndexCpm)
})
