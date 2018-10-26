# README

- 分工程的路由存在问题
- webpack4的零配置其实是扯淡，复杂的项目都应该配置...
- 关于san.js

    - 现在的需求是要么兼容IE8给xp用，要么所有IE都不考虑
    - 仅打包代码可能兼容IE8，开发时要热更新的，别指望了
    - san.js目前版本看来只能cdn引入，webpack打包出来IE8会显示源码报错
    - import和export不能用了 用require
    - 一旦用到san-mui之后 就别指望兼容了 @deprecated
    - 最后 为什么我年纪轻轻要兼容IE8 😭

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>San 演示</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">

    <!--[if lt IE 8]>
    <script>
        if (typeof document.querySelector === 'undefined') {
            document.querySelector = function (target) {
                return document.getElementsByTagName(target)[0] || null;
            }
        }
    </script>
    <![endif]-->

    <!--[if lt IE 9]>
    <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <script src="https://cdn.bootcss.com/es5-shim/4.5.10/es5-shim.min.js"></script>
    <script src="https://cdn.bootcss.com/es5-shim/4.5.10/es5-sham.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
    <script src="https://cdn.bootcss.com/nwmatcher/1.4.2/nwmatcher-base.js"></script>
    <![endif]-->

    <script src="https://unpkg.com/san@latest/dist/san.dev.js"></script>
    <!--<script src="https://unpkg.com/san@latest"></script>-->
</head>
<body>

<div id="app"></div>

</body>
</html>

入口文件兼容加上

<script>
// require("babel-polyfill")
require("es5-polyfill")

//IE8 ^4.5.10
// import 'es5-shim';
// 司徒大佬的库，关键时刻还是...
// import 'object-create-ie8';
import 'object-defineproperty-ie8';
import 'console-polyfill';

//比IE8的JSON好用
// import 'json3';
//性能超高的Promise实现
// import 'bluebird';
// import 'fetch-polyfill2';
</script>
```

# 备份

```
// .babelrc
{
  "presets": [
    ["env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }],
    "stage-2"
  ],
  "plugins": ["transform-runtime"]
}

// ie8
{
  "presets": [
    ["env", {
      "modules": false,
      "targets": {
        "browsers": ["last 2 versions", "ie >= 7"]
      }
    }]
  ],
  "plugins": [
    "transform-runtime",
    "transform-es2015-modules-simple-commonjs",
    "babel-plugin-transform-es3-member-expression-literals",
    "babel-plugin-transform-es3-property-literals"
  ]
}
```

# TODO

- static路径
- inline html

# 问题

- 全局安装一波

```shell
cnpm install -g node-gyp
```

- neteasecloud 

    - router require().default https://www.cnblogs.com/legendjslc/p/9041804.html

```shell
# muse-ui 为旧版本 
cnpm install -S muse-ui@2.1.0
```
