// import Vue from 'vue'
// import Vue from 'vue/dist/vue.common.js';
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>'
})