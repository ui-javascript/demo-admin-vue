<template>
    <div class="NarrowIndex">
        <common-header></common-header>

        <div class="container center">
            <keep-alive>
                <router-view :key="$route.fullPath" v-if="isRouterAlive"></router-view>
            </keep-alive>
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
        data() {
            return {
                isRouterAlive: true
            }
        },
        provide() {
            return {
                reload: this.reload()
            }
        },
        methods: {
            reload() {
                this.isRouterAlive = false
                this.$nextTick(() => {
                    this.isRouterAlive = true
                })
            }
        },
    }
</script>

<style lang="less">
    .NarrowIndex {
        width: 100%;

        // 注意 符号
        > .container {
            width: @screen-min-width;
        }
    }
</style>