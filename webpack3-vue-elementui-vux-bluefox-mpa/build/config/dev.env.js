// 产品的环境上加上开发
var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    BASE_API: '"http://rap2api.taobao.org/app/mock/21523"',
})
