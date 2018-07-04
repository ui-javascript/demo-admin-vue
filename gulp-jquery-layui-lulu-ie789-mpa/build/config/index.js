/*
 * 配置
 */

// 公共配置
exports.common = {
    // 固定
    staticDir: './static',
    templatesDir: './templates',
}

// 开发环境
exports.dev = {
    // 固定
    devDir: './src',
    assetsDir: './src/assets',

    // 样式库
    stylesName: 'natural',
    stylesDir: './src/assets/css/theme/natural',
    stylesWatchFiles: [
        `./src/assets/css/components/**/*.less`,
        `./src/assets/css/theme/natural/**/*.less`
    ],

    // 脚本库
    libsName: 'natural',
    libsDevDir: './src/assets/libs',
    libsDevMods: 'browser',  // '{ajax,scroll}' 没空格
    libsOutputDir: './static/vendor/libs',

    // 视图文件
    // 项目脚本与图片
    pagesName: '_default',
    pagesDir: './src/pages',
    copyHTMLExclude: [
        `!./src/pages/**/*.{html,md,inc}`,
        `!./src/pages/static/**`
    ],
    imagesDir: './src/pages/static/images',
    scriptsDir: './src/pages/static/js',


    // 雪碧图
    spriteDevDir: './src/pages/images/sprite',
    spriteOutputDir: './src/assets/css/theme/natural',

    // 字体子集化
    fontSpiderDir: './static/fonts/hyzhj',

    // 离线
    pwaDir: './templates'
}

// 产品
exports.prod = {
    // 打包文件夹
    distDir: './dist',

    // 需打包文件
    zipFiles: [
        './**/*.*',
        '!{node_modules,build,doc,src}/**/*.*',
        '!{dist.zip,gulpfile.js,package.json,package-lock.json,README.md,.babelrc}'
    ],

    // 部署
    host: '47.100.99.127',
    username: 'root',
    password: '我不告诉你,除非做我女朋友',
    remotePath: '/data/wwwroot/default'

}

// 根据不同系统配置文件进行覆盖默认配置
// 此处修改
// var details = require('./system/default')

// H5宣传页
// var details = require('./system/display/hibim')
// var details = require('./system/display/designStudio')
// var details = require('./system/corner')
var details = require('./system/natural')
// var details = require('./system/display/diamond')
// var details = require('./system/display/booom')
// var details = require('./system/display/chuangke')
// var details = require('./system/display/retina')
// var details = require('./system/display/chivalric')
// var details = require('./system/display/wechatReading')
// var details = require('./system/display/flexyCard')
// var details = require('./system/display/html5upStellar')
// var details = require('./system/display/designer')
// var details = require('./system/display/ophiuchus')
// var details = require('./system/display/ophiuchus')
// var details = require('./system/display/monetary')
// var details = require('./system/display/cartoon')


// 后台管理系统
// var details = require('./system/admin/hbcj')
// var details = require('./system/admin/win10Blog')
// var details = require('./system/admin/ama')
// var details = require('./system/admin/matrix')
// var details = require('./system/admin/AdminLTE')

// 商城
// var details = require('./system/mall/pmsMall')
// var details = require('./system/mall/mooc')
// var details = require('./system/mall/papidenMall')


// 配置覆盖
Object.assign(exports.common, details.common)
Object.assign(exports.dev, details.dev)
Object.assign(exports.prod, details.prod)