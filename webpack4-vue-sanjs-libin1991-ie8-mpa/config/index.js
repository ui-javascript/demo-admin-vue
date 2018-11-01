/* eslint-disable */
const  path = require('path')
const merge = require('webpack-merge')
const fs = require('fs')

// 处理路径
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

let config = {
    // 系统共用
    system: {
        // 入口生成标准 @TODO
        // 1. html为准 'html'
        // 2. js为准 'js'
        // 3. html、js都要 'both'
        entryFirst: 'html',

        // 是否兼容IE8
        supportIE8: true,

        // @TODO 适配
        isMobile: false,

        // 页面所在
        pages: '_pages',
        // 指定运行的模块
        // 1. 默认所有 "*"
        // 2. 指定单个模块 "index"
        // 3. 指定多个模块  "{index,router,todo}"
        modules: 'index',

        // 路径别名
        resolveAlias: {
            // 'assets': resolve('_pages/index/assets'),
        },
        external: {
            // jquery: 'window.$',
            // $: 'window.$',
            // san: 'window.san',
            // seajs: 'window.seajs',
            // requirejs: 'window.requirejs',
        }
    },

    // 构建配置
    build: {
        env: {
            NODE_ENV: '"production"',
        },
        proxyTable: {},
        cssSourceMap: false,
        // 路径替换 ===============
        // 1. 默认相对路径    '/'
        // 2. 指定域名cdn "https://www.bootcdn.cn/"
        cdn: '',
        copyDir: [
            { from: resolve('static/*.ico'), to: resolve('dist')},
            { from: resolve('static/img/**'), to: resolve('dist')},
            // { from: resolve('static/vendor/**'), to: resolve('dist')}
            // { from: resolve('static/plus/layui/**'), to: resolve('dist')},
        ],
    },
    // 开发配置
    dev: {
        env: {
            NODE_ENV: '"development"',
        },
        port: 9527,
    },
    // 部署配置
    deploy: {
        // 选择上传
        // 'ali' || 'qiniu'
        use: 'ali',
        // 七牛
        qiNiuCdn: {
            host: '',
            bucket: '',
            ak: '',
            sk: '',
            zone: '',
            // 路径前缀
            prefix: ''
        },
        // 阿里OSS相关配置
        aLiOss: {
            host: '',
            accessKeyId: '',
            accessKeySecret: '',
            bucket: '',
            region: '',
            // 路径前缀
            prefix: ''
        },
    }
};

// 切换指定系统
let sysName = [
    // 'default/_all',
    'default/index',
    // 'default/easyui',
    // 'default/layui',
    // 'default/lulu',
    // 'san/_all',
    // 'san/index',
    // 'san/router',
    // 'san/todo',
    // 'san-admin/_all',
    // 'san-admin/index',
    // 'san-admin/mui',
    // 'san-admin/bootstrap',
    // 'vue/_all',
    // 'vue/index',
    // 'vue/bootstrap',
    // 'vue-admin/_all',
    // 'vue-admin/index',
    // 'vue-admin/element',
    // 'vue-admin/d2',
    // 'vue-app/_all',
    // 'vue-app/index',
    // 'vue-app/notepad',
    // 'vue-app/calculator',
    // 'vue-app/chat',
    // 'vue-app/nreader',
    // 'vue-app/bilibili',
    // 'vue-app/todo',
    // 'vue-app/mmplayer',
    // 'vue-app/happyfri',
    // 'vue-mobile/_all',
    // 'vue-mobile/index',
    // 'vue-mobile/vux',
    // 'vue-mobile/vant',
    // 'vue-mobile/iphone',
][0]

sysName = sysName || 'default/index'

// 如果存在配置文件就覆盖
if (fs.existsSync(`./config/system/${sysName}.js`)) {
    var sysConfig = require(`./system/${sysName}`)
    config = merge(config, sysConfig)
    console.log(sysName + ' 配置已覆盖(๑•̀ㅂ•́)و✧')
}
module.exports = config