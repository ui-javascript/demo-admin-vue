// 处理路径
const  path = require('path')
function resolve(dir) {
    return path.join(__dirname, '../../../' + dir)
}

module.exports = {
    PORT: 9528,
    IE8: false,
    PAGES: "_pages-vue-app",
    CDN: "/",
    MODULES: "mmplayer",
    COPYDIR_IGNORE: "",
    RESOLVE_ALIAS: {
        /* mmplayer配置 ================ */
        'assets': resolve('_pages-vue-app/mmplayer/assets'),
        'base': resolve('_pages-vue-app/mmplayer/base'),
        'components': resolve('_pages-vue-app/mmplayer/components'),
        'pages': resolve('_pages-vue-app/mmplayer/pages'),
        'api': resolve('_pages-vue-app/mmplayer/api'),
    }
};
