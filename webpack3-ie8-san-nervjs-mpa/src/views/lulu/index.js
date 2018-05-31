// require('@/lulu-ui/theme/peak/css/common/ui.css')
// require("@/assets/lulu/theme/peak/css/common/ui.css")

import seajs from "seajs"
import './index.styl'

seajs.config({
  // base: "//qidian.gtimg.com/lulu/theme/peak/js",
  base: "../static/lulu/theme/peak/js",
}).use(['common/ui/Checkbox', 'common/ui/Range'], function () {
  console.log('hello');

  // hello 我也不知道怎么办好了
  $('#checkbox1').click(function () {
    console.log('我被电击了啊哈');
  });

  $("#opacityRange").on('change', function() {
    $(this).siblings('span').css('opacity', this.value / 100);
  }).range({
    tips: function(value) {
      return value + '%';
    }
  });

  // if (!window.addEventListener) {
  //     require.async('common/ui/Radio');
  //     require.async('common/ui/Checkbox');
  // }
});
