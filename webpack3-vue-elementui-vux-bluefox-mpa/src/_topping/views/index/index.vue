<template>
    <div>

        <router-link to="/404">404</router-link>
        <router-link to="/login" class="ml-5">登录</router-link>
        <router-link to="/seconds">争分夺秒</router-link>
        <router-link to="/higher">一比高下</router-link>
        <router-link to="/narrow">狭路相逢</router-link>

        <router-view></router-view>

    </div>
</template>

<script>


    export default {

        data() {
            return {

            }
        },
        methods: {

        },
        mounted() {

        }
    }
</script>

<style lang="less">

</style>