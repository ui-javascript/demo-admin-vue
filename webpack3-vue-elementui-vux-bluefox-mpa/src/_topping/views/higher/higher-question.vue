<template>
    <div>

        <div class="ruleIndex__count">
            <countdown-svg-circle
                    :setTimer="setTimer"
                    :endCallBack="'forceSubmit'"
                    @forceSubmit="forceSubmit()"
            ></countdown-svg-circle>
        </div>

        <radio-list
                class="mb-20"
                :module="module"
                :list="list"
                :disabled="disabled"
                :allowToggle="false"
                :fixedCurrNum="num"
                :showBtns="showBtns"
                @forbidChoose="forbidChoose()"
        ></radio-list>

    </div>
</template>

<script>

    import {mapGetters} from 'vuex'
    import {getStorage } from "../../../utils/localStorage"
    import {getProblem} from '../../api/exam'

    import CountdownSvgCircle from '~/m/Countdown/CountdownSvgCircle'
    import RadioList from '../../components/RadioList'

    export default {
        name: "question",
        components: {
            CountdownSvgCircle,
            RadioList
        },
        data() {
            return {
                module: '一比高下',
                list: [
                    // {
                    //     id: '',
                    //     question: '问题是....',
                    //     options: ['A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容', 'B的内容', 'C的内容', 'D的内容']
                    // },
                ],
                setTimer: 0,
                num: 1,
                isParticipate: true,
                disabled: false,
                showBtns: true,
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
                this.list = []
                this.setTimer = 0
                this.disabled = false
                this.num = parseInt(this.$route.query.num) || 1
                this.isParticipate = true
            },
            updateList() {
                let params = {
                    problemType: 2,
                    questionNumber: this.num
                }

                let self = this
                
                getProblem(params).then(res => {

                    // console.log('倒计时' + res.countdown)
                    this.$nextTick(() => {
                        // self.setTimer = res.countdown * 1000
                        self.setTimer = 10 * 1000

                        if (res.problemFeatures) {
                            let options = res.problemFeatures.split('$')
                            options.pop()
                            self.list.push({
                                id: res.id,
                                question: res.problemName,
                                options: options,
                                checked: res.submitAnswer
                            })

                        }

                    })
                }).catch()
            },

            // 强制提交
            forceSubmit() {

                if (this.isParticipate) {
                    this.$vux.toast.show({
                        text: '已提交',
                    })
                }

                // 禁止答题
                this.disabled = 'disabled'

                if (this.num >= 10) {
                    this.$router.push({
                        path: '/notice',
                        query: {
                            type: 2
                        }
                    })
                }

            },
            // 禁止选择
            forbidChoose() {
                this.disabled = 'disabled'
            }
        },
        watch: {
            // 路由变化的时候刷新
            '$route'(to, from) {
                this.reload
            }
        },
        // created() {
        // },
        // beforeRouteUpdate() {
        //     this.updateList()
        // },
        mounted() {
            this.reset()

            // 判断是否参加
            let canParticipate = getStorage('higherParticipate')
            if (canParticipate === 'sorry') {
                this.$nextTick(() => {
                    this.isParticipate = false
                    this.disabled = 'disabled'
                    this.showBtns = false
                })
            }

            this.updateList()
        }
    }
</script>

<style lang="less">

    .ruleIndex {
        &__count {
            width: 100%;
            text-align: center;
        }
    }

</style>