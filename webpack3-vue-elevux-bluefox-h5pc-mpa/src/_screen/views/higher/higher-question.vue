<template>
    <div class="HigherQuestion">

        <div class="container clearfix">
            <div class="fl">
                <countdown-svg-circle
                        :setTimer="setTimer"
                        :endCallBack="'forceSubmit'"
                        @forceSubmit="forceSubmit()"
                ></countdown-svg-circle>

                <card-position
                        v-if="list"
                        :badge="badge"
                        :title="title"
                        :group="list.length"
                ></card-position>
            </div>

            <div class="fr">
                <div class="HigherQuestion__box box-dashed">
                    <div v-if="list">
                        <div>
                            {{ list.problemName }}
                        </div>
                        <div
                                v-for="(item, index) in list.problemFeatures.split('$')">
                            <p>{{ item }}</p>
                        </div>
                    </div>

                </div>

                <div class="HigherQuestion__operate  clearfix">
                    <div class="fr">
                        <el-button type="primary" @click="nextQuestion()" :disabled="disabled">{{ num !== 10 ? '下一题' :
                            '狭路相逢' }}
                        </el-button>
                        <el-button type="primary" @click="viewDetails()" :disabled="disabled">查看</el-button>
                    </div>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
    import CountdownSvgCircle from '~m/Countdown/CountdownSvgCircle'
    import CardPosition from '../common/snippets/card-position'

    import {NUM_ARR} from "../../assets/js/constant"
    import {getOneQuestion} from "../../service/screen"
    import {pushType2} from "../../service/push"

    export default {
        name: "seconds-question",
        components: {
            CountdownSvgCircle,
            CardPosition
        },
        data() {
            return {
                badge: '一比高下',
                title: '一',
                group: 0,
                list: null,
                disabled: true,
                num: 1,
                setTimer: 0,
                problemId: ''
            }
        },
        inject: ['reload'],
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
                    name: 'higher_overview',
                    query: {
                        id: this.problemId,
                        num: this.num
                    }
                })
            },
            // 获取题目
            getQuestion() {
                this.title = NUM_ARR[this.num]

                getOneQuestion({
                    problemType: 2,
                    questionNumber: this.num
                }).then(res => {
                    this.list = res.problem
                    this.problemId = res.problem.problemID

                    this.$nextTick(() => {
                        // this.setTimer = res.countdown * 1000
                        this.setTimer = 10 * 1000
                        this.disabled = 'disabled'
                    })
                }).catch()
            },

            // 下一题
            nextQuestion() {

                debugger
                if (this.num < 10) {
                    this.num++
                    pushType2({
                        questionNumber: this.num
                    })

                    this.$router.push({
                        path: '/higher',
                        query: {
                            num: this.num
                        }
                    })
                }
                else {
                    this.$router.push({
                        path: '/rule',
                        query: {
                            type: 'narrow'
                        }
                    })
                }

            }
        },
        watch: {
            // 路由变化的时候刷新
            '$route'(to, from) {
                this.reload
                // this.updateList()
            }
        },
        mounted() {
            this.num = parseInt(this.$route.query.num) || 1

            // 获取题目
            this.getQuestion()
        }
    }
</script>

<style lang="less">
    .HigherQuestion {
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