<template>
    <div class="HigherDetails">
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
                    >{{ this.num === 10 ? '狭路相逢' : '下一题' }}</el-button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import CardDetails from '../common/snippets/card-details'
    import {getSingle} from "../../service/screen"
    import { pushType2 } from "../../service/push"

    export default {
        name: "higher-details",
        components: {
            CardDetails
        },
        data() {
            return {
                badge: '一比高下',
                question:
                {
                    // title: '问题1',
                    // options: [
                    //     'A. 吴彦祖',
                    //     'B. 戚薇',
                    //     'C. 韩雪',
                    //     'D. 周润发',
                    // ],
                    // answer: 'A',
                    // rightList: [10, 11, 22, 23, 38, 40, 41, 42, 43, 46, 47, 48, 50, 53, 56, 60, 62, 65, 67, 68, 69, 72, 76, 79, 82, 87, 89, 99],
                },
                num: 1,
                problemId: ''
            }
        },
        computed: {
            ...mapGetters({
                progress: 'progress',
            }),
        },
        methods: {
            nextQuestion() {
                if (this.num < 10) {

                    pushType2({
                        questionNumber: this.num+1
                    })

                    this.$router.push({
                        path: '/higher/question',
                        query: {
                            num: this.num+1
                        }
                    })
                }

                else {
                    // 跳到狭路相逢规则页
                    this.$router.push({
                        path: '/rule',
                        query: {
                            type: 'narrow'
                        }
                    })
                }
            },
        },
        mounted() {
            this.problemId = this.$route.query.id
            this.num = parseInt(this.$route.query.num) || 1

            getSingle({
                problemID: this.problemId
            }).then(res => {
                this.question = res
            })

        }

    }
</script>

<style lang="less">
    .HigherDetails {
        width: 100%;

        > .box {
            margin-top: 20px;
        }
    }
</style>