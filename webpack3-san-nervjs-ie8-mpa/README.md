# 基于Webpack的多页面解决方案

- san | nerv.js作为公共vendors提取
- UI采用luluUI(@Author:张鑫旭) 与 LayUI(@Author:贤心)
- san + san MUI
- nerv暂时配有合适UI
- jquery -> cdn + external配置
- 偶尔一些老页面辅助jquery ui与之前项目的JS Libs
- 现在改成入口文件(index.js)可以不用写，其实我是不太想写视图文件啊...这个可以再努力一下
- 大段css的用 /**/ 不要用 //, 会报错的暂时没处理    
- 使用ts-loader3.X.X, 之前的ts-loader4.x.x是指支持webpack4的
- typescript暂时只是libs或许工具类用用
- components -> views -> pages (颗粒度弄细一点，复用度稍微高一点)
- 简单生成一下入口导航页面
- eslint不做,项目质量参差不齐...
    
```html
<!-- lulu UI cdn-->
<link rel="stylesheet" href="//qidian.gtimg.com/lulu/theme/peak/css/common/ui.css">
<script src="//qidian.gtimg.com/lulu/theme/peak/js/plugin/sea.js"></script>
```

- TODO

```js 
// @TODO less分模块引入以及模块化
// @TODO 内联样式与资源

// @TODO webpack性能优化
// @TODO 提取公共模块测试，不要重复引入 FIX
// @TODO 整理配置文件
// @TODO 打包时的报错机制修复
// @TODO 兼容IE8的一些配置与处理(还有一些配置没做和测试)

// Hopeful:
// @TODO -> webpack4
// 测试功能修复

// Deprecated:
// @TODO 没有找到的index.html时直接使用默认的模板
// @TODO 处理多层目录结构与一个文件夹下多个模板
// @TODO better-npm-run
```
    