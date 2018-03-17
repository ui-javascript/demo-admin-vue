<template>
    <div>

        <div id="paper-back">
            <nav>
                <div class="close"></div>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Our Work</a>
                <a href="#">Contact</a>
            </nav>
        </div>


        <div id="paper-window">
            <div id="paper-front">
                <div class="hamburger"><span></span></div>

                <div id="container">
                    <section>
                        这是内容
                    </section>
                    <section></section>
                    <section></section>
                    <section></section>
                </div>

            </div>
        </div>


    </div>
</template>

<script>
    import Lib from 'assets/js/Lib';
    import $ from 'jquery'

    export default {
        mounted() {
            var paperMenu = {
                $window: $('#paper-window'),
                $paperFront: $('#paper-front'),
                $hamburger: $('.hamburger'),

                offset: 1800,
                pageHeight: $('#paper-front').outerHeight(),

                open: function () {
                    this.$window.addClass('tilt');
                    this.$hamburger.off('click');
                    $('#container, .hamburger').on('click', this.close.bind(this));
                    this.hamburgerFix(true);
                },

                close: function () {
                    this.$window.removeClass('tilt');
                    $('#container, .hamburger').off('click');
                    this.$hamburger.on('click', this.open.bind(this));
                    this.hamburgerFix(false);
                },

                updateTransformOrigin: function () {
                    let scrollTop = this.$window.scrollTop();
                    let equation = (scrollTop + this.offset) / this.pageHeight * 100;
                    this.$paperFront.css('transform-origin', 'center ' + equation + '%');
                },

                hamburgerFix: function (opening) {
                    if (opening) {
                        $('.hamburger').css({
                            position: 'absolute',
                            top: this.$window.scrollTop() + 30 + 'px'
                        });
                    } else {
                        setTimeout(function () {
                            $('.hamburger').css({
                                position: 'fixed',
                                top: '30px'
                            });
                        }, 300);
                    }
                },

                bindEvents: function () {
                    this.$hamburger.on('click', this.open.bind(this));
                    $('.close').on('click', this.close.bind(this));
                    this.$window.on('scroll', this.updateTransformOrigin.bind(this));
                },

                init: function () {
                    this.bindEvents();
                    this.updateTransformOrigin();
                }
            };
            paperMenu.init();
        }
    }

</script>

<style scoped>


    #paper-back {
        width: 100%;
        height: 100vh;
        background-color: #243040;
        position: fixed;
        top: 0;
        left: 0;
        font-size: 33px;
    }

    #paper-back nav {
        padding: 120px 34px;
    }

    #paper-back nav a {
        display: block;
        margin-bottom: 25px;
        text-decoration: none;
        color: rgba(255, 255, 255, 0.7);
    }

    #paper-window {
        height: 100vh;
        width: 100vw;
        position: relative;
        overflow-x: hidden;
        overflow-y: scroll;
        z-index: 2;
    }

    #paper-window.tilt {
        overflow: hidden;
        pointer-events: none;
    }

    #paper-window.tilt #paper-front {
        transform: rotate(10deg) translateZ(0);
    }

    #paper-front {
        pointer-events: auto;
        position: relative;
        z-index: 3;
        background-color: white;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
        transform-origin: center 70%;
        transition: all 0.3s ease;
    }

    #container section {
        height: 600px;
        text-align: center;
    }

    #container section:first-of-type {
        padding-top: 10vh;
    }

    #container section:first-of-type h1 {
        font-size: 45px;
    }

    #container section:first-of-type p {
        font-size: 25px;
    }

    @media (max-width: 600px) {
        #container section:first-of-type {
            padding-top: 15vh;
        }

        #container section:first-of-type h1 {
            font-size: 30px;
        }

        #container section:first-of-type p {
            font-size: 18px;
        }
    }

    #container section:nth-of-type(2n) {
        background-color: #edf1f5;
    }

    .hamburger {
        position: fixed;
        z-index: 4;
        top: 30px;
        left: 30px;
        width: 45px;
        height: 34px;
        cursor: pointer;
        user-select: none;
    }

    .hamburger span {
        position: relative;
    }

    .hamburger span, .hamburger span:before, .hamburger span:after {
        display: block;
        width: 45px;
        height: 6px;
        background-color: #243040;
        border-radius: 2px;
    }

    .hamburger span:before, .hamburger span:after {
        content: '';
        position: absolute;
    }

    .hamburger span:before {
        bottom: -14px;
    }

    .hamburger span:after {
        bottom: -28px;
    }

    .close {
        position: fixed;
        top: 30px;
        left: 30px;
        width: 45px;
        height: 34px;
        cursor: pointer;
    }

    .close-z-index {
        z-index: 10;
    }

    .close:before, .close:after {
        content: '';
        position: absolute;
        display: block;
        width: 45px;
        height: 6px;
        top: 50%;
        background-color: white;
        border-radius: 2px;
    }

    .close:before {
        transform: translateY(-50%) rotate(45deg);
    }

    .close:after {
        transform: translateY(-50%) rotate(-45deg);
    }

</style>
