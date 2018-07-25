<template>
    <div class="cardAttention">
        <div class="cardAttention__bg relative">
            <div class="cardAttention__badge">
                {{ badge }}
            </div>
            <div class="cardAttention__title">
                {{ title }}
            </div>
            <div class="cardAttention__content">
                <div class="content">
                    {{ content }}
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "card-attention",
        props: {
            badge: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="less" scoped>
    .cardAttention {
        width: 100%;

        &__bg {
            /*display: inline-block;*/
            width: 100%;
            height: 280px;
            /*position: absolute;*/
            background: url(../../assets/images/card_attention_bottom.png) center top no-repeat;
            /*background-size: contain;*/
            background-size:  1420/4px 940/4px;
        }

        &__badge {
            position: absolute;
            top: 10px;
            /*margin-top: 10px;*/
            left: 50%;
            margin-left: -130px;
            color: blue;
            font-size: 18px;
            font-weight: bold;
        }

        &__title {
            position: absolute;
            top: 60px;
            /*left: 50%;*/
            color: #fff;
            /*width: 286px;*/
            width: 100%;
            text-align: center;
            /*margin-left: -120px;*/
            font-size: 30px;
        }

        &__content {
            position: absolute;
            top: 160px;
            left: 50%;
            width: 286px;
            margin-left: -140px;

            .content {
                border: 1px dashed #ddd;
                padding: 12px;
                font-size: 15px;
            }
        }

    }

    /* iphone5等小屏幕 */
    @media screen
    and (max-device-width: 350px) {

        /*.cardAttention {*/
            /*width: 100%;*/

            /*&__badge {*/
                /*top: 50px;*/
                /*font-size: 15px;*/
                /*margin-left: -95px;*/
            /*}*/

            /*&__title {*/
                /*top: 120px;*/
                /*!*left: 50%;*!*/
                /*!*margin-left: -120px;*!*/
            /*}*/

            /*&__content {*/
                /*position: absolute;*/
                /*top: 200px;*/

                /*.content {*/
                    /*border: 1px dashed #ddd;*/
                    /*padding: 12px;*/
                    /*font-size: 15px;*/
                /*}*/
            /*}*/

        /*}*/

    }

</style>