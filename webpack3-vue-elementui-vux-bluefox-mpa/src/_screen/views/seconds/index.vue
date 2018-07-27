<template>
    <div class="secondsIndex">
        <common-header></common-header>

        <div class="container center">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import CommonHeader from '../common/header'

    export default {
        name: "index",
        components: {
            CommonHeader
        }
    }
</script>

<style lang="less">
    .secondsIndex {
        width: 100%;

        // 注意 这种一代符号必须加
        > .container {
            width: @screen-min-width;
        }
    }
</style>