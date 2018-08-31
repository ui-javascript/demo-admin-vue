# gulp配置

- static文件夹下的文件copy指定文件夹

- 参考
    - gulp使用教程 https://github.com/Platform-CUF/use-gulp
    - https://github.com/mjzhang1993/gulp-template
    - generator-gulper https://github.com/leaky/generator-gulper

- 简单运行

```
1. 项目文件夹位置与build文件夹同级 
2. 项目文件夹前面加 下划线_ : 排序在前面好被看到，这样可以管理多个工程
3. 引用cdn资源如下

<!--采用相对路径-->
<script src="js/plugins/jquery-1.7.min.js"></script>
<script src="js/plugins/jquery.cookie.js"></script>
<script src="js/plugins/jquery.slimscroll.js"></script>
@@include("../static/tpl/cdn/jquery.useful.js.inc")
 
4. 如果有需要编译的文件 例如es6.js less放到项目的static文件夹下面
eg._project/static/js/es6.js
less要编译的文件需要下划线开头 : 文件可能引用文件
引用 <script src="/static/js/es6.js"></script>
所以static文件夹被征用了, 原工程有这个名字的会被误伤！！！

5. gulp命令
{
    "dev:designStudio": "set SYS_NAME=designStudio && gulp 01-build-dev",
    "build:designStudio": "set SYS_NAME=designStudio && gulp 03-build-dist",
    "sprite:designStudio": "set SYS_NAME=designStudio  && gulp 05-make-sprite",
}
```


- 未完成

    - gulp-changed 仅发生变化的 提高性能
    - 参考tmt-workflow优化一波
    - 前端权限与简单的路由功能
    - 模块化与异步
    - 样式的MD5后缀
    - less报错终止   
    - 打包压缩时没有正确剔除文件 

- BUG

    - 慕课网学习存在图片加载问题    