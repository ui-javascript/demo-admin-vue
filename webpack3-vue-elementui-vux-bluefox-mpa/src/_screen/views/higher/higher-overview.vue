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
            <el-button class="fr" type="primary" @click="back()">答题详情</el-button>
        </div>

    </div>
</template>

<script>
    import {getPassUser} from "../../service/screen"
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
                allList: [1, 2, 3, 34, 35, 36, 37, 38, 49, 100],
                rightList: [1, 2, 3, 37, 38],
                problemId: 0
            }
        },
        methods: {
            back() {
                this.$router.go(-1)
            }
        },
        mounted() {

            this.problemId = this.$route.query.id || 1

            getPassUser({
                problemID: this.problemId
            }).then(res => {
                // console.log(res)

                this.allList = res.allNumberArr
                this.rightList = res.numberArr
                this.right = res.passUserCount
                this.title = res.problemName
            })
        }
    }
</script>

<style lang="less">
    .HigherOverview {

    }
</style>