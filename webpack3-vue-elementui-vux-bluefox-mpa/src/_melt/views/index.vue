<template>
    <div>
        <nav-lean
            :nav="nav"
        >
            <section id="home" class="section">
                内容1
                <!--<count-to-->
                        <!--:duration="800"-->
                        <!--:endVal="123123.22323"-->
                        <!--:decimals="5"-->
                        <!--:autoplay="true"-->
                        <!--:useEasing=false-->
                <!--&gt;</count-to>-->
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

    import NavLean from '~/layout/Nav/NavLean';
    import CountTo from '~/effects/CountTo';

    export default {
        components: {
            NavLean,
            CountTo
        },
        data() {
            return {
                nav: [
                    { title: '模型', link: 'model.html' },
                    { title: '特效', link: 'effects.html' },
                    { title: '布局', link: 'layout.html' },
                    { title: '工具', link: 'toolbox.html' },
                ]
            }
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
