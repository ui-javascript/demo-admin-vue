// 处理路径
const  path = require('path')
function resolve(dir) {
    return path.join(__dirname, '../../../' + dir)
}

module.exports = {
    IE8: false,
    PAGES: "_pages-san-admin",
    MODULES: "mui",
    COPYDIR_IGNORE: "**",
    RESOLVE_ALIAS: {},
    EXTERNALS: {
        // san: 'window.san',
    }
};
