/* eslint-disable */
module.exports = {
    // ======== 端口
    PORT: 9527,

    // ======== 是否兼容IE8
    IE8: true,

    // ======== 工程文件夹所在
    // 默认 "pages"
    PAGES: "pages_vue_chat",

    // 路径替换
    // 1. 默认相对路径    '/'
    // 2. 指定域名cdn "https://www.bootcdn.cn/"
    CDN: "/",

    // ========= 指定运行的模块
    // 1. 默认所有 "*"
    // 2. 指定单个模块 "index"
    // 3. 指定多个模块  "{index,router,todo}"
    MODULES: "todo",

    // ========= 拷贝忽略
    // 1. 默认不忽略 ""
    // 2. 忽略部分 "plus/lulu/**,plus/layui/**"
    COPYDIR_IGNORE: "plus/layui/**"
};
