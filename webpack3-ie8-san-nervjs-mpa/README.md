# 基于Webpack的多页面解决方案

- san.js是作为公共vendors提取
- UI采用lulu UI 
- jquery仅作为辅助 cdn + external
- 偶尔一些老页面辅助jquery ui与之前项目的JS Libs
- 现在改成入口文件(index.js)可以不用写，其实我是不太想写视图文件啊...这个可以再努力一下

```html
<link rel="stylesheet" href="//qidian.gtimg.com/lulu/theme/peak/css/common/ui.css">
```

- TODO

```js
// @TODO 图片引入机制
// @TODO 打包时的报错机制修复
// @TODO 内联样式与资源
// @TODO 整理配置文件优化升级
// @TODO less分模块引入以及模块化
// @TODO 支持typescript
// @TODO 兼容IE8的一些配置与处理
// @TODO webpack性能优化
// @TODO 提取公共模块，不要重复引入 FIX


// @TODO 没有找到的index.html时直接使用默认的模板(STOPING)
// @TODO 处理多层目录结构与一个文件夹下多个模板(STOPING)


// @TODO 顺道支持SPA(主要是SAN + router, 可以不兼容IE)
// @TODO -> webpack4
// @TODO better-npm-run(@deprecated)
```

- 注意

    - 大段css的用 /**/ 不要用 //, 会报错的暂时没处理