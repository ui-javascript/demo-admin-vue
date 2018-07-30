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
        ></radio-list>

    </div>
</template>

<script>

    import { mapGetters } from 'vuex'
    import { getList } from '../../api/questions'
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
                module: '争分夺秒',
                list: [
                    // {
                    //     id: '',
                    //     question: '问题是....',
                    //     options: ['A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容', 'B的内容', 'C的内容', 'D的内容']
                    // },
                    // {
                    //     id: '',
                    //     question: '问题2是....',
                    //     options: ['A-葫芦娃', 'B-蛇精', 'C-爷爷', 'D-穿山甲']
                    // },
                    // {
                    //     id: '',
                    //     question: '问题3是....',
                    //     options: ['A-xxxx', 'B-xxx', 'C-xxx', 'D-xxx']
                    // }
                ],
                setTimer: 10 * 1000,
                disabled: false
            }
        },
        // https://www.jb51.net/article/140433.htm
        inject: ['reload'],
        computed: {
            ...mapGetters({
                progress: 'progress',
            }),
        },
        methods: {
            reset() {
                this.setTimer = 10 * 1000
                this.disabled = false
            },
            updateList() {
                // 注意不要加括号
                // this.reload
                this.reset()

                let params = {
                    // problemType: this.progress.module,
                    subType: this.progress.group
                }

                this.list = []
                let self = this
                getList(params).then(res => {

                    // self.setTimer = res.countdown * 1000

                    // console.log('倒计时' + res.countdown)
                    this.$nextTick(() => {
                        self.setTimer = 10 * 1000

                        res.problemList.forEach(x => {
                            let options = x.problemFeatures.split('$')
                            options.pop()
                            self.list.push({
                                id: x.id,
                                question: x.problemName,
                                options: options,
                                checked: x.submitAnswer
                            })
                        })
                    })
                }).catch()
            },
            // 强制提交
            forceSubmit() {
                console.log('强制提交')

                // 禁止答题
                this.disabled = 'disabled'

                if (this.progress.group > 4) {
                    this.$router.push({
                        path: '/notice',
                        query: {
                            type: 1
                        }
                    })
                }

            }
        },
        watch: {
            // 路由变化的时候刷新
            '$route' (to, from) {
                this.reload()
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