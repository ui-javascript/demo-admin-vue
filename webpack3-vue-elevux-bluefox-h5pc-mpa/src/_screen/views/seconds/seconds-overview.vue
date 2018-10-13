<template>
    <div class="secondsOverview">
        <div class="box">
            <card-overview
                :badge="badge"
                :list="problemList"
                @view="view"
            ></card-overview>

            <div class="clearfix mt-10">
                <!--<el-button class="fr" type="primary">下一组</el-button>-->
            </div>
        </div>
    </div>
</template>

<script>

    import CardOverview from '../common/snippets/card-overview'
    import {mapGetters} from 'vuex'
    import {getOverview} from "../../service/screen"


    export default {
        name: "seconds-overview",
        components: {
            CardOverview
        },
        data() {
            return {
                badge: '争分夺秒',
                subType: 1
            }
        },
        computed: {
            ...mapGetters({
                progress: 'progress',
                problemList: 'problemList'
            })
        },
        methods: {
            view(data) {
                this.$router.push({
                    path: '/seconds/details',
                    query: {
                        num: data.index+1
                    }
                })
            }
        },
        mounted() {
            this.subType = parseInt(this.$route.query.subType) || 1

            getOverview({
                subType: this.subType
            }).then(res => {

                // 全局更新
                this.$store.dispatch('UpdateProblemList', res)
                console.log('第一题')
                console.log(res[0])
            })
        }

    }
</script>

<style lang="less">
    .secondsOverview {
        width: 100%;

        > .box {
            margin-top: 20px;
        }
    }
</style>