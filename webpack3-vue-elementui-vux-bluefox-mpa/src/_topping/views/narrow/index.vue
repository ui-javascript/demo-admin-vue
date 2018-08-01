<template>
    <div>
        <header-exit></header-exit>

        <keep-alive>
            <router-view></router-view>
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

            }
        },
        methods: {

        }
    }
</script>

<style lang="less">

</style>