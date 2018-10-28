// 处理路径
const  path = require('path')
function resolve(dir) {
    return path.join(__dirname, '../../../' + dir)
}

module.exports = {
    system: {
        supportIE8: false,
        pages: "_pages-vue-app",
        modules: "mmplayer",
        resolveAlias: {
            '@': resolve('_pages-vue-app/mmplayer'),
            'assets': resolve('_pages-vue-app/mmplayer/assets'),
            'base': resolve('_pages-vue-app/mmplayer/base'),
            'components': resolve('_pages-vue-app/mmplayer/components'),
            'pages': resolve('_pages-vue-app/mmplayer/pages'),
            'api': resolve('_pages-vue-app/mmplayer/api'),
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
