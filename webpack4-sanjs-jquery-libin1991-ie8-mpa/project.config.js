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
    // 相对路径    '/'
    // 指定域名cdn "https://www.bootcdn.cn/"
    CDN: "/",

    // ========= 指定运行的模块
    // 默认所有 "*"
    // 指定单个模块 "index"
    // 指定多个模块  "{index,router,todo}"
    MODULES: "*",

    // ========= 拷贝忽略
    // 默认不忽略 ""
    // 忽略部分 "plus/lulu/**,plus/layui/**"
    COPYDIR_IGNORE: "plus/layui/**"
};
