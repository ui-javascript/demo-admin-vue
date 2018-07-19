<template>
    <div>

        <header-exit></header-exit>

        首页 - 规则 {{ content }}

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
                content: ''
            }
        },
        methods: {
            ready() {
                this.content = this.$route.params.type
                console.log(this.$route)
            },
        },
        mounted() {
            this.ready()
        }
    }
</script>

<style lang="less">

</style>