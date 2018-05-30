# 基于Webpack的多页面解决方案

- san.js是作为公共vendors提取
- UI采用lulu UI 
- jquery仅作为辅助 cdn + external
- 辅助jquery ui与之前项目的JS Lib

```html
<link rel="stylesheet" href="//qidian.gtimg.com/lulu/theme/peak/css/common/ui.css">
```

- TODO

```js
// @TODO 打包时的报错机制修复
// @TODO 内联样式与资源
// @TODO less分模块引入以及模块化(暂停一下)
// @TODO 处理多层目录结构与一个文件夹下多个模板
// @TODO 兼容IE8的一些配置与处理
// @TODO 提取公共模块，不要重复引入 FIX
// @TODO 支持typescript
// @TODO 整理配置文件优化升级
// @TODO webpack性能优化
// @TODO 顺道支持SPA(主要是SAN + router, 可以不兼容IE)
// @TODO -> webpack4
```

- 注意

- 大段css的用 /**/ 不要用 //, 会报错的暂时没处理


# 多页面解决方案

- 非默认需要配置entries  https://github.com/Monine/webpack-multi-page
- webpack增量打包多页应用 若干思考 https://juejin.im/post/5a63f082f265da3e303c95cc 
    - http://www.guofengxian.com/2017/08/08/%E4%BD%BF%E7%94%A8webpack%E9%87%8D%E6%9E%84koa2%E5%A4%9A%E9%A1%B5%E5%BA%94%E7%94%A8/#more
- webpack不适合多页面应用？你写的插件还不够多 https://www.jianshu.com/p/f6a2a47d084d
- 从无到有，学习 webpack 的多页面配置 
    - https://juejin.im/entry/58e73a7661ff4b006b40d023
    - https://github.com/Heyff12/webpack-pages  
- 讲思路 搭建一个多页面的无依赖的工程化项目
    - https://juejin.im/post/59f338695188255f5c513fb1
    - https://github.com/wuomzfx/pure-webpage
- @deprecated 用webpack搭建多页面项目 https://juejin.im/post/5a0c13b3518825329314154d    
- 中小型多页面应用整合webpack终极方案 https://juejin.im/post/5a1b9a6ef265da432a7b4d0d    
- @deprecated 思路 http://hawkzz.com/blog/blog/1514542087911  
- @deprecated 一个简单易用的webpack4多页面脚手架配置加学习
    - https://juejin.im/post/5ad0a7f7518825482e394f41
    - https://github.com/673800357/webpack4-multpage-learn
- @deprecated 多页面Webpack脚手架 https://github.com/HeavenBin/WebpackTemplate
- @deprecated https://github.com/qq20004604/webpack-study
    - 综合案例是多页面的解决方案，可以稍微参考一下思路
 
# 基于Vue的多页面解决方案

- vue多页面开发和打包的正确姿势 https://juejin.im/post/5a8e3f00f265da4e747fc700
    - https://github.com/Faithree/multiple-vue-amazing
    - vue多页面打包优化,主要讲打包上线的优化 
    
- 基于vue-cli的多页面应用脚手架
    - https://github.com/JayZangwill/vue-multipage
    - https://github.com/breezefeng/vue-cli-multipage
- 从搭建vue-脚手架到掌握webpack配置 https://juejin.im/post/5a5cb391f265da3e317e2579
- (NICE) https://github.com/Plortinus/vue-multiple-pages
    - https://github.com/wlx200510/vue-multiple-pages-cli
- https://github.com/Mrminfive/vue-multiple-page
- Vue或React多页应用脚手架 webpack替换为3.X  https://github.com/MeCKodo/vue-multipage
    - https://juejin.im/post/582d74ec128fe10069565416
- vue-cli + es6 多页面项目开发及部署 https://juejin.im/post/5ab1d9c0f265da239c7b3c0b
- 基于vue-cli重构多页面脚手架 https://juejin.im/post/5a6559e55188257330610ac5
    - https://github.com/xueshuai/vue-multipage 
- Webapck+Vue多页面商城模板 https://juejin.im/post/5a2257a2f265da432a7b6532
    - https://github.com/czero1995/webpack-store
    
# 基于React的多页面解决方案

- create-react-app修改为多页面支持 https://juejin.im/post/5afcd2bd51882542c832f155
 
# 其他

- vue单页面，多路由，前进刷新，后退不刷新 https://segmentfault.com/a/1190000012083511    
    - https://github.com/bingyang519/vueGoBack
- 参考公共部分提取 https://github.com/czero1995/webpack-common  
    - https://juejin.im/post/5a35f6845188253865094365   