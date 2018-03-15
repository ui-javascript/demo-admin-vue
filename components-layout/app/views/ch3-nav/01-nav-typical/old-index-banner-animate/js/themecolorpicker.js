if($.cookie("css")) {
			$("link.changeme").attr("href",$.cookie("css"));
		}
		$(document).ready(function() {
			$("#nav li a").click(function() {
				$("link.changeme").attr("href",$(this).attr('rel'));
				$.cookie("css",$(this).attr('rel'), {expires: 365, path: '../../default.htm'});
				return false;
			});
		});



jQuery(document).ready(function()
{
    $("#theme-tool-container").olsColorThemePicker();

});

/**
  Plugin for Theme Color Picker
*/

(function($) {

  $.fn.olsColorThemePicker = function(options) {

     var defaults = {
        panel_position : 'hide',
        left : -125 //Move toolbar outside the screen
     };

     var settings = $.extend({}, defaults, options);

     if(!$.cookie("css")){
         $.cookie("css", $(this).attr('rel'), {expires: 365, path: '../../default.htm'});
     }


    // Do your awesome plugin stuff here
    return this.each(function() {

      // Pointer to the Container where are colors
       var $this = $(this);
       var hide = false;

       if($this.css('left') == '-125px'){
           hide = true;
       }

       var toggler = $this.find(".theme-tool-switcher-toggler");

       toggler.click(function(){
           if(hide){
               $this.animate({ left: '+=125'}, 1000);
               hide= false;
           }else{
               $this.animate({ left: '-=125'}, 1000);
               hide=true;
           }

           return false;
       });

       var color_buttons = $this.find(".theme-switcher-color-sheme li a");

       color_buttons.click(function(){
           $("link.changeme").attr("href",$(this).attr('rel'));
           $.cookie("css",$(this).attr('rel'), {expires: 365, path: '../../default.htm'});
           return false;
       });

       //#E3EEF2



    }); // main each loop
  }; // Plugin Ends Here
})( jQuery );