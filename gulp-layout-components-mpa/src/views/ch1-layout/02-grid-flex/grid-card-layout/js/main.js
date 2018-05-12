$(document).ready(function(){

	jQuery.easing.def = "easeOutQuad";	  
  
	var fullSlides = $('div.slide');
  var carouselScrollTop = 0;
  var scrollBy =516; 
  var isScrolling = 0;
  $(fullSlides).eq(0).clone().appendTo("#window").addClass('firstSlide');
  
   var loader = setInterval(function(){
      $('#loader').fadeIn().addClass('animate');
      setTimeout(function(){$('#loader').removeClass('animate');}, 400);     
  }, 500);
  
  setTimeout(function(){$("#loader").fadeOut();}, 2200);
  
  setTimeout(function(){     
    clearInterval(loader);
    $("#espose").fadeIn();
    $('.firstSlide').addClass('animate');
    setTimeout(function(){
    $("div.firstSlide").eq(0).find('p').animate({'margin-top':'194px', 'margin-left':'56px', 'opacity':'1'});
        $("div.firstSlide").eq(0).find('svg').animate({'margin-top':'110px', 'opacity':'1'});		
     }, 300);
    setTimeout(function(){
     $("#bootstrap-carousel").show();
     $("div.firstSlide").hide();
    }, 700);
  }, 2500);
       
	var carouselHeight = 0;
	$(fullSlides).each(function(){
		carouselHeight += scrollBy;
	});      
	$('div.slides').css('height', carouselHeight+"px");	
	$("#bootstrap-carousel").scroll(function() {				
		
    
    if($(this)[0].scrollTop > carouselScrollTop && isScrolling == 0){
      isScrolling = 1;  
      carouselScrollTop += scrollBy;        
        $(this).scrollTo(carouselScrollTop,500);
      setTimeout(function(){
          isScrolling = 0;          
        }, 500);
    }else if($(this)[0].scrollTop < carouselScrollTop && isScrolling == 0){
      isScrolling = 1;  
      carouselScrollTop -= scrollBy;        
        $(this).scrollTo(carouselScrollTop, 500);
      setTimeout(function(){
          isScrolling = 0;          
        }, 500);
    }
    
    
		if($(this)[0].scrollTop >= 355 && $(this)[0].scrollTop < 900){						
			$(fullSlides).eq(1).find('p').animate({'margin-top':'190px', 'opacity':'1'});
			$(fullSlides).eq(1).find('svg').animate({'margin-top':'110px', 'opacity':'1'});			
		}
		
		if($(this)[0].scrollTop >= 900 && $(this)[0].scrollTop < 1400){												
			$(fullSlides).eq(2).find('svg').animate({'margin-top':'110px', 'opacity':'1'});
			$(fullSlides).eq(2).find('p').animate({'margin-right':'60px', 'opacity':'1'});
      
		}				
		
		if($(this)[0].scrollTop >= 1400 && $(this)[0].scrollTop < 1900){											
			$(fullSlides).eq(3).find('svg').animate({'margin-top':'110px', 'opacity':'1'});			
			setTimeout(function(){$(fullSlides).eq(3).find('p').animate({'margin-top':'190px', 'opacity':'1'});}, 100);
		}
		
		if($(this)[0].scrollTop >= 1900 && $(this)[0].scrollTop < 2400){												
			$(fullSlides).eq(4).find('svg').animate({'margin-top':'152px', 'opacity':'1'});			
		}
		
		if($(this)[0].scrollTop >= 2400 && $(this)[0].scrollTop < 2900){						
			$(fullSlides).eq(5).find('p').animate({'margin-top':'190px', 'opacity':'1'});
			$(fullSlides).eq(5).find('svg').animate({'margin-top':'110px', 'opacity':'1'});
		}
		
		if($(this)[0].scrollTop >= 3050 && $(this)[0].scrollTop < 3612){															
			$(fullSlides).eq(6).find('p').animate({'margin-left':'102px', 'opacity':'1'});
		}
		
		if($(this)[0].scrollTop >= 100 && $(this)[0].scrollTop <= 500){															
			$("#espose p").css('border-color', '#82b4eb');	
		}else if($(this)[0].scrollTop >= 500 && $(this)[0].scrollTop <= 900){															
			$("#espose p").css('border-color', '#7aaec3');	
		}else if($(this)[0].scrollTop >= 1600 && $(this)[0].scrollTop <= 2100){															
			$("#espose p").css('border-color', '#82b4eb');	
		}
		else if($(this)[0].scrollTop >= 2100 && $(this)[0].scrollTop <= 2600){															
			$("#espose p").css('border-color', '#fff');	
		}
		
		
	});

  
	
	$('.thumb p').each(function(index, el){
		$(this).addClass("eq"+index);
		$(fullSlides).eq(index).addClass("eq"+index);
		
		$(this).click(function(){
      
      carouselScrollTop = scrollBy * index;   
      $(this).find('span').hide();
      setTimeout(function(){$('.thumb span').show();}, 400);
			$("#window").append("<div id='cloneWrap' class='thumb'></div>");
			var childOffset = $(this).offset();
			var parentOffset = $(this).parent().parent().offset();
			var childTop = childOffset.top - parentOffset.top;
			var childLeft = childOffset.left - parentOffset.left;
			var clone = $(this).clone();
			var top = childTop+33+"px";		
			var left = childLeft+"px";			
			
			$(clone)
			.addClass("floatingThumb eq"+index)			
			.appendTo("#cloneWrap");
			
			$("#cloneWrap")
			.css({'top': top, 'left': left})
			.animate({'width': '678px', 
			          'height': '516px', 
					  'top': '33px', 
					  'left': '0'}, 250,
					function(){		
						
						var scrolltop = 0;
						if(index == 0){ sctolltop = 0;}
						else if(index == 1){ sctolltop = 516;}
						else if(index == 2){ sctolltop = 1032;}
						else if(index == 3){ sctolltop = 1548;}
						else if(index == 4){ sctolltop = 2064;}
						else if(index == 5){ sctolltop = 2580;}
						else if(index == 6){ sctolltop = 3096;}												
						isScrolling = 1;
						$('#bootstrap-carousel').show().scrollTo(sctolltop,{duration:0});
						$('#cloneWrap').fadeOut(200, function(){$('#cloneWrap').remove()});	
						$('.thumbs').hide();	
						setTimeout(function(){isScrolling = 0;}, 100);
					});						
			
		});						
		
		
	}).hover(function(){
			$(this).addClass('expand');
		},function(){
			$(this).removeClass('expand');
	});
	
	
	$('#espose').click(function(){
		$('#bootstrap-carousel').fadeOut();
		$('.thumbs').fadeIn();	
	});
		
	
});

$.fn.scrollTo = function( target, options, callback ){
  if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
  var settings = $.extend({
    scrollTarget  : target,
    offsetTop     : 50,
    duration      : 500,
    easing        : 'swing'
  }, options);
  return this.each(function(){
    var scrollPane = $(this);
    var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
    var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
    scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
      if (typeof callback == 'function') { callback.call(this); }
    });
  });
}