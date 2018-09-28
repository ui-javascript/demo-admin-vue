
/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

  
    $('.nav li > a').click(function(){
      $('.nav li > a').removeClass('active');
      $(this).addClass('active');
    })


    $('.page-section, .intro, .separator-section').mouseenter(function(){
        var sectionId = $(this).attr('id');
        $('.nav li > a').removeClass('active');
        $('#'+sectionId+'-linker').addClass('active');
    });


});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







  

