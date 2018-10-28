// 处理路径
const  path = require('path')
function resolve(dir) {
    return path.join(__dirname, '../../../' + dir)
}

module.exports = {
    IE8: false,
    PAGES: "_pages-vue-app",
    MODULES: "neteasecloud",
    COPYDIR_IGNORE: "**",
    RESOLVE_ALIAS: {
        /* neteasecloud配置 ============ */
        'src': resolve('_pages-vue-app/neteasecloud'),
        'assets': resolve('_pages-vue-app/neteasecloud/assets'),
        'components': resolve('_pages-vue-app/neteasecloud/components'),
    }
};
