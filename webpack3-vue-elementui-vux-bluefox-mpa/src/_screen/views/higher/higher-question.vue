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
                    <el-button class="fr" type="primary" @click="viewDetails()" :disabled="disabled">答题详情</el-button>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
    import CountdownSvgCircle from '~m/Countdown/CountdownSvgCircle'
    import CardPosition from '../common/snippets/card-position'

    import { NUM_ARR } from "../../assets/js/constant"
    import { getOneQuestion } from "../../service/screen"

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
                    name: 'higher_overview',
                    // query: {
                    //     num: this.
                    // }
                })
            }
        },
        mounted() {

            this.num = this.$route.query.num || 1
            this.title = NUM_ARR[this.num]

            getOneQuestion({
                problemType: 2,
                questionNumber: this.num
            }).then(res => {
                this.list = res[0]

                this.$nextTick(() => {
                    this.setTimer = 3 * 1000
                })
            }).catch()
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