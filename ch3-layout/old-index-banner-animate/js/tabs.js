/**
 *  Plugin: Tabs
 *  Developerd by: Milos Djordjevic [milos.djordjevic@online.rs]
 */

(function( $ ) {

  $.fn.mls_tabs = function(options) {
    	
    	$this = $(this); //self reference

    	//Iterate thrue all tabs
		return this.each(function () {

            var tab_wiget  = $(this); //main widget box
            var tabs = tab_wiget.find("ul:first li"); //linkovi u navigaciji
	  		var current_tab = tabs[0]; //prva stavka u nav

	  		//Mark Current/First Tab
	  		$(current_tab).find("a:first").addClass("tab-curent");

	  		tabs.each(function(index) { //Iterate over single tabs
	  			/**
	  			 * Add Events to an elements
	  			 */
				$(this).click(function(event)
				{
					event.preventDefault();
					//Deselekturj sve linkove u nav	
					$(tabs).find("a").removeClass("tab-curent");

					//get current link
					curr_link = $(this).find("a");//tabs-1
					curr_link.addClass("tab-curent");

					//Get content from tab
					$(this).parent().parent().children('div').hide();

					//console.log($(curr_link).attr('rel'));
					$(this).parent().parent().find("div."+$(curr_link).attr('rel')).fadeIn(1000, 'easeOutCubic');//css('display', 'inline');
				});				  			 
			});
        });    	
  };
})( jQuery );