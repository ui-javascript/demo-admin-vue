<template>
    <div>
        <nav-lean>
            <section id="home" class="section">
                <count-to
                        :duration="800"
                        :endVal="123123.22323"
                        :decimals="5"
                        :autoplay="true"
                        :useEasing=false
                ></count-to>
            </section>
            <section id="about" class="section">
                内容2
            </section>
            <section id="work" class="section">
                内容3
            </section>
            <section id="contact" class="section">
                内容4
            </section>
        </nav-lean>
    </div>
</template>

<script>

    import NavLean from '~/l/Nav/NavLean';
    import CountTo from '~/e/CountTo';

    export default {
        components: {
            NavLean,
            CountTo
        },
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    .section {
        height: 560px;
        line-height: 560px;
        text-align: center;
        vertical-align: middle;
    }
</style>
