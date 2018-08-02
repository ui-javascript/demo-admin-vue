<template>
    <div class="secondsQuestion">

        <div class="container clearfix">
            <div class="fl">
                <countdown-svg-circle
                        :setTimer="setTimer"
                        :endCallBack="'forceSubmit'"
                        @forceSubmit="forceSubmit()"
                ></countdown-svg-circle>

                <card-position
                        :badge="badge"
                        :title="title"
                        :group="list.length"
                        :showGroup="true"
                ></card-position>
            </div>

            <div class="fr">
                <div class="secondsQuestion__box box-dashed">
                    <div v-for="(item, index) in list">
                        <p>{{index+1}}. {{ item.problemName }}</p>
                    </div>
                </div>

                <div class="secondsQuestion__operate  clearfix">
                    <el-button class="fr" type="primary" @click="viewDetails()" :disabled="disabled">答题详情</el-button>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
    import CountdownSvgCircle from '~m/Countdown/CountdownSvgCircle'
    import CardPosition from '../common/snippets/card-position'

    import {NUM_ARR} from "../../assets/js/constant"
    import {getQuestions} from "../../service/screen"

    export default {
        name: "seconds-question",
        components: {
            CountdownSvgCircle,
            CardPosition
        },
        data() {
            return {
                badge: '争分夺秒',
                title: '一',
                group: 0,
                list: [],
                disabled: true,
                subType: 1,
                setTimer: 0
            }
        },
        methods: {

            // 倒计时结束
            forceSubmit() {
                this.disabled = false
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
                    name: 'seconds_overview',
                    query: {
                        subType: this.subType
                    }
                })
            }
        },
        mounted() {

            this.subType = parseInt(this.$route.query.subType) || 1
            this.title = NUM_ARR[this.subType]

            getQuestions({
                subType: this.subType
            }).then(res => {
                this.list = res.problems

                this.$nextTick(() => {
                    this.setTimer = res.countdown * 1000
                    // this.setTimer = 5 * 1000
                })
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