<template>
    <div class="headerExit relative">
        <user-exit></user-exit>

        <img class="headerExit__bg" src="../../assets/images/header.png" alt="">
    </div> 
</template>

<script>

    import userExit from  './user-exit'
    export default {
        components: {
            userExit
        },
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style lang="less">
    .headerExit {
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