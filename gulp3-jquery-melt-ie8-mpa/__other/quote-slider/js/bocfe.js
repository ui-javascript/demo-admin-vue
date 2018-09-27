// 默认obj为执行元素

// HOVER
// 默认样式 .h , 默认Hover样式 .hover
// 自定义HOVER可使用 Hover(obj, classname)
$(function () {
    $(".h").hover(function () {
        $(this).addClass("hover")
    }, function () {
        $(this).removeClass("hover")
    })
})

function Hover(obj, classname) {
    obj.hover(function () {
        $(this).addClass(classname)
    }, function () {
        $(this).removeClass(classname)
    })
}

// TAB
// 默认焦点样式 .cur
// 为防止xp系统opacity可能出现的锯齿或边缘模糊， 默认.tabbox效果.show() / .hide()
// 拓展.tabbox成opacity， 需在.tabbox上加上 data-effect="true"
function Tab(tabBtn, tabBox) {
    var tabbl = true;
    tabBtn.eq(0).addClass("cur")
    tabBox.eq(0).show()
    tabBtn.click(function () {
        var n = $(this).index();
        $(this).addClass("cur").siblings().removeClass("cur")
        if (tabBox.attr("data-effect") == "true") {
            if (!tabbl) {
                return
            }
            tabbl = false;
            tabBox.eq(n).stop().fadeIn(800).siblings().stop().fadeOut(800, function () {
                tabbl = true;
            })
        } else {
            tabBox.eq(n).show().siblings().hide()
        }
    })
}

// 图片全屏 / 图片充满整个父级
// 默认box自带loading背景图
// 默认obj hide
function FullBg(box, obj) {
    box.css("background", "none")
    obj.eq(0).stop().fadeIn(1000)

    function resizeBg() {
        obj.removeClass("w-f").removeClass("h-f").css("margin", 0)
        var boxR = box.width() / box.height(),
            objR = obj.width() / obj.height();
        if (objR < boxR) {
            obj.addClass('w-f').css("margin-top", -(obj.height() - box.height()) / 2);
        } else {
            obj.addClass('h-f').css("margin-left", -(obj.width() - box.width()) / 2);
        }
    }

    $(window).resize(resizeBg).trigger("resize");
}


// 标签进场效果
// 用于多平级标签依次载入 默认标签具有position属性及opacuty: 0;
// direction 从哪个方向进入
// distance  进入到指定距离
// number    平级标签的个数
// time      进场动画的时间
// delay     下一标签的延迟
function Enter(obj, direction, distance, number, time, delay) {
    // 从左往右，distance > 0
    if (direction == "left") {
        obj.stop().animate({
            left: distance,
            opacity: 1
        }, time)
        setTimeout(function () {
            if (obj.next().index() + 1 <= number) {
                Enter(obj.next(), direction, distance, number, time, delay)
            }
        }, delay)
    }
    // 从上往下，distance > 0
    if (direction == "top") {
        obj.stop().animate({
            top: distance,
            opacity: 1
        }, time)
        setTimeout(function () {
            if (obj.next().index() + 1 <= number) {
                Enter(obj.next(), direction, distance, number, time, delay)
            }
        }, delay)
    }
}

// 图片加载 调用方法
// _PreLoadImg([
// 图片路径
// ],function(){

// })
function _PreLoadImg(b, e) {
    var c = 0, a = {}, d = 0;
    for (src in b) {
        d++
    }
    for (src in b) {
        a[src] = new Image();
        a[src].onload = function () {
            if (++c >= d) {
                e(a)
            }
        };
        a[src].src = b[src]
    }
};

