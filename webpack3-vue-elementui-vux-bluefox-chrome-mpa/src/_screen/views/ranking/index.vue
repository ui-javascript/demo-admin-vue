<template>
    <div>
        排名

        <button type="button" @click="visible=true">点击</button>

        <dialog-ranking
                @close="close"
                :visible="visible"
        >
        </dialog-ranking>

    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                visible: false
            }
        },
        components: {
            dialogRanking(resolve) {
                require(['./_dialog/ranking.vue'], resolve)
            },
        },
        methods: {
            close() {
                this.visible = false
            }
        }
    }
</script>

<style scoped>

</style>