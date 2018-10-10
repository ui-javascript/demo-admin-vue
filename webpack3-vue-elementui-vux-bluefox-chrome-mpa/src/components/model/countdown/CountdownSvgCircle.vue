<!--
    https://codepen.io/straybugs/pen/GvOxdM?editors=1010
    原生 https://codepen.io/zmayor/pen/dWGgxJ
-->

<template>
    <div>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
             :width="width"
             :height="width"
        >
            <circle cx="100" cy="100" :r="100 - border / 2"
                    fill="none"
                    opacity="0.4"
                    :stroke="color"
                    :stroke-width="border"
            />
            <circle cx="100" cy="100" :r="100 - border / 2"
                    fill="none"
                    transform="rotate(270,100,100)"
                    :stroke="color"
                    :stroke-width="border"
                    :stroke-dasharray="dashLen"
                    :stroke-dashoffset = "dashOffset"
                    style="transition: stroke-dashoffset 0.4s"
            />
            <text x="100" y="100" text-anchor="middle"
                  :font-size="fontSize + 5"
                  :fill="color"
            >
                {{ countDown }}
            </text>
            <text x="100" y="150" text-anchor="middle"
                  :font-size="fontSize"
                  fill="#d4d4d4"
            >
                剩余
            </text>
        </svg>
    </div>
</template>

<script>
    export default {
        name: "CountdownSvgCircle",
        // propsData: {
        //     setTimer: 20 * 1000
        // },
        props: {
            setTimer: {
                type: Number,
                required: true
            },
            width: {
                type: Number,
                default: 80
            },
            border: {
                type: Number,
                default: 8
            },
            color: {
                type: String,
                default: '#fcaa55'
            },
            fontSize: {
                type: Number,
                default: 30
            },
            endCallBack: {
                type: String
            }
        },
        data () {
            return {
                timeLeft: 0,
                dashLen: 0,
                interval: null
            }
        },
        computed: {
            countDown () {
                let time = this.timeLeft
                if (time <= 0) {
                        return '00:00:00'
                } else {
                    let result = []
                    result.push(Math.floor(time / 3.6e+6))
                    result.push(Math.floor(time % 3.6e+6 / 60000))
                    result.push(Math.floor(time % 60000 / 1000))
                    return result.map(x => x < 10 ? '0' + x : x).join(':')
                }
            },
            dashOffset () {
                return this.dashLen - this.timeLeft / this.setTimer * this.dashLen
            }
        },
        methods: {
            clear() {
                clearInterval(this.interval);
                this.interval = null;
            },
            init() {
                this.timeLeft = this.setTimer
                this.dashLen = (100 - this.border / 2) * Math.PI * 2
                this.lastDate = Date.now()

                // 定时器
                this.interval = setInterval(() => {
                    let curDate = Date.now()
                    let diff = Math.round((curDate - this.lastDate) / 1000) * 1000
                    this.timeLeft -= diff
                    if (this.timeLeft <= 0) {
                        clearInterval(this.interval)

                        // 回调
                        if (this.endCallBack) {
                            this.$emit(this.endCallBack)
                        }
                    }
                    if (diff >= 1000) {
                        this.lastDate = curDate
                    }
                }, 1000)
            },
            ready() {
                this.clear()
                this.init()
            }
        },
        watch: {
          setTimer(curVal, oldVal) {
              this.ready()
          }
        },
        beforeDestroy() {
            this.clear()
        },
        mounted () {
            this.ready()
        }
    }
</script>

<style scoped>

</style>