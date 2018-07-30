<template>
    <div>
        <router-view keep-alive></router-view>
    </div>
</template>

<script>
    // import { getInfo } from "../../api/login"
    import { getToken } from './router/_auth'
    import { getProgress } from "./api/questions"


    export default {

        data() {
            return {
                connection: null,
                //url: "http://192.168.1.149:5058/chatHub",
                //url:"http://localhost:51782/chatHub",
                url:"http://192.168.1.149:5060/notificationhub"
            }
        },
        methods: {
            initProgress() {
                getProgress().then(res => {
                    this.$store.dispatch('UpdateProgress', {
                        module: res.moduleType,
                        group: res.subType,
                        problem: res.number
                    })
                })

            },

            // 开始SSE
            start() {
                this.connection = new signalR.HubConnectionBuilder()
                    .withUrl(this.url,{ accessTokenFactory: () => getToken()})
                    .configureLogging(signalR.LogLevel.Information)
                    .build();
                this.connection.start().catch(err => console.error(err.toString()));
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
                this.connection.on("ReceiveMessage", (subType) => {
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
                this.connection.on("ReceiveMessageFromGroup", (questionNumber) => {
                    console.log(problemType, questionNumber);

                    // debugger
                    router.push({
                        path: '/seconds/question',
                        query: {
                            subType: questionNumber
                        }
                    })
                });

                // 狭路相逢
                this.connection.on("ReceiveMessageForType3", (questionNumber) => {

                    // debugger;
                    // console.log(questionNumber);
                    router.push({
                        path: '/seconds/question'
                    })
                });
            },
        },
        created() {
            // this.start()
            // this.receiveMessage()
        },
        mounted() {
            this.initProgress()

            this.start()
            this.receiveMessage()
        }
    }
</script>

<style lang="less">
    /*@import "./assets/css/style";*/
</style>
