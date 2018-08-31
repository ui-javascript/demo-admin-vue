// 开发环境
const pagesName = '_designStudio'
const stylesName = 'natural'
const libsName = 'mumuy'

exports.dev = {

    // 样式库
    stylesName: stylesName,
    stylesDir: `./src/assets/css/theme/${stylesName}`,

    // 设置监听
    stylesWatchFiles: [
        `./src/assets/css/components/**/*.less`,
        `./${pagesName}/static/css/*.less`
    ],

    // 脚本库
    libsName: libsName,
    libsDevDir: `./src/assets/libs/${libsName}`,
    libsDevMods: '*',  // '{ajax,scroll}' 没空格
    libsOutputDir: './static/vendor/libs',

    // 视图文件
    // 项目脚本与图片
    pagesName: pagesName,
    pagesDir: `./${pagesName}`,
    copyHTMLExclude: [
        `!./${pagesName}/**/*.{html,md,inc}`,
        `!./${pagesName}/static/**`
    ],
    imagesDir: `./${pagesName}/static/images`,
    scriptsDir: `./${pagesName}/static/js`,

    // 雪碧图
    spriteDevDir: `./${pagesName}/static/images/_sprite`,
    spriteOutputDir: `./${pagesName}/static/css`,

    // 字体子集化
    fontSpiderDir: './static/fonts/hyzhj',

    // 离线
    pwaDir: './templates'
}