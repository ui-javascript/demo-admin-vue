// 处理路径
const  path = require('path')
function resolve(dir) {
    return path.join(__dirname, '../../../' + dir)
}

module.exports = {
    IE8: true,
    PAGES: "_pages-san",
    MODULES: "router",
    COPYDIR_IGNORE: "**",
    RESOLVE_ALIAS: {},
    EXTERNALS: {
        san: 'window.san',
    }
};
