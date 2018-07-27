<template>
    <div class="HigherOverview">

        <card-locale
            :badge="badge"
            :title="title"
            :right="right"
            :allList="allList"
            :rightList="rightList">
        </card-locale>

        <div class="clearfix">
            <el-button class="fr" type="primary">答题详情</el-button>
        </div>

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
                allList: [1,2,3,34,35,36,37,38,49,100],
                rightList: [1,2,3,37,38]
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