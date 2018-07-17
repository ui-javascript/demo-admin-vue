<template>
    <div>
        <router-view keep-alive></router-view>

        <!-- 添加fixed 解决输入框遮挡问题 -->
        <tabbar style="position:fixed">
            <tabbar-item selected :link="{path:'/exam'}">
                <!--<img slot="icon" src="../assets/demo/icon_nav_button.png">-->
                <span slot="label">考试中心</span>
            </tabbar-item>
            <tabbar-item show-dot :link="{path: '/history'}">
                <!--<img slot="icon" src="../assets/demo/icon_nav_msg.png">-->
                <span slot="label">历史成绩</span>
            </tabbar-item>
            <tabbar-item :link="{path: '/userInfo'}">
                <!--<img slot="icon" src="../assets/demo/icon_nav_article.png">-->
                <!--<icon type="safe_warn" is-msg></icon>-->
                <span slot="label">个人信息</span>
            </tabbar-item>
        </tabbar>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: 0
            }
        },
        methods: {

        }
    }
</script>

<style>

</style>
