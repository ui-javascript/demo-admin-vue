<template>
    <div>
        <fire-fly></fire-fly>
        <count-down-circle></count-down-circle>
    </div>
</template>

<script>

    import FireFly from '~/Effects/Animal/FireFly';
    import CountdownCircle from '~/Model/Countdown/CountdownCircle';

    export default {
        components: {
            FireFly,
            CountdownCircle
        },
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    body {
        height: 100%;
        background: #09243a;

        margin: 0px;
        padding: 0px;

        font-size: 14px;
        color: #000;
    }
</style>
