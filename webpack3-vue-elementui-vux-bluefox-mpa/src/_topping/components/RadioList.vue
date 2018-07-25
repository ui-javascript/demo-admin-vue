<template>
    <div class="radioList">
        <div class="card center relative">
            <div class="radioList__badge">
                {{ module }}
            </div>

            <div class="radioList__group">
                {{ '(1/5组)' }}
            </div>

            <div class="radioList__question">
                <div class="content center">
                    {{ list[curr].question }}
                </div>
            </div>

            <div class="radioList__decoration"></div>

            <div class="radioList__list" >
                <div v-for="(item, index) in list[curr].options">
                    <input :id='"demo"+index' :value="item" type="radio" v-model="checked[curr]">
                    <label
                            class="radioList__label center"
                            :class="checked[curr]==item ? 'active' : '' "
                            :for="'demo'+index">
                        <span class="radioList_character">{{ index | optionsMap }}</span>
                        {{ item }}
                    </label>

                </div>
            </div>


            <div class="radioList__operate">
                <button class="radioList__btn" v-show="this.curr!==0" type="button" @click="prev()">上一题</button>
                <button class="radioList__btn" v-show="this.curr!==this.total-1" type="button" @click="next()">下一题
                </button>
                <button class="radioList__btn" v-show="this.curr===this.total-1" type="button" @click="submit()">提交
                </button>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        name: "CheckboxList",
        filters: {
            optionsMap(value) {
                let arr = ['A', 'B', 'C', 'D', 'E']
                return arr[value]
            }
        },
        props: {
            // 卡片名
            module: {
                type: String,
                required: true
            },
            // 题目列表
            list: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                // module: '争分夺秒',
                // list: [
                //     {
                //         question: '问题是....',
                //         options: ['A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容A的内容', 'B的内容', 'C的内容', 'D的内容']
                //     },
                //     {
                //         question: '问题2是....',
                //         options: ['A-葫芦娃', 'B-蛇精', 'C-爷爷', 'D-穿山甲']
                //     },
                //     {
                //         question: '问题3是....',
                //         options: ['A-xxxx', 'B-xxx', 'C-xxx', 'D-xxx']
                //     }
                // ],
                checked: [],
                curr: 0,
                total: 0
            }
        },
        methods: {
            ready() {
                this.total = this.list.length
            },
            // 上一题
            prev() {
                if (this.curr > 0) {
                    this.curr--;
                }
            },
            // 下一题
            next() {
                if (this.curr + 1 < this.total) {
                    this.curr++;
                }
            },
            // 提交
            submit() {
                alert('提交')
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

    .radioList {

        border-bottom: 20px;

        input[type='radio'] {
            /*visibility: hidden;*/
            display: none;
        }

        .card {
            width: 300px;
            border: 1px solid @gray;
            border-radius: 10px;
            padding-bottom: 10px;
        }

        &__badge {
            position: absolute;
            top: 1px;
            left: -3px;
            width: 660px / 6;
            height: 230px / 6;
            background: url(../assets/images/badge.png);
            background-size: cover;
            color: @blue;
            font-weight: bold;
            font-size: 20px;
            text-align: center;
        }

        &__group {
            position: absolute;
            top: 0;
            right: 20px;
        }

        &__question {
            width: 100%;
            /*position: relative;*/
            /*top: 10px;*/

            margin-top: 30px;

            .content {
                width: 100%;
                padding: 10px;
            }
        }

        &__decoration {
            width: 100%;
            height: 20px;
            border-bottom: 1px dashed @gray;
        }

        &__operate {
            width: 100%;
            margin-top: 20px;
            padding: 10px;
        }

        &__list {
            width: 100%;
            padding: 10px;
        }

        .active {
            background: @green;
        }

        &_character {
            font-weight: bold;
        }

        &__label {
            display: block;
            min-height: 30px;
            line-height: 30px;
            word-break: normal;
            /*width: 100%;*/
            overflow: visible;
            background: @blue;
            margin-top: 10px;
            border-radius: 10px;
            color: @white;
            padding: 5px 10px;

            &:first-child {
                margin-top: 0;
            }
        }

        &__btn {
            width: 80px;
            height: 30px;
            background: @blue;
            border: none;
            border-radius: 10px;
            color: @white;
            font-weight: bold;
        }
    }
</style>