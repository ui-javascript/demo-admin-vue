# 基于Webpack的多页面解决方案

- san | nerv.js作为公共vendors提取
- UI采用luluUI(@Author:张鑫旭) 与 LayUI(@Author:贤心)
- jquery -> cdn + external配置
- 偶尔一些老页面辅助jquery ui与之前项目的JS Libs
- 现在改成入口文件(index.js)可以不用写，其实我是不太想写视图文件啊...这个可以再努力一下
- 大段css的用 /**/ 不要用 //, 会报错的暂时没处理    
- 使用ts-loader3.X.X, 之前的ts-loader4.x.x是指支持webpack4的
- typescript暂时只是libs或许工具类用用
    
```html
<!-- lulu UI cdn-->
<link rel="stylesheet" href="//qidian.gtimg.com/lulu/theme/peak/css/common/ui.css">
<script src="//qidian.gtimg.com/lulu/theme/peak/js/plugin/sea.js"></script>
```

- TODO

```js
// @TODO 入口文件生成(链接点击导航), 设为入口页面 
// @TODO less分模块引入以及模块化
// @TODO 兼容IE8的一些配置与处理
// @TODO webpack性能优化
// @TODO 提取公共模块，不要重复引入 FIX
// @TODO 输出目录可定制(可以的话静态页面路径校准，支持文件直接点开) 

// Later:
// @TODO 打包时的报错机制修复
// @TODO 内联样式与资源(暂缓)
// @TODO 整理配置文件优化升级
// @TODO 支持.san文件

// Deprecated:
// @TODO 没有找到的index.html时直接使用默认的模板
// @TODO 处理多层目录结构与一个文件夹下多个模板
// @TODO better-npm-run

// Hopeful:
// @TODO 顺道支持SPA(主要是SAN + router, 可以不兼容IE) // 这样
// @TODO -> webpack4
```
    