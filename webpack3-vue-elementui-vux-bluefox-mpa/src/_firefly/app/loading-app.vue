<template>
    <div>
        <loading-simple :show="true"></loading-simple>
    </div>
</template>

<script>
    import LoadingSimple from '~/Layout/LoadingSimple'

    export default {
        components: {
            LoadingSimple
        }
    }

    // import LoadingComponent from '../components/LoadingSimple.vue'
    //
    // let $vm
    //
    // export default {
    //     install(Vue, options) {
    //         if (!$vm) {
    //             const LoadingPlugin = Vue.extend(LoadingComponent);
    //
    //             $vm = new LoadingPlugin({
    //                 el: document.createElement('div')
    //             });
    //
    //             document.body.appendChild($vm.$el);
    //         }
    //
    //         $vm.show = false;
    //
    //         let loading = {
    //             show(txt) {
    //                 $vm.show = true;
    //
    //                 if (txt.trim()) {
    //                     $vm.text = txt;
    //                 }
    //             },
    //             hide() {
    //                 $vm.show = false;
    //             }
    //         }
    //
    //         if (!Vue.$loading) {
    //             Vue.$loading = loading;
    //         }
    //
    //         Vue.mixin({
    //             created() {
    //                 this.$loading = Vue.$loading;
    //             }
    //         });
    //     }
    // }

</script>