var utils = require('./utils/utils')
var config = require('./config')

// 是否打包产品
var isProduction = (process.env.NODE_ENV === 'production')


module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: isProduction
            ? config.build.productionSourceMap
            : config.dev.cssSourceMap, // 开发环境下默认不需要
        extract: isProduction
    }),

    // CSS前缀配置
    postcss: [
        require('autoprefixer')({
            browsers: ['iOS >= 7', 'Android >= 4.1']
        })
    ]
}
