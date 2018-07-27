<template>
    <div class="HigherIndex">
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
    .HigherIndex {
        width: 100%;

        > .container {
            margin-top: 20px;
            width: @screen-min-width;
        }
    }
</style>