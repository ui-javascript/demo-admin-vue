# lot-share-service

- 网址

```$xslt
API文档 http://47.100.99.127:8080
http://47.100.99.127:8080/api

业主原型：https://modao.cc/app/cb74b14986f9a11534c00aa47dcc0cf204112059
租客端： https://modao.cc/app/2Q8Onl5kq4HaPqMMaH6X0Z7FG52y20i 
```

- 学习

    - http://www.bysocket.com/?p=1627
    - https://my.oschina.net/fellowtraveler/blog/758825
    - http://www.jianshu.com/p/f2060a6d6e3b
    
```
// 运行
mvn spring-boot:run
```

- 约定

```$xslt
为了方便,都用驼峰
```

- 注意

  - 在SQL拼接式, if的逻辑异常可能导致SQL语句错误，尤其在写Mapper文件时

- 业务注意

```
长租最多租用一个月

租用期前一段时间仍然不支付全款，则自动取消订单，不退款
```

- 文件上传时注意创建 /opt/uploads chmod 777