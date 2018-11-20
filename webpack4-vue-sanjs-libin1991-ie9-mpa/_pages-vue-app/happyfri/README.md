# README

- 修改自https://github.com/bailicangdu/vue2-happyfri
- 注意配置

```js
// 原来的脚手架版本过旧
// 欲哭无泪
// webpack的版本有时候也是生和死的距离
new ExtractTextPlugin({
    filename: 'css/[name].[hash:7].css',
    // 这里要加，否则可能出错 
    allChunks: true
})
```