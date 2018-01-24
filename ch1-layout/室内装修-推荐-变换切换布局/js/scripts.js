include("js/jquery.color.js");
include("js/jquery.backgroundpos.js");
include("js/jquery.easing.js");
include("js/jquery.mousewheel.js");
include("js/jquery-ui-1.8.11.custom.min.js");
include("js/cScroll.js");
include("js/googleMap.js");
include("js/superfish.js");
include("js/switcher.js");
include("js/forms.js");
include("js/jcarousellite_1.0.1.min.js");
include("js/jquery.cycle.all.min.js");
include("js/MathUtils.js");

function include(url) {
    document.write('<script src="' + url + '"></script>');
}
var MSIE = false,
    content, mh, h, w, defColor,
    splash, sh, currItem = 0;

function initGallery(){
    splash = $('.splash');
    sh = parseInt(splash.css('height'));
    splash.eq(1).css({'top':-sh,'height':'0'});
    
    var itms = $('.splash li a')
    .prepend('<span class="sitem_over"></span><div class="separ"></div><div class="over_info"><strong></strong><em></em></div>')
    itms.find('em').text($('#hint').text())
    if (!MSIE) { 
        itms.css({'opacity':'1'})          
    } else {
        itms.css({'display':'block'})   
    }
    var itemW = itms.css('width');
    itms.live('mouseenter',function(){
        if (!MSIE){
            $(this)
                .children('.sitem_over').stop(true,true).animate({'opacity':0},500,'easeOutExpo').end()
                .find('strong').stop(true,true).animate({'opacity':0,'left':'-600px'},500,'easeInOutExpo').end()
                .find('em').stop(true,true).animate({'opacity':0,'left':'600px'},500,'easeInOutExpo');
        }else{
            $(this).children('.sitem_over').stop(true,true).hide().end()
                .find('strong').stop(true,true).animate({'left':'-600px'},500,'easeInOutExpo').end()
                .find('em').stop(true,true).animate({'left':'600px'},500,'easeInOutExpo');  
        }
    })
    .live('mouseleave',function(){
        if (!MSIE){
            $(this)
                .children('.sitem_over').stop(true,true).animate({'opacity':1},500,'easeInOutExpo').end()
                .find('strong').stop(true,true).animate({'opacity':1,'left':'0px'},350,'easeOutExpo').end()
                .find('em').stop(true,true).animate({'opacity':1,'left':'0px'},350,'easeOutExpo')
        }else {
            $(this)
                .children('.sitem_over').stop().show().end()
                .find('strong').stop(true,true).animate({'left':'0px'},350,'easeOutExpo').end()
                .find('em').stop(true,true).animate({'left':'0px'},350,'easeOutExpo')                    
        }
    })
    .live('click',function(e){
        currItem = $(this).parent().index();
        var len = parseInt($(this).parents('.splash').find('li').length/3);
        if (currItem >= len*2){currItem -= len*2;}
        if (currItem >= len){currItem -= len;}
        $('.list3').eq($(this).parents('.splash').index()-1).cycle(currItem);
    });
    $('.list3>li')
    .live('mouseenter',function (){
        $(this).find('>div').stop().animate({'bottom':'0px'},500,'easeOutExpo')            
    })
    .live('mouseleave',function (){
        $(this).find('>div').stop().animate({'bottom':'-400px'},500)   
    });
    if ($(".list3").length) {
        $('.list3').cycle({
            fx: 'scrollHorz',
            speed: 600,
    		timeout: 0,               
    		easing: 'easeInOutExpo',
    		cleartypeNoBg: true ,
            rev:0,
            startingSlide: 0,
            wrap: true
  		})
    };
    $(".splash>div").jCarouselLite({
        btnNext: ".arrowR>a",
        btnPrev: ".arrowL>a",
        scroll:1,
        visible: 8,
        easing: 'easeOutExpo',
        speed: 400
    });    
}

function switchGallery(n){
    var n1, n2;
    if (n == 2){
        n1 = 1; n2 = 0;
        splash.eq(1).stop().animate({'top':'0px','height':sh},1200,'easeInOutExpo');
        splash.eq(0).stop().animate({'top':-sh,'height':'0'},1200,'easeInOutExpo');
    } else {
        n1 = 0; n2 = 1;
        splash.eq(0).stop().animate({'top':'0px','height':sh},1200,'easeInOutExpo');
        splash.eq(1).stop().animate({'top':sh,'height':'0'},1200,'easeInOutExpo');
    } 
}

function addAllListeners() {
    $('.soc_icons>li>a').hover(
        function(){
        	$(this).children('img').stop().animate({'top':'-8px'},400,'easeOutExpo');  
        },
        function(){
            $(this).children('img').stop().animate({'top':'0px'},500,'easeOutCubic');  
        }
    ); 
    $('.scrollUp, .scrollDown').hover(
        function(){
            $(this).stop().animate({'backgroundPosition':'center bottom'},300,'easeOutExpo');
        },
        function(){
            $(this).stop().animate({'backgroundPosition':'center top'},400,'easeOutCubic');
        }
    );
    $('.closeBtn').hover(
        function(){
            $(this)
                .stop().animate({'backgroundPosition':'center top'},300,'easeOutExpo')
                .children('span').stop().animate({'backgroundPosition':'center top'},400,'easeInOutExpo')
        },
        function(){
            $(this)
                .stop().animate({'backgroundPosition':'center bottom'},400,'easeOutCubic')
                .children('span').stop().animate({'backgroundPosition':'center bottom'},500,'easeInOutExpo')
        }
    );
    $('.arrowR, .arrowL').css('opacity','0');
    $('.arrowL>a').hover(
        function(){
            if (!MSIE) {
                $(this).stop().animate({'backgroundPosition':'left center'},400,'easeInOutBack')
                    .parent().stop().fadeTo(500,1);
            } else {
                $(this).stop().animate({'backgroundPosition':'left center'},400,'easeInOutBack')
                    .parent().css('opacity','1');
            }
        },
        function(){
            if (!MSIE) {
                $(this).stop().animate({'backgroundPosition':'right center'},400,'easeInOutBack')
                    .parent().stop().fadeTo(500,0);
            } else {
                $(this).stop().animate({'backgroundPosition':'right center'},400,'easeInOutBack')
                    .parent().css('opacity','0');
            }
        }
    );
    $('.arrowR>a').hover(
        function(){
            if (!MSIE) {
                $(this).stop().animate({'backgroundPosition':'right center'},400,'easeInOutBack')
                    .parent().stop().fadeTo(500,1);
            } else {
                $(this).stop().animate({'backgroundPosition':'right center'},400,'easeInOutBack')
                    .parent().css('opacity','1');
            }
        },
        function(){
            if (!MSIE) {
                $(this).stop().animate({'backgroundPosition':'left center'},400,'easeInOutBack')
                    .parent().stop().fadeTo(500,0);
            } else {
                $(this).stop().animate({'backgroundPosition':'left center'},400,'easeInOutBack')
                    .parent().css('opacity','0');
            }
        }
    );
    var v1 = $('.readMore').css('color');
    $('.readMore').hover(
        function(){
            $(this).stop().animate({'color':'#fff'},250,'easeOutExpo');
        },
        function(){
            $(this).stop().animate({'color':v1},400,'easeOutCubic');
        }
    );
}

function showSplash(){
    content.find('>ul').stop(true,true).delay(500).animate({'width':'0'},500,'easeInOutCubic',function (){content.css('width',0);});
}

function hideSplash(){
    content.css('width',w).find('>ul').stop(true,true).animate({'width':'100%'},500,'easeInOutExpo');
}

function hideSplashQ(){
    content.css('width',0).find('>ul').css({'width':'0'});
}

$(document).ready(ON_READY);
function ON_READY() {
    /*SUPERFISH MENU*/   
    $('.menu #menu').superfish({
	   delay: 800,
	   animation: {
	       height: 'show'
	   },
       speed: 'slow',
       autoArrows: false,
       dropShadows: false
    });
}

function ON_LOAD(){
    MSIE = ($.browser.msie) && ($.browser.version <= 8);
    $('.spinner').fadeOut();
    
    initGallery();
    
    $('.scroll').cScroll({
        duration: 500,
        easing: 'easeOutExpo',
        step:'190px'
    });
    $('.scrollUp').click(function(){
        $(this).parent().siblings('.scroll').cScroll('up');
		return false;
    });
    $('.scrollDown').click(function(){
		$(this).parent().siblings('.scroll').cScroll('down');
		return false;
    });
    
    //content switch
    content = $('#content');
    w = parseInt(content.css('width'));
    content.tabs({
        show:0,
        preFu:function(_){
            _.li.css({'visibility':'hidden'});	
            hideSplashQ();
        },
        actFu:function(_){            
            if(_.curr){
                switch(_.n){
                    case 0: 
                       showSplash();
                    break;
                    default:
                        hideSplash(); 
                    break;
                }
                switchGallery(_.n);
                
                h = parseInt( _.curr.outerHeight(true));
                content.children('ul').css({'height':h});
                                
                _.curr
                    .css({'top':'-1500px','visibility':'visible'}).stop(true).delay(100).show().animate({'top':'0px'},{duration:900,easing:'easeInOutExpo'});
            }   
    		if(_.prev){
  		        _.prev
                    .show().stop(true).animate({'top':'1500px'},{duration:900,easing:'easeInOutExpo',complete:function(){
                            if (_.prev){
                                _.prev.css({'visibility':'hidden'});
                            }
                        }
		              });
            }            
  		}
    });
    defColor = $('#menu>li>a').eq(0).css('color'); 
    var nav = $('.menu');
    nav.navs({
		useHash:true,
        defHash: '#!/page_splash',
        hoverIn:function(li){
            $('>a', li).stop().animate({color: '#fff'},400,'easeOutExpo');
            $('>strong',li).stop().animate({'height':'55px'},400,'easeOutExpo');
        },
        hoverOut:function(li){
            if ((!li.hasClass('with_ul')) || (!li.hasClass('sfHover'))) {
                $('> a', li).stop().animate({color: defColor},600,'easeOutExpo');
                $('>strong',li).stop().animate({'height':'0'},600,'easeOutExpo');
            }
        }
    })
    .navs(function(n){	
   	    $('#content').tabs(n);
   	});
    
    setTimeout(function(){  $('body').css({'overflow':'visible'}); },300);    
    addAllListeners();
    
    $(window).trigger('resize');
    mh = parseInt($('body').css('minHeight'));
}

$(window).resize(function (){
    if (content) {
        content.stop().animate({'top':(windowH()-parseInt(content.children('>ul').height()))*.5},500,'easeOutCubic')
    }
    if (splash){
        splash.stop().animate({'marginTop':(windowH()-parseInt(splash.height()))*.5},500,'easeOutCubic')
    }
});

function listen(evnt, elem, func) {
    if (elem.addEventListener)  // W3C DOM
        elem.addEventListener(evnt,func,false);
    else if (elem.attachEvent) { // IE DOM
        var r = elem.attachEvent("on"+evnt, func);
    return r;
    }
}
listen("load", window, ON_LOAD);