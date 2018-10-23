/* eslint-disable */
const  path = require('path')
// 处理路径
function resolve(dir) {
    return path.join(__dirname, dir)
}


module.exports = {
    // ======== 端口
    PORT: 9528,

    // ======== 是否兼容IE8
    IE8: false,

    // ======== 工程文件夹所在
    // 默认 "pages"
    PAGES: "pages_vue_app",

    // 路径替换
    // 1. 默认相对路径    '/'
    // 2. 指定域名cdn "https://www.bootcdn.cn/"
    CDN: "/",

    // ========= 指定运行的模块
    // 1. 默认所有 "*"
    // 2. 指定单个模块 "index"
    // 3. 指定多个模块  "{index,router,todo}"
    MODULES: "neteasecloud",

    // ========= 拷贝忽略
    // 1. 默认不忽略 ""
    // 2. 全部忽略 "**"
    // 3. 忽略部分 "plus/lulu/**,plus/layui/**"
    COPYDIR_IGNORE: "**",

    // 略坑 原来各项目的绝对路径
    RESOLVE_ALIAS: {

        // mmplayer配置
        // 'assets': resolve('pages_vue_app/mmplayer/assets'),
        // 'base': resolve('pages_vue_app/mmplayer/base'),
        // 'components': resolve('pages_vue_app/mmplayer/components'),
        // 'pages': resolve('pages_vue_app/mmplayer/pages'),
        // 'api': resolve('pages_vue_app/mmplayer/api'),

        // neteasecloud(MUSE UI)配置
        'src': resolve('pages_vue_app/neteasecloud'),
        'assets': resolve('pages_vue_app/neteasecloud/assets'),
        'components': resolve('pages_vue_app/neteasecloud/components'),
    }
};
