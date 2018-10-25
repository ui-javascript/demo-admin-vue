// 处理路径
const  path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    PORT: 9528,
    IE8: true,
    PAGES: "_pages-vue",
    CDN: "/",
    MODULES: "*",
    COPYDIR_IGNORE: "**",
    RESOLVE_ALIAS: {}
};
