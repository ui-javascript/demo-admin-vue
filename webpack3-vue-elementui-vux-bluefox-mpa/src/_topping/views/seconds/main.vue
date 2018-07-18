<template>
    <div class="mmt">
        争分夺秒
    </div>
</template>

<script>
    import { getRap } from '../../api/test';

    export default {

        data() {
            return {

            }
        },
        methods: {

        },
        mounted() {
            getRap()
                .then(res => console.log(res))
                .catch(() => {

                })
        }
    }
</script>

<style lang="less">
    .mmt {
        margin-top: 20px;
    }
</style>