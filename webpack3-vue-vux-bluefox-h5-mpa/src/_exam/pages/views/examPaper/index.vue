<template>
    <div>

        <x-header :left-options="{showBack: false}">考试中心</x-header>

        <grid :show-lr-borders="false">
            <grid-item :link="{ path: '/single'}">
                单选
                <!--<img slot="icon" src="/static/images/grid_icon.png">-->
            </grid-item>
            <grid-item :link="{ path: '/multi'}">
                多选
                <!--<img slot="icon" src="/static/images/grid_icon.png">-->
            </grid-item>
            <grid-item :link="{ path: '/judge'}">
                判断
                <!--<img slot="icon" src="/static/images/grid_icon.png">-->
            </grid-item>
            <grid-item :link="{ path: '/blank'}">
                填空
                <!--<img slot="icon" src="/static/images/grid_icon.png">-->
            </grid-item>
        </grid>

        <x-button class="mt-20" type="primary" @click.native="submit">提交试卷</x-button>

    </div>
</template>

<script>

    export default {
        data() {
            return {

            }
        },
        methods: {
            submit() {
                this.$vux.alert.show({
                    title: '确认提交吗',
                    content: `
                        当前还有20题未作答！
                    `,
                    onShow () {
                        console.log('Plugin: I\'m showing')
                    },
                    onHide () {
                        console.log('Plugin: I\'m hiding')
                    }
                })
            }
        }
    }
</script>

<style lang="less">

</style>