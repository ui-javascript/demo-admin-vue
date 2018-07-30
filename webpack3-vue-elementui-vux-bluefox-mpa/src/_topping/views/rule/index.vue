<template>
    <div>

        <router-link to="/404">404</router-link>
        <router-link to="/login" class="ml-5">登录</router-link>
        <router-link to="/seconds">争分夺秒</router-link>
        <router-link to="/higher">一比高下</router-link>
        <router-link to="/narrow">狭路相逢</router-link>

        <keep-alive>
            <router-view></router-view>
        </keep-alive>

    </div>
</template>

<script>

    // // import { getInfo } from "../../api/login"
    // import {getToken} from '../../router/_auth'
    //
    // export default {
    //
    //     data() {
    //         return {
    //             connection: null,
    //             //url: "http://192.168.1.149:5058/chatHub",
    //             //url:"http://localhost:51782/chatHub",
    //             url:"http://192.168.1.149:5060/notificationhub"
    //         }
    //     },
    //     methods: {
    //         // 初始化
    //         init() {
    //             this.connection = new signalR.HubConnectionBuilder()
    //                 .withUrl(this.url,{ accessTokenFactory: () => getToken()})
    //                 .configureLogging(signalR.LogLevel.Information)
    //                 .build();
    //         },
    //
    //         // 开始SSE
    //         start() {
    //             this.connection.start().catch(err => console.error(err.toString()));
    //         },
    //
    //         // 发送信息
    //         // sendMessage(e) {
    //         //     // @deprecated
    //         //     // e.preventDefault();
    //         //
    //         //     const user = document.getElementById("userInput").value;
    //         //     const message = document.getElementById("messageInput").value;
    //         //     this.connection.invoke("SendMessage", user, message).catch(err => console.error(err.toString()));
    //         // },
    //
    //         // 接收消息绑定
    //         receiveMessage() {
    //             let router = this.$router;
    //
    //             // 争分夺秒
    //             this.connection.on("ReceiveMessage", (subType) => {
    //                 // const msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    //                 // const encodedMsg = user + " says " + msg;
    //                 // const li = document.createElement("li");
    //                 // li.textContent = encodedMsg;
    //                 // document.getElementById("messagesList").appendChild(li);
    //
    //                 // debugger
    //                 router.push({
    //                     name: 'seconds_question',
    //                     query: {
    //                         subType: subType
    //                     }
    //                 })
    //             });
    //
    //             // 一比高下
    //             this.connection.on("ReceiveMessageFromGroup", (questionNumber) => {
    //                 console.log(problemType, questionNumber);
    //
    //                 // debugger
    //                 router.push({
    //                     path: '/seconds/question',
    //                     query: {
    //                         subType: questionNumber
    //                     }
    //                 })
    //             });
    //
    //             // 狭路相逢
    //             this.connection.on("ReceiveMessageForType3", (questionNumber) => {
    //
    //                 // debugger;
    //                 // console.log(questionNumber);
    //                 router.push({
    //                     path: '/seconds/question'
    //                 })
    //             });
    //         },
    //     },
    //     mounted() {
    //         this.init()
    //         this.start()
    //         this.receiveMessage()
    //     }
    // }

</script>

<style lang="less">

</style>