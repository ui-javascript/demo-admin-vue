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
        // 'assets': resolve('_pages/index/assets'),
    },
    EXTERNALS: {
        /* 示例 ==================== */
        // jquery: 'window.$',
        // $: 'window.$',
        // san: 'window.san',
        // seajs: 'window.seajs',
        // requirejs: 'window.requirejs',
    }
};

// 切换指定系统
let sysName = [
    // 'default/index',
    // 'default/easyui',
    // 'default/layui',
    // 'default/lulu',
    // 'san/index',
    'san/router',
    // 'san/todo',
    // 'san-admin/index',
    // 'san-admin/mui',
    // 'san-admin/bootstrap',
    // 'vue/index',
    // 'vue/bootstrap',
    // 'vue-admin/index',
    // 'vue-admin/element',
    // 'vue-admin/d2',
    // 'vue-app/index',
    // 'vue-app/chat',
    // 'vue-app/todo',
    // 'vue-app/mmplayer',
    // 'vue-app/happyfri',
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