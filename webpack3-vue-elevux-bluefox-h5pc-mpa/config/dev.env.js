// 产品的环境上加上开发
var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',

    // 答题系统
    // BASE_URL: '"http://192.168.1.80:5060"',
    // BASE_API: '"http://192.168.1.80:5060/api/v1"',

    // 打卡系统
    BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"',
})
