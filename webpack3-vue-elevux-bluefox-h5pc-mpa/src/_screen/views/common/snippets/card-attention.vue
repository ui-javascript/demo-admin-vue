<template>
    <div class="cardAttention relative tc">
        <div class="cardAttention__title absolute tc">{{title}}</div>
        <div class="cardAttention__btn absolute">
            <div class="center">
                <slot>

                </slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "card-attention",
        props: {
            title: {
                type: String
            }
        }
    }
</script>

<style lang="less">
    .cardAttention {
        width: 666px;
        height: 474px;
        background: url(../../../assets/images/card_attention.png);
        background-size: cover;

        &__title {
            width: 100%;
            top: 105px;
            left: 30px;
            font-size: 46px;
            letter-spacing: 5px;
            font-weight: bold;
            color: @blue;
            /*left: 20px;*/
        }

        &__btn {
            width: 100%;
            top: 380px;
            left: 30px;
        }
    }
</style>