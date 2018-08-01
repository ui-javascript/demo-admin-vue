<template>
    <div class="commonHeader relative">
        <img class="commonHeader__bg absolute" src="../../assets/images/header.jpg" alt="">
        <div class="commonHeader__ranking absolute" @click="viewRanking()">看排名</div>

        <dialog-ranking
                @close="close"
                :visible="visible"
        >
        </dialog-ranking>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                visible: false
            }
        },
        components: {
            dialogRanking(resolve) {
                require(['../ranking/_dialog/ranking.vue'], resolve)
            },
        },
        methods: {
            // 查看排名
            viewRanking() {
                this.visible = true
            },
            close() {
                this.visible = false
            }
        }
    }
</script>

<style lang="less">
    .commonHeader {
        width: 100%;
        height: 393px;

        &__bg {
            width: 1920px;
            height: 393px;
            left: 50%;
            transform: translateX(-50%);
        }

        &__ranking {
            right: 0;
            width: 100px;
            height: 50px;
            border-radius: 15px;
            border: 1px solid @gray;
        }

    }
</style>