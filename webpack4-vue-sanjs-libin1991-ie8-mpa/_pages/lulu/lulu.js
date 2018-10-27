// 提供兼容
import 'es5-polyfill'
import 'object-create-ie8';

// import './css/lulu.less'
// require('./js/hello')

// import $ from 'jquery'
// import seajs from "seajs"

// seajs.config({
//     base: "https://qidian.gtimg.com/lulu/theme/peak/js",
//     // base: "/static/lulu/theme/peak/js",
// }).use(['common/ui/Checkbox', 'common/ui/Range'], function () {
//     console.log('hello lulu');
//     console.log('阴天说什么')
//
//     // hello 我也不知道怎么办好了
//     $('#checkbox1').click(function () {
//         console.log('我被电击了啊哈哈');
//     });
//
//     $("#opacityRange").on('change', function() {
//         $(this).siblings('span').css('opacity', this.value / 100);
//     }).range({
//         tips: function(value) {
//             return value + '%';
//         }
//     });
//
//     // 兼容IE8
//     if (!window.addEventListener) {
//         require.async('common/ui/Radio')
//         require.async('common/ui/Checkbox')
//         // require('common/ui/Radio')
//         // require('common/ui/Checkbox')
//     }
//
// });

