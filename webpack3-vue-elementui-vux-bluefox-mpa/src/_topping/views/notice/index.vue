<template>
    <div class="noticeIndex">

        <router-link to="/404">404</router-link>
        <router-link to="/login" class="ml-5">登录</router-link>
        <router-link to="/seconds">争分夺秒</router-link>
        <router-link to="/higher">一比高下</router-link>
        <router-link to="/narrow">狭路相逢</router-link>

        <header-exit></header-exit>

        <!--<router-link to="/404">404</router-link>-->
        <!--<router-link to="/login" class="ml-5">登录</router-link>-->
        <!--<router-link to="/seconds">争分夺秒</router-link>-->
        <!--<router-link to="/higher">一比高下</router-link>-->
        <!--<router-link to="/narrow">狭路相逢</router-link>-->

        <card-notice></card-notice>

        <div class="noticeIndex__grade tc">
            <p>您答对<span>{{right}}</span>题，答错<span>{{wrong}}</span>题</p>
            <p>本轮得分<span>{{curr}}</span>分，总分<span>{{total}}</span>分</p>
            <p>排名：<span>{{ranking}}</span></p>
        </div>

    </div>
</template>

<script>

    import HeaderExit from '../snippets/header-exit'
    import CardNotice from '../snippets/card-notice'

    export default {
        components: {
            HeaderExit,
            CardNotice
        },
        data() {
            return {
                right: 3,
                wrong: 2,
                curr: 20,
                total: 20,
                ranking: 1
            }
        },
        methods: {

        },
        mounted() {

        }
    }
</script>

<style lang="less">
    .noticeIndex {
        width: 100%;

        img {
            width: 100%;
        }

        &__grade {
            width: 100%;
            span {
                color: @red;
            }
        }
    }

</style>