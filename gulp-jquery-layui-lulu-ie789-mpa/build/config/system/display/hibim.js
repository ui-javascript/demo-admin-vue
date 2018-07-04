// 开发环境
const pagesName = '_hibim-sefolio-ie9'
const stylesName = 'natural'
const libsName = 'zhuang'


exports.dev = {

    // 样式库
    stylesName: stylesName,
    stylesDir: `./src/assets/css/theme/${stylesName}`,
    stylesWatchFiles: [
        `./src/assets/css/components/**/*.less`,
        `./src/assets/css/theme/${stylesName}/**/*.less`
    ],

    // 脚本库
    libsName: libsName,
    libsDevDir: `./src/assets/libs/${libsName}/src`,
    libsDevMods: '*',  // '{ajax,scroll}' 没空格
    libsOutputDir: './static/vendor/libs',

    // 视图文件
    // 项目脚本与图片
    pagesName: pagesName,
    pagesDir: `./${pagesName}`,
    copyHTMLExclude: [
        `!./${pagesName}/**/*.{html,md,inc}`,
        `!./${pagesName}/images/**`
    ],
    imagesDir: `./${pagesName}/images`,
    scriptsDir: `./${pagesName}/js`,

    // 雪碧图
    spriteDevDir: `./${pagesName}/images/sprite`,
    spriteOutputDir: `./src/assets/css/theme/${stylesName}`,

    // 字体子集化
    fontSpiderDir: './static/fonts/hyzhj',

    // 离线
    pwaDir: './templates'
}


