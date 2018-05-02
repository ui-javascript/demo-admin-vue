/**
 * Plugin: Portfolio
 * Creator: Milos Djordjevic milos.djordjevic@online.rs
 * Data: 10.02.2012
 * 
 *  - Grid of thumbs
 *  - Lists
 *  - Portfolio details
 *  - Portfolio on one page
 *  
 */

// Custom sorting plugin. 
/*(function($) {
  $.fn.sorted = function(customOptions) {
    var options = {
      reversed: false,
      by: function(a) { return a.text(); }
    };
    $.extend(options, customOptions);
    $data = $(this);
    arr = $data.get();
    arr.sort(function(a, b) {
                              var valA = options.by($(a));
                              var valB = options.by($(b));
                              if (options.reversed) {
                                return (valA < valB) ? 1 : (valA > valB) ? -1 : 0;				
                              } else {		
                                return (valA < valB) ? -1 : (valA > valB) ? 1 : 0;	
                              }
              }); // Funciton as a param ends here
    return $(arr);
  };
})(jQuery);*/


/* Portfolio Plugin developed by Milos. */
(function( $ ) {

/**
 * Helper function
 * @param  {[type]} items [description]
 * @return {[type]}
 */
  $.fn.mls_portfolio = function(options) {

      if(this.length == 0) return;

      console.log("PROSAO!");
      basethis = this; //self reference

    	 // Create some defaults, extending them with any options that were provided
	    var settings = $.extend( {
          'callback'       : function(){},
		      'easing'         : 'easeInOutExpo',
		      'duration'       : 700, //miliseconds
		      'itemContainer'  : '.itemsContainer',
		      'mapFilters'     : '.filters',
		      'filterOnClickClass' : 'fp-tab-curent',
          'layout'         : 'grid',  //details / grid / list / one-page
          'hasPagination'  : true,
          'itemsPerPage'   : 8,
          'adjustHeight'   : 'auto'
		    }, options);

  //Iterate thrue all tabs
  return this.each(function () {

     if(settings.layout == 'details'){ //Single project per page

      //Da li mi ovo uopste treba!
     /*   var projects = jQuery("#pf-slider-large .itemsContainer ul").anythingSlider({
                                                          autoPlay    : true,
                                                          buildNavigation : true,      // If true, builds a list of anchor links to link to each panel
                                                          buildStartStop  : false,      // If true, builds the start/stop button
                                                          buildArrows     : false,      // If true, builds the forwards and backwards buttons
                                                          enableNavigation : true,
                                                          enableArrows: false,
                                                          delay: 5000,
                                                          startPanel: 1,
                                                          easing: "easeInOutExpo",
                                                          animationTime : 1500,
                                                          resizeContents : false});*/
     } 
     else{

        //Reference to the Filter's items
    		var filters = basethis.find(settings.mapFilters);

        //First Filter in the Row
    		var current_filter = (filters[0] != undefined) ? filters[0] : '<a data-type="all"></a>';


    		//Reference to the items
        var items_container = basethis.find(settings.itemContainer);

        // clone items to get a second collection
        var items_container_clone = items_container.clone();

       // console.log(items_container_clone);

        var currentPage = 1;

        function repaginate(settings, currentPage, totalItems){

            console.log("RE - PAGINATE");
           // var totalItems = items.length;
            var numOfPages = Math.ceil(totalItems/settings.itemsPerPage);

          if(jQuery("div.pagination").length > 0 ){ 

              //Pagination is alerady built. Update it.
              var lis = jQuery("div.pagination ul").children(); // Num of pages old state

              if((lis.length - numOfPages) > 0){
                   $.each(lis, function(i){
                        /*if(i+1 > (lis.length - numOfPages)){ 
                          $(lis[i]).hide();
                        }*/

                        if(numOfPages < i+1){ 
                          $(lis[i]).hide();
                        }
                    });
              }else{
                  $(lis).show();
              }

          }else{
              /* Create pagination and inject it in DOM */
              pagination_html = '<div class="pagination">';
              pagination_html += '<a href="#" class="previous" data-page="prev">Previous</a>';
              pagination_html += '<ul>';
              for(var i=0; i < numOfPages; i++){
                pagination_html += '<li><a href="#" data-page="'+(i+1)+'"  '+ ((currentPage == i+1) ? 'class="current"' : '') +'>'+(i+1)+'</a></li>';
              }
              pagination_html += '</ul>';
              pagination_html += '<a href="#" class="next" data-page="next">Next</a>';
              pagination_html += '</div>';

              basethis.after(pagination_html);
          }
          return {'paginationFilters' : basethis.next().find("a"), 'numOfPages':numOfPages, 'totalItems': totalItems};
        } // End of repaginate.

        /**
         * Magic happends here :)
         * @return void
         */
        function redrawPortfolio(){

           if ($(current_filter).attr('data-type') == 'all') { 
                 var filteredData = $(items_container_clone).children('li'); //items_container_clone.find('li');
           } else {
                 var filteredData = $(items_container_clone).children('li[data-type=' + $(current_filter).attr('data-type') + ']');//items_container_clone.find('li[data-type=' + $(this).attr('data-type') + ']');
           }

           //console.log(filteredData);
           var sortedData = filteredData.filter(function(i){
                                            return ((i+1) >= (currentPage - 1)*settings.itemsPerPage+1) && ((i+1) <= currentPage*settings.itemsPerPage);
                                                });


           // finally, call quicksand
           items_container.quicksand(sortedData, {
                                                  duration: settings.duration,
                                                  easing : settings.easing,
                                                  attribute: 'data-id',
                                                  adjustHeight: settings.adjustHeight
                                                },
                                                settings.callback                                                  
                                   );
           return filteredData;
        }

        if(settings.hasPagination){ //Create pagination
           var data = repaginate(settings, currentPage, items_container_clone.children().length); // Ispisi paginaciju, mapiraj podatke koji treba da se prikazu i jos malo matematike
           var paginationFilters = data.paginationFilters;
           var numOfPages        = data.numOfPages;
           var totalItems        = data.totalItems;

           redrawPortfolio();
        }

        // Attempt to call Quicksand on every button click ( filters or pagination )
    		filters.add(paginationFilters).click(function(e) {
              
              var btn = $(this);
              if(btn.attr("data-page") != undefined){ // User pressed pagination link
                  //Calculate selected page
                  if(btn.attr('data-page') == 'prev'){
                        currentPage = (currentPage >1) ? currentPage - 1 : currentPage;
                  }else if(btn.attr('data-page') == 'next'){
                        currentPage = (currentPage < numOfPages) ? currentPage + 1 : currentPage;
                  }else{
                        currentPage = btn.attr('data-page');
                  }

                  //Set Current Class to pressed button
                  $(paginationFilters).removeClass('current');
                  $(paginationFilters).filter("[data-page="+currentPage+"]").addClass("current");

              }else{
                  //User pressed Filter link.
                  //
                  var old_filter = current_filter;
                      current_filter = this;

                   if(settings.hasPagination){
                      /* Reset pagination */
                      currentPage = 1;
                      //Reset classes in pagination
                      $(paginationFilters).removeClass('current');
                      $(paginationFilters[1]).addClass('current'); // We selected second link, because the first one is previous link!!!
                   }

                   //HighLight selected filter
                   $(old_filter).removeClass(settings.filterOnClickClass);

                //   console.log(btn);
                   btn.addClass(settings.filterOnClickClass);  
                   // console.log(btn);
              }

              var filteredData = redrawPortfolio();

              if(settings.hasPagination){
                  data = repaginate(settings, currentPage, filteredData.length);
                  paginationFilters = data.paginationFilters;
                  numOfPages        = data.numOfPages;
                  totalItems        = data.totalItems;
              }

              e.preventDefault();
	      }); // On click Event

      /* Finish him! */
      settings.callback();

     } // if details 
  }); // each and here
  }
})( jQuery );