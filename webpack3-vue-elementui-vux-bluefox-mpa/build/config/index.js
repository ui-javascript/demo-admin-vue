// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var merge = require('webpack-merge')
var fs = require('fs')

var sysName = 'pages'
if (process.env.SYS_NAME) {
    sysName = process.env.SYS_NAME.toString().trim()
}

var defaultConfig = {

    // 网站模块名，例如 http://192.168.0.216:8089/module/app/initlayer.html 中的
    // 默认为views，修改这里的配置的同时，也要同时重命名/src/views的这个文件夹名称
    moduleName: `_${sysName}`,

    // 开发配置
    dev: {
        env: require('./dev.env'),
        port: 8888,

        // 自动打开的首页
        autoOpenBrowser: true,
        indexPage: `/_${sysName}/index.html`,

        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    },

    // 打包配置
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../../dist'),

        // 输出资源的存放位置
        assetsSubDirectory: 'static',

        // 公共资源位置
        // 也可以改成 ../
        assetsPublicPath: './',

        // 视图文件输出位置
        // 也可以改成 templates
        assetsHtmlPath: '',

        productionSourceMap: true,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    }
}

// var detailConfig = require('./system/default')
// 在命令行中指定



// 如果存在配置文件
if (fs.existsSync(`./build/config/system/${sysName}.js`)) {
    var detailConfig = require(`./system/${sysName}`)

    // 配置覆盖
    // Object.assign(exports.common, details.common)
    // Object.assign(exports.dev, details.dev)
    // Object.assign(exports.prod, details.prod)

    defaultConfig = merge(defaultConfig, detailConfig)
    console.log(sysName + '配置文件已覆盖(๑•̀ㅂ•́)و✧')
}

module.exports = defaultConfig
