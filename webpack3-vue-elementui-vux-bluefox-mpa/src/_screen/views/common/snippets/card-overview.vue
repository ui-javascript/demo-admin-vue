<template>
    <div class="CardOverview relative">

        <div class="CardOverview__list absolute">
            <el-row class="CardOverview__list_header">
                <el-col class="tc" :span="16">问题</el-col>
                <el-col :span="4">答案</el-col>
                <el-col :span="4">准确率</el-col>
            </el-row>

            <el-row class="item" v-for="(item, index) in list" :key="index">
                <el-col class="cursor" :span="16" @click.native="viewDetails(index, item)">{{item.problemName}}</el-col>
                <el-col :span="4">{{ item.answer }}</el-col>
                <el-col :span="4"><span>{{ item.rightCount }}</span><div class="slopingside inline-block"></div> <span>{{item.submitCount}}</span></el-col>
            </el-row>
        </div>

        <div class="CardOverview__badge absolute tc">{{ badge }}</div>
    </div>
</template>

<script>

    export default {
        name: "card-question",
        props: {
            badge: {
                type: String
            },
            list: {
                type: Array
            }
        },
        data() {
            return {

            }
        },
        methods: {
            // 查看
            viewDetails(index, item) {
                // this.$router.push({
                //     name: 'seconds_details',
                //     query: {
                //         number: index,
                //         item: item
                //     }
                // })
                this.$emit('view', {
                    index,
                    item
                })
            }
        },
        mounted() {

        }
    }
</script>

<style lang="less">
    .CardOverview {
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
            /*margin-left: 20px;*/
            /*margin-right: 20px;*/

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

        // 斜杠
        .slopingside {
            height:0px;
            border: 1px solid @gray;
            width: 20px;
            transform:rotate(125deg);
        }

    }
</style>