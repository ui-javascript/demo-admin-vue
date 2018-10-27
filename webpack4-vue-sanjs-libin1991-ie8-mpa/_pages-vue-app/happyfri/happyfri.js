import Vue from 'vue'
import App from './App'

import './style/common.less'
import './config/rem'

import router from './router/router'
import store from './store'


new Vue({
    el: '#app',
    components: {
        App
    },
    router,
    store,
    template: '<App/>'
})
