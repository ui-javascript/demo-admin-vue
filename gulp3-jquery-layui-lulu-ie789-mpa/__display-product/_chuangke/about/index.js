// JavaScript Document


$(document).ready(function () {
/*	var delscr = function() {
	  document.body.style.overflow = 'hidden';
	 }
	 var resscr = function() {
	  document.body.style.overflow = 'scroll';
	 }*/
  $("#nav").hide();
  $("#header2 .head_right").click(
  function(){
	  $("#nav").stop().fadeTo(800,1);
	   $(".head_right").addClass("toggle");
	  //delscr()
  });
  $("#nav .head_right").click(
  function(){
	  $("#nav").stop().fadeOut(800,0);
	  $(".head_right").removeClass("toggle");

	  //resscr()
  })


}); 




$(window).load(function()  {
$(".div-center").height($(window).height());
$("#nav").height($(window).height());
$(window).resize(function(){
$(".div-center").height($(window).height());
$("#nav").height($(window).height());
})

});



$(function (){
		$(".cnlist ul>li:nth-child(2n)").addClass("event")

})







/*$(function(){
	$(".common").hover(function(){
		$(".common").children(".pull_down").stop(true,true).slideDown(500)
		},function(){
		$(".common").children(".pull_down").stop(true,true).slideUp(500)
		})
		
		
})*/
$(function(){
	$(".common2").hover(function(){
		$(".common2").children(".pull_down").stop(true,true).slideDown(500)
		},function(){
		$(".common2").children(".pull_down").stop(true,true).slideUp(500)
		})
		
		
})

$(function(){
	 $("#header .common").hover(function(){
	  $(this).stop().animate({"height": "80px"}, 500, "swing");
	  },function(){
	  $(this).stop().animate({"height": "86px"}, 500, "swing");
	  })
	})




$(function(){
var lazyheight = 0;
//获取数据
function showload(){
lazyheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
if ($(window).scrollTop() >= 100) {
//$('#metop').stop().animate({"top": "-86px"}, 100)
$("#metop").stop().fadeOut(100,0);
$('#metop2').stop().animate({"top": "0"}, 500)

}
  
else if($(window).scrollTop() <= 0){
//$('#metop').stop().animate({"top": "0px"}, 500)
$("#metop").stop().fadeTo(1000,1);
$('#metop2').stop().animate({"top": "-126px"}, 500)

	}
}

//showload();
//绑定事件
$(window).bind("scroll", function(){
//当滚动条滚动时
showload();

	  $("#nav").stop().fadeOut(100,0);
	  $(".head_right").removeClass("toggle");

	  //resscr()
  
  });
})






$(function (){
	$("#classification .fenlei ul li").click(function(){//each变例，每一个a标签
			$("#classification .fenlei ul li").removeClass("hover")
			$(this).addClass("hover")//给对应的a添加样式hover
		})
})


$(function(){
	$(".case_class_a_list ul li:has(div)").hover(function(){
		$(this).children(".pull_down2").stop(true,true).animate({"left": "0"}, 100);
		},function(){
		$(this).children(".pull_down2").stop(true,true).animate({"left": "-150"}, 100);
		})
		
		
})
$(function(){
	$(".case_class_a_list2 ul .li2:has(div)").hover(function(){
		$(this).children(".pull_down2").stop(true,true).animate({"left": "0"}, 200);
		},function(){
		$(this).children(".pull_down2").stop(true,true).animate({"left": "-190"}, 100);
		})
		
		
})

$(function(){
	$(".right_contact_img ul li:has(div)").hover(function(){
		$(this).children(".pull_down2").stop(true,true).animate({"right": "0"}, 300);
		},function(){
		$(this).children(".pull_down2").stop(true,true).animate({"right": "-201"}, 300);
		})
		
		
})
$(function(){
	$("#container_case2 .case_one").hover(function(){
		$(this).addClass("hover")//给对应的a添加样式hover
		$(this).find(".caselogo").stop(true,true).animate({"top": "0"}, 200);
		$(this).find(".bgs_01").stop(true,true).animate({"bottom": "0"}, 200);
		},function(){
		$(this).removeClass("hover")//先删除所有的a的样式hover	
		$(this).find(".caselogo").stop(true,true).animate({"top": "-180"}, 200);
		$(this).find(".bgs_01").stop(true,true).animate({"bottom": "-70"}, 200);
		})
		
		
})


$(function (){
	$(".nav ul .xia").each(function(index){//each变例，每一个a标签
		$(this).mousemove(function(){//鼠标滑过a的时候式
			$(this).addClass("hover")//给对应的a添加样式hover
		})
		$(this).mouseout(function(){//鼠标滑过a的时候式
			$(".nav ul .xia").removeClass("hover")//先删除所有的a的样式hover
		})
	})
})

$(function(){

	$(".fenlei").each(function(){
			$(this).find("li").each(function(i){
				var thisid = 0;
				thisid = 'Nav'+(i+1);
				$(this).attr('id',thisid);
			});
    }); 
	
	$(".fe").each(function(){
			$(this).find(".case_title").each(function(i){
				var thisid = 0;
				thisid = 'nun'+(i+1);
				$(this).attr('id',thisid);
			});
    }); 
	
})


$(function(){
//	var move=$('#tbNav');
//		
//	var window_w = $(window).width();
//	
//	if(window_w>1000){move.show();}

$('#Nav1').click( function () {$('html,body').animate({scrollTop: $('#nun1').offset().top - 165 + 'px'},'slow');});
$('#Nav2').click( function () {$('html,body').animate({scrollTop: $('#nun2').offset().top - 165 + 'px'},'slow');});
$('#Nav3').click( function () {$('html,body').animate({scrollTop: $('#nun3').offset().top - 165 + 'px'},'slow');});
$('#Nav4').click( function () {$('html,body').animate({scrollTop: $('#nun4').offset().top - 165 + 'px'},'slow');});
$('#Nav5').click( function () {$('html,body').animate({scrollTop: $('#nun5').offset().top - 165 + 'px'},'slow');});
$('#Nav6').click( function () {$('html,body').animate({scrollTop: $('#nun6').offset().top - 165 + 'px'},'slow');});
$('#Nav7').click( function () {$('html,body').animate({scrollTop: $('#nun7').offset().top - 165 + 'px'},'slow');});
$('#Nav8').click( function () {$('html,body').animate({scrollTop: $('#nun8').offset().top - 165 + 'px'},'slow');});

		
});


$(function (){
	$(".case_class_a_list .pull_down2").each(function(index){//each变例，每一个a标签
		$(this).mousedown(function(){//鼠标滑过a的时候式
			$("#container_case .fe:eq("+index+")").animate({"min-height": "260px"}, 300)
			$("#container_case .fe:eq("+index+")").css("display","table")//给对应的a添加样式hover
		})
	})
})
$(function (){
	$(".entire .huadong ").click(function(){
		$(".entire .quancheng").animate({"width": "15%"}, 500)
		$(".entire .quancheng").css("cursor","pointer")
		$(".entire .yitihua").animate({"width": "85%"}, 500)
		$(".entire .huadong").css("cursor","default")
		$(".entire .flip").animate({"opacity": "0"}, 500)
		$(".entire .quancheng .jiantou").animate({"opacity": "1"}, 500)
		$(".entire .yitihua .jiantou").animate({"opacity": "0"}, 500)
	})
	$(".entire .quancheng ").click(function(){
		$(".entire .yitihua").animate({"width": "15%"}, 500)
		$(".entire .huadong").css("cursor","pointer")
		$(".entire .quancheng").animate({"width": "85%"}, 500)
		$(".entire .quancheng").css("cursor","default")
		$(".entire .flip").animate({"opacity": "1"}, 500)
		$(".entire .yitiMain").animate({"opacity": "0"}, 500)
		$(".entire .quancheng .jiantou").animate({"opacity": "0"}, 500)
		$(".entire .yitihua .jiantou").animate({"opacity": "1"}, 500)
	})
})


$(function (){
	$(".entire .yitihua .hua .yitiMain .d1").each(function(index){//each变例，每一个a标签
		$(this).mousemove(function(){//鼠标滑过a的时候式
			$(".entire .yitihua .hua .yitiMain .d1:eq("+index+")").stop().animate({"margin-top": "-10px"}, 200)
		})
		$(this).mouseout(function(){//鼠标滑过a的时候式
			$(".entire .yitihua .hua .yitiMain .d1:eq("+index+")").stop().animate({"margin-top": "0"}, 300)
		})
	})
})


$(function (){
	$(".data .row1_2").each(function(index){//each变例，每一个a标签
		$(this).mousemove(function(){//鼠标滑过a的时候式
			$(".data .row1_2:eq("+index+")").stop().css("z-index","12")
		})
		$(this).mouseout(function(){//鼠标滑过a的时候式
			$(".data .row1 .row1_2").stop().css("z-index","10")
			$(".data .row2 .row1_2").stop().css("z-index","9")
			$(".data .row3 .row1_2").stop().css("z-index","8")
		})
	})
})

$(function (){
	$("#container_case3 ul li dl dd").each(function(index){//each变例，每一个a标签
		$(this).hover(function(){//鼠标滑过a的时候式
			$("#container_case3 ul li dl dd:eq("+index+")").stop().animate({"top": "80px"}, 200)
		},function(){
			$("#container_case3 ul li dl dd:eq("+index+")").stop().animate({"top": "239px"}, 200)
		})
	})
})


$(function (){
	$("#container_case3 ul li").each(function(index){//each变例，每一个a标签
		$(this).mousemove(function(){//鼠标滑过a的时候式
			$("#container_case3 ul li:eq("+index+")").stop().css("z-index","2")
		})
		$(this).mouseout(function(){//鼠标滑过a的时候式
			$("#container_case3 ul li:eq("+index+")").stop().css("z-index","1")
		})
	})
})


$(function (){
	$(".xuqiu2 .centent .tijiao ul .hover1 input").each(function(index){//each变例，每一个a标签
		$(this).focus(function(){//鼠标滑过a的时候式
			$(".xuqiu2 .centent .tijiao ul .hover1:eq("+index+")").addClass("hover")
		})
		$(this).blur(function(){//鼠标滑过a的时候式
			$(".xuqiu2 .centent .tijiao ul .hover1:eq("+index+")").removeClass("hover")
		})
	})
})
$(function (){
	$(".xuqiu2 .centent .tijiao ul .miaoshu textarea").each(function(index){//each变例，每一个a标签
		$(this).focus(function(){//鼠标滑过a的时候式
			$(".xuqiu2 .centent .tijiao ul .miaoshu:eq("+index+")").addClass("hover2")
		})
		$(this).blur(function(){//鼠标滑过a的时候式
			$(".xuqiu2 .centent .tijiao ul .miaoshu:eq("+index+")").removeClass("hover2")
		})
	})
})

$(function (){
	$(".jbcontent dl").each(function(index){//each变例，每一个a标签
		$(this).hover(function(){//鼠标滑过a的时候式
			$(".jbcontent dl dd:eq("+index+")").stop().animate({"right": "272px"}, 200)
		},function(){
			$(".jbcontent dl dd:eq("+index+")").stop().animate({"right": "-552px"}, 200)
		})
	})
})


$(function (){
	$("#index_main .bannerMain .leftBanner .leftTop dl dd").each(function(index){//each变例，每一个a标签
		$(this).hover(function(){//鼠标滑过a的时候式
			$("#index_main .bannerMain .leftBanner .leftTop dl dd:eq("+index+")").stop().animate({"top": "80px"}, 200)
		},function(){
			$("#index_main .bannerMain .leftBanner .leftTop dl dd:eq("+index+")").stop().animate({"top": "152px"}, 200)
		})
	})
})
$(function (){
	$("#index_main .bannerMain .leftBanner .leftBottom .zhanku dl dt").each(function(index){//each变例，每一个a标签
		$(this).hover(function(){//鼠标滑过a的时候式
			$("#index_main .bannerMain .leftBanner .leftBottom .zhanku dl dt span:eq("+index+")").stop().animate({"bottom": "0"}, 200)
		},function(){
			$("#index_main .bannerMain .leftBanner .leftBottom .zhanku dl dt span:eq("+index+")").stop().animate({"bottom": "-35px"}, 200)
		})
	})
})


$(function(){
	
	setInterval(function(){$("#index_main .bannerMain .leftBanner .leftBottom .tuijian ul li:first").animate({"margin-left":"-300"},1000,function(){
		$("#index_main .bannerMain .leftBanner .leftBottom .tuijian ul li:first").clone().appendTo("#index_main .bannerMain .leftBanner .leftBottom .tuijian ul")
		$("#index_main .bannerMain .leftBanner .leftBottom .tuijian ul li:first").remove()
		$("#index_main .bannerMain .leftBanner .leftBottom .tuijian ul li:last").css("margin-left","0")
	})},3000)
})
$(function (){
	$(".ser_02 ul li").each(function(index){//each变例，每一个a标签
		$(this).hover(function(){//鼠标滑过a的时候式
			$(".ser_02 ul li img:eq("+index+")").stop().animate({"top": "0px"}, 200)
		},function(){
			$(".ser_02 ul li img:eq("+index+")").stop().animate({"top": "10px"}, 100)
		})
	})
})

$(function (){
	$(".image-top").addClass("ainimatesty")//addClass("first")

})

$(window).scroll(function(){
	if($(window).scrollTop() > 100){
		$(".bjinfo dl dt").stop().fadeTo(800,1);

	}else{
		$(".bjinfo dl dt").stop().fadeOut(800,0);

	};
	if($(window).scrollTop() >600){
        $(".main_infos").stop().animate({left: 0}, 300);

	}else{
        $(".main_infos").stop().animate({left: -120+'%'}, 300);

	};
	if($(window).scrollTop() > 1100){
		$(".exdiv dt").stop().animate({left: 0}, 300);
        $(".exdiv dd").stop().animate({right: 0}, 300);
		$(".panel-reservation").stop().animate({left: 0}, 300);
        $(".functions").stop().animate({right: 0}, 300);
		$(".pattern-gray").stop().fadeTo(500,1);

	}else{
		$(".exdiv dt").stop().animate({left: -120+'%'}, 300);
        $(".exdiv dd").stop().animate({right: -120+'%'}, 300);
		$(".panel-reservation").stop().animate({left: -120+'%'}, 300);
        $(".functions").stop().animate({right: -120+'%'}, 300);
		$(".pattern-gray").stop().fadeOut(100,0);
	};
	if($(window).scrollTop() > 1800){
		$(".hzdiv dd").stop().animate({left: 0}, 300);
        $(".hzdiv dt").stop().animate({right: 0}, 300);

	}else{
		$(".hzdiv dd").stop().animate({left: -120+'%'}, 300);
        $(".hzdiv dt").stop().animate({right: -120+'%'}, 300);

	};
	if($(window).scrollTop() > 2670){
		$(".div-bottom-main").stop().fadeTo(500,1);

	}else{
		$(".div-bottom-main").stop().fadeOut(100,0);

	}
})



$(function(){
	$(".fenlei ul li").hover(function(){
		$(this).find("a").stop().animate({"width": "170"}, 100);
		},function(){
		$(this).find("a").stop().animate({"width": "100"}, 100);
		})
		
		
})

