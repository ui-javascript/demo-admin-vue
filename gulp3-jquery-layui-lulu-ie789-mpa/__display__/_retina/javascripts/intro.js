// MAIN.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is main JS file that contains custom JS scipts and initialization used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Author: Designova.
// Website: http://www.designova.net 
// Copyright: (C) 2014 
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

  
    //Intro FullScreen Carousel Setup
     $("#intro-carousel").owlCarousel({
        navigation : true,
        pagination: false,
        responsive: true,
        items: 1,
        touchDrag: true,
        navigationText: false,
        mouseDrag: true,
        itemsDesktop: [3000,1],
        itemsDesktopSmall: [1440,1],
        itemsTablet:[1024,1],
        itemsTabletSmall: [600,1],
        itemsMobile: [360,1],
        autoPlay: false
      });
   
    //Vertical Centering of Inner Contents in Intro Carousel Slides
     $(function ($) {
              var ph = $('.intro-carousel .item').height();
              var oh = $('.intro-slide-inner').height();
              var tm = (ph - oh)/2;
              $('.intro-vertical-align').css( 'padding-top' , tm);
       });



});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







  

