// 处理路径
const  path = require('path')
function resolve(dir) {
    return path.join(__dirname, '../../../' + dir)
}

module.exports = {
    IE8: false,
    PAGES: "_pages-vue-app",
    MODULES: "happyfri",
    COPYDIR_IGNORE: "**",
    RESOLVE_ALIAS: {
        /* happyfri配置 ================ */
        'src': resolve('_pages-vue-app/happyfri'),
        'assets': resolve('_pages-vue-app/happyfri/assets'),
        'components': resolve('_pages-vue-app/happyfri/components')
    }
};
