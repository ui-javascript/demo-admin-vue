// 处理路径
const  path = require('path')
function resolve(dir) {
    return path.join(__dirname, '../../../' + dir)
}

module.exports = {
    system: {
        supportIE8: false,
        pages: "_pages-vue-app",
        modules: "notepad",
        resolveAlias: {
            '@': resolve('_pages-vue-app/notepad'),
        },
        externals: {
        },
    },
    build: {
        env: {
            NODE_ENV: '"production"',
        },
    },
    dev: {
        port: 9527,
        env: {
            NODE_ENV: '"development"',
        },
    },
};