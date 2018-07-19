<template>
    <div>

        <header-exit></header-exit>

        一比高下

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