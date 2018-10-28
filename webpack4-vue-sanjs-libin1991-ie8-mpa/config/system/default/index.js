// 处理路径
const  path = require('path')
function resolve(dir) {
    return path.join(__dirname, '../../../' + dir)
}

module.exports = {
    IE8: true,
    PAGES: "_pages",
    MODULES: "*",
    COPYDIR_IGNORE: "**",
    RESOLVE_ALIAS: {},
    EXTERNALS: {
        jquery: 'window.$',
        $: 'window.$',
        seajs: 'window.seajs',
    }
};
