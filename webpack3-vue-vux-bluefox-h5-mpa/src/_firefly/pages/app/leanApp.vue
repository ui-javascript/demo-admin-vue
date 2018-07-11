<template>
    <div>
        <nav-lean>
            <section id="home" class="section">
                内容1
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

    import NavLean from '~/layout/NavLean';

    export default {
        components: {
            NavLean
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
