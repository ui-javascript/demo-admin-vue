# README

- 这个多页面方案是以JS算入口文件的，我整理的另一个小项目是以pug|html当入口文件的
- hash后缀形式处理缓存
- 移除了原作者说的二级目录支持，看着烦
- 配了postcss-px2rem插件 vue视图文件里的px会被转化成rem 谨慎!!!

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