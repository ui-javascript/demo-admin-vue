<template>
    <div>

        <router-link to="/404">404</router-link>
        <router-link to="/login" class="ml-5">登录</router-link>
        <router-link to="/seconds">争分夺秒</router-link>
        <router-link to="/higher">一比高下</router-link>
        <router-link to="/narrow">狭路相逢</router-link>

        <keep-alive>
            <router-view></router-view>
        </keep-alive>

    </div>
</template>

<script>

</script>

<style lang="less">

</style>