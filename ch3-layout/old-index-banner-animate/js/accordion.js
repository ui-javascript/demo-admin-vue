/**
 *  Plugin: Accordion
 *  Developerd by: Milos Djordjevic [milos.djordjevic@online.rs]
 */

(function( $ ) {

  $.fn.mls_accordion = function() {
  
  	var $this = $(this);

	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordion_button').click(function(event) {

		event.preventDefault();
		if($(this).find("span").hasClass("closed")){
			//REMOVE THE ON CLASS FROM ALL BUTTONS
			$(this).find("span").removeClass('closed'); // Plus - otvaranje
		}
		else
		{
			//REMOVE THE ON CLASS FROM ALL BUTTONS
			$(this).find("span").removeClass('opened'); // minus - zatvaranje
		}
		
		$('.accordion_button span').removeClass('opened');
		  
		//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	 	$this.find('.accordion_item_content').slideUp(400, 'easeInExpo');
   
		//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
		if($(this).next().is(':hidden') == true) {
			  //ADD THE ON CLASS TO THE BUTTON
			  $(this).find("span").addClass('opened'); // zatvoren
			  
			  //OPEN THE SLIDE
			  $(this).next().slideDown(500, 'easeOutExpo');
		 } else{
		 	$(this).find("span").addClass('closed'); // otvoren
		 }
	 });
	  
	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordion_button').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	/*** END REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	
	/********************************************************************************************************************
	CLOSES ALL S ON PAGE LOAD
	********************************************************************************************************************/	
	$('.accordion_item_content').hide();
  };
})( jQuery );