$(document).ready(function () {
    $("ul.sf-menu").superfish({delay: 250, animation: {opacity: "show", height: "show"}, speed: "slow"});
    var b = 0;
    setInterval(function () {
        b -= 1;
        $("div.cloud-icons").css("backgroundPosition", b + "px 0")
    }, 20);
    $(".fancybox").fancybox({padding: 0, openEffect: "elastic", closeEffect: "elastic"});
    $(".fancybox img").each(function () {
        var a = $(this);
        a.attr("src", a.attr("src")).load(function () {
            rwidth = this.width;
            rheight = this.height;
            a.parent("a").css({width: "" + rwidth + "px", height: "" + rheight + "px"})
        })
    });
    $(".fancybox img").hover(function () {
        $(this).stop().animate({opacity: "0.1"}, 300)
    }, function () {
        $(this).stop().animate({opacity: "1"}, 300)
    });
    jQuery("#feature-slider").slides({
        next: "next",
        prev: "prev",
        generatePagination: !0,
        autoHeight: !0,
        bigTarget: !1,
        hoverPause: !0,
        width: 960,
        play: 5E3
    });
    $(".sublink").click(function (a) {
        a.preventDefault();
        a.stopImmediatePropagation();
        var b = $(this).attr("data-to");
        jQuery.scrollTo($(b), 600, function () {
            $("#subscribe-area").slideToggle(450, null, function () {
                jQuery.scrollTo($(b), 600)
            })
        })
    });
    $("#sub-close").click(function () {
        $("#subscribe-area").slideToggle(450, function () {
            jQuery.scrollTo(0, 600)
        })
    });
    $("#top").click(function () {
        jQuery.scrollTo(0, 450)
    });
    $(".slide-link").click(function (a) {
        a.preventDefault();
        a.stopImmediatePropagation();
        a = $(this).attr("href");
        jQuery.scrollTo($(a), 450)
    });
    $(".reply-link").click(function (a) {
        a.preventDefault();
        a.stopImmediatePropagation();
        jQuery.scrollTo($("#comments"), 450)
    });
    $().tchover({
        page_url: "http://tyler.tc/",
        tweet_text: "Check this awesome page out!",
        count_url: "http://tyler.tc/"
    });
    $(".social img").hover(function () {
        $(this).stop().animate({opacity: "0"}, 400)
    }, function () {
        $(this).stop().animate({opacity: "1"}, 400)
    });
    $("#store-button img").hover(function () {
        $(this).stop().animate({opacity: "0"}, 400)
    }, function () {
        $(this).stop().animate({opacity: "1"}, 400)
    })
});
(function (a, b, c) {
    var d = a.getElementsByTagName(b)[0];
    a.getElementById(c) || (a = a.createElement(b), a.id = c, a.src = "../../../platform.twitter.com/widgets.js", d.parentNode.insertBefore(a, d))
})(document, "script", "twitter-wjs");
(function (a, b, c) {
    var d = a.getElementsByTagName(b)[0];
    a.getElementById(c) || (a = a.createElement(b), a.id = c, a.src = "../../../connect.facebook.net/en_US/all.js#xfbml=1", d.parentNode.insertBefore(a, d))
})(document, "script", "facebook-jssdk");
(function (a, b, c) {
    var d = a.getElementsByTagName(b)[0];
    a.getElementById(c) || (a = a.createElement(b), a.id = c, a.src = "../../../assets.pinterest.com/js/pinit.js", d.parentNode.insertBefore(a, d))
})(document, "script", "pinterest");
window.___gcfg = {lang: "en"};
(function () {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.async = !0;
    a.src = "../../../apis.google.com/js/plusone.js";
    var b = document.getElementsByTagName("script")[0];
    b.parentNode.insertBefore(a, b)
})();
function equalize(elms) {
    var tallest = 0;
    $(elms).each(function () {
        var thisHeight = $(this).height();
        if (thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    $(elms).height(tallest);
};(function (d) {
    var k = d.scrollTo = function (a, i, e) {
        d(window).scrollTo(a, i, e)
    };
    k.defaults = {axis: 'xy', duration: parseFloat(d.fn.jquery) >= 1.3 ? 0 : 1};
    k.window = function (a) {
        return d(window)._scrollable()
    };
    d.fn._scrollable = function () {
        return this.map(function () {
            var a = this,
                i = !a.nodeName || d.inArray(a.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) != -1;
            if (!i)return a;
            var e = (a.contentWindow || a).document || a.ownerDocument || a;
            return d.browser.safari || e.compatMode == 'BackCompat' ? e.body : e.documentElement
        })
    };
    d.fn.scrollTo = function (n, j, b) {
        if (typeof j == 'object') {
            b = j;
            j = 0
        }
        if (typeof b == 'function') b = {onAfter: b};
        if (n == 'max') n = 9e9;
        b = d.extend({}, k.defaults, b);
        j = j || b.speed || b.duration;
        b.queue = b.queue && b.axis.length > 1;
        if (b.queue) j /= 2;
        b.offset = p(b.offset);
        b.over = p(b.over);
        return this._scrollable().each(function () {
            var q = this, r = d(q), f = n, s, g = {}, u = r.is('html,body');
            switch (typeof f) {
                case'number':
                case'string':
                    if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)) {
                        f = p(f);
                        break
                    }
                    f = d(f, this);
                case'object':
                    if (f.is || f.style) s = (f = d(f)).offset()
            }
            d.each(b.axis.split(''), function (a, i) {
                var e = i == 'x' ? 'Left' : 'Top', h = e.toLowerCase(), c = 'scroll' + e, l = q[c], m = k.max(q, i);
                if (s) {
                    g[c] = s[h] + (u ? 0 : l - r.offset()[h]);
                    if (b.margin) {
                        g[c] -= parseInt(f.css('margin' + e)) || 0;
                        g[c] -= parseInt(f.css('border' + e + 'Width')) || 0
                    }
                    g[c] += b.offset[h] || 0;
                    if (b.over[h]) g[c] += f[i == 'x' ? 'width' : 'height']() * b.over[h]
                } else {
                    var o = f[h];
                    g[c] = o.slice && o.slice(-1) == '%' ? parseFloat(o) / 100 * m : o
                }
                if (/^\d+$/.test(g[c])) g[c] = g[c] <= 0 ? 0 : Math.min(g[c], m);
                if (!a && b.queue) {
                    if (l != g[c]) t(b.onAfterFirst);
                    delete g[c]
                }
            });
            t(b.onAfter);
            function t(a) {
                r.animate(g, j, b.easing, a && function () {
                        a.call(this, n, b)
                    })
            }
        }).end()
    };
    k.max = function (a, i) {
        var e = i == 'x' ? 'Width' : 'Height', h = 'scroll' + e;
        if (!d(a).is('html,body'))return a[h] - d(a)[e.toLowerCase()]();
        var c = 'client' + e, l = a.ownerDocument.documentElement, m = a.ownerDocument.body;
        return Math.max(l[h], m[h]) - Math.min(l[c], m[c])
    };
    function p(a) {
        return typeof a == 'object' ? a : {top: a, left: a}
    }
})(jQuery);
(function (b) {
    b.fn.tchover = function (h) {
        var d = {
            page_url: "http://tyler.tc/",
            alt_tags: !1,
            scheme: "light",
            tweet_text: "Check this awesome page out!",
            tweet_lang: "en",
            count_url: "http://tyler.tc/"
        }, h = b.extend(d, h);
        b("img.tc-hover").each(function () {
            var a = b(this);
            a.attr("src");
            var c = a.attr("data-hover");
            a.parent().is("a") && a.unwrap();
            a.wrap('<div class="tchover-wrapper ' + c + '"/>');
            var f = this.height, e = this.width;
            a.attr("height") && (f = a.attr("height"));
            a.attr("width") && (e = a.attr("width"));
            a.attr("src");
            a.attr("alt");
            var g = (f - 20) / 2;
            a.parent().css({width: e + "px", height: f + "px"});
            "pin" == c ? (c = (e - 43) / 2, encodeURI(a.attr("src")), encodeURI(a.attr("alt")), encodeURI(d.page_url), a.parent().append('<span><div style="position:absolute; top:' + g + "px; left:" + c + 'px;"><img src="images/pinit.png" alt="Pin Image or Video" class="tchover-pin-button" /></span></div>')) : "like" == c ? (c = (e - 50) / 2, a.parent().append('<span><div style="position:absolute; top:' + g + "px; left:" + c + 'px;"><div class="fb-like" data-href="' + d.page_url + '" data-colorscheme="' + d.scheme + '" data-send="false" data-layout="button_count" data-width="50" data-show-faces="false"></div></span></div>')) : "tweet" == c && (c = (e - 55) / 2, a.parent().append('<span><div style="position:absolute; top:' + g + "px; left:" + c + 'px;"><a href="https://twitter.com/share" class="twitter-share-button" data-url="' + d.page_url + '" data-text="' + d.tweet_text + '" data-lang="' + d.tweet_lang + '" data-counturl="' + d.count_url + '" data-count="none">Tweet</a></span></div>'))
        });
        b(".tchover-wrapper img.tc-hover").mouseenter(function () {
            b(this);
            b(this).parent().children("span").css({display: "block"});
            b(this).stop().animate({opacity: "0.2"}, 55, null, function () {
                b(this).parent().children("span").css({"z-index": "999"})
            })
        });
        b(".tchover-wrapper span").mouseleave(function () {
            b(this);
            b(this).css("z-index", "1");
            b(this).parent().children("img.tc-hover").stop().animate({opacity: "1"}, 300);
            b(this).css("display", "none")
        });
        b("img.tchover-pin-button").click(function (a) {
            a = document.createElement("script");
            a.setAttribute("type", "text/javascript");
            a.setAttribute("charset", "UTF-8");
            a.setAttribute('src', '../../../assets.pinterest.com/js/pinmarklet2a3b.js?r=' + 99999999 * Math.random());
            document.body.appendChild(a)
        });
        return !0
    }
})(jQuery);