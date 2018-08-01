<template>
    <div class="SecondsDetails">
        <div class="box">

            <card-details
                    :badge="badge"
                    :question="question"
            ></card-details>

            <div class="clearfix mt-10">
                <div class="fr">
                    <el-button
                            type="primary"
                            @click="nextQuestion()"
                            v-show="curr !== problemList.length-1"
                    >下一题
                    </el-button>

                    <el-button
                            class="ml-20"
                            type="primary"
                            @click="nextGroup()"
                            v-show="curr === problemList.length-1"
                    >{{ progress.group < 5 ? '下一组' : '一比高下' }}
                    </el-button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import CardDetails from '../common/snippets/card-details'
    import {getSingle} from "../../service/screen"
    import {pushType1} from "../../service/push"

    export default {
        name: "seconds-details",
        components: {
            CardDetails
        },
        data() {
            return {
                badge: '争分夺秒',
                // question:
                // {
                //     title: '问题1',
                //     options: [
                //         'A. 吴彦祖',
                //         'B. 戚薇',
                //         'C. 韩雪',
                //         'D. 周润发',
                //     ],
                //     answer: 'A',
                //     rightList: [10, 11, 22, 23, 38, 40, 41, 42, 43, 46, 47, 48, 50, 53, 56, 60, 62, 65, 67, 68, 69, 72, 76, 79, 82, 87, 89, 99],
                // },
                curr: 0,
                id: '',
                question: {}
            }
        },
        computed: {
            ...mapGetters({
                progress: 'progress',
                problemList: 'problemList'
            }),
        },
        methods: {
            nextQuestion() {
                if (this.curr < this.problemList.length - 1) {
                    this.curr++

                    getSingle({
                        problemID: this.problemList[this.curr].problemID
                    }).then(res => {
                        this.question = res
                    })
                }
            },
            nextGroup() {
                let group = this.progress.group
                if (group < 5) {

                    pushType1({
                        subType: group + 1
                    }).then(res => {
                        debugger
                    })

                    this.$router.push({
                        path: '/seconds/question',
                        query: {
                            subType: group + 1
                        }
                    })

                    this.$store.dispatch('UpdateProgress', {
                        group: group + 1
                    })

                }

                else if (group === 5) {
                    this.$router.push({
                        path: '/rule',
                        query: {
                            type: 'higher'
                        }
                    })
                }

            }
        },
        mounted() {
            // console.log(this.problemList)
            //
            this.curr = this.$route.query.num

            //
            // if (!this.problemList.length) {
            //     // 获取题目
            //     getOverview({
            //         subType: this.progress.group
            //     }).then(res => {
            //         // 全局更新
            //         this.$store.dispatch('UpdateProblemList', res)
            //     })
            // }

            getSingle({
                problemID: this.problemList[this.curr].problemID
            }).then(res => {
                this.question = res
            })

        }

    }
</script>

<style lang="less">
    .SecondsDetails {
        width: 100%;

        > .box {
            margin-top: 20px;
        }
    }
</style>