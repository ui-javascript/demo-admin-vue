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
                @forbidChoose="forbidChoose()"
        ></radio-list>

    </div>
</template>

<script>

    import {mapGetters} from 'vuex'
    import {getProblem} from '../../api/exam'
    import CountdownSvgCircle from '~/Model/Countdown/CountdownSvgCircle'
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
                disabled: false
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
                this.setTimer = 0
                this.disabled = false
                this.num = this.$route.query.num || 1
            },
            updateList() {
                // 注意不要加括号
                // this.reload
                this.reset()

                let params = {
                    // problemType: this.progress.module,
                    problemType: 2,
                    questionNumber: this.num
                }

                this.list = []
                let self = this
                
                getProblem(params).then(res => {

                    debugger

                    // console.log('倒计时' + res.countdown)
                    this.$nextTick(() => {


                        // self.setTimer = res.countdown * 1000
                        self.setTimer = 10 * 1000

                        // 测试
                        if (self.setTimer < 20 * 1000) {
                            self.setTimer = 20 * 1000
                        }

                        debugger

                        if (res.problemFeatures) {
                            let options = res.problemFeatures.split('$')
                            options.pop()
                            self.list.push({
                                id: res.id,
                                question: res.problemName,
                                options: options,
                                checked: res.submitAnswer
                            })

                            debugger
                        }

                    })
                }).catch()
            },

            // 强制提交
            forceSubmit() {
                this.$vux.toast.show({
                    text: '已提交',
                })

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
            // console.log(this.progress)
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