<template>
    <div class="CardLocale relative">
        <div class="CardLocale__badge absolute">{{ badge }}</div>

        <span class="CardLocale__title absolute">{{ title }}</span>
        <span class="CardLocale__right absolute">晋级人数 {{ right }}</span>

        <div class="CardLocale__box">
            <div class="CardLocale__ball inline-block"
                 v-for="(item, index) in allList"
                 :class="rightList.indexOf(item)>=0 ? 'active':''">
                {{item}}
            </div>
        </div>
    </div>


</template>

<script>
    export default {
        name: "card-locale",
        props: {
            badge: {
                type: String
            },
            title: {
                type: String
            },
            right: {
                type: Number
            },
            allList: {
                type: Array
            },
            rightList: {
                type: Array
            }
        }
    }
</script>

<style lang="less">
    .CardLocale {
        border: 1px solid @gray;
        min-height: 300px;

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

        &__title {
            top: 0;
            left: 600px;
        }

        &__right {
            top: 0;
            right: 100px;
        }

        &__box {
            width: 1280px;
            height: 350px;
            margin-top: 100px;
        }

        &__ball {
            width: 40px;
            height: 40px;
            line-height: 40px;
            border-radius: 50%;
            text-align: center;
            color: @white;
            background: @blue;

            &.active {
                background-color: @red;
            }
        }
    }
</style>