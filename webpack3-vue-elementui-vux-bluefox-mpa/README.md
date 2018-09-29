# README

- 攒Vue组件
- 多页面是以一级目录下的*.js算入口的
- 另一个项目以pug|html算入口
- 缓存： ?hash后缀, 不是文件名里加hash
- vux原作者的项目在 _vux 下
- 移除了原作者说的二级目录支持，看着烦
- 配了postcss-px2rem插件 仅vue视图文件里的px会被转化成rem 谨慎,小心被坑!!!

# 遇到的问题

- axios解决OPTIONS问题，导致后台无法接收到数据 
    - https://blog.csdn.net/revival_liang/article/details/79016895
    - 两次请求 后台设置
    
# TODO 

- 提取出来的公共css的autoprefix问题 以及 mixins问题
- 开发时的路径矫正 /_topping 直接去掉 

# 模板文件

```vue
<template>
    <div>

    </div>
</template>

<script>

    import Lib from 'assets/js/Lib';


    export default {
        data() {
            return {}
        },
        components: {},
        props: {
            headfont: {
                type: String,
                default: '导航'
            }
        },
        //实例初始化最之前，无法获取到data里的数据
        beforeCreate() {

        },
        //在挂载开始之前被调用
        beforeMount() {

        },
        //已成功挂载，相当ready()
        mounted() {


        },
        //相关操作事件
        methods: {}
    }
</script>

<style lang="less">

</style>
```