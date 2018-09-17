// 常用工具
var zjzjUtil = {

    // 打开新窗口
    openUrl: function (url) {
        var newTab = window.open();
        newTab.opener = null;
        newTab.location = url;
    },

    // 加入收藏夹
    addFavorite: function (sURL, sTitle) {
        try {
            window.external.addFavorite(sURL, sTitle)
        } catch (e) {
            try {
                window.sidebar.addPanel(sTitle, sURL, "")
            } catch (e) {
                alert("加入收藏失败，请使用Ctrl+D进行添加")
            }
        }
    },

    // 设为首页
    // url -> http://www.zjzj.net/index?m=index
    // 设为首页的帮助页 https://www.baidu.com/cache/sethelp/index.html
    setHomepage: function (url) {
        if (document.all) {
            try {
                document.body.style.behavior = 'url(#default#homepage)';
                document.body.setHomePage(url);
            } catch (e) {
                alert("您的浏览器不支持，请按照下面步骤操作：1.打开浏览器设置。2.点击设置网页。3.输入：" + url + "点击确定。");
            }
        } else if (window.sidebar) {
            if (window.netscape) {
                try {
                    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
                } catch (e) {
                    alert("该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入 about:config,然后将项 signed.applets.codebase_principal_support 值该为true")
                }
            }
            var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
            prefs.setCharPref('browser.startup.homepage', url)
        }
    },

    setHome: function (obj, url) {
        try {
            obj.style.behavior = 'url(#default#homepage)';
            obj.setHomePage(url);
        } catch (e) {
            if (window.netscape) {
                try {
                    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                } catch (e) {
                    alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
                }
            } else {
                alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【" + url + "】设置为首页。");
            }
        }
    },

    getCurrDate: function () {
        var today = new Date();//定义日期对象
        var yyyy = today.getFullYear();//通过日期对象的getFullYear()方法返回年
        var MM = today.getMonth() + 1;//通过日期对象的getMonth()方法返回年
        var dd = today.getDate();//通过日期对象的getDate()方法返回年

        MM = this.checkTime(MM);
        dd = this.checkTime(dd);
        return yyyy + "年" + MM + "月" + dd + "日";
    },

    checkTime: function (i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

};

// 设为首页
$('#set_as_homepage').on('click', function () {
    zjzjUtil.setHome($(this), '金华市建设工程造价管理协会');
});

// 添加到收藏夹
$('#add_to_favorite').on('click', function () {
    zjzjUtil.addFavorite('金华市建设工程造价管理协会', '#');
});

$('#curr_date_tip').text(zjzjUtil.getCurrDate());


// 材料查询
var userLogin = {

    // 登录弹框
    _loginLayerIndex: null

    , showLoginLayer: function () {
        var that = this;
        var content = $('#tmpl_login').html();

        this._loginLayerIndex = layer.open({
            // title: '',
            type: 1,
            area: ['444px', '344px'],
            skin: 'layui-layer-title-hide',
            content: content,
            closeBtn: 1,
            success: function () {
                that.bindLoginBtn();
                that.changeVerifyImg();
            }
        });
    }

    // 登录按钮
    , bindLoginBtn: function () {
        var that = this;
        $('#btn_login').on('click', function () {

            var username = $.trim($("#l_username").val()),
                password = $.trim($("#l_password").val()),
                verifyCode = $('#verifyCode').val();

            if (!username || !password) {
                layer.msg("用户名和密码不能为空！");
                return false;
            }

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
                        // 登录
                        _isLogin = true;
                        var href =  $('#href_li_clcx').attr('data-href');
                        $('#href_li_clcx').off('click').attr('href', href);

                        layer.msg('登录成功');
                        layer.close(that._loginLayerIndex);
                        window.location.href = "/news/5/selectMsg/0";

                    } else {
                        layer.msg(res.msg);
                    }
                }
            });
        });
    }

    // 修改验证码
    , changeVerifyImg: function () {
        var verifyCode = $("#verifycodeimg");

        verifyCode.on('click', function () {
            $(this).attr("src", "/authimage?date=" + new Date());
        });
    }

};

var _isLogin = _isLogin || false;
if (!_isLogin) {
    var $hrefLiClcx = $('#href_li_clcx');
    if ($hrefLiClcx.length) {
        $('#href_li_clcx').off('click').on('click', message);
    }
}
function message() {
    // alert("你无权访问该页！请先登录或注册成A、B、D类网员");
    // -> 直接提示弹框
    userLogin.showLoginLayer();
    // return false;
}
