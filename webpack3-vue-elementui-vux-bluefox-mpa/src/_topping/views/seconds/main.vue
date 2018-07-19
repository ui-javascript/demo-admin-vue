<template>
    <div>
        <header-exit></header-exit>

        <div class="container">
            <div class="row">&nbsp;</div>
            <div class="row">
                <div class="col-6">&nbsp;</div>
                <div class="col-6">
                    <div>
                        User..........<input type="text" id="userInput" />
                    </div>

                    <div class="mt-10">
                        Message...<input type="text" id="messageInput" />
                    </div>

                    <div class="mt-10">
                        <!-- 使用$event传递 -->
                        <button type="button" id="sendButton" value="Send Message" @click.prevent="sendMessage($event)" >发送消息</button>
                    </div>

                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <hr />
                </div>
            </div>

            <div class="row">
                <div class="col-6">&nbsp;</div>
                <div class="col-6">
                    <ul id="messagesList"></ul>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    // require('../../../../static/js/signalr/signalr.min')
    // import  '../../../../static/js/signalr/signalr.min'
    // import "@aspnet/signalr"
    // import { SignalRJS } from 'signalrjs'
    // import from 'signalrjs'


    // import { getRap } from '../../api/test'

    import headerExit from "../snippets/headerExit"

    export default {
        components: {
          headerExit
        },
        data() {
            return {
                connection: null,
                url: "http://192.168.1.149:5058/chatHub"
            }
        },
        methods: {
            ready() {
                this.init()
                this.receiveMessage()
                this.start()
            },
            init() {
                this.connection = new signalR.HubConnectionBuilder()
                    .withUrl(this.url)
                    .configureLogging(signalR.LogLevel.Information)
                    .build();
            },
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
            // 接收消息
            receiveMessage() {
                this.connection.on("ReceiveMessage", (user, message) => {
                    const msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                    const encodedMsg = user + " says " + msg;
                    const li = document.createElement("li");
                    li.textContent = encodedMsg;
                    document.getElementById("messagesList").appendChild(li);
                });
            }
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
    .mmt {
        margin-top: 20px;
    }
</style>