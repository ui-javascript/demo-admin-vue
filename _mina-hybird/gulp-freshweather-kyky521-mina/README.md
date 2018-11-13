# README

- 项目

```
1、安装
npm i

// 依次安装
cd server/cloud-functions/he-weather
npm i

修改如下信息
client/lib/api.js 中
wx.cloud.init({
  env: '填写自己的开发者账号中的环境id'
})
环境id是点击云开发按钮以后生成的

2. 修改配置
修改腾讯地图的开发者账号：
client/lib/api.js 中的 QQ_MAP_KEY，
登录腾讯地图开发者控制台获取 https://lbs.qq.com/console/user_info.html

修改和风天气 API 的开发者账号 
server/inline/utils 中的 KEY 和 USER_ID，
登录和风天气控制台获取 https://console.heweather.com/

小程序授权信息 
server/inline/utils 中的 WECHAT_APPID 和 WECHAT_APP_SECRET，

3. 添加插件
小程序后台 添加极点日历 calendar

4. 运行 

可能需要管理员身份
npm run dev
npm run cloud
npm run server
```

