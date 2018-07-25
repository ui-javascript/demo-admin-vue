<template>
    <div>
        <div class="ruleIndex__count">
            <countdown-circle></countdown-circle>
        </div>

        <radio-list
            :module="module"
            :list="list"
        ></radio-list>

    </div>
</template>

<script>
    import {getList} from '../../api/questions'

    import CountdownCircle from '~/Model/CountdownCircle'
    import RadioList from '../../components/RadioList'

    export default {
        name: "question",
        components: {
            CountdownCircle,
            RadioList
        },
        data() {
            return {
                module: '争分夺秒',
                list: [
                    {
                        question: '问题是....',
                        options: ['A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容', 'B的内容', 'C的内容', 'D的内容']
                    },
                    {
                        question: '问题2是....',
                        options: ['A-葫芦娃', 'B-蛇精', 'C-爷爷', 'D-穿山甲']
                    },
                    {
                        question: '问题3是....',
                        options: ['A-xxxx', 'B-xxx', 'C-xxx', 'D-xxx']
                    }
                ],
            }
        },
        methods: {
            ready() {
                let params = {
                    problemType: 1,
                    subType: 1
                }

                getList(params).then(res => {
                    console.log(res)
                }).catch()
            }
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