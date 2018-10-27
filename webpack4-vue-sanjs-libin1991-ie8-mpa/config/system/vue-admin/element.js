// 处理路径
const  path = require('path')
function resolve(dir) {
    return path.join(__dirname, '../../../' + dir)
}

module.exports = {
    BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"',
    PORT: 9528,
    IE8: false,
    PAGES: "_pages-vue-admin",
    CDN: "/",
    MODULES: "element",
    COPYDIR_IGNORE: "**",
    RESOLVE_ALIAS: {}
};
