# README

- gulp 自动化构建组件集合 https://blog.csdn.net/liuyuqin1991/article/details/78606125
- 最后还是没打算配eslint,这是给比较老的java用的前端任务
- 考虑到IE8 , 一般jquery + layui(layui已经快不支持IE8了)
- 视图目前限制是纯html (不支持jsp ftl...)

# gulp

- 前端团队 Gulp & Webpack 工作流 迁移记(NICE) https://zhuanlan.zhihu.com/p/27355765?group_id=857652944793915392
- WeFlow https://github.com/Tencent/WeFlow
- QMUI_Web https://github.com/Tencent/QMUI_Web
- https://github.com/legoflow/legoflow

# 关于部署到linux(centos)

- 阿里云配置安全组
- 打开防火墙规则

```shell 
# 防火墙开放
iptables -I INPUT 4 -p tcp -m state --state NEW -m tcp --dport 3306 -j ACCEPT
service iptables save
iptables -nvL // 查看规则
```

- gulp 生成一下软链接 也可能需要全局安装一下browserSync

```shell
unzip dist.zip -d ./dist
npm install -g browser-sync
npm install -g gulp
npm install -D gulp


ln -s /root/node-v6.9.5-linux-x64/bin/gulp /usr/local/bin/gulp
gulp -v
```

- 运行

```shell
# 端口配置了 8033
nohup gulp distSync &
open http://47.100.99.127:8033/ch4-corner/index.html (headless无法自动打开)
```