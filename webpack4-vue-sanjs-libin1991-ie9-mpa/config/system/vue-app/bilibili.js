// 处理路径
const  path = require('path')
function resolve(dir) {
    return path.join(__dirname, '../../../' + dir)
}

module.exports = {
    system: {
        supportIE8: false,
        pages: "_pages-vue-app",
        modules: "bilibili",
        resolveAlias: {
            'src': resolve('_pages-vue-app/bilibili'),
            'assets': resolve('_pages-vue-app/bilibili/assets'),
            'api': resolve('_pages-vue-app/bilibili/api'),
            'components': resolve('_pages-vue-app/bilibili/components')
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