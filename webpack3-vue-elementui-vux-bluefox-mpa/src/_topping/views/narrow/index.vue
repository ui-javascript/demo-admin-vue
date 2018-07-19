<template>
    <div>
        <header-exit></header-exit>

        狭路相逢

        <router-view keep-alive></router-view>

    </div>
</template>

<script>
    import headerExit from '../snippets/headerExit'
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