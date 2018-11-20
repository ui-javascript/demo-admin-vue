// 处理路径
const  path = require('path')
function resolve(dir) {
    return path.join(__dirname, '../../../' + dir)
}

module.exports = {
    system: {
        supportIE8: true,
        pages: "_pages",
        modules: "layui",
        resolveAlias: {},
        externals: {
            jquery: 'window.$',
            $: 'window.$',
            seajs: 'window.seajs',
        },
    },

    build: {
        copyDir: [
            { from: resolve('static/*.ico'), to: resolve('dist')},
            { from: resolve('static/img/**'), to: resolve('dist')},
            // { from: resolve('static/plus/layui/**'), to: resolve('dist')},
            // { from: resolve('static/vendor/**'), to: resolve('dist')}
        ],
    }

};