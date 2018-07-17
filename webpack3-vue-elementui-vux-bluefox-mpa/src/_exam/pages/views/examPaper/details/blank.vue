<template>
    <div>

        <x-header :left-options="{showBack: true}">填空题</x-header>

        <tab :scroll-threshold="5" v-model="tabIndex">
            <tab-item v-for="(item, index) in list" :key="index" :selected="tabIndex === item" @click="tabIndex = item">
                题目{{ index+1 }}
            </tab-item>
        </tab>

        <swiper v-model="tabIndex"  :show-dots="false">
            <swiper-item v-for="(item, index) in list" :key="index">
                请问 {{item}} ?

                <group>
                    <x-input
                            title="姓名"
                            type="number"
                            placeholder="请输入数值"
                            placeholder-align="right"
                            name="UserName"
                            v-model="username"
                    ></x-input>
                </group>

            </swiper-item>
        </swiper>

    </div>
</template>

<script>

    export default {
        data() {
            return {
                username: '',
                radioOptions: [ 'China', 'Japan' ],
                tabIndex: 0,
                list: ['精选', '美食', '电影', '酒店',
                    '外卖','精选', '美食', '电影',
                    '酒店', '外卖','精选', '美食',
                    '电影', '酒店', '外卖']
            }
        },
        methods: {
            change (value, label) {
                // console.log('change:', value, label)
            }
        }
    }
</script>

<style lang="less">

</style>