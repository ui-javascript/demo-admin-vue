<template>
    <div>
        <div class="ruleIndex__count">
            <countdown-svg-circle
                :setTimer=30*1000
                :endCallBack="'forceSubmit'"
                @forceSubmit="forceSubmit()"
            ></countdown-svg-circle>
        </div>

        <radio-list
            class="mb-20"
            :module="module"
            :list="list"
        ></radio-list>

    </div>
</template>

<script>
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
                ]
            }
        },
        computed: {},
        methods: {
            ready() {

            },
            // 强制提交
            forceSubmit() {
                // console.log('强制提交')
                this.$router.push({
                    name: 'notice_index',
                    query: {
                        type: 1
                    }
                })
            }
        },
        created() {
            let params = {
                problemType: 1,
                subType: 1
            }

            this.list = []
            let self = this
            getList(params).then(res => {
                // console.log(res)
                console.log(res)

                this.$nextTick(() => {
                    res.forEach(x => {
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
        mounted() {
            this.ready()
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