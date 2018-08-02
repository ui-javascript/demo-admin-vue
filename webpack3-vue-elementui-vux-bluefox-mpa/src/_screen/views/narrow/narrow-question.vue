<template>
    <div class="NarrowQuestion">

        <div class="container clearfix">
            <div class="fl">
                <countdown-svg-circle
                        v-if="reloadCountdown"
                        :setTimer="setTimer"
                        :endCallBack="'forceSubmit'"
                        @forceSubmit="forceSubmit()"
                ></countdown-svg-circle>

                <card-position
                        :badge="badge"
                        :title="title"
                ></card-position>
            </div>

            <div class="fr">
                <div class="NarrowQuestion__box box-dashed">

                    <div v-if="!list.problemFeatures" class="tc">
                        请稍侯
                    </div>
                    <div v-else>
                        <div>
                            {{ list.problemName }}
                        </div>
                        <div
                                v-for="(item, index) in list.problemFeatures.split('$')">
                            <p>{{ item }}</p>
                        </div>
                    </div>

                </div>

                <div class="NarrowQuestion__operate  clearfix">
                    <div class="fr">
                        <el-button type="primary" v-show="num!=10" @click="nextQuestion()" :disabled="disabled">下一题</el-button>
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
    import {pushType3} from "../../service/push"

    export default {
        name: "seconds-question",
        components: {
            CountdownSvgCircle,
            CardPosition
        },
        data() {
            return {
                badge: '狭路相逢',
                title: '一',
                group: 0,
                list: [],
                disabled: false,
                num: 1,
                setTimer: 0,
                problemId: '',
                reloadCountdown: true
            }
        },
        inject: ['reload'],
        methods: {

            // 倒计时结束
            forceSubmit() {
                // 这是个对象...不是数组,
                // 之前一直list.length判断
                if (this.list.problemFeatures) {
                    this.disabled = false
                }

                // 稍候倒计时结束
                else {
                    this.getQuestion()
                }

            },

            // 查看详情
            viewDetails() {

                this.$router.push({
                    path: '/narrow/overview',
                    query: {
                        id: this.problemId
                    }
                })
            },

            // 获取题目
            getQuestion() {
                this.title = NUM_ARR[this.num]

                let self = this

                getOneQuestion({
                    problemType: 3,
                    questionNumber: this.num
                }).then(res => {

                    self.reloadCountdown = false
                    self.list = res.problem
                    self.problemId = res.problem.problemID

                    this.$nextTick(() => {
                        self.setTimer = 10 * 1000
                        self.reloadCountdown = true

                        // this.setTimer = res.countdown * 1000
                        // this.disabled = 'disabled'
                    })

                }).catch()
            },

            // 下一题
            nextQuestion() {

                if (this.num < 10) {
                    this.num++

                    pushType3({
                        questionNumber: this.num
                    })

                    this.$router.push({
                        path: '/narrow',
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
            this.$nextTick(() => {
                this.title = NUM_ARR[this.num]
                this.setTimer = 10 * 1000
                this.disabled = 'disabled'
            })
        }
    }
</script>

<style lang="less">
    .NarrowQuestion {
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