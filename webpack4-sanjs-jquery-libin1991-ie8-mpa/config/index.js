/* eslint-disable */
const  path = require('path')
const merge = require('webpack-merge')
const fs = require('fs')

// 处理路径
function resolve(dir) {
    return path.join(__dirname, dir)
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
    PAGES: "_pages-san",
    // PAGES: "_pages-san-admin",
    // PAGES: "_pages-vue",
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

// 指定系统名称
// let sysName = 'default'
// let sysName = 'san'
// let sysName = 'san-admin'
// let sysName = 'vue'
// let sysName = 'vue-admin'
// let sysName = 'vue-app'
// let sysName = 'vue-app-chat'
// let sysName = 'vue-app-todo'
// let sysName = 'vue-app-mmplayer'
let sysName = 'vue-app-happyfri'

// 如果存在配置文件
if (fs.existsSync(`./config/system/config.${sysName}.js`)) {
    var detailConfig = require(`./system/config.${sysName}`)
    config = merge(config, detailConfig)
    console.log(sysName + '配置文件已覆盖(๑•̀ㅂ•́)و✧')
}

module.exports = config