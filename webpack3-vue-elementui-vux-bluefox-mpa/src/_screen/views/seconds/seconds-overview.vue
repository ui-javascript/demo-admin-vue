<template>
    <div class="secondsOverview">
        <div class="box">
            <card-overview
                :badge="badge"
                :list="list">
            </card-overview>

            <div class="clearfix mt-10">
                <el-button class="fr" type="primary">下一组</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import CardOverview from '../common/snippets/card-overview'

    export default {
        name: "seconds-overview",
        components: {
            CardOverview
        },
        data() {
            return {
                badge: '争分夺秒',
                list: [
                    {
                        question: '问题1',
                        answer: 'A',
                        right: 10,
                        total: 100
                    },
                    {
                        question: '问题2',
                        answer: 'B',
                        right: 10,
                        total: 100
                    }

                ]
            }
        },

    }
</script>

<style lang="less">
    .secondsOverview {
        width: 100%;

        > .box {
            margin-top: 20px;
        }
    }
</style>