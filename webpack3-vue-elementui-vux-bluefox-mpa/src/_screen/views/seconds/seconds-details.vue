<template>
    <div class="SecondsDetails">
        <div class="box">
            <card-details
                    :badge="badge"
                    :question="question">
            </card-details>

            <div class="clearfix mt-10">
                <div class="fr">
                    <el-button type="primary">下一题</el-button>
                    <el-button class="ml-20" type="primary">下一组</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CardDetails from '../common/snippets/card-details'

    export default {
        name: "seconds-details",
        components: {
            CardDetails
        },
        data() {
            return {
                badge: '争分夺秒',
                question:
                    {
                        title: '问题1',
                        options: [
                          'A. 吴彦祖',
                          'B. 戚薇',
                          'C. 韩雪',
                          'D. 周润发',
                        ],
                        answer: 'A',
                        rightList: [10, 11, 22, 23, 38, 40, 41,42,43,46,47,48,50,53,56, 60,62,65,67,68,69,72,76,79,82,87,89,99],
                        total: 100
                    }
            }
        },

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