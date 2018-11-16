// 处理路径
const  path = require('path')
function resolve(dir) {
    return path.join(__dirname, '../../../' + dir)
}

module.exports = {
    system: {
        supportIE8: true,
        pages: "_pages-san",
        modules: "router",
        resolveAlias: {},
        externals: {
            // san: 'window.san',
            // sanRouter: 'window["san-router"]',
        },
    },

    build: {
    }

};
