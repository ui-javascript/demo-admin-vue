import Vue from 'vue'

// import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// import '@/styles/index.scss' // global css

console.log('hello vue jsx222222')

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h('div')
})

