<template>
    <div class="cardNotice relative">

        <span class="cardNotice__badge absolute">{{module}}</span>
        <span class="cardNotice__group absolute">({{ curr }} / {{ total }} 题) </span>

        <div class="cardNotice__title absolute tc">
            <p class="title">
                {{title}}
            </p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "card-notice",
        data() {
            return {
                module: '争分夺秒',
                curr: 10,
                total: 10,
                title: '所有模块已结束'
            }
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    .cardNotice {
        width: 100%;
        height: 220px;
        background: url(../../assets/images/card_attention_top.png) center top no-repeat;
        background-size: 1419/4.5px 900/4.5px;

        &__badge {
            top: 75px;
            left: 50%;
            margin-left: -105px;
            color: @blue;
            font-weight: bold;
            font-size: 20px;
        }

        &__group {
            top: 75px;
            left: 50%;
            margin-left: 20px;
            color: @white;
        }

        &__title {
            width: 100%;
            top: 100px;
            color: @white;
            font-size: 26px;

            .title {
                margin-left: 15px;
            }
        }
    }
</style>