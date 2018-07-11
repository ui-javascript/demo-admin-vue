<template>
    <div>
        <firefly></firefly>
    </div>
</template>

<script>

    import Firefly from '~/animal/FireFly';

    export default {
        components: {
            Firefly
        },
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style lang="less">
    body {
        height: 100%;
        background: #09243a;

        margin: 0px;
        padding: 0px;

        font-size: 14px;
        color: #000;
    }
</style>
