!(function (window, document, $) {

    var firefly = function (id) {
        var thisFirefly = $(id);
        thisFirefly.addClass('ice-firefly').css({
            "position": "fixed",
            "bottom": "35px",
            "right": "22px"
        });
        var $this = this; // 把作用域带进去

        var checkbox = $('<input class="firefly__checkbox" id="' + id.replace(/#/i, 'this') + '" type="checkbox" /></div>');
        var label = $('<label class="firefly__body" for="' + id.replace(/#/i, 'this') + '"></label>');
        var body =
            '<div class="firefly__abdomen">\
                    <div class="firefly__thorax">\
                      <div class="firefly__head"> \
                        <div class="firefly__eyes"></div>\
                        <div class="firefly__antennae"></div>\
                      </div>\
                    </div>\
                    <div class="firefly__wings">\
                      <div class="firefly__wing firefly__wing--a"></div>\
                      <div class="firefly__wing firefly__wing--b"></div>\
                    </div>\
                  </div>';

        label.append(body);
        thisFirefly.append(checkbox).append(label);
    }


    // 暴露出去
    window.firefly = firefly;

})(window, document, $);

// (function ($) {
//
//     var methods = {
//         init: function (options) {
//
//         },
//
//         destroy: function () {
//             console.log("hello");
//         }
//     }
//
//     $.fn.firefly2 = function (method) {
//         debugger
//         // var settings = $.extend({
//         //   'location': 'top',
//         //   'background-color': 'blue'
//         // }, options);
//         //
//
//         // Method calling logic
//         if (methods[method] && method.charAt(0) !== '_') {
//             debugger
//             console.log('asd')
//             return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
//         } else if (typeof method === 'object' || !method) {
//             return methods.init.apply(this, arguments);
//         } else {
//             $.error('Method ' + method + ' does not exist on jQuery.firefly');
//         }
//     }
//
// })(jQuery);
