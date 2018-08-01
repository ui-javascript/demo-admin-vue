<template>
    <div class="CardConfirm relative">

        <span class="CardConfirm__badge absolute">{{module}}</span>
        <span class="CardConfirm__group absolute">({{ curr }} / {{ total }} 题) </span>

        <div class="CardConfirm__title absolute tc">
            <p class="title"> {{ title }} </p>
        </div>

        <div class="CardConfirm__btns absolute tc clearfix">
            <div class="inline-block clearfix">
                <button class="btn-pure btn-pure--green fl" @click="confirm()" :disabled="disabled">是</button>
                <button class="btn-pure btn-pure--blue fl" @click="refuse()" :disabled="disabled">否</button>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "card-notice",
        props: {
            module: {
                type: String,
                default: '狭路相逢'
            },
            curr: {
                type: Number,
                default: 1
            },
            total: {
                type: Number,
                default: 10
            },
            title: {
                type: String
            },
            disabled: {
                default: false
            }
        },
        // data() {
        //     return {
        //         module: '狭路相逢',
        //         curr: 10,
        //         total: 10,
        //         title: '本题为风险题，是否参加',
        //         disabled: false
        //     }
        // },
        methods: {
            confirm() {
                this.$emit('confirm')
            },
            refuse() {
                this.$emit('refuse')
            }
        },
        mounted() {

        }
    }
</script>

<style lang="less" scoped>
    .CardConfirm {
        width: 100%;
        height: 220px;
        background: url(../../assets/images/card_confirm.png) center top no-repeat;
        background-size: 1368/4.5px 839/4.5px;

        &__badge {
            top: 5px;
            left: 50%;
            margin-left: -135px;
            color: @blue;
            font-weight: bold;
            font-size: 20px;
        }

        &__group {
            top: 5px;
            left: 50%;
            margin-left: 20px;
            color: @white;
        }

        &__title {
            width: 100%;
            top: 50px;
            color: @white;
            font-size: 20px;

            .title {
                margin-left: 15px;
            }
        }

        &__btns {
            width: 100%;
            top: 120px;
        }
    }
</style>