<template>
    <div>
        <a href="/404">404</a>
        <a href="/login">登录</a>
        <a href="/narrow">狭路相逢</a>
        <a href="/"></a>
        <router-view keep-alive></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: 0
            }
        },
        methods: {

        }
    }
</script>

<style>

</style>
