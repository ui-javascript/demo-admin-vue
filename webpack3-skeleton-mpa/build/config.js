/**
 * 配置文件
 */
const path = require('path')

module.exports = {
  cssPublicPath: "../static",
  imgOutputPath: "img/", // 图片
  cssOutputPath: "./static/css/styles.css", // bulid 后的css路径
  devServerOutputPath: "../dist", // build后的目录
  
  
  distRoot: path.resolve(__dirname, '/dist'),
  tplLang: 'pug|html', // 模板语法，暂时只支持html、pug
  libraryDir: 'libs'
}
