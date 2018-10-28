// 处理路径
const  path = require('path')
function resolve(dir) {
    return path.join(__dirname, '../../../' + dir)
}

module.exports = {
    IE8: false,
    PAGES: "_pages-vue-admin",
    MODULES: "element",
    COPYDIR_IGNORE: "**",
    RESOLVE_ALIAS: {},
    build: {
        env: {
            NODE_ENV: '"production"',
        },
    },
    dev: {
        port: 9527,
        env: {
            NODE_ENV: '"development"',
            BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"',
        },
    },
};
