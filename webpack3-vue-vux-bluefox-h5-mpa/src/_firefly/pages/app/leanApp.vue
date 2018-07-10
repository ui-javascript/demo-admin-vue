<template>
    <div>
        <nav-lean>
            <section>
                内容1
            </section>
            <section>
                内容2
            </section>
            <section>
                内容3
            </section>
            <section>
                内容4
            </section>
        </nav-lean>
    </div>
</template>

<script>

    import NavLean from '~/nav/Lean';

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
    section {
        height: 160px;
        line-height: 160px;
        text-align: center;
        vertical-align: middle;
    }
</style>
