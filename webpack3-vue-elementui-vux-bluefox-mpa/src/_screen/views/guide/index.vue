<template>
    <div class="guideIndex">
        <div class="wrapper relative">
            <img class="absolute" src="../../assets/images/bg_welcome.jpg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {

            }
        }
    }
</script>

<style lang="less">
    .guideIndex {
        /*width: 100%;*/
        /*height: 100%;*/
        /*width:100%;*/
        /*height:100%;*/
        /*max-width: 1920px;*/
        /*min-width: 1000px;*/


        .wrapper {
            /*width: 1920px;*/
            /*width: 1920px;*/
            /*width: 100%;*/
            // min-width: @screen-min-width;
            /*overflow-x: hidden;*/
            /*height: 100%;*/
            /*background: url(../../assets/images/welcome.jpg) center top no-repeat;*/
            /*background-size: 1920px 1080px;*/

            img {
                left: 50%;
                transform:translateX(-50%);
            }
        }
    }
</style>