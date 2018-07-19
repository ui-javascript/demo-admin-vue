<template>
    <div class="mmt">
        <div class="container">
            <div class="row">&nbsp;</div>
            <div class="row">
                <div class="col-6">&nbsp;</div>
                <div class="col-6">
                    User..........<input type="text" id="userInput" />
                    <br />
                    Message...<input type="text" id="messageInput" />
                    <input type="button" id="sendButton" value="Send Message" />
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
    // import { getRap } from '../../api/test'
    // import { SignalRJS } from 'signalrjs'

    // import from 'signalrjs'

    export default {

        data() {
            return {

            }
        },
        methods: {

        },
        mounted() {
            // getRap()
            //     .then(res => console.log(res))
            //     .catch(() => {
            //
            //     })

            const connection = new signalR.HubConnectionBuilder()
                .withUrl("http://192.168.1.149:5058/chatHub")
                .configureLogging(signalR.LogLevel.Information)
                .build();

            connection.on("ReceiveMessage", (user, message) => {
                const msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                const encodedMsg = user + " says " + msg;
                const li = document.createElement("li");
                li.textContent = encodedMsg;
                document.getElementById("messagesList").appendChild(li);
            });

            connection.start().catch(err => console.error(err.toString()));

            document.getElementById("sendButton").addEventListener("click", event => {
                const user = document.getElementById("userInput").value;
                const message = document.getElementById("messageInput").value;
                connection.invoke("SendMessage", user, message).catch(err => console.error(err.toString()));
                event.preventDefault();
            });

        }
    }
</script>

<style lang="less">
    .mmt {
        margin-top: 20px;
    }
</style>