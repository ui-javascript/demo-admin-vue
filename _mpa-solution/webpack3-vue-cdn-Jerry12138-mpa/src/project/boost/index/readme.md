<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [琥珀亲子-助力免单项目](#%E7%90%A5%E7%8F%80%E4%BA%B2%E5%AD%90-%E5%8A%A9%E5%8A%9B%E5%85%8D%E5%8D%95%E9%A1%B9%E7%9B%AE)
  - [确立需求](#%E7%A1%AE%E7%AB%8B%E9%9C%80%E6%B1%82)
  - [时间计划](#%E6%97%B6%E9%97%B4%E8%AE%A1%E5%88%92)
  - [需求分析](#%E9%9C%80%E6%B1%82%E5%88%86%E6%9E%90)
  - [页面分析](#%E9%A1%B5%E9%9D%A2%E5%88%86%E6%9E%90)
  - [接口设计](#%E6%8E%A5%E5%8F%A3%E8%AE%BE%E8%AE%A1)
  - [确立基础架构](#%E7%A1%AE%E7%AB%8B%E5%9F%BA%E7%A1%80%E6%9E%B6%E6%9E%84)
  - [组件使用](#%E7%BB%84%E4%BB%B6%E4%BD%BF%E7%94%A8)
    - [asistMember](#asistmember)
    - [countDown](#countdown)
    - [customBtn](#custombtn)
    - [eventDescription](#eventdescription)
  - [页面逻辑重点](#%E9%A1%B5%E9%9D%A2%E9%80%BB%E8%BE%91%E9%87%8D%E7%82%B9)
  - [总结](#%E6%80%BB%E7%BB%93)
    - [待优化](#%E5%BE%85%E4%BC%98%E5%8C%96)
  - [参考](#%E5%8F%82%E8%80%83)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 琥珀亲子-助力免单项目

## 确立需求
这个项目的主要需求有两个要求：

1. 多页面
2. 高并发

技术栈限定为vue，其他诸如代码复用规范之类的要求，不属于需求范畴内。

不幸的是，在移动端、多页面、高并发都没有实际的项目经验，倒是之前小程序项目有一个秒杀功能有一定的参考价值，没有实际项目经验并不是借口，攻坚克难才是正解。

## 时间计划

抛开其他的要求，单看页面还是很简单的，大概就是几个简单的H5页面。时间为一周，也比较充沛。
- 逻辑分析及架构搭建 1.5天
- 页面切图 1.5天
- 优化测试 1天
- 解决bug编写文档 1天 

## 需求分析

1. 多页面
- [github开源项目](https://github.com/xwpongithub/vue-multipage-cli)

原因：
1. 结构清晰，与项目匹配
2. 多页面中每个单页面也可以做成单页spa，页面与页面间跳转通过href方式跳转

原理：动态读取 `\src\modules `目录下文件夹，在
 entry: buildEntries,
```js
const path = require('path');
const fs = require('fs');
const utils = require('./utils');

let buildEntries = {};

/*获取所有模块的文件夹名*/
const modules = fs.readdirSync(path.join(utils.resolve('src'),'modules'));

for (let moduleName of modules) {
  buildEntries[moduleName] = path.join(utils.resolve('src'),'modules',moduleName,'main.js');
}

module.exports = buildEntries;
```

设置多个入口，单页面Spa只有一个入口
```entry: buildEntries```

缺陷：有bug，修复并像该项目做着提了issue

![](https://user-gold-cdn.xitu.io/2018/9/29/16625d1d76ca1df1?w=862&h=772&f=png&s=339522)

2. 高并发
- [浅谈高并发](https://juejin.im/post/5bacd65a5188255c971fe5a2)


## 页面分析

![](https://user-gold-cdn.xitu.io/2018/9/29/16625aa326257495?w=914&h=775&f=png&s=399738)
我将整个项目分成三个页面：
1. index 首页
2. helpFriends 帮助朋友
3. inviteFriends 邀请朋友

关键在于几个状态值
![](https://user-gold-cdn.xitu.io/2018/9/29/16625991a7bd5860?w=950&h=579&f=png&s=60611) 
![](https://user-gold-cdn.xitu.io/2018/9/29/16625a04d8b844a0?w=852&h=477&f=png&s=38043)

## 接口设计

1. help 帮助他人
2. helpOtherInfo  进入helpFriends页面所需的数据
3. helpMeInfo  进入inviteFriends页面所需的数据

## 确立基础架构

```
├─build                webpack配置
│      build-entries.js
│      build.js
│      check-versions.js
│      dev-client.js
│      dev-server.js
│      upload.js        上传七牛云任务
│      utils.js
│      vue-loader.conf.js
│      webpack.base.conf.js
│      webpack.dev.conf.js
│      webpack.prod.conf.js
│      
├─config            webpack配置
│      app.config.js  上传数据
│      dev.env.js
│      index.js
│      prod.env.js
│      
├─dist                    打包后的文件
│      helpFriends.html
│      index.html
│      inviteFriends.html
│      
├─mock                    模拟数据
│      mockData.js
│      
├─node_modules
│            
├─src
│  ├─common          公共文件
│  │  ├─images      图片
│  │  │      
│  │  ├─js          js脚本
│  │  │      api.js
│  │  │      request.js
│  │  │      utils.js
│  │  │      
│  │  └─styles      样式
│  │          common.less
│  │          variables.less
│  │          
│  ├─components                公共组件
│  │      asistMember.vue        帮助成员的头像
│  │      countDown.vue          倒计时
│  │      customBtn.vue          自定义按钮
│  │      eventDescription.vue   活动说明
│  │      popup.vue              弹出层
│  │      
│  └─modules          页面
│      ├─helpFriends    
│      │  │  App.vue
│      │  │  data.js
│      │  │  helpFriends.html
│      │  │  main.js
│      │  │  
│      │  └─components
│      │          helpStatus.vue
│      ├─index
│      │  │  App.vue
│      │  │  index.html
│      │  │  main.js
│      │  │  
│      │  └─components
│      └─inviteFriends
│          │  App.vue
│          │  data.js
│          │  inviteFriends.html
│          │  main.js
│          │  
│          └─components
│                  inviteStatus.vue        
└─static
```

## 组件使用

### asistMember
三个参数
- avatarList  头像列表（Array）
- need        需要的人数（Number）
- status      状态 （String）
状态可选值
 1. hasPeopleAndEnd:有好友助力，但是未完成
 1. noPeopleAndEnd:没有好友助力并且结束
 1. noPeopleAndStart:没有好友助力等待好友助力
 1. success:成功了
 1. hasPeopleButNotSuccess:有朋友助力但是没有成功
 1. hasHelpHe:已助力
 1. notHelpHe:未助力

### countDown
- endTime 结束时间

### customBtn
- opts （Object）
- href （String）
- 还带有一个slot （如果是自定义图片按钮就以插槽形式展现）
opts举例

```js
{
  {
    height: 42,
    bgColor: 'linear-gradient(to top, #E6042C, #F3536F)',
    borderColor: '#fff',
    detail: [{
      text: '继续邀请好友帮忙助力',
      size: 18,
      color: '#fff'
    }]
  }
```
```js
{
    {
        height: 50,
        detail: [{
          text: '演出地点:成都',
          size: 12,
          color: '#EA274A',
          mt: 5
        }, {
          text: '购买现场票',
          size: 19,
          color: '#EA274A',
          mt: 4,
          bold: true
        }]
      }
```

### eventDescription
- rules （Object）
举例
```js
{
  detail: [
    '每位用户同一时间内只能开1个助力团，同一个商品每位用户只能通过助力团免费获得1次',
    '开团后需分享给微信好友，召唤好友参团',
    '只有新注册用户才可助力成功，每个用户只能助力1次',
    '助力商品有数量限制，抢先凑齐人数的团长先得。优先凑齐人数的团长会获得直播免费观看资格。',
    '助力团商品抢光/助力团结束/不是新用户/自我助力等都不算助力成功，我们会告知您失败原因，如商品数量已抢光，已开的助力团也无法助力成功。'
  ],
  weight: /免费获得1次|分享给微信好友|新注册用户|助力1次|直播免费观看/g
}
```

## 页面逻辑重点
inviteFriends和helpFriends中
1. 先执行init(),初始化数据
2. 判断状态的函数computedStatus，判断出正确的status传递给相应组件
3. 移动端适配采用阿里的flexible方案
4. 防止点击穿透采用faskclick库

## 总结
1. 开启http2（多路复用）性能增加很多。
2. 以前没怎么写过文档，写的有点乱，仍待学习。

### 待优化
1. 封装popup组件绑定到Vue原型链上
2. 注释量不足

## 参考

- [高并发访问服务器时前端页面优化方法](https://blog.csdn.net/yangzhen06061079/article/details/68485275)

- [多“维”优化——前端高并发策略的更深层思考](https://wetest.qq.com/lab/view/316.html)

- [高并发和大流量解决方案](http://www.10tiao.com/html/463/201712/2650840811/1.html)

- [vue多页面开发和打包的正确姿势](https://juejin.im/post/5a8e3f00f265da4e747fc700)

- [用vue构建多页面应用](https://segmentfault.com/a/1190000011265006)

- [npm和yarn的区别，我们该如何选择](https://zhuanlan.zhihu.com/p/27449990)

- [一起了解什么是高并发](https://segmentfault.com/a/1190000011045115)

- [CDN 与 缓存](https://www.jianshu.com/p/08b3cb895713)

- [使用Flexible实现手淘H5页面的终端适配](http://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html)

- [移动端前端适配方案对比](https://www.jianshu.com/p/e5ca5b78e03e)

- [如何在Vue项目中使用vw实现移动端适配](https://www.w3cplus.com/mobile/vw-layout-in-vue.html)

- [再聊移动端页面的适配](https://www.w3cplus.com/css/vw-for-layout.html)

- [<img>元素底部为何有空白](https://www.zhihu.com/question/21558138)

- [使用Vue制作切口盒子组件](https://www.w3cplus.com/vue/create-notched-boxes-component-with-vue.html)

- [七牛node文档](https://developer.qiniu.com/kodo/sdk/1289/nodejs)

- [移动端设计图,切图那点儿事](https://www.jianshu.com/p/3f4e63420e63)

- [Webpack工程化配置之原理篇](https://www.jianshu.com/p/d38258f1bd34)

- [webpack4打包vue前端多页面项目](https://github.com/comWang/frontend-project-build)

- [vue cli 2 多页](https://github.com/JaneSu/multiple-vue-page)