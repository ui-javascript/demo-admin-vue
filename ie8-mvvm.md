# IE8解决方案

- san
- avalon
- knockout
- react/regular

# 支持IE8

- 包含了一些对IE8的处理 https://github.com/zhaotoday/webpack-multi-page
- 让Webpack+Babel支持IE8 https://www.maizhiying.me/posts/2017/03/01/webpack-babel-ie8-support.html

```html
<!--[if lt IE 9]>
    <script src="https://cdn.bootcss.com/es5-shim/4.5.10/es5-shim.min.js"></script>
    <script src="https://cdn.bootcss.com/es5-shim/4.5.10/es5-sham.min.js"></script>
    <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
    <script src="https://cdn.bootcss.com/nwmatcher/1.4.2/nwmatcher-base.js"></script>
<![endif]-->
```