<template>
    <div>

        <x-header :left-options="{showBack: false}">个人信息<span slot="right" @click="submit">保存</span></x-header>

        <group>
            <x-input
                    title="姓名"
                    type="text"
                    placeholder="请输入姓名"
                    placeholder-align="right"
                    name="TrueName"
                    v-model="username"
            ></x-input>
            <!--<calendar v-model="demo1" title="通用" disable-past></calendar>-->
            <selector
                    title="性别"
                    name="Sex"
                    v-model="gender"
                    :options="genderOptions"
            ></selector>
            <cell title="手机号" :link="{path: '/editMobile'}">
                <p>17816869505</p>
            </cell>
            <cell title="密码" :link="{path: '/editPassword'}">
                <p>修改</p>
            </cell>
            <selector
                    title="专业"
                    name="Professional"
                    v-model="Professional"
                    :options="ProfessionalOptions"
            ></selector>

            <x-switch
                    title="是否造价工程师"
                    v-model="IsEngineer"
            ></x-switch>
            <x-input
                    title="执业注册证书号"
                    type="number"
                    v-show="IsEngineer"
                    placeholder-align="right"
                    name="UserName"
                    v-model="username"
            ></x-input>
            <x-input
                    title="工作单位全称"
                    type="text"
                    placeholder-align="right"
                    name="UserName"
                    v-model="username"
            ></x-input>
            <x-input
                    title="所属地区"
                    type="text"
                    placeholder-align="right"
                    name="UserName"
                    v-model="username"
            ></x-input>
            <x-input
                    title="详细地址"
                    type="text"
                    placeholder-align="right"
                    name="Address"
                    v-model="address"
            ></x-input>

            <x-switch
                    title="分公司所属"
                    v-model="IsChildCompany"
            ></x-switch>
            <popup-picker
                title="公司所在"
                :data="list1"
                v-model="ChildCity"
                v-show="IsChildCompany"
                @on-show="onShow"
                @on-hide="onHide"
                @on-change="onChange"
                placeholder="请选择"
            ></popup-picker>


        </group>

        <!--<x-button class="mt-20" type="primary" @click.native="submit">保存资料</x-button>-->
    </div>
</template>

<script>
    import { PopupPicker } from 'vux'

    export default {
        components: {
            PopupPicker
        },
        data() {
            return {
                list1: [['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你']],
                value1: [],
                demo1: '',
                username: 'waaa',
                gender: 2,
                genderOptions: [
                    {key: 1, value: '男'},
                    {key: 2, value: '女'},
                ],
                Professional: 2,
                ProfessionalOptions: [
                    {key: 1, value: '安装'},
                    {key: 2, value: '土量'},
                ],
                IsEngineer: false,
                address: '',
                IsChildCompany: false,
                ChildCity: []
            }
        },
        methods: {
            submit() {
                // 显示
                this.$vux.toast.show({
                    text: '保存成功'
                })
            },
            onShow() {
                console.log('on show')
            },
            onHide(type) {
                console.log('on hide', type)
            },
            onChange(val) {
                console.log('val change', val)
            }
        }
    }
</script>

<style lang="less">

    body {
        background-color: #fbf9fe;
    }
</style>