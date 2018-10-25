// 处理路径
const  path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    PORT: 9528,
    IE8: true,
    PAGES: "_pages-vue-app",
    CDN: "/",
    MODULES: "happyfri",
    COPYDIR_IGNORE: "**",
    RESOLVE_ALIAS: {
        /* happyfri配置 ================ */
        'src': resolve('_pages-vue-app/happyfri'),
        'assets': resolve('_pages-vue-app/happyfri/assets'),
        'components': resolve('_pages-vue-app/happyfri/components')
    }
};
