<template>
    <div>
        <router-view @sse="sse()">
        </router-view>
    </div>
</template>

<script>
    // import { getInfo } from "../../api/login"
    import { getToken } from './router/_auth'
    import { getProgress } from "./api/exam"

    export default {
        data() {
            return {
                connection: null,
                url: `${process.env.BASE_URL}/notificationhub`
            }
        },
        methods: {
            // 开始SSE
            start() {
                // 关于在vue项目中,刷新页面时websocket断开连接的解决办法
                // https://blog.csdn.net/weixin_42235377/article/details/80491646

                this.$socket = new signalR.HubConnectionBuilder()
                    .withUrl(this.url,{ accessTokenFactory: () => getToken()})
                    .configureLogging(signalR.LogLevel.Information)
                    .build();

                // console.log(this.$socket)

                this.$socket.start().catch(err => console.error(err.toString()));
            },

            // 发送信息
            // sendMessage(e) {
            //     // @deprecated
            //     // e.preventDefault();
            //
            //     const user = document.getElementById("userInput").value;
            //     const message = document.getElementById("messageInput").value;
            //     this.connection.invoke("SendMessage", user, message).catch(err => console.error(err.toString()));
            // },

            // 接收消息绑定
            receiveMessage() {
                let router = this.$router;

                // 争分夺秒
                this.$socket.on("ReceiveMessage", (subType) => {
                    // const msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                    // const encodedMsg = user + " says " + msg;
                    // const li = document.createElement("li");
                    // li.textContent = encodedMsg;
                    // document.getElementById("messagesList").appendChild(li);

                    this.$store.dispatch('UpdateProgress', {
                        module: 1,
                        group: subType,
                        problem: 1
                    })

                    router.push({
                        name: 'seconds_question',
                        // path: 'seconds_question',
                        query: {
                            subType: subType
                        },
                        // params: {
                        //     subType: subType
                        // }
                    })
                });

                // 一比高下
                this.$socket.on("ReceiveMessageFromGroup", (questionNumber) => {

                    this.$store.dispatch('UpdateProgress', {
                        module: 2,
                        group: 1,
                        problem: questionNumber
                    })

                    // debugger
                    router.push({
                        path: '/higher/question',
                        query: {
                            num: questionNumber
                        }
                    })
                });

                // 一比高下答题失败的
                this.$socket.on("ReceiveMessageFromGroupFailure", (questionNumber) => {

                    this.$store.dispatch('UpdateProgress', {
                        module: 2,
                        group: 1,
                        problem: questionNumber
                    })

                    router.push({
                        path: '/higher/question',
                        query: {
                            num: questionNumber
                        }
                    })
                });

                // 狭路相逢
                this.$socket.on("ReceiveMessageForType3", (questionNumber) => {

                    this.$store.dispatch('UpdateProgress', {
                        module: 3,
                        group: 1,
                        problem: questionNumber
                    })

                    router.push({
                        path: '/narrow/question',
                        query: {
                            num: questionNumber
                        }
                    })
                });
            },

            // SSE
            sse() {
                this.start()
                this.receiveMessage()
            },

            initProgress() {
                getProgress().then(res => {
                    this.$store.dispatch('UpdateProgress', {
                        module: res.moduleType,
                        group: res.subType,
                        problem: res.number
                    })
                })
            },
        },
        created() {
            // this.start()
            // this.receiveMessage()
        },
        mounted() {

            if(getToken()) {
                // 初始化
                this.initProgress()

                if (!this.$socket) {
                    this.sse()
                }
            }
        }
    }
</script>

<style lang="less">
    /*@import "./assets/css/style";*/
</style>
