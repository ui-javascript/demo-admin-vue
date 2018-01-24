/* 
*   Portfolio Plugin developed by Milos. 
*   
*   Simple plugin goes througn this list of children . Hide some of them according to pressed filter. only One item displayed at once.   
*   
*/
(function( $ ) {

/**
 * Helper function
 * @param  {[type]} items [description]
 * @return {[type]}
 */
  $.fn.mls_portfolio_one = function(options) {

      if(this.length == 0) return;

      basethis = this; //self reference

    	 // Create some defaults, extending them with any options that were provided
	    var settings = $.extend( {
          'callback'       : function(param){}, //Called after main staff done.
		      'duration'       : 700, //miliseconds
		      'itemContainer'  : '.itemsContainer',
		      'mapFilters'     : '.filters',
          'paginationContainer' : '.pagination'
		    }, options);

      //Iterate thrue all tabs
      return this.each(function () {

        //Reference to the Filter's items
        var filters = basethis.find(settings.mapFilters);


        var filteredItems = [];

        //Reference to the items
        var items_container = basethis.find(settings.itemContainer);
        var items           = items_container.children();

        settings.callback(items);
        $(items).hide();

        //First Filter in the Row
        var current_filter  = (filters[0] != undefined) ? filters[0] : '<a data-type="all"></a>';

        var currentPage     = 1;

        var current_slider = null;

        /* Only one element can be visible at once ! */
        //Hide all element by default
        
        var current_proj_ref =  $("#current-proj-num"); 
        var total_proj_ref   =  $("#total-proj-num"); 

        current_proj_ref.html(currentPage);
        total_proj_ref.html(items.length);


        //Reference to Next, Previous buttons

        var btn_next = $(settings.paginationContainer + " a.next");  
        var btn_prev = $(settings.paginationContainer + " a.previous");  

        //Show current element for selected filter
         
        if($(current_filter).attr('data-type') == 'all'){
            filteredItems = items;
        }else{
            filteredItems = $(items).filter("[data-type='"+$(current_filter).attr('data-type')+"']");
        }

        current_slider =  $(filteredItems[0]);
        current_slider.fadeIn('slow', 'easeInExpo');

        $(current_filter).addClass("fp-tab-curent");

        filters.click(function(e){

            var btn = $(this);
            if(btn.hasClass("fp-tab-curent")){

            }else{
                $(current_filter).removeClass("fp-tab-curent");
                btn.addClass("fp-tab-curent");

                //Hide Old slider and Show the new one

                //Filter Items
                if(btn.attr('data-type') == 'all'){
                     filteredItems = items;
                }else{
                     filteredItems = $(items).filter("[data-type='"+btn.attr('data-type')+"']");
                }

                //In case User clicked on empty category
                if(current_slider.length == 0){
                  current_slider = $(filteredItems[0]);
                }
                
                current_slider.fadeOut('slow', 'easeOutExpo', function(data){
                          $(filteredItems[0]).fadeIn(1000, 'swing', function(){ $(this).show();})
                });

                current_slider =  $(filteredItems[0]);
                currentPage = 1;
            }

            current_proj_ref.html(currentPage);
            total_proj_ref.html($(filteredItems).length);

            current_filter = btn;
             e.preventDefault();
        }); // Click Handler End


        /* Pagination staff from here */

        btn_prev.click(function(e){
          if(currentPage > 1){ 
              currentPage--;
             /* current_slider.hide('slow', 'easeOutExpo', function(){
                      $(filteredItems[currentPage-1]).slideDown('fast', 'easeInExpo');
                      current_slider = $(filteredItems[currentPage-1]);
              });*/
              current_slider.animate({opacity: 0}, 500, 'linear', function(){
                       $(this).hide('fast', function(){$(this).css("opacity", 1);});
                      $(filteredItems[currentPage-1]).fadeIn('fast', 'easeOutExpo');
                      current_slider = $(filteredItems[currentPage-1]);
                     
              });


               current_proj_ref.html(currentPage);
          }
          e.preventDefault();
        });
          
        btn_next.click(function(e){

          if(currentPage < $(filteredItems).length){ 
              currentPage++;
             /* current_slider.animate({opacity: 0}, 550, 'swing', function(){
                      $(this).hide('fast', function(){$(this).css("opacity", 1);});
                      $(filteredItems[currentPage-1]).fadeIn('fast', 'easeInExpo');
                      current_slider = $(filteredItems[currentPage-1]);
              });*/
              current_slider.hide(550, function(){
                     // $(this).hide('fast', function(){$(this).css("opacity", 1);});
                      current_slider = $(filteredItems[currentPage-1]);
              });
               $(filteredItems[currentPage-1]).show('fast', 'easeInExpo');
               //slideItemsFromPortfolioOneList(filteredItems[currentPage-1]);
               current_proj_ref.html(currentPage);
          }
          e.preventDefault();
        });

        //settings.callback();
      }); 

  } // Plugin end
})( jQuery ); //Loaded doc