/*-------------------------------------------------------------------------

	Theme Name: Surreal Studio
	
-------------------------------------------------------------------------*/

$(document).ready(function () {
	/*vars used throughout*/
	var wh,
		scrollSpeed = 1000,
		parallaxSpeedFactor = 0.6,
		scrollEase = 'easeOutExpo',
		targetSection,
		sectionLink = 'a.navigateTo',
	 	section = $('.section');


//INIT --------------------------------------------------------------------------------/
	if (isMobile == true) {
		$('.header').addClass('mobileHeader');	//add mobile header class
	} else {
		$('.page').addClass('desktop');
		$('.parallax').addClass('fixed-desktop');
	}


//MENU --------------------------------------------------------------------------------/
	$(".menu a").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });
        return false;
    });


//LAZY LOADING -------------------------------------------------------------------------/
  	$(function () {
		if (lazyload == false || isMobile == true) return false;
        $("img.lazy").lazyload({
            placeholder : "images/blank.gif",
            effect : "fadeIn"
        });
    });


//PARALLAX ----------------------------------------------------------------------------/
	$(window).bind('load', function () {
		parallaxInit();						  
	});

	function parallaxInit() {
		if (isMobile == true) return false;
		$('#parallax-1').parallax();
		$('#parallax-2').parallax();
		$('#parallax-3').parallax();
		$('#parallax-4').parallax();
		$('#parallax-5').parallax();
		/*add as necessary*/
	}


//HOMEPAGE SPECIFIC -----------------------------------------------------------------/
	function sliderHeight() {
		wh = $(window).height();
		$('#homepage').css({height: wh});
	}
	sliderHeight();


//	Accordion  ------------------------------------------------------------------------/

	(function () {

		var $container = $('.accContainer'),
			$trigger   = $('.accTrigger');
			fullWidth = $container.outerWidth(true);

		$container.hide();
		$trigger.first().addClass('active').next().show();

		$trigger.css('width', fullWidth - 2);
		$container.css('width', fullWidth - 2);

		$trigger.on('click', function (e) {
			if ($(this).next().is(':hidden') ) {
			$trigger.removeClass('active').next().slideUp(300);
			$(this).toggleClass('active').next().slideDown(300);
			}
			e.preventDefault();
		});

		// Resize
		$(window).on('resize', function () {
			fullWidth = $container.outerWidth(true)
			$trigger.css('width', $trigger.parent().width());
			$container.css('width', $container.parent().width());
		});

	})();


//WINDOW EVENTS ---------------------------------------------------------------------/	
	 
	$(window).bind('resize',function () {

		//Update slider height
		sliderHeight();

	});

});