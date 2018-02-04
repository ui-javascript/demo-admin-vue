jQuery(document).ready(function()
{
	// INITIALIZE DROPDOWN MENU
	jQuery('.dd-menu li:has(ul) > a').addClass('dd-submenu-title').append('<span class="dd-arrow"></span>');
	jQuery('.dd-menu li').hover(function(){
			// HOVER IN HANDLER

			jQuery('ul:first', this).css({visibility: "visible",display: "none"}).slideDown(250);
			var path_set = jQuery(this).parents('.dd-menu li').find('a:first');
			jQuery(path_set).addClass('dd-path');
			jQuery('.dd-menu li a.dd-path').not(path_set).removeClass('dd-path');

		},function(){
			// HOVER OUT HANDLER
			jQuery('ul:first', this).css({visibility: "hidden"});
	});

	jQuery('.dd-menu').hover(function() {
			// HOVER IN HANDLER

		}, function() {
			// HOVER OUT HANDLER
			jQuery('a.dd-path', this).removeClass('dd-path');
	});


	// REPLACE SUBMIT BUTTONS WITH SOMETHING EASIER TO STYLE:)
	jQuery('#submit-contact').each(function() {

		var val = jQuery(this).val();
		var a = jQuery('<a class="button large"><span> ' + val + ' </span></a>');
		var input = jQuery(this);

		input.after(a);
		input.hide();

		a.click(function() {
			input.trigger('click');
		});
	});

	jQuery('#submit-search').each(function() {

		var val = jQuery(this).val();
		var a = jQuery('<a class="button-red small"><span> ' + val + ' </span></a>');
		var input = jQuery(this);

		input.after(a);
		input.hide();

		a.click(function() {
			input.trigger('click');
		});
	});

	jQuery('#submit-newsletter').each(function() {

		var val = jQuery(this).val();
		var a = jQuery('<a>' + val + '</a>');
		var input = jQuery(this);

		input.after(a);
		input.hide();

		a.click(function() {
			input.trigger('click');
		});
	});

	jQuery('#submit-contact-page').each(function() {

		var val = jQuery(this).val();
		var a = jQuery('<a class="button large"><span> ' + val + ' </span></a>');
		var input = jQuery(this);

		input.after(a);
		input.hide();

		a.click(function() {
			input.trigger('click');
		});
	});

	jQuery('#add-comment-button').each(function() {

		var val = jQuery(this).val();
		var a = jQuery('<a class="button large"><span> ' + val + ' </span></a>');
		var input = jQuery(this);

		input.after(a);
		input.hide();

		a.click(function() {
			input.trigger('click');
		});
	});



	/* ============================ Sliders at Home page ============================= */	 	

 	if(jQuery("#slider.nivoSlider").length>0){
 		jQuery("#slider.nivoSlider").nivoSlider();
 	}

 	if(jQuery("#slider.fadeSlider ul").length>0){
 		jQuery("#slider.fadeSlider ul").anythingSlider({
		    autoPlay 		: true,
		    buildNavigation : true,      // If true, builds a list of anchor links to link to each panel
  			buildStartStop  : false,      // If true, builds the start/stop button
  			buildArrows     : true,      // If true, builds the forwards and backwards buttons
  			enableNavigation : true,
  			enableArrows: true,
  			easing: "easeInOutExpo",
  			delay: 5000,
  			animationTime : 1000,
  			height        : 466,
  			resizeContents : false });
	}

	/* ============================ Sliders at Home page End ============================= */	 




   	/* ======================  Testimonials Widget slider  =================== */
	if(jQuery(".widget.widget-testimonials").length>0){
	   var testemonials = jQuery(".widget.widget-testimonials > ul").anythingSlider({
			    autoPlay 		: true,
			    buildNavigation : false,      // If true, builds a list of anchor links to link to each panel
	  			buildStartStop  : false,      // If true, builds the start/stop button
	  			buildArrows     : false,      // If true, builds the forwards and backwards buttons
	  			enableNavigation : false,
	  			enableArrows: false,
	  			easing: "easeInOutExpo",
	  			delay: 5000,
	  			animationTime : 1000,
	  			resizeContents : false  				
		});

		jQuery(".widget.widget-testimonials div#prev").click(function(){
			$(testemonials).data('AnythingSlider').goBack();
		});
		jQuery(".widget.widget-testimonials div#next").click(function(){
			$(testemonials).data('AnythingSlider').goForward();
		});

		/* End of Testimonials slider at Full Width page */
	}


	/* ===================== Sliders at inner pages ========================= */

	if(jQuery(".pf-slider-large.inner-slider, .inner-slider.pf-slider-small").length >0){
		 jQuery(".pf-slider-large.inner-slider>ul, .inner-slider.pf-slider-small>ul").anythingSlider({
		   			startPanel      : 1,
				    autoPlay 		: false,
				    buildNavigation : true,      // If true, builds a list of anchor links to link to each panel
		  			buildStartStop  : false,      // If true, builds the start/stop button
		  			buildArrows     : false,      // If true, builds the forwards and backwards buttons
		  			enableNavigation : true,
		  			enableArrows: false,
		  			easing: "easeInOutExpo",
		  			delay: 2000,
		  			animationTime : 800,
		  			resizeContents : false
			});

	}
	/* ====================== Tool Tips ===================*/
	function overr(){
		var p = jQuery(this).position().left;
		var title = jQuery(this).attr('title');

		//valculate box width
		var num_chars = title.length;

		var width = num_chars * 8;

		$(this).parent().find(".popup").html(title + '<div class="triangle opacity-60"></div>');
		$(this).parent().find(".popup").css("left", p).css('visibility','visible').css("width",width+"px").show(100);
	}

	function outt(){
		$(this).parent().find(".popup").hide(100, function(){
				$(this).css('visibility', 'visible');					
		});
	}

	$(".tooltip a").hoverIntent( overr, outt );

	/* Plugins */

	if(jQuery().mls_accordion) { jQuery(".widget-accordion").mls_accordion(); }
	if(jQuery().mls_tabs) { 
		jQuery(".widget .tabs").mls_tabs(); 
		jQuery(".contact-tabs .tabs").mls_tabs(); 
	}

	if(jQuery().mls_toggler) { jQuery(".toggler").mls_toggler(); }

	/**
	 *  ===================================== Portfolio ==============================
	 */
    if(jQuery().mls_portfolio){ // If portfolio plugin present

    	/* Portfolio thumbs */
   		jQuery(".portfolio.thumbs").mls_portfolio({
					              'itemContainer': '.itemsContainer',
					              'mapFilters'   : '#filter-buttons > a'
    							});

   		/* Portfolio thumbs with text */
   		jQuery(".portfolio.col-3").mls_portfolio({
					              'itemContainer': '.itemsContainer',
					              'mapFilters'   : '#filter-buttons > a',
					              'itemsPerPage' : 9
    							});


   		/* Postfolio list */
	    jQuery(".portfolio.list").mls_portfolio({
						              'itemContainer': '.itemsContainer',
						              'mapFilters'   : '#filter-buttons > a',
						              'callback'     :  slideItemsFromPortfolioList,
						              'itemsPerPage' : 3
								    });

	    /* Featured projects Caorusel */
		jQuery(".widget-featured-projects #fp-tabs").mls_portfolio({ 
						              'mapFilters' : '#filter-buttons-carousel a',
						              'itemContainer': '.itemsContainer', // reference to a UL container
						              'itemsPerPage' : 4,
						              'duration' : 700,
						              'attribute': 'data-id',
      									'easing': 'easeInOutQuad'
						              }); 
	} // If end


	if(jQuery().mls_portfolio_one){
		jQuery(".portfolio.one-page").mls_portfolio_one({
			 					'itemContainer': '#pf-oneP-slider',
					            'mapFilters'   : '#filter-buttons > a',
					            'paginationContainer': '#pF-page-nav',
					            'callback' : slideItemsFromPortfolioOneList
		});

		//Same thing as previous but without a filters
		jQuery(".portfolio.pFdetail").mls_portfolio_one({
			 					'itemContainer': '.pf-oneP-slider',
					            'paginationContainer': '#pF-page-nav',
					            'callback' : slideItemsFromPortfolioOneList
		});
	}

	/* ===================================== Portfolio End ============================== */



	/* =========================== Simple small misc sliders ========================== */

	// These function are applied to every item in quickSand

	function slideItemsFromPortfolioList(){
		$(".tooltip a").hoverIntent( overr, outt );
	   jQuery(".pf-slider-small > ul").anythingSlider({
	   			startPanel      : 1,
			    autoPlay 		: false,
			    buildNavigation : true,      // If true, builds a list of anchor links to link to each panel
	  			buildStartStop  : false,      // If true, builds the start/stop button
	  			buildArrows     : false,      // If true, builds the forwards and backwards buttons
	  			enableNavigation : true,
	  			enableArrows: false,
	  			easing: "easeInOutExpo",
	  			delay: 2000,
	  			animationTime : 800,
	  			resizeContents : false
	  	});
	}	

	function slideItemsFromPortfolioOneList(param){
		jQuery(".tooltip a").hoverIntent( overr, outt );
	  // jQuery(".itemsContainer ul").anythingSlider({
	   jQuery(param).find(".itemsContainer ul").anythingSlider({
	   			startPanel      : 1,
			    autoPlay 		: false,
			    buildNavigation : true,      // If true, builds a list of anchor links to link to each panel
	  			buildStartStop  : false,      // If true, builds the start/stop button
	  			buildArrows     : false,      // If true, builds the forwards and backwards buttons
	  			enableNavigation : true,
	  			enableArrows: false,
	  			easing: "easeInOutExpo",
	  			delay: 4000,
	  			animationTime : 1000,
	  			resizeContents : false
		});
	}	

	/* ============================ [ Small Sliders Ends HERE ] ========================= */
	
}); //END Document Ready