jQuery(function () {
  
  var msie6 = jQuery.browser == 'msie' && jQuery.browser.version < 7;
  
  if (!msie6) {
    var top = jQuery('#options').offset().top - parseFloat(jQuery('#options').css('margin-top').replace(/auto/, 0));
    jQuery(window).scroll(function (event) {
      
      var y = jQuery(this).scrollTop();
      
      
      if (y >= top) {
        
        jQuery('#options').addClass('fixed');
      } else {
        
        jQuery('#options').removeClass('fixed');
      }
    });
  }  
});