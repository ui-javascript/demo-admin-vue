# README

- 下划线开头的项目都没运行试过

- 命名规定

```
构建工具v 
+ js-framework 
+ UI/技术特点 
+ author 
+ 应用场景(h5/pc/IE?) 
+ mpa/spa
```

- get技能

    - github搜'boilerplate' 'xx spa|mpa|templates' 
    - DEMO https://github.com/search?p=2&q=boilerplate&type=Repositories

- 删除安装包

```shell
# 用rimraf删除依赖
npm i -g rimraf
rimraf node_modules

npm i -g npm@latest
 
# 安装可能需要proxy，不然各种诡异 
"scripts": {
    "install": "npm install",
    "install:taobao": "npm install --registry=https://registry.npm.taobao.org",
    "install:cnpm": "cnpm install",
    "install:yarn": "yarn install",
    "remove": "rimraf node_modules",
    "preview": "serve -s dist -p 9567",
},
``` 

- ESLint习惯
     
```json
// 1.关掉idea eslint

// 2.注释掉以下配置
// "comma-dangle": [2, "never"], -> 对象字面量项尾允许有逗号
// "no-multiple-empty-lines": [2, { "max": 1 }], -> 允许有空行    
// "semi": [2, "always"],    -> 分号爱加不加
// 'no-trailing-spaces': 2, -> 行尾允许有空格

// 3.或者修改
"comma-dangle": [0, {
  "arrays": "never",
  "objects": "ignore",
  "imports": "never",
  "exports": "never",
  "functions": "ignore"
}],
```   
    
# gulp构建

->> natural-cli-gulp

# IE8兼容方案

- https://github.com/luo0412/note-web/blob/master/%5B4%5Djavascript-ui/ch4-mvvm-cli/scaffold/03-%E8%81%9A%E7%84%A6IE8%E7%9A%84%E8%84%9A%E6%89%8B%E6%9E%B6(MVVM).md
- https://github.com/luo0412/note-web/blob/master/%5B4%5Djavascript-ui/ch1-web3-html5/ie-mvvm


# 管理后台模板

- vue-admin-template
- d2-admin
- https://github.com/luo0412/note-web/tree/master/%5B4%5Djavascript-ui/ch4-ui-components/admin

# 多页面

- https://github.com/luo0412/note-web/tree/master/%5B4%5Djavascript-ui/ch3-mvvm-cli/cli

->> natural-cli-mpa

# 小程序 h5页面 

->> natural-mobile

# 常见问题

- ERROR in Cannot find module 'node-sass'

# TODO 

...
