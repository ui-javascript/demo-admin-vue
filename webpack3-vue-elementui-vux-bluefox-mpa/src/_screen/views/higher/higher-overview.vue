<template>
    <div class="HigherOverview">

        <card-locale
            :badge="badge"
            :title="title"
            :right="right"
            :list="list"
        >
        </card-locale>

    </div>
</template>

<script>
    import CardLocale from '../common/snippets/card-locale'

    export default {
        name: "higher-overview",
        components: {
            CardLocale
        },
        data() {
            return {
                badge: '一比高下',
                title: '题目会巴拉巴黎',
                right: 89,
                list: [1,2,3,34,5,6,7,8,99,0]
            }
        },
        mounted() {

        }
    }
</script>

<style lang="less">
    .HigherOverview {

    }
</style>