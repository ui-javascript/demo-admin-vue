<template>
    <div class="sliderButton mt-10">

        <div class="stack-wrapper">
            <m-picker-tantan
                    ref="stack"
                    :pages="someList"
                    :stackinit="stackinit">
            </m-picker-tantan>
        </div>

        <div class="controls">
            <button @click="prev" class="button"><i class="prev"></i><span class="text-hidden">prev</span></button>
            <button @click="next" class="button"><i class="next"></i><span class="text-hidden">next</span></button>
        </div>

    </div>
</template>

<script>
    import MPickerTantan from "~/model/tantan/PickerTanTan";

    import img1 from "../img/1.png"
    import img2 from "../img/2.png"
    import img3 from "../img/3.png"
    import img4 from "../img/4.png"
    import img5 from "../img/5.png"
    import img6 from "../img/6.png"
    import img7 from "../img/7.png"

    export default {
        data() {
            return {
                someList: [],
                stackinit: {
                    visible: 3
                }
            }
        },
        mounted() {
            let that = this
            // setTimeout(function () {
            that.someList = [
                {html: `<img src="${img1}" alt="01">`},
                {html: `<img src="${img2}" alt="02">`},
                {html: `<img src="${img3}" alt="01">`},
                {html: `<img src="${img4}" alt="01">`},
                {html: `<img src="${img5}" alt="05">`},
                {html: `<img src="${img6}" alt="06">`},
                {html: `<img src="${img7}" alt="07">`}
            ]
            // }, 2000)
        },
        components: {
            MPickerTantan
        },
        methods: {
            prev() {
                this.$refs.stack.$emit('prev')
            },
            next() {
                this.$refs.stack.$emit('next')
            }
        }
    }
</script>

<style scoped>
    body {
        background: #565f77 none repeat scroll 0 0;
        color: #000;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        font-size: 14px;
        margin: 0;
        padding: 0;
        /* position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;*/

        /*bug:当内容超过一屏时，滚动条需要默认显示*/
        overflow-y: scroll;
        width: 100%;
        height: 100%;
        position: absolute;
    }

    h3 {
        font-size: 20px;
        margin: 0;
        margin-top: 25px;
    }

    @-webkit-keyframes loading-7 {
        0% {
            margin-bottom: 0
        }
        50% {
            margin-bottom: 20px;
        }
        100% {
            margin-bottom: 0px;
        }
    }

    .loadingDot i {
        display: inline-block;
        margin-left: 5px;
        background: rgb(27, 188, 155);
        width: 12px;
        height: 12px;
        border-radius: 50%;
    }

    .loadingDot i:nth-child(1) {
        -webkit-animation: loading-7 .7s ease-in 0s infinite;
    }

    .loadingDot i:nth-child(2) {
        -webkit-animation: loading-7 .7s ease-in 0.15s infinite;
    }

    .loadingDot i:nth-child(3) {
        -webkit-animation: loading-7 .7s ease-in 0.3s infinite;
    }

    .loadingDot i:nth-child(4) {
        -webkit-animation: loading-7 .7s ease-in 0.45s infinite;
    }

    *,
    *:after,
    *::before {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        outline: none;
    }

    .main {
        display: flex; /*Flex布局*/
        display: -webkit-flex; /* Safari */
        align-items: center; /*指定垂直居中*/
        justify-content: center; /*指定水平居中*/
        height: 100%;
    }

    button::-moz-focus-inner, input[type="reset"]::-moz-focus-inner, input[type="button"]::-moz-focus-inner, input[type="submit"]::-moz-focus-inner, input[type="file"] > input[type="button"]::-moz-focus-inner {
        border: none;
    }

    :focus {
        outline: 0;
    }

    .sliderButton {
        text-align: center;
    }

    .sliderButton button {
        display: inline-block;
        background: #fff;
        border-radius: 3px;
        /*width: 100px;*/
        height: 30px;
        border: 1px solid #333;
        line-height: 30px;
        margin-left: 10px;
        padding: 0 15px;
        margin-top: 10px;
    }

    .stack-wrapper {
        margin: 0 auto;
        position: relative;
        z-index: 1000;
        width: 320px;
        height: 320px;
        padding: 0;
        list-style: none;
        pointer-events: none;
    }

    .controls {
        position: relative;
        width: 200px;
        text-align: center;
        display: flex; /*Flex布局*/
        display: -webkit-flex; /* Safari */
        justify-content: space-around;
        margin: 0 auto;
        margin-top: 50px
    }

    .controls .button {
        border: none;
        background: none;
        position: relative;
        display: inline-block;
        cursor: pointer;
        font-size: 16px;
        width: 50px;
        height: 50px;
        z-index: 100;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        border-radius: 50%;
        background: #fff;
    }

    .button .next {
        display: inline-block;
        width: 10px;
        height: 5px;
        background: rgb(129, 212, 125);
        line-height: 0;
        font-size: 0;
        vertical-align: middle;
        -webkit-transform: rotate(45deg);
        left: -5px;
        top: 2px;
        position: relative;
    }

    .button .next:after {
        content: '/';
        display: block;
        width: 20px;
        height: 5px;
        background: rgb(129, 212, 125);
        -webkit-transform: rotate(-90deg) translateY(-50%) translateX(50%);
    }

    .button .prev {
        display: inline-block;
        width: 20px;
        height: 5px;
        background: rgb(230, 104, 104);
        line-height: 0;
        font-size: 0;
        vertical-align: middle;
        -webkit-transform: rotate(45deg);
    }

    .button .prev:after {
        content: '/';
        display: block;
        width: 20px;
        height: 5px;
        background: rgb(230, 104, 104);
        -webkit-transform: rotate(-90deg);
    }

    .controls .text-hidden {
        position: absolute;
        overflow: hidden;
        width: 0;
        height: 0;
        color: transparent;
        display: block;
    }
</style>