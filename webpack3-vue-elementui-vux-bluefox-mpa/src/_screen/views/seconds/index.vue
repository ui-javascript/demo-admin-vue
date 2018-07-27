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
        },
        mounted() {
            // login('17816869505', '17816869505').then(res => {
            //     console.log(res)
            //     setToken(res.data)
            //     this.$router.push({
            //         name: 'welcome_index'
            //     })
            // }).catch()

        }
    }
</script>

<style lang="less">
    .secondsIndex {
        width: 100%;

        // 注意 符号
        > .container {
            width: @screen-min-width;
        }
    }
</style>