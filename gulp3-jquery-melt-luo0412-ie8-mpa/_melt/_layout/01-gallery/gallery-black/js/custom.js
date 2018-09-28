jQuery(document).ready(function(){
	
	jQuery('.about').hover(function() {
		jQuery(this).find('.movable-content').stop().animate({
			left: '300px'
		}, 200);
	}, function() {
		jQuery(this).find('.movable-content').stop().animate({
			left: '0px'
		}, 200);
	});
	
	jQuery('.portfolio').hover(function() {
		jQuery(this).find('.movable-content').stop().animate({
			left: '300px',
		}, 200);
	}, function() {
		jQuery(this).find('.movable-content').stop().animate({
			left: '0px'
		}, 200);
	});
	
	jQuery('#message').hover(function() {
		jQuery(this).hide();
	});
	
	
});	

jQuery(window).load(function() {
			jQuery('.infos').css({
			display: 'inline-block',
		});
});