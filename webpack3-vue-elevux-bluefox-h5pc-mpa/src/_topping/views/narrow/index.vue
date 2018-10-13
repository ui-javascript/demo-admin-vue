<template>
    <div>
        <header-exit></header-exit>

        <keep-alive>
            <router-view :key="$route.fullPath" v-if="isRouterAlive"></router-view>
        </keep-alive>

    </div>
</template>

<script>
    import headerExit from '../snippets/header-exit'

    export default {
        components: {
            headerExit
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
        }
    }
</script>

<style lang="less">

</style>