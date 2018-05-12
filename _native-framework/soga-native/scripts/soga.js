/**
 * 公共类方法
 */
(function () {
    'use strict';

    // 设置动画
    var setTransform = function (element, animation) {
        element.style.webkitTransform = animation;
        element.style.mozTransform = animation;
        element.style.oTransform = animation;
        element.style.msTransform = animation;
        element.style.transform = animation;
    };

    // 兼容
    var addPrefix = function (element, attr, value) {
        var prefix = ['webkit', 'moz', 'o', 'ms'];
        var uattr = attr.split('');
        uattr[0] = uattr[0].toUpperCase();
        uattr = uattr.join('');
        console.log(uattr);
        prefix.forEach(function (x) {
            element.style[x + uattr] = value;
        });
        element.style[attr] = value;
    };

    //设置过渡时间
    var setTransitionDuration = function (element, times) {
        element.style.webkitTransitionDuration = times + 'ms';
        element.style.mozTransitionDuration = times + 'ms';
        element.style.oTransitionDuration = times + 'ms';
        element.style.transitionDuration = times + 'ms';
    };
    // 结束过渡
    var transitionEnd = function (elem, handler) {
        elem.addEventListener('transitionend', handler, false);
        elem.addEventListener('webkitTransitionEnd', handler, false);
        elem.addEventListener('mozTransitionEnd', handler, false);
        elem.addEventListener('oTransitionEnd', handler, false);
    };
    // 删除结束过渡
    var deleteTransitionEnd = function (elem, handler) {
        elem.removeEventListener('transitionend', handler, false);
        elem.removeEventListener('webkitTransitionEnd', handler, false);
        elem.removeEventListener('mozTransitionEnd', handler, false);
        elem.removeEventListener('oTransitionEnd', handler, false);
    };
    // 结束动画
    var animationEnd = function (elem, handler) {
        elem.addEventListener('animationend', handler, false);
        elem.addEventListener('webkitAnimationEnd', handler, false);
        elem.addEventListener('mozAnimationEnd', handler, false);
        elem.addEventListener('OAnimationEnd', handler, false);
    };
    // 删除结束动画
    var deleteAnimationEnd = function (elem, handler) {
        elem.removeEventListener('animationend', handler, false);
        elem.removeEventListener('webkitAnimationEnd', handler, false);
        elem.removeEventListener('mozAnimationEnd', handler, false);
        elem.removeEventListener('OAnimationEnd', handler, false);
    };

    // 兼容的事件监听
    var addEvent = function (dom, type, handle, capture) {
        capture = capture || false;
        deleteEvent(dom, type, handle);
        if (dom.addEventListener) {
            dom.addEventListener(type, handle, capture);
        } else if (dom.attachEvent) {
            dom.attachEvent("on" + type, handle);
        }
    };
    // 兼容的删除事件监听
    var deleteEvent = function (dom, type, handle) {
        if (dom.removeEventListener) {
            dom.removeEventListener(type, handle);
        } else if (dom.detachEvent) {
            dom.detachEvent('on' + type, handle);
        }
    };

    // 获取样式
    var getStyle = function (dom, attr) {
        return dom.currentStyle ? dom.currentStyle[attr] : getComputedStyle(dom, false)[attr];
    };


    // 取随机数
    var getRandom = function (max, min) {
        min = arguments[1] || 0;
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    var eventBroker = function (e, className, success, fn) {
        var target = e.target;
        var isInView = false;
        while (target) {
            if (target && target.nodeName == '#document') {
                fn && fn();
                isInView = false;
                break;
            } else if (target.classList.contains(className)) {
                isInView = true;
                success && success(e, target);
                break;
            }

            target = target.parentNode;
        }

        return isInView;
    };

    // 动画
    var requestAnimationFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
            window.setTimeout(a, 1e3 / 60, (new Date).getTime())
        };
    }();
    var cancelAnimationFrame = function () {
        return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function (id) {
            clearTimeout(id);
        };
    }();

    var inputChange = function (dom, fn, capture) {
        capture = capture || false;
        addEvent(dom, 'input', fn, capture);
        addEvent(dom, 'propertychange', fn, capture);
    };

    // 添加和移除样式
    var addClass = function (elem, className) {
        if (elem.classList) {
            elem.classList.add(className);
        } else {
            elem.className += ' ' + className;
        }
    };
    var removeClass = function (elem, className) {
        if (elem.classList) {
            elem.classList.remove(className);
        } else {
            elem.className = elem.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    };

    // CSS样式
    var css = function (dom, styles) {
        for (var s in styles) {
            dom.style[s] = styles[s];
        }
    };

    // 判断是否class
    var hasClass = function (elem, className) {
        if (elem.classList) {
            return elem.classList.contains(className);
        } else {
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(elem.className);
        }
    };

    var ajax = function (params) {
        params = params || {};
        params.data = params.data || {};
        var json = params.jsonp ? jsonp(params) : json(params);

        // ajax请求
        function json(params) {
            params.type = (params.type || 'GET').toUpperCase();
            params.data = formatParams(params.data);
            var xhr = null;

            // 实例化XMLHttpRequest对象
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else {
                // IE6及其以下版本
                xhr = new ActiveXObjcet('Microsoft.XMLHTTP');
            }

            // 监听事件
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    var status = xhr.status;
                    if (status >= 200 && status < 300) {
                        var response = '';
                        var type = xhr.getResponseHeader('Content-type');
                        if (type.indexOf('xml') !== -1 && xhr.responseXML) {
                            response = xhr.responseXML; //Document对象响应
                        } else if (type === 'application/json') {
                            response = JSON.parse(xhr.responseText); //JSON响应
                        } else {
                            response = xhr.responseText; //字符串响应
                        }

                        params.success && params.success(response);
                    } else {
                        params.error && params.error(status);
                    }
                }
            };

            // 连接和传输数据
            if (params.type == 'GET') {
                xhr.open(params.type, params.url + '?' + params.data, true);
                xhr.send(null);
            } else {
                xhr.open(params.type, params.url, true);
                //设置提交时的内容类型
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
                xhr.send(params.data);
            }
        }

        // jsonp请求
        function jsonp(params) {
            //创建script标签并加入到页面中
            var callbackName = params.jsonp;
            var head = document.getElementsByTagName('head')[0];
            // 设置传递给后台的回调参数名
            params.data['callback'] = callbackName;
            var data = formatParams(params.data);
            var script = document.createElement('script');
            head.appendChild(script);

            //创建jsonp回调函数
            window[callbackName] = function (json) {
                head.removeChild(script);
                clearTimeout(script.timer);
                window[callbackName] = null;
                params.success && params.success(json);
            };

            //发送请求
            script.src = params.url + '?' + data;

            //超时处理
            if (params.time) {
                script.timer = setTimeout(function () {
                    window[callbackName] = null;
                    head.removeChild(script);
                    params.error && params.error({
                        message: '超时'
                    });
                }, time);
            }
        }

        // 格式化参数
        function formatParams(data) {
            var arr = [];
            for (var name in data) {
                arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
            }

            // 添加一个随机数，防止缓存
            arr.push('v=' + random());
            return arr.join('&');
        }

        // 获取随机数
        function random() {
            return Math.floor(Math.random() * 10000 + 500);
        }
    };


    // 全屏切换
    var toggleFullScreen = function (elem) {
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
            var docElm = elem || document.documentElement;
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen();
            } else if (docElm.mozRequestFullScreen) {
                docElm.mozRequestFullScreen();
            } else if (docElm.webkitRequestFullScreen) {
                docElm.webkitRequestFullScreen();
            } else if (docElm.msRequestFullscreen) {
                docElm.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    };

    // 获取浏览器类型
    var getWebType = function () {
        var type = ['webkit', 'moz', 'o', 'ms'];
        var cur = '';
        type.forEach(function (t) {
            var mo = t + 'Transform';
            if (mo in document.createElement('div').style) {
                cur = t;
            }
        });
        return cur;
    };

    // 判断是否是IE浏览器
    var isIE = function () {
        if (!!window.ActiveXObject || "ActiveXObject" in window) {
            return true;
        }
        return false;
    };

    // 获取父节点
    var parent = function (elem, className) {
        var parent = elem.parentNode;
        while (parent && parent.nodeName != '#document' && className) {
            if (hasClass(parent, className)) {
                break;
            }
            parent = parent.parentNode;
        }

        return parent;
    };

    // 新增脚本
    var addScript = function (arr, callback) {
        if (typeof arr === 'string') {
            arr = [arr];
        }
        var num = 0;

        function add(url) {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.onload = script.onreadystatechange = function () {
                if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
                    num++;
                    if (num == arr.length) {
                        callback();
                    }
                    script.onload = script.onreadystatechange = null;
                }
            };
            script.src = url;
            head.appendChild(script);
        }

        arr.forEach(add);
    };




    // 输出模块 U
    var soga = {
        setTransform: setTransform,  // 添加transform动画
        setTransitionDuration: setTransitionDuration,  //  添加过渡时间
        addPrefix: addPrefix,  //  添加prefix前缀
        transitionEnd: transitionEnd,  //  监听过渡结束
        deleteTransitionEnd: deleteTransitionEnd,  // 移除过渡结束事件
        animationEnd: animationEnd,  //  监听动画结束
        deleteAnimationEnd: deleteAnimationEnd,  // 移除动画结束事件
        addEvent: addEvent,  // 绑定事件
        getStyle: getStyle,  // 获取样式
        getRandom: getRandom,  // 获取随机数
        eventBroker: eventBroker,  // 事件代理
        requestAnimationFrame: requestAnimationFrame,  // requestAnimationFrame动画
        cancelAnimationFrame: cancelAnimationFrame,  // 移除requestAnimationFrame动画
        inputChange: inputChange,  // 实时监听表单值变化
        addClass: addClass,  //  添加class类
        removeClass: removeClass,  // 移除class类
        hasClass: hasClass,  // 判断是否包含某一个class类
        ajax: ajax,  // ajax请求
        toggleFullScreen: toggleFullScreen,  // 全屏事件
        getWebType: getWebType,  // 获取当前是哪个浏览器
        parent: parent,  //  获取父元素
        addScript: addScript,  // 新增一个js文件
        css: css,  // 添加css样式
        isIE: isIE  // 判断是否是IE
    };

    window.U = soga;
})();


// 模块
if (typeof(module) !== 'undefined') {
    module.exports = window.U;
} else if (typeof define === 'function' && define.amd) {
    define([], function () {
        'use strict';
        return window.U;
    });
}