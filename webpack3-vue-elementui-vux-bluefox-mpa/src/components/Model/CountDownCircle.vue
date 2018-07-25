<!--
    https://www.zhangxinxu.com/wordpress/2015/07/svg-circle-loading/
    寥寥数行SVG实现圆环loading或倒计时效果
-->

<template>
    <div id="timeCountX" ref="timeCountX" class="time-count-x" @click="this.start">
        <svg width="120" height="120" viewBox="0 0 440 440" class="center">
            <defs>
                <linearGradient x1="1" y1="0" x2="0" y2="0" id="gradient1">
                    <stop offset="0%" stop-color="#e52c5c"></stop>
                    <stop offset="100%" stop-color="#ab5aea"></stop>
                </linearGradient>
                <linearGradient x1="1" y1="0" x2="0" y2="0" id="gradient2">
                    <stop offset="0%" stop-color="#4352f3"></stop>
                    <stop offset="100%" stop-color="#ab5aea"></stop>
                </linearGradient>
            </defs>
            <g transform="matrix(0,-1,1,0,0,440)">
                <circle cx="220" cy="220" r="170" stroke-width="50" stroke="#f0f1f5" fill="none"
                        stroke-dasharray="1069 1069"></circle>
                <circle cx="220" cy="220" r="170" stroke-width="50" stroke="url('#gradient1')" fill="none"
                        stroke-dasharray="1069 1069"></circle>
                <circle cx="220" cy="220" r="170" stroke-width="50" stroke="url('#gradient2')" fill="none"
                        stroke-dasharray="534.5 1069"></circle>
            </g>
        </svg>

        <span id="timeSecond" class="time-second">{{ timeSecond }}</span>
    </div>

</template>


<script>

    export default {
        data() {
            return {
                timeSecond: 10,
                perimeter: 0,
                // 计时器
                timerTimeCount: null,
                eleCircles: null,
                eleTimeSec: null,
            }
        },
        methods: {
            ready() {
                this.perimeter = Math.PI * 2 * 170
                this.eleCircles = document.querySelectorAll("#timeCountX circle")
                this.eleTimeSec = document.getElementById("timeSecond")

                // this.b = 1000
            },

            circleInit() {
                if (this.eleCircles[1]) {
                    this.eleCircles[1].setAttribute("stroke-dasharray", "1069 1069")
                }
                if (this.eleCircles[2]) {
                    this.eleCircles[2].setAttribute("stroke-dasharray", this.perimeter / 2 + " 1069")
                }
                this.timeSecond = 0
            },

            fnTimeCount(b) {
                this.ready()

                if (this.timerTimeCount) {
                    return
                }
                var b = b || 10;

                var _self = this
                var a = function () {
                    var c = b / 10;
                    if (_self.eleCircles[1]) {
                        _self.eleCircles[1].setAttribute("stroke-dasharray", _self.perimeter * c + " 1069")
                    }
                    if (_self.eleCircles[2] && b <= 5) {
                        _self.eleCircles[2].setAttribute("stroke-dasharray", _self.perimeter * c + " 1069")
                    }
                    if (_self.eleTimeSec) {
                        _self.timeSecond = b
                    }
                    b--;

                    if (b < 0) {
                        clearInterval(_self.timerTimeCount);
                        _self.timerTimeCount = null;

                        console.log("时间到！");

                        _self.circleInit()
                    }
                }

                a()
                this.timerTimeCount = setInterval(a, 1000)
            },
            start() {
                this.ready()
                this.fnTimeCount()
            }
        },
        mounted() {
            this.ready()
            this.fnTimeCount()
        }
    }
</script>


<style scoped>
    svg {
        transform: rotate(-0.05deg);
    }

    circle {
        transition: stroke-dasharray .2s;
    }

    .time-count-x {
        position: relative;
        width: 120px;
        height: 120px;
        display: inline-block;
        text-align: center;
        vertical-align: middle;
    }

    .time-second {
        display: inline-block;
        position: absolute;
        top: 55px;
        text-align: center;
    }
</style>