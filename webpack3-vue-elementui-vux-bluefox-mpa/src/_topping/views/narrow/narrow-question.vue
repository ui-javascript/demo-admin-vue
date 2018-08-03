<template>
    <div class="NarrowQuestion ruleIndex">

        <div class="ruleIndex__count clearfix">
            <div class="container center tc">
                <countdown-svg-circle
                        :class="{'fl': visibleRanking}"
                        class="inline-block"
                        :setTimer="setTimer"
                        :endCallBack="'forceSubmit'"
                        @forceSubmit="forceSubmit()"
                ></countdown-svg-circle>

                <div class="fr clearfix" v-show="visibleRanking">
                    <div class="fl">
                        <p>得分：{{ xScore }}分</p>
                        <p>排名：{{ xRanking }}名</p>
                    </div>
                    <div class="fr ml-10">
                        <p><span v-show="xLessRanking>0">第{{xLessRanking}}名： {{ xLessScore }} 分</span>&nbsp;</p>
                        <p>第{{xPlusRanking}}名： {{ xPlusScore }} 分</p>
                    </div>

                </div>
            </div>


        </div>

        <div v-if="!list.length">
            <card-confirm
                    :module="module"
                    :curr="problemNum"
                    :total="total"
                    :title="title"
                    :disabled="disabledBtn"
                    @confirm="confirm"
                    @refuse="refuse"
            ></card-confirm>
        </div>

        <div v-else>
            <radio-list
                    class="mb-20"
                    :module="module"
                    :list="list"
                    :allowMulti="true"
                    :allowToggle="false"
                    :fixedCurrNum="problemNum"
                    :disabled="disabled"
                    :showBtns="showBtns"
                    @forbidChoose="forbidChoose()"
            ></radio-list>
        </div>

    </div>
</template>

<script>

    import {mapGetters} from 'vuex'
    import {getProblem, confirmPartner, submitOne, getUserRanking} from '../../api/exam'

    // 组件
    import CountdownSvgCircle from '~/Model/Countdown/CountdownSvgCircle'
    import CardConfirm from '../snippets/card-confirm'
    import RadioList from '../../components/RadioList'

    export default {
        name: "question",
        components: {
            CountdownSvgCircle,
            RadioList,
            CardConfirm
        },
        data() {
            return {
                module: '狭路相逢',
                list: [
                    // {
                    //     id: '',
                    //     question: '问题是....',
                    //     options: ['A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容', 'B的内容', 'C的内容', 'D的内容']
                    // },
                ],
                setTimer: 0,
                disabled: 'disabled',
                disabledBtn: false,
                problemNum: 1,
                problemId: '',
                title: '本题为风险题，是否参加',
                total: 10,

                // 记录是否参加
                isParticipate: false,

                // 默认不参加
                showBtns: false,

                // 排名
                visibleRanking: false,
                xRanking: null,
                xScore: null,
                xPlusRanking: null,
                xPlusScore: null,
                xLessRanking: null,
                xLessScore: null
            }
        },
        // Vue刷新当前页面
        // https://www.jb51.net/article/140433.htm
        inject: ['reload'],
        computed: {
            ...mapGetters({
                progress: 'progress',
            }),
        },
        methods: {
            reset() {
                this.visibleRanking = false
                this.$nextTick(() => {
                    this.list = []
                    this.setTimer = 0
                    this.disabled = 'disabled'
                })
            },
            // 获取排名
            getRanking() {

                this.visibleRanking = true

                getUserRanking().then(res => {
                    this.xRanking = res.xRanking
                    this.xScore = res.xScore
                    this.xPlusRanking = res.xPlusRanking
                    this.xPlusScore = res.xPlusScore
                    this.xLessRanking = res.xLessRanking
                    this.xLessScore = res.xLessScore
                })
            },
            updateList() {
                // 注意不要加括号
                // this.reload

                let params = {
                    // problemType: this.progress.module,
                    problemType: this.progress.module,
                    questionNumber: this.problemNum
                }

                this.list = []
                let self = this

                getProblem(params).then(res => {

                    this.$nextTick(() => {
                        // self.setTimer = res.countdown * 1000
                        self.setTimer = 15 * 1000

                        if (res.problemFeatures) {
                            let options = res.problemFeatures.split('$')
                            options.pop()
                            self.problemId = res.id

                            self.list.push({
                                id: res.id,
                                question: res.problemName,
                                options: options,
                                // 分割为数组
                                // @fix 没有答案为空
                                checked: res.submitAnswer ? res.submitAnswer.split('') : []
                            })
                        }

                    })
                }).catch()
            },

            // 强制提交
            forceSubmit() {

                if (this.list.length) {
                    // 禁止答题
                    this.disabled = 'disabled'

                    submitOne({
                        submitAnswer: this.filterAnswer(this.list[0].checked),
                        examProblemID: this.problemId
                    }).then(() => {
                        // 提交成功
                        if (this.progress.problem === 10) {
                            this.$router.push({
                                path: '/notice',
                                query: {
                                    type: 3
                                }
                            })
                        }
                    })

                }

                // 取题目
                else {

                    // 确定参加
                    if (this.isParticipate) {
                        confirmPartner({
                            questionNumber: this.problemNum
                        }).then(res => {
                            this.$vux.toast.show({
                                text: '确认参与，请等待'
                            })

                            // this.reset()
                            this.getRanking()
                            this.updateList()
                        })
                    }

                    // 不参加 吃瓜看题
                    else {
                        this.getRanking()
                        this.updateList()
                    }
                }

            },
            // 禁止选择
            forbidChoose() {
                this.disabled = 'disabled'
            },
            // 确认参加风险题
            confirm() {
                // 做出选择禁止后悔
                // this.disabledBtn = 'disabled'
                this.isParticipate = true

                // 允许选择题目
                this.disabled = false
                this.showBtns = true

                this.$vux.toast.show({
                    text: '确认参与，请等待'
                })
            },
            // 拒绝参加风险题
            refuse() {

                // this.disabledBtn = 'disabled'
                this.isParticipate = false

                this.disabled = true
                this.showBtns = false

                this.$vux.toast.show({
                    text: '已拒绝参加',
                })
            },
            // 转化答案
            // @deprecated 傻逼代码,写得吃急眼了...
            filterAnswer(arr) {
                let str = ''
                if (arr.indexOf('A') > -1) {
                    str += 'A'
                }
                if (arr.indexOf('B') > -1) {
                    str += 'B'
                }
                if (arr.indexOf('C') > -1) {
                    str += 'C'
                }
                if (arr.indexOf('D') > -1) {
                    str += 'D'
                }
                return str
            }
        },
        watch: {
            // 路由变化的时候刷新
            '$route'(to, from) {
                this.reload
                // this.updateList()
            }
        },
        // created() {
        //
        // },
        // beforeRouteUpdate() {
        //     this.updateList()
        // },
        mounted() {

            this.reset()
            this.problemNum = parseInt(this.$route.query.num) || 1

            this.$nextTick(() => {
                this.setTimer = 10 * 1000
            })
        }
    }
</script>

<style lang="less">

    .ruleIndex {
        &__count {
            width: 100%;
            text-align: center;

            & > .container {
                width: 300px;
            }
        }
    }

    .NarrowQuestion {

    }

</style>