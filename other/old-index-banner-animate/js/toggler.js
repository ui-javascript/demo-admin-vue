/**
 *  Plugin: Toggler
 *  Developer by: Milos Djordjevic [milos.djordjevic@online.rs]
 */

(function( $ ) {

  $.fn.mls_toggler = function(options) {
    	$this = this; //self reference
    	//Iterate thrue all Toggler Elements
		return this.each(function () {
			
			$(this).find(".less-content a").click(function(event){
				
				event.preventDefault();
				var link_ref = this;

				//console.log($this.find("div:not(div:first-child)"));
				$this.find("div:not(div:first-child)").fadeToggle(400, "linear", function(){
											
						if($(this).css('display') == 'none'){ //Closed
							$(link_ref).find("span").removeClass('opened').addClass("closed");
							$(link_ref).find("strong").text("Show me more");
						}
						else{ // Opened
							$(link_ref).find("span").removeClass('closed').addClass("opened");
							$(link_ref).find("strong").text("Show me less");
						}
				});
			});
        });    	
  };
})( jQuery );