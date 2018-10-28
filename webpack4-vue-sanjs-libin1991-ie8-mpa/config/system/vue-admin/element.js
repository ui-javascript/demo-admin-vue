// 处理路径
const  path = require('path')
function resolve(dir) {
    return path.join(__dirname, '../../../' + dir)
}

module.exports = {
    system: {
        supportIE8: false,
        pages: "_pages-vue-admin",
        modules: "element",
        resolveAlias: {},
        externals: {
        },
    },
    build: {
        env: {
            NODE_ENV: '"production"',
            BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"',
        },
        copyIgnore: "**",
    },
    dev: {
        port: 9527,
        env: {
            NODE_ENV: '"development"',
            BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"',
        },
    },
};