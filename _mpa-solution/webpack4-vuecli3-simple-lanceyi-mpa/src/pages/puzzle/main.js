import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';

import entryConfig from '../../_common/entryConfig'

// 调用公共方法加载配置
entryConfig(Vue)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
