/* eslint-disable */
const  path = require('path')
const merge = require('webpack-merge')
const fs = require('fs')

// 处理路径
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

let config = {
    // 端口 ================
    PORT: 9528,

    // 是否兼容IE8 ==========
    IE8: true,

    // 工程文件夹所在 ========
    // 默认 "pages"
    // =====================
    // PAGES: "_pages",
    // PAGES: "_pages-san",
    // PAGES: "_pages-san-admin",
    PAGES: "_pages-vue",
    // PAGES: "_pages-vue-app",
    // PAGES: "_pages-vue-admin",

    // 路径替换 ===============
    // 1. 默认相对路径    '/'
    // 2. 指定域名cdn "https://www.bootcdn.cn/"
    // =======================
    CDN: "/",

    // 指定运行的模块 ==========
    // 1. 默认所有 "*"
    // 2. 指定单个模块 "index"
    // 3. 指定多个模块  "{index,router,todo}"
    // =======================
    MODULES: "*",
    // MODULES: "todo",

    // 拷贝的对象
    COPYDIR: {

    },

    // 拷贝忽略 ================
    // 1. 默认不忽略 ""
    // 2. 全部忽略 "**"
    // 3. 忽略部分 "plus/lulu/**,plus/layui/**"
    // =======================
    // COPYDIR_IGNORE: "",
    COPYDIR_IGNORE: "**",

    // 略坑 原来各项目的绝对路径 合并覆盖上去
    // =======================
    RESOLVE_ALIAS: {
        /* 示例配置 ================ */
        // 'assets': resolve('pages/index/assets'),
    }
};

// 切换指定系统
let sysName = [
    // 'default',
    'san',
    // 'san-admin',
    // 'vue',
    // 'vue-admin',
    // 'vue-admin-element',
    // 'vue-admin-bootstrap',
    // 'vue-app',
    // 'vue-app-chat',
    // 'vue-app-todo',
    // 'vue-app-mmplayer',
    // 'vue-app-happyfri',
    // 'vue-mobile',
    // 'vue-mobile-vux',
    // 'vue-mobile-vant',
    // 'vue-mobile-iphone',
][0]


// 如果存在配置文件就覆盖
if (fs.existsSync(`./config/system/config.${sysName || 'default'}.js`)) {
    var sysConfig = require(`./system/config.${sysName}`)
    config = merge(config, sysConfig)
    console.log(sysName + ' 配置文件已覆盖(๑•̀ㅂ•́)و✧')
}
module.exports = config