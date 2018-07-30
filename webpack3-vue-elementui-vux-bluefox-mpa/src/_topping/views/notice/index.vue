<template>
    <div class="noticeIndex">

        <router-link to="/404">404</router-link>
        <router-link to="/login" class="ml-5">登录</router-link>
        <router-link to="/seconds">争分夺秒</router-link>
        <router-link to="/higher">一比高下</router-link>
        <router-link to="/narrow">狭路相逢</router-link>

        <header-back
            :backRouterName="backRouterName"

        ></header-back>

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

    import { mapGetters } from 'vuex'
    import HeaderBack from '../snippets/header-back'
    import CardNotice from '../snippets/card-notice'
    import {getScore, getGrade} from '../../api/grades'

    export default {
        components: {
            HeaderBack,
            CardNotice
        },
        data() {
            return {
                right: 0,
                wrong: 0,
                curr: 0,
                total: 0,
                ranking: 0,
                backRouterName: '/rule/main'
            }
        },
        computed: {
            ...mapGetters({
                progress: 'progress',
            })
        },
        methods: {

        },
        mounted() {
            let type = this.progress.type

            // debugger
            getScore({ type: type }).then(res => {
                this.total = res.allScore
                this.ranking = res.ranking
                this.curr = res.mScore
                this.right = res.tAnswerCount
                this.wrong = res.wAnswerCount
            })

            getGrade().then(res => {
                console.log(res)
            })

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