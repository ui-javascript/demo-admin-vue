<template>
    <div class="footerMask">
        <div class="center">
            技术支持：杭州品茗安控信息技术股份有限公司
            <!--<p>联系电话：150-6710-4488</p>-->
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {}
        },
        methods: {}
    }
</script>

<style lang="less">
    .footerMask {
        position: absolute;
        bottom: 0;
        /*height: 60px;*/

        margin-bottom: 7%;
        width: 100%;
        color: #fff;
        text-align: center;
        font-size: 12px;

        .center {
            width: 300px;
            height: 30px;
            line-height: 30px;
            /*vertical-align: middle;*/
            padding: 0 4px;
            background: rgba(0, 0, 0, .2);
            border-radius: 15px;
            letter-spacing: 1px;
        }
    }

    /* iphone5等小屏幕 */
    @media screen
    and (max-device-width: 350px) {
        /*.footerMask {*/
        /*bottom: 10px;*/
        /*}*/
    }

</style>