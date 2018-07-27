<template>
    <div class="secondsQuestion">

        <div class="container clearfix">
            <div class="fl">
                <countdown-svg-circle
                        :setTimer=5*1000
                        :endCallBack="'forceSubmit'"
                        @forceSubmit="forceSubmit()"
                ></countdown-svg-circle>

                <card-position
                        :badge="badge"
                        :title="title"
                        :group="list.length"
                ></card-position>
            </div>

            <div class="fr">
                <div class="secondsQuestion__box box-dashed">
                    <div v-for="(item, index) in list">
                        <p>{{index+1}}. {{ item.problemName }}</p>
                    </div>
                </div>

                <div class="secondsQuestion__operate  clearfix">
                    <el-button class="fr" type="primary" @click="viewDetails()">答题详情</el-button>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
    import CountdownSvgCircle from '~m/Countdown/CountdownSvgCircle'
    import CardPosition from '../common/snippets/card-position'

    import { getQuestions } from "../../service/question"

    export default {
        name: "seconds-question",
        components: {
            CountdownSvgCircle,
            CardPosition
        },
        data() {
            return {
                badge: '争分夺秒',
                title: '第一组',
                group: 0,
                list: []
            }
        },
        methods: {
            // 倒计时结束
            forceSubmit() {
                // this.$alert('这是一段内容', '标题名称', {
                //     confirmButtonText: '确定',
                //     callback: action => {
                //         // this.$message({
                //         //     type: 'info',
                //         //     message: `action: ${ action }`
                //         // });
                //     }
                // });
            },
            // 查看详情
            viewDetails() {
                this.$router.push({
                    name: 'seconds_overview'
                })
            }
        },
        mounted() {
            getQuestions({
                subType: 1
            }).then(res => {
                console.log(res)
                this.list = res
            }).catch()
        }
    }
</script>

<style lang="less">
    .secondsQuestion {
        width: 100%;

        .container {
            margin-top: 20px;
        }

        &__box {
            width: 1200px;
            min-height: 440px;
        }

        &__operate {
            margin-top: 20px;
        }
    }

</style>