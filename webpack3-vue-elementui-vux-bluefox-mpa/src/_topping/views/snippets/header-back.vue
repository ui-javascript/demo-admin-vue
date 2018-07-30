<template>
    <div class="headerBack relative">
        <app-back
            :backRouterName="backRouterName">
        </app-back>

        <img class="headerBack__bg" src="../../assets/images/header.png" alt="">
    </div>
</template>

<script>

    import appBack from  './app-back'
    export default {
        components: {
            appBack
        },
        props: {
            backRouterName: {
                type: String,
                default: ''
            },
        },
        data() {
            return {

            }
        },
        methods: {

        },
        mounted() {
            console.log(this.backRouterName)
        }
    }
</script>

<style lang="less">
    .headerBack {
        /*width: 100%;*/

        &__bg  {
            /*position: absolute;*/
            width: 100%;
            /*top: 0;*/
        }

        &__close {
            position: absolute;
            top: 20px;
            right: 20px;
            width: 150/1.1px;
            height: 62/1.1px;
        }
    }


</style>