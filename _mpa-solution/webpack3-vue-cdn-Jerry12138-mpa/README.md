<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [高性能灵活的多页面Vue脚手架](#高性能灵活的多页面vue脚手架)
  - [特点/优点](#特点优点)
  - [使用](#使用)
  - [解析](#解析)
    - [config/app.config.js](#configappconfigjs)
    - [config/cdnConf](#configcdnconf)
    - [src/](#src)
    - [mock](#mock)
  - [备注](#备注)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 高性能灵活的多页面Vue脚手架

## 特点/优点

1. 可以创建多个单独项目，每个单独项目可多页面可单页（`/src/project` 下是不同项目，`/src/project/...` 下是该项目不同页面）
2. 配置CDN链接，公共资源使用CDN
3. 打包完成后非CDN资源可上传至七牛云存储空间或阿里云OSS，部署时只需要html文件即可
4. 充分的利用了缓存，性能高，可适用于经常需要做活动的 `H5` 页面

## 使用

1. 在 `src/project` 创建新项目，例： `hello`
2. 在 `config` 中的 `app.config.js` 配置项目或在命令行中直接指定参数
3. 在 `config/cdnConf` 创建与项目名相同的js文件，例： `hello.js`，配置cdn，配置格式见  [config/cdnConf](#configcdnconf)，如果不配置则不适用外部cdn
4. 开发 `yarn dev` 或 `npm run dev`，后皆可接项目名称 ，例：`yarn dev hello` 则开发 `hello` 项目
5. 打包 `yarn build` 或 `npm run build`，后皆可接项目名称 ，例：`yarn build hello` 则打包 `hello` 项目

## 解析

### config/app.config.js 

```js
  /**
   * 配置需要开发或打包的项目，项目名为 src/project 的文件夹名
   * 如果命令参数中指定了项目则根据命令参数，否则是这里的配置，如果都不存在则按 src/project 下的第一个目录为准
   * **/
const currentProject = 'test'
/**
   * 配置使用阿里云OSS还是七牛云
   * 阿里云OSS或七牛云的具体配置在下面的config中配置
   * **/
const use = 'ali' // ali 或 qiniu

// 是否需要上传至cdn
const isUpload = false

const config = {
  currentProject: `project/${realProject}`,
  use,
  // 七牛相关配置
  qiNiuCdn: {
    host: '',
    bucket: '',
    ak: '',
    sk: '',
    zone: '',
    prefix: ''  // 路径前可自定义prefix
  },
  // 阿里OSS相关配置
  aLiOss: {
    host: '',
    accessKeyId: '',
    accessKeySecret: '',
    bucket: '',
    region: '',
    prefix: '' // 路径前可自定义prefix
  },
  cdnLink: selfCdn[realProject],
  externalsConf: externalsConf
}

```


### config/cdnConf

配置cdn链接，文件名与项目名即 src/project 的文件夹名相同

格式：

```js
module.exports = {
  css: {
    normalize: 'https://cdn.bootcss.com/normalize/8.0.0/normalize.min.css'
  },
  js: {
    Vue: {
      packageName: 'vue',
      link: 'https://cdn.bootcss.com/vue/2.3.4/vue.min.js'
    }
  },
  VueRouter: {
    packageName: 'vue-router',
    link: 'https://cdn.bootcss.com/vue-router/2.3.1/vue-router.min.js'
  }
}
```

这里有几个点需要注意：

1. css是直接引入，不像js那样会暴露全局变量，所以直接以字符串形式传递进去
2. js中，引入cdn会暴露一个全局变量，例如引入 `https://cdn.bootcss.com/vue/2.3.4/vue.min.js` 就暴露了一个 `Vue` 变量，所以对象的 key 值就为 `Vue` ，packageName为这个变量的包名，就是在 `yarn add xxx` 或 `npm i xxx` 的这个 `xxx`，这两个千万不能错，不然引入了cdn后会找不到变量

使用的时候，在项目中

```js
import Vue from 'vue' // 这里的 Vue 就是 cdn 暴露出来的变量，vue就是包名
import VueRouter from 'vue-router' // 同上，其他类库也相似
```

### src/

```
├─common                       所有项目的公共文件
│  ├─images
│  ├─js
│  └─styles
├─components                   所有项目的公共组件
└─project                        项目
    ├─boost                    项目1（多页 example）
    │  ├─helpFriends             页面1
    │  ├─index                   页面2 
    │  └─inviteFriends           页面3
    └─test                     项目2 （单页 spa example）
        └─index                  页面1
            ├─assets
            ├─components
            └─router
```

### mock

开发环境基于 `express` 搭建，可模拟后端数据或接口，可使用 `mock.js`，例子中没有使用，后期我再加上去试试

## 备注

有需要的小伙伴如果有问题可以提 `issue` 哦，我会及时解决的