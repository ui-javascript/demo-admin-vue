module.exports = {
  presets: [
    ['@vue/app', {
        'modules': false,
        'useBuiltIns': 'entry'
    } ],
  ]
  ,
  plugins: [
    // "transform-runtime"
    // [ 'import', {
    //   'libraryName': 'ant-design-vue',
    //   'libraryDirectory': 'es',
    //   // `style: true` 会加载 less 文件
    //   'style': true
    // } ]
  ]
}
