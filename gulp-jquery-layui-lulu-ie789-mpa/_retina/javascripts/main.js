// MAIN.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is main JS file that contains custom JS scipts and initialization used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: PRESENCE.
// Author: Designova.
// Version 1.0 - Initial Release
// Website: http://www.designova.net 
// Copyright: (C) 2014 
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

    //Detecting viewpot dimension
     var vH = $(window).height();
     var vW = $(window).width();

     //Adjusting Intro Components Spacing based on detected screen resolution
     $('#slide1, #inro, .intro-carousel, .intro-carousel .item').css('height',vH);
  
   
    //Vertical Centering of natural content spcific elements (non-images)
     $(function ($) {
              /*if your element is an image then please use $(window).load() instead tha above function wrap, because we want the coding to take
              effect when the image is loaded. */
              //get the width of the parent
              var parent_height = $('.vertical-center').parent().height();
              var image_height = $('.vertical-center').height();
              var top_margin = (parent_height - image_height)/2;
              //center it
              $('.vertical-center').css( 'padding-top' , top_margin);
              //uncomment the following if ithe element to be centered is an image
              $('.vertical-center-img').css( 'margin-top' , top_margin);
              $('.vertical-center-fp').css( 'top' , top_margin);
       });

     //Horizontal Centering of natural content specific elements (non-css method)
      $(function ($) {
              var floatingContentWidth = $('.horizontal-center').width();
              var floatingParentWidth = $('.horizontal-center').parent().width();
              var setLeft = (floatingParentWidth-floatingContentWidth)/2;
              //alert(setLeft);
              $('.horizontal-center').css('left',setLeft);
       });


  


//Equi-heigh Divs
$(document).ready(function() {

  if(vW > 1000)
  {
   var maxHeight = -1;

   $('.equal-height-one').each(function() {
     maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
   });

   $('.equal-height-one').each(function() {
     $(this).height(maxHeight);
   });


    var maxHeight2 = -1;

   $('.equal-height-two').each(function() {
     maxHeight2 = maxHeight2 > $(this).height() ? maxHeight2 : $(this).height();
   });

   $('.equal-height-two').each(function() {
     $(this).height(maxHeight2);
   });


   var maxHeight3 = -1;

   $('.equal-height-three').each(function() {
     maxHeight3 = maxHeight3 > $(this).height() ? maxHeight3 : $(this).height();
   });

   $('.equal-height-three').each(function() {
     $(this).height(maxHeight3);
   });

}

 });



     //Portfolio Engine
    $('#grid').mixitup({
      transitionSpeed : 800
    });

    //Portfolio Filter Active State
    $('ul#portfolioFilter li').click(function(){
      $('ul#portfolioFilter li').removeClass('active-filter');
      $(this).addClass('active-filter');
    });



     //TWITTER INIT (Updated with compatibility on Twitter's new API):
     //PLEASE READ DOCUMENTATION FOR INFO ABOUT SETTING UP YOUR OWN TWITTER CREDENTIALS:
      $(function ($) {
          $('#ticker').tweet({
              modpath: './twitter/',
              count: 1,
              loading_text: 'loading twitter update...',
              username:'designovastudio'
              /* etc... */
          });
        }); 



    //Setup waypoints plugin
    $('.about-inner-bg').waypoint(function (event, direction) {

        //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the previous navigation link 
        if (direction === 'down') {
             $(this).animate({
                'background-size': '150%'
            }, 15000, 'linear');
        }
        // else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the next navigation link 
        else {
            $(this).animate({
                'background-size': '100%'
            }, 15000, 'linear');
        }

    }, { offset: 150 });


});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







  

