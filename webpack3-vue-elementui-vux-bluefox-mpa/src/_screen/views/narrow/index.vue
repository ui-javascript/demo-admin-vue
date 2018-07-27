<template>
    <div class="NarrowIndex">
        <common-header></common-header>

        <router-view></router-view>
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
    .NarrowIndex {

    }
</style>