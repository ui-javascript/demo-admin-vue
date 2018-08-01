# README

- 这个多页面方案是以一级目录下JS算入口的，旁边另一个mpa小项目是以pug|html算入口的
- hash后缀形式处理缓存,不是通过修改文件名
- 移除了原作者说的二级目录支持，看着烦
- 配了postcss-px2rem插件 vue视图文件里的px会被转化成rem 谨慎,小心被坑!!!

# 遇到的问题

- axios解决OPTIONS问题，导致后台无法接收到数据 
    - https://blog.csdn.net/revival_liang/article/details/79016895
    - 两次请求 后台设置
    
# TODO 

- 开发时的路径矫正

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