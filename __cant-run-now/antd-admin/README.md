# Antd Admin

* 说明
    * 参考项目 https://github.com/zuiidea/antd-admin
    * 演示地址 http://47.92.30.98:8000

* 技术栈
    * react
    * [ant-design](https://github.com/ant-design/ant-design) 提供后台管理系统常见使用场景
    * [dva](https://github.com/dvajs/dva) 动态加载 Model 和路由，按需加载
    * [Mock](https://github.com/nuysoft/Mock) 实现脱离后端独立开发
    * [roadhog](https://github.com/sorrycc/roadhog) 本地调试和构建
    * 浅度响应式设计

* 其他

```js
// classnames
如果要根据状态值动态应用或去除
或使用多个class时就麻烦了
可以使用classnames模块来解决

// antd加载问题
npm install babel-plugin-import --save-dev
并且.roadhogrc.js配置

// 注意下index.html的位置
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
```

* 参考
    * 用户列表：<https://github.com/dvajs/dva/tree/master/examples/user-dashboard>
    * dashboard设计稿：<https://dribbble.com/shots/3108122-Dashboard-Admin>
