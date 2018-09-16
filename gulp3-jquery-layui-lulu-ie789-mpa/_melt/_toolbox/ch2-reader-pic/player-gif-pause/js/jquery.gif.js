(function ( $ ) {
 	"use strict";

 	/**
 	 * Player functionality for a static image and a gif
 	 * <img src="img.jpg" alt="GIF Loader" data-gif="img.gif" class="gif">
 	 * $(".gif").gif();
 	 * @return {[type]} [description]
 	 */
    $.fn.gif = function() {
 
		var src = $(this).attr('src'), 	// the src file
		gif     = $(this).data('gif'),  // the gif file
		state   = "img", 				// the state the loader is at.
		loaded  = false;

        if (gif != undefined) {
        	$( this ).wrap( "<div class='gif-loader'></div>");
	        var p = $(this).parent();
	        var a = $("<a/>", {html:'<span class="fa fa-play fa-5x"></span>'}).appendTo(p);
	        $(p).data( "row_parent", this );
	        $(p).on('click', function(event) {
		    	if (event != undefined) event.preventDefault();
		    	$(this).data( "row_parent" ).swap();
		    });

		    this.swap = function() {
	        	if (state == "img") {
	        		loaded ? this.setState("gif") : this.loadGIF();
	        	} else if (state == "gif") {
	        		this.setState('img');
	        	} else if (state == "loading") {
	        		// do nothing..
	        	}
	        }

	        this.setState = function(s) {
	        	state = s;
	        	if (state == "img") {
	        		$(this).attr('src', src);
	        		$(a).html('<span class="fa fa-play fa-5x"></span>');
	        	} else if (state == "gif") {
	        		loaded = true;
	        		$(this).attr('src', gif);
	        		$(a).html('<span class="fa fa-pause fa-5x"></span>');
	        	} else if (state == "loading") {
	        		loaded = false;
	        		$(a).html('<span class="fa fa-circle-o-notch fa-spin fa-2x"></span>');
	        	}
	        }

	        this.loadGIF = function() {
	        	this.setState('loading');
	        	var image  = new Image();
	        	image.src = gif;
	        	$(image).data( "row_parent", this );
	        	image.onload = function() {
	        		$(this).data( "row_parent" ).setState('gif');
		    	}
	        }

        }
 
    };
 
}( jQuery ));
