<template>
    <div class="ruleIndex">
        <header-exit></header-exit>


        <div class="container">
            <div>
                User..........<input type="text" id="userInput"/>
            </div>

            <div class="mt-10">
                Message...<input type="text" id="messageInput"/>
            </div>

            <div class="mt-10">
                <!-- 使用$event传递 -->
                <button type="button" id="sendButton" value="Send Message" @click.prevent="sendMessage($event)">
                    发送消息
                </button>
            </div>

            <ul id="messagesList"></ul>
        </div>

        <router-view keep-alive></router-view>


    </div>
</template>

<script>
    // require('../../../../static/js/signalr/signalr.min')
    // import  '../../../../static/js/signalr/signalr.min'
    // import "@aspnet/signalr"
    // import { SignalRJS } from 'signalrjs'
    // import from 'signalrjs'
    // import {getRap} from '../../api/test'

    import headerExit from "../snippets/header-exit"
    // import CheckboxList from '../../components/CheckboxList'

    export default {
        components: {
            headerExit,
            // CountdownCircle,
            // CheckboxList
        },
        data() {
            return {
                connection: null,
                url: "http://192.168.1.149:5058/chatHub",
            }
        },
        methods: {
            ready() {
                this.init()
                this.receiveMessage()
                this.start()
            },
            // 初始化
            init() {
                this.connection = new signalR.HubConnectionBuilder()
                    .withUrl(this.url)
                    .configureLogging(signalR.LogLevel.Information)
                    .build();
            },
            // 开始SSE
            start() {
                this.connection.start().catch(err => console.error(err.toString()));
            },
            sendMessage(e) {
                // @deprecated
                // e.preventDefault();

                const user = document.getElementById("userInput").value;
                const message = document.getElementById("messageInput").value;
                this.connection.invoke("SendMessage", user, message).catch(err => console.error(err.toString()));
            },
            // 接收消息绑定
            receiveMessage() {
                this.connection.on("ReceiveMessage", (user, message) => {
                    const msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                    const encodedMsg = user + " says " + msg;
                    const li = document.createElement("li");
                    li.textContent = encodedMsg;
                    document.getElementById("messagesList").appendChild(li);
                });
            },
        },
        mounted() {
            // getRap()
            //     .then(res => console.log(res))
            //     .catch(() => {
            //
            //     })

            this.ready()

        }
    }
</script>

<style lang="less">


</style>