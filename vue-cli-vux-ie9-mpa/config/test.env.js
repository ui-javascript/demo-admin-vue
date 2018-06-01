// 测试的基础上加上开发配置
var merge = require('webpack-merge')
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
    NODE_ENV: '"testing"'
})
