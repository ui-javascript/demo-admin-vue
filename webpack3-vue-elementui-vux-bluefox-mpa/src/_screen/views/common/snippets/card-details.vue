<template>
    <div class="CardDetails relative">

        <div class="CardDetails__list absolute">
            <el-row class="item">
                <el-col class="tc" :span="18">题目</el-col>
                <el-col :span="6">答案</el-col>
            </el-row>

            <el-row class="item">
                <el-col :span="18">
                    <p>{{ question.problemName }}</p>

                    <div v-if="question.problemFeatures">
                        <p v-for="(item, index) in question.problemFeatures.split('$')">
                            {{ item }}
                        </p>
                    </div>



                </el-col>

                <el-col :span="6">
                    {{ question.answer }}
                </el-col>
            </el-row>

            <el-row class="item">
                <p>答对的选手</p>
                <div class="CardDetails__box border-box" id="container">
                    <div class="CardDetails__ball inline-block" v-for="(item, index) in question.numberArr"
                         :key="index">
                        {{ item }}
                    </div>
                </div>
            </el-row>


        </div>

        <div class="CardDetails__badge absolute tc">{{badge}}</div>

    </div>
</template>

<script>

    export default {
        name: "card-questions",
        props: {
            badge: {
                type: String
            },
            question: {
                type: Object
            },
            // curr: {
            //     type: Number
            // },
            // problemId: {
            //     type: String,
            //     required: true
            // }
        },
        data() {
            return {
            }
        },
        methods: {

        },
        mounted() {
            // this.question.options = this.question.problemFeatures.split('$')
        }
    }
</script>

<style lang="less">
    .CardDetails {
        border: 1px solid @gray;
        min-height: 493px;

        &__list {

            > .item {
                border-bottom: 1px dashed @gray;
                &:first-child {
                    border-top: 1px dashed @gray;
                }
            }

            box-sizing: border-box;

            width: 100%;
            top: 80px;

            &_header {
                color: @red;
                font-size: 20px;
            }
        }

        &__badge {
            width: 440/1.8px;
            height: 165/1.8px;
            background: url(../../../assets/images/badge.png) no-repeat;
            background-size: cover;
            padding-top: 20px;
            color: @blue;
            font-size: 30px;
            font-weight: bold;
        }

        &__box {
            // width: @screen-min-width;
            overflow-x: scroll;
            white-space: nowrap;
            width: 100%;
            /*overflow: auto;*/
        }

        &__ball {
            width: 50px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            /*vertical-align: middle;*/
            border-radius: 50%;
            color: @white;
            background-color: @blue;
            margin-right: 20px;

            /*&:first-child {*/
            /*margin-left: 0;*/
            /*}*/
        }
    }
</style>