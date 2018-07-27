<template>
    <div class="commonHeader relative">
        <img class="absolute" src="../../assets/images/header.jpg" alt="">
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style lang="less">
    .commonHeader {
        width: 100%;
        height: 393px;

        img {
            width: 1920px;
            height: 393px;
            left: 50%;
            transform:translateX(-50%);
        }
    }
</style>