/**
 * 首页
 */

// 新闻轮播
myFocus.set({
    id: 'boxID',
    pattern: 'mF_expo2010',
    //切换时间间隔(秒)
    time: 3,
    //触发切换模式:'click'(点击)/'mouseover'(悬停)
//        trigger: 'click',
    width: 572,
    height: 378
    //文字层高度设置(像素),'default'为默认高度，0为隐藏
    // 注意部分主体设置txtHeight会出BUG
//        txtHeight: 'default',
//        loadIMGTimeout:0
});


// 期刊轮播
(function (d, D, v) {
    d.fn.responsiveSlides = function (h) {
        var b = d.extend({
            auto: !0,
            speed: 1E3,
            timeout: 7E3,
            pager: !1,
            nav: !1,
            random: !1,
            pause: !1,
            pauseControls: !1,
            prevText: "Previous",
            nextText: "Next",
            maxwidth: "",
            controls: "",
            namespace: "rslides",
            before: function () {
            },
            after: function () {
            }
        }, h);
        return this.each(function () {
            v++;
            var e = d(this), n, p, i, k, l, m = 0, f = e.children(), w = f.size(), q = parseFloat(b.speed),
                x = parseFloat(b.timeout), r = parseFloat(b.maxwidth), c = b.namespace, g = c + v,
                y = c + "_nav " + g + "_nav", s = c + "_here", j = g + "_on", z = g + "_s",
                o = d("<ul class='" + c + "_tabs " + g + "_tabs' />"),
                A = {"float": "left", position: "relative"}, E = {"float": "none", position: "absolute"},
                t = function (a) {
                    b.before();
                    f.stop().fadeOut(q, function () {
                        d(this).removeClass(j).css(E)
                    }).eq(a).fadeIn(q, function () {
                        d(this).addClass(j).css(A);
                        b.after();
                        m = a
                    })
                };
            b.random && (f.sort(function () {
                return Math.round(Math.random()) - 0.5
            }), e.empty().append(f));
            f.each(function (a) {
                this.id = z + a
            });
            e.addClass(c + " " + g);
            h && h.maxwidth && e.css("max-width", r);
            f.hide().eq(0).addClass(j).css(A).show();
            if (1 <
                f.size()) {
                if (x < q + 100) return;
                if (b.pager) {
                    var u = [];
                    f.each(function (a) {
                        a = a + 1;
                        u = u + ("<li><a href='#' class='" + z + a + "'>" + a + "</a></li>")
                    });
                    o.append(u);
                    l = o.find("a");
                    h.controls ? d(b.controls).append(o) : e.after(o);
                    n = function (a) {
                        l.closest("li").removeClass(s).eq(a).addClass(s)
                    }
                }
                b.auto && (p = function () {
                    k = setInterval(function () {
                        var a = m + 1 < w ? m + 1 : 0;
                        b.pager && n(a);
                        t(a)
                    }, x)
                }, p());
                i = function () {
                    if (b.auto) {
                        clearInterval(k);
                        p()
                    }
                };
                b.pause && e.hover(function () {
                    clearInterval(k)
                }, function () {
                    i()
                });
                b.pager && (l.bind("click", function (a) {
                    a.preventDefault();
                    b.pauseControls || i();
                    a = l.index(this);
                    if (!(m === a || d("." + j + ":animated").length)) {
                        n(a);
                        t(a)
                    }
                }).eq(0).closest("li").addClass(s), b.pauseControls && l.hover(function () {
                    clearInterval(k)
                }, function () {
                    i()
                }));
                if (b.nav) {
                    c = "<a href='javascript:' class='" + y + " prev'>" + b.prevText + "</a><a href='javascript:' class='" + y + " next'>" + b.nextText + "</a>";
                    h.controls ? d(b.controls).append(c) : e.after(c);
                    var c = d("." + g + "_nav"), B = d("." + g + "_nav.prev");
                    c.bind("click", function (a) {
                        a.preventDefault();
                        if (!d("." + j + ":animated").length) {
                            var c = f.index(d("." + j)),
                                a = c - 1, c = c + 1 < w ? m + 1 : 0;
                            t(d(this)[0] === B[0] ? a : c);
                            b.pager && n(d(this)[0] === B[0] ? a : c);
                            b.pauseControls || i()
                        }
                    });
                    b.pauseControls && c.hover(function () {
                        clearInterval(k)
                    }, function () {
                        i()
                    })
                }
            }
            if ("undefined" === typeof document.body.style.maxWidth && h.maxwidth) {
                var C = function () {
                    e.css("width", "100%");
                    e.width() > r && e.css("width", r)
                };
                C();
                d(D).bind("resize", function () {
                    C()
                })
            }
        })
    }
})(jQuery, this, 0);


//        function changeUrl(_this){
//            var year= $(_this).val();
//            year = year.toString();
//
//            if (year!="---各省工程造价网站---" && year!="---相关链接---") {
//                window.open(year);
//            }
//        }

// 公共方法

//        function startTime(){
//			var today=new Date();//定义日期对象
//			var yyyy = today.getFullYear();//通过日期对象的getFullYear()方法返回年
//			var MM = today.getMonth()+1;//通过日期对象的getMonth()方法返回年
//			var dd = today.getDate();//通过日期对象的getDate()方法返回年
//			MM=checkTime(MM);
//			dd=checkTime(dd);
//			document.getElementById('nowDateTimeLi').innerHTML=yyyy+"年"+MM +"月"+ dd +"日";
//			setTimeout('startTime()',1000);//每一秒中重新加载startTime()方法
//		}

// Handlebars.registerHelper('if_eq', function(v1, v2, opts) {
//     if(v1 == v2)
//         return opts.fn(this);
//     else
//         return opts.inverse(this);
// });

// 登录按钮
function bindLoginBtn() {
    $('#btn_login').on('click', function () {

        var username = $.trim($("#l_username").val()),
            password = $.trim($("#l_password").val()),
            verifyCode = $('#verifyCode').val();

        if (!username || !password) {
            layer.msg("用户名和密码不能为空！");
            return false;
        }

        // $('#gologin').submit();

        var param = {
            username: username,
            password: password,
            verifyCode: verifyCode
        };

        $.ajax({
            url: '/loginAjax',
            type: 'post',
            dataType: 'json',
            data: param,
            success: function (res) {

                if (res.success) {
                    var user = res.user;
                    if (user.userType !== 'A') {
                        user.canModified = true;
                    }

                    // window.location.reload();
                    // console.log(res);
                    var tpl = $("#tmpl_update_password").html(),
                        template = Handlebars.compile(tpl),
                        context = user,
                        html = template(context);

                    $("#userinfo_bar").html(html);
                    bindToggleBtn();
                    bindUpdatePasswordBtn();
                    console.log('取消点击');
                    $('#btn_clcx_search').off('click');

                    layer.msg('登录成功');
                    layer.close(loginLayerIndex);

                } else {
                    layer.msg(res.msg);
                }
            }
        });
    });
}

// 修改验证码
function changeVerifyImg() {
    var verifyCode = $("#verifycodeimg");

    verifyCode.on('click', function () {
        $(this).attr("src", "/authimage?date=" + new Date());
    });
}

// 显示登录弹框
var loginLayerIndex = null;

function showLoginLayer() {
    var content = $('#tmpl_login').html();

    loginLayerIndex = layer.open({
        // title: '',
        type: 1,
        area: ['444px', '344px'],
        skin: 'layui-layer-title-hide',
        content: content,
        closeBtn: 1,
        success: function () {
            bindLoginBtn();
            changeVerifyImg();
        }
    });
}


// 登录提示
$('#login_tip').on('click', function () {
    showLoginLayer();
});


// 修改密码切换
function toggleUpdatePassword() {
    $('#bar_user_info').toggle();
    $('#bar_update_password').toggle();
}

function bindToggleBtn() {
    $('#btn_toggle_update_password, #cancel_update_password').on('click', function () {
        // modifyPwd();
        toggleUpdatePassword();
    });
}

bindToggleBtn();


// 修改密码
function updatePassword() {
    var username = $('#update_password_username').val(),
        password = $('#old_password').val(),
        newPassword = $('#new_password').val();

    var param = 'username=' + username + '&password=' + password + '&newpassword=' + newPassword;

    $.ajax({
        type: "POST",
        url: "/front/ModifyPwd",
        data: param,
        dataType: 'text',
        async: false,
        success: function (d) {
            if (d == 0) {
                layer.msg("请填写完整信息!");
            }
            else if (d == 2) {
                layer.msg("修改失败,检查原密码是否填写正确!");
            }
            else if (d == 1) {
                layer.msg("修改成功!");
                toggleUpdatePassword();
                // window.location.href = "/";
            }
            else if (d == 3) {
                layer.msg("网络异常!");
                // window.location.href = "/";
            }
            else {

            }
        }
    });
}

// 绑定修改密码按钮
function bindUpdatePasswordBtn() {
    $('#btn_update_password').on('click', function () {
        updatePassword();
    });
}

bindUpdatePasswordBtn();


// 新闻提示垂直轮播
// http://www.jq22.com/jquery-info5847
(function ($) {
    $.fn.extend({
        "slideUp": function (value) {

            var docthis = this;

            //默认参数
            value = $.extend({
                "li_h": "30",
                "time": 3000,
                "movetime": 500
            }, value);

            //向上滑动动画
            function autoani() {
                $("li:first", docthis).animate({"margin-top": -value.li_h}, value.movetime, function () {
                    $(this).css("margin-top", 0).appendTo(".noticeTip__line");
                })
            }

            //自动间隔时间向上滑动
            var anifun = setInterval(autoani, value.time);

            //悬停时停止滑动，离开时继续执行
            $(docthis).children("li").hover(function () {
                clearInterval(anifun);			//清除自动滑动动画
            }, function () {
                anifun = setInterval(autoani, value.time);	//继续执行动画
            });
        }
    })
})(jQuery);

$("#notice_tip_line").slideUp();

// 全文搜索
// 回车
$('#all_site_search').keyup(function (event) {
    if (event.keyCode == 13) {
        $("#all_site_form").submit();
    }
});
// 点击搜索
$('#all_site_glass').on('click', function () {
    $("#all_site_form").submit();
});


// 新闻中心Tab
$('.news-tab .tab-item').off('click').on('click', function () {
    var links = [
        //  通知公告
        '/news/newsInfor/10',
        // 政策文件
        '/news/newsInfor/10',
        // 地方新闻
        '/news/newsInfor/11',
        // 工作简报
        '/news/newsInfor/50',
        // 综合信息
        '/news/newsInfor/14'
    ];
    var $index = $(this).index();
    $(this).addClass('hover')
        .siblings('.tab-item').removeClass('hover');
    $('.news-content .panel')
        .eq($index).show()
        .siblings('.panel').hide();

    $('#news_list_more_link').attr('href', links[$index]);
});

// 查询中心
$('.searchCenter__title--item').off('click').on('click', function () {
    var $index = $(this).index();
    $(this).addClass('hover')
        .siblings('.searchCenter__title--item').removeClass('hover');
    $('.searchCenter__box')
        .eq($index).show()
        .siblings('.searchCenter__box').hide();
});
$('.searchCenter__nav--item').off('click').on('click', function () {
    var $index = $(this).index();
    $(this).addClass('hover')
        .siblings('.searchCenter__nav--item').removeClass('hover');
    $(this).parents('.searchCenter__box')
        .find('.searchCenter__panel--item')
        .eq($index).show()
        .siblings('.searchCenter__panel--item').hide();
});


// 选择地区
function areaShow() {
    $(".area-sltlists").toggle();
}

function change() {
    var newdiv = document.getElementById("newdiv");
    var checkdiv = document.getElementById("area_hack");
    var inputs = checkdiv.getElementsByTagName("input");
    newdiv.innerHTML = "";
    var ht = "";
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            newdiv.innerHTML += inputs[i].value + " ";
            ht += inputs[i].value + " ";
        }
    }
    $("#areastr").val(ht);
    var a = $("#newdiv").html();
    if (/^\s*?$/.test(a))
        newdiv.innerHTML = "请选择";

    $(".area-sltlists").hide();
}

// 地区选择
$('#area_selection').on('click', areaShow);
$('#btn_area_confirm').on('click', change);


// 期刊轮播设置
//        $("#arrow_left").responsiveSlides({
//            auto: true,
//            pager: true,
//            nav: true,
//            speed: 700
//        });
//        $("#arrow_right").responsiveSlides({
//            auto: true,
//            pager: true,
//            speed: 700
//        });

$(".journal-list").responsiveSlides({
    auto: true,
    pager: true,
    nav: true,
    speed: 700
});

// jqPlot混合图表
// https://www.cnblogs.com/yaozhenfa/p/jqplot-axis-tick-labels-and-rotated-text.html
// var line1 = [
//     ['Cup Holder Pinion Bob', 7],
//     ['Generic Fog Lamp', 9],
//     ['HDTV Receiver', 15],
//     ['8 Track Control Module', 12],
//     [' Sludge Pump Fourier Modulator', 3],
//     ['Transcender/Spice Rack', 6],
//     ['Hair Spray Danger Indicator', 18]
// ];
//
// var line2 = [['Nickle', 28], ['Aluminum', 13], ['Xenon', 54], ['Silver', 47],
//     ['Sulfer', 16], ['Silicon', 14], ['Vanadium', 23]];
//
//
// $.jqplot('price_chart', [line1, line2], {
//     title: null,
//
//     // 指定第二个图表以顶部为X轴，右边为Y轴进行刻度
//     series: [
//         {renderer: $.jqplot.BarRenderer},
//         {xaxis: 'x2axis', yaxis: 'y2axis'}
//     ],
//
//     axesDefaults: {
//         tickRenderer: $.jqplot.CanvasAxisTickRenderer,
//         tickOptions: {
//             fontFamily: 'Georgia',
//             angle: -30,
//             fontSize: '10pt',
//             labelPosition: 'start'
//         }
//     },
//     axes: {
//         xaxis: {
//             renderer: $.jqplot.CategoryAxisRenderer
//         },
//         yaxis: {
//             autoscale: true
//         },
//         x2axis: {
//             renderer: $.jqplot.CategoryAxisRenderer //指定X轴显示分类
//         },
//         y2axis: {
//             autoscale: true
//         }
//     }
// });


var options = {
    title: {
        text: null
        // subtext: '数据来自西安兰特水电测控技术有限公司',
        // x: 'center'
    },
    grid: {
        // show: false,
        right: '20px',
        bottom: '80px',
        top: '20px',
        borderColor: '#ddd'
    },
    tooltip: {
        trigger: 'axis'
        // ,axisPointer: {
        //     type: 'cross',
        //     // crossStyle: {
        //     //     color: '#999'
        //     // }
        // }
    },
    // toolbox: {
    //     feature: {
    //         dataView: {show: true, readOnly: false},
    //         magicType: {show: true, type: ['line', 'bar']},
    //         restore: {show: true},
    //         saveAsImage: {show: true}
    //     }
    // },
    legend: {
        data: ['我层住宅', '多层住宅', '综合指数'],
        // orient: 'vertical',  //垂直显示
        y: 'bottom',    //延Y轴居中
        x: 'center' //居右显示
    },
    xAxis: [
        {
            type: 'category',
            data: ['2017/9', '2017/10', '2017/11', '2017/12', '2018/1'],
            // axisPointer: {
            //     type: 'shadow'
            // },
            axisLabel: {
                // top: '5px',
                interval: 0, // 横轴信息全部显示
                // rotate: -30,
                margin: 12
            },
            splitLine: {
                show: true
            }
        }
    ],
    // yAxis: [
    //     {
    //         type: 'value',
    //         name: null,
    //         min: 80,
    //         max: 140
    //         // interval: 10
    //         // axisLabel: {
    //         //     formatter: '{value} ml'
    //         // }
    //     }
    //     // {
    //     //     type: 'value',
    //     //     name: '单项指数',
    //     //     min: 0,
    //     //     max: 800,
    //     //     interval: 160
    //     //     // ,axisLabel: {
    //     //     //     formatter: '{value} °C'
    //     //     // }
    //     // }
    // ],
    yAxis: {
        type: 'value',
        name: null,
        min: function(value) {
            return Math.floor(value.min/10)*10 - 10;
        },
        max: function(value) {
            return Math.ceil(value.max/10)*10;
        }
        // min: 90
        // max: 130,
        // interval: 10
        // axisLabel: {
        //     formatter: '{value} ml'
        // }
    },
    series: [
        // {
        //     name: '综合指数',
        //     type: 'bar',
        //     data: [20, 22, 33, 45, 63]
        // },
        // {
        //     name: '我层住宅',
        //     type: 'line',
        //     // yAxisIndex: 1,
        //     data: [20, 22, 33, 45, 63]
        // },
        // {
        //     name: '多层住宅',
        //     type: 'line',
        //     // yAxisIndex: 1,
        //     data: [20, 22, 33, 45, 63]
        // }
    ]
};

// 请求图表
// SpringMVC出现406错误的解决办法 https://blog.csdn.net/lzc4869/article/details/53502334
// https://blog.csdn.net/lzc4869/article/details/53502334
// var chart = null;
// $.ajax({
//     url: "/zsqsReport",
//     type: "GET",
//     // contentType: "application/x-www-form-urlencoded;charset=utf-8",
//     scriptCharset: 'utf-8',
//     // dataType: "json",
//     success: function (res) {
//         if (res) {
//             options.legend.data = res.legend;
//             options.series = res.series;
//             options.xAxis[0].data = res.xAxis;
//
//
//             // 自定义颜色
//             $.each(options.series, function (i, el) {
//                 // console.log(el);
//
//                 if (el.type === 'bar') {
//                     // 柱状图
//                     el.itemStyle = {
//                         normal: {
//                             color: '#769fd0'
//                         }
//                     };
//                     el.splitLine = {
//                         show: true
//                     };
//                     el.barWidth = "55%";
//                 } else if (el.type === 'line') {
//                     el.symbol = 'circle'; // 拐点样式
//                     el.symbolSize = 8;    // 拐点大小
//                     el.itemStyle = {
//                         normal: {
//                             lineStyle: {
//                                 width: 3
//                             }
//                         }
//                     };
//                 }
//             });
//
//             // 使用 SVG 渲染器
//             chart = echarts.init(document.getElementById('price_chart'), null, {renderer: 'svg'});
//             // chart = echarts.init(document.getElementById('price_chart'));
//             chart.setOption(options);
//         }
//     }
// });

// 企业信用等级
// http://www.jq22.com/yanshi7462
// https://github.com/vaakash/jquery-easy-ticker
// jq22 vTicker
$('#credit_scroll').vTicker({
    speed: 700,
    pause: 2000,
    animation: 'fade',
    mousePause: true,
    showItems: 10
});


// 信息、定额书投递
$('#btn_destd').on('click', function (e) {

    // 阻止表单默认提交
    e.preventDefault();

    var param = $('#form_destd').serialize();

    var url = "http://zc.zjzj.net/BeforeExpressQuery.aspx?" + param;
    zjzjUtil.openUrl(url);
});

// 材料查询提示
// 用户未登录需要这个提示
var _isLogin = _isLogin || false;
if (!_isLogin) {
    $('#btn_clcx_search').on('click', function (e) {
        // 阻止表单默认提交
        e.preventDefault();

        // layer.msg("你无权访问该页！请先登录或注册成A、B、D类网员");

        // 直接弹出登录框
        showLoginLayer();
    });
}


// 图片网站
// $('#website_link').on('click', function () {
//     layer.alert('大赛将于2018年7月10日开放注册！', {
//         title: '通知',
//         // type: 1,
//         area: ['300px'],
//         skin: 'layui-layer-tip-theme',
//         shadowClose:  true
//         // content: content,
//         // closeBtn: 1
//     });
// });

// 开启悬浮广告
// var ad = new AdMove("ad-jksh_0");
// var ad2 = new AdMove("ad-jksh_1");

// ad.Run("ad-jksh_0");
// ad2.Run("ad-jksh_1");


// 底部固定广告
$('.footer-atds .atds-close').click(function () {
    $('.footer-atds').addClass('closed').fadeOut(); // closed作为关闭标记
});

// 滑动至页尾隐藏广告
$(window).scroll(function () {
    // 底部广告冲显示
    var scrollTop = $(this).scrollTop();
    var scrollHeight = $(document).height();
    var windowHeight = $(this).height();
    if (scrollHeight - scrollTop - windowHeight <= 100) {
        $('.footer-atds').fadeOut();
    } else {
        // 广告没有被用户关闭
        if (!$('.footer-atds').hasClass('closed')) {
            $('.footer-atds').show();
        }
    }

    // 悬浮广告停止后重新调整Y轴位置
    // ad.resetPosY('ad-jksh_0');
    // ad2.resetPosY('ad-jksh_1');
});

// placeholder兼容
$('input, textarea').placeholder();

// 悬浮提示框
$('.js-tooltip').tipsy({gravity: 'e', title: function () {
        return $(this).text();
    }});


/**
 * 浙江造价
 */
var zjzjIndex = {

    _url: {
        getCityList: '/city/citys',
        getAreaList: '/city/areas'
    },

    // 初始化
    mounted: function () {
        this.areaLinkage();
        this.initProvince();
    },

    // 初始化省
    initProvince: function () {
        // 浙江省编码为330000
        $('#yjcx_province').val(330000).trigger('change');
    },

    getSelectList: function (data) {
        var tmpl = '<option value="">--请选择--</option>';
        if (data) {
            $.each(data, function (i, el) {
                tmpl += '<option value="'+ (el.cityId||el.areaId) +'">'+ (el.city||el.area) +'</option>';
            });
        }
        return tmpl;
    },

    // 三级联动
    areaLinkage: function () {
        var that = this;

        $('#yjcx_province').on('change', function () {
            var pid = $(this).val();
            if (pid) {
                var data = {
                    pid: pid
                };
                $.ajax({
                    url: that._url.getCityList,
                    data: data,
                    method: 'get',
                    dataType: 'json',
                    success: function (res) {
                        var list = that.getSelectList(res);
                        $('#yjcx_city').html(list);
                        $('#yjcx_area').html(that.getSelectList());
                    }
                });
            }
        });

        $('#yjcx_city').on('change', function () {
            var pid = $(this).val();
            if (pid) {
                var data = {
                    pid: pid
                };
                $.ajax({
                    url: that._url.getAreaList,
                    data: data,
                    method: 'get',
                    dataType: 'json',
                    success: function (res) {
                        var list = that.getSelectList(res);
                        $('#yjcx_area').html(list);
                    }
                });
            }
        });
    }
};

zjzjIndex.mounted();


