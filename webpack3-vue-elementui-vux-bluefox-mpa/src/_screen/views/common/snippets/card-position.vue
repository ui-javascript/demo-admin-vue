<template>
    <div class="cardPosition relative tc">
        <div class="cardPosition__badge absolute">
            {{ badge }}
        </div>

        <div class="cardPosition__title absolute">
            第{{ title }} {{ showGroup ? '组' : '题' }}
        </div>

        <div class="cardPosition__group absolute" v-if="showGroup">
            (第{{ group }}题)
        </div>
    </div>
</template>

<script>
    export default {
        name: "card-position",
        props: {
            badge: {
                type: String
            },
            title: {
              type: String
            },
            group: {
                type: Number
            },
            showGroup: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="less">
    .cardPosition {
        width: 295px;
        height: 296px;
        background: url(../../../assets/images/card_position.png);


        &__badge {
            color: @blue;
            top: 5px;
            left: 37px;
            font-size: 40px;
        }

        &__title {
            width: 100%;
            color: @white;
            top: 120px;
            font-size: 45px;
        }

        &__group {
            width: 100%;
            color: @white;
            top: 180px;
            font-size: 18px;
        }

    }
</style>