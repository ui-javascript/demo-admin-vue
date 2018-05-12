(function () {
    var Contextmenu = function (container, params) {
        'use strict';
        params = params || {};
        var options = {};
        var n = this;
        var originParams = {};
        for (var param in params) {
            if (typeof params[param] === 'object') {
                originParams[param] = {};
                for (var defPa in params[param]) {
                    originParams[param][defPa] = params[param][defPa];
                }
            } else {
                originParams[param] = params[param];
            }
        }
        ;
        for (var opt in options) {
            if (typeof params[opt] === 'object') {
                for (var defOpt in options[opt]) {
                    if (typeof params[opt][defOpt] === 'undefined') {
                        params[opt][defOpt] = options[opt][defOpt];
                    }
                }
            } else if (typeof params[opt] === 'undefined') {
                params[opt] = options[opt];
            }
        }
        ;
        n.originParams = originParams;
        n.params = params;

        n.container = container;
        n.container = typeof n.container === 'string' ? document.querySelectorAll(n.container) : n.container;
        if (n.container.length == 0) {
            return;
        }
        ;
        if (n.container.length > 1) {
            var context = [];
            Array.prototype.forEach.call(n.container, function (child) {
                child.length = 1;
                context.push(new Contextmenu(child, params));
            });
            return context;
        }
        ;
        n.container = n.container[0] || n.container;
        if (!Array.isArray(n.params.data)) {
            return;
        }

        function _banKeydown(e) {
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
        }

        document.addEventListener('DOMContentLoaded', function () {
            n.container.oncontextmenu = function () {
                return false;
            };
            U.addEvent(document, 'keydown', _banKeydown);
        });

        function _createItem(contextmenu, data) {
            if (typeof data !== 'object') return;
            var li = document.createElement('li');
            li.className = 'contextmenu-item';
            li.innerHTML = data.name;
            contextmenu.appendChild(li);
            U.addEvent(li, 'click', data.onClick);
        };

        function _mousedown(e) {
            var button = e.button;
            var pageX = e.pageX || document.body.scrollLeft + document.documentElement.scrollLeft + e.clientX;
            var pageY = e.pageY || document.body.scrollTop + document.documentElement.scrollTop + e.clientY;
            pageX = pageX - n.container.offsetLeft;
            pageY = pageY - n.container.offsetTop;
            var contextmenu = document.createElement('div');
            contextmenu.className = 'contextmenu';
            console.log(n.container.offsetLeft, pageY);
            U.css(contextmenu, {
                position: 'absolute',
                zIndex: 10000,
                top: pageX + 'px',
                left: pageY + 'px',
                background: '#fff',
                boxShadow: '0 0 2px #000'
            });
            if (e.button == 2) {
                n.params.data.forEach(function (item) {
                    _createItem(contextmenu, item);
                });
                document.body.appendChild(contextmenu);
            }
        };

        U.addEvent(document, 'mousedown', _mousedown);
        return n;
    };
    window.Contextmenu = Contextmenu;
})();

if (typeof(module) !== 'undefined') {
    module.exports = window.Contextmenu;
} else if (typeof define === 'function' && define.amd) {
    define([], function () {
        'use strict';
        return window.Contextmenu;
    });
}