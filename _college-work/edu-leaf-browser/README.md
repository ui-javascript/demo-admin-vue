# 教务辅助管理系统

* 说明

```js
// 期末大作业 教务辅助管理系统
前后端分离 restful
前台node.js(React + ant design + dva.js)
后台java(spring boot + mybatis)

// IDE
idea + vscode
```

* 技术栈
    * 主要参考项目 https://github.com/zuiidea/antd-admin
    * 参考项目的演示地址 http://47.92.30.98:8000
    * dashboard设计稿：<https://dribbble.com/shots/3108122-Dashboard-Admin>
    * React
    * [ant-design](https://github.com/ant-design/ant-design) 提供后台管理系统常见使用场景
    * [dva](https://github.com/dvajs/dva) 动态加载 Model 和路由，按需加载
    * [Mock](https://github.com/nuysoft/Mock) 实现脱离后端独立开发
    * [roadhog](https://github.com/sorrycc/roadhog) 本地调试和构建
    * 浅度响应式设计

* 可能有用的参考项目
    * 书签收藏(spring boot) https://github.com/cloudfavorites/favorites-web

* JSON数据交互
    * https://github.com/dvajs/dva-example-user-dashboard
    * https://github.com/dvajs/dva-hackernews
    * API DEMO
        * https://github.com/HackerNews/API
        * https://jsonplaceholder.typicode.com/
    * axios

* RBAC的实现
    * http://www.cnblogs.com/Leo_wl/p/5394083.html
    * http://www.codesec.net/view/180093.html
    * https://github.com/CherryProjects/rbac
    * (推荐,参考原项目,更加的完善)权限管理 https://github.com/pmg1989/dva-admin

* 云盘实现

* EXCEL导出
    * https://github.com/rikkertkoppes/json2xls
    * https://github.com/huanz/tableExport
    * http://blog.csdn.net/z69183787/article/details/51354604
    * https://github.com/SheetJS/js-xlsx
    * (先用这个)https://www.npmjs.com/package/react-csv
    * https://www.npmjs.com/package/react-csv-downloader

* 扩展功能
    * 在线创建pdf https://github.com/diegomura/react-pdf
    * 常用网址导航 + 第三方常用账号绑定

* 作为小白,遇到的问题

```js
// classnames
如果要根据状态值动态应用或去除
或使用多个class时就麻烦了
可以使用classnames模块来解决

// antd加载问题
npm install babel-plugin-import --save-dev
并且.roadhogrc.js配置

// 注意下index.html的位置,在不在public里

// components下面加package.json使之自动加载，但我删掉了

// You may need an appropriate loader to handle this file type.
这个问题怎么解决?
暴力,npm重新安装

// 删除远程分支
git push origin :luo-json-data

// Node中没搞明白require和import，你会被坑的很惨
http://www.tuicool.com/articles/uuUVBv2
```


* 目录结构

```bash
├── /dist/           # 项目输出目录
├── /src/            # 项目源码目录
│ ├── /components/   # UI组件及UI相关方法
│ │ ├── skin.less    # 全局样式
│ │ └── vars.less    # 全局样式变量
│ ├── /routes/       # 路由组件
│ │ └── app.js       # 路由入口
│ ├── /models/       # 数据模型
│ ├── /services/     # 数据接口
│ ├── /themes/       # 项目样式
│ ├── /mock/         # 数据mock
│ ├── /utils/        # 工具函数
│ │ ├── config.js    # 项目常规配置
│ │ ├── menu.js      # 菜单及面包屑配置
│ │ ├── config.js    # 项目常规配置
│ │ ├── request.js   # 异步请求函数
│ │ └── theme.js     # 项目需要在js中使用到样式变量
│ ├── route.js       # 路由配置
│ ├── index.js       # 入口文件
│ └── index.html
├── package.json     # 项目信息
├── .eslintrc        # Eslint配置
└── .roadhogrc.js    # roadhog配置
```

* 使用命令

```js
git clone https://github.com/zuiidea/antd-admin.git
npm i 或者 yarn install

npm run dev // 打开 http://localhost:8000
npm run build

npm run lint // 代码检测

/opt/node-v6.9.5-linux-x64/bin/serve -s dist
```
