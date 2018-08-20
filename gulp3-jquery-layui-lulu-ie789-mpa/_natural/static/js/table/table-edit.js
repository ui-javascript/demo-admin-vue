/*global $, window*/
$.fn.editableTableWidget = function (options) {

    'use strict';

    // 保持链式
    return $(this).each(function () {

        var buildDefaultOptions = function () {
                var opts = $.extend({}, $.fn.editableTableWidget.defaultOptions); // 继承默认配置
                opts.editor = opts.editor.clone();
                return opts;
            },
            activeOptions = $.extend(buildDefaultOptions(), options), // 用户配置
            ARROW_LEFT = 37, ARROW_UP = 38, ARROW_RIGHT = 39, ARROW_DOWN = 40, ENTER = 13, ESC = 27, TAB = 9, // 键值
            element = $(this), // 供下文访问
            editor = activeOptions.editor.css('position', 'absolute').hide().appendTo(element.parent()), // 追加并隐藏input
            active, // 焦点状态的td

            // 显示输入框
            showEditor = function (select) {
                active = element.find('td:focus');

                if (active.length) {
                    editor.val(active.text())
                        .removeClass('error')
                        .show()
                        .offset(active.offset())
                        .css(active.css(activeOptions.cloneProperties))
                        .width(active.width())
                        .height(active.height())
                        .focus();
                    if (select) {
                        editor.select();
                    }
                }
            },

            // 将输入值赋值到原来的表单
            setActiveText = function () {
                var text = editor.val(),
                    evt = $.Event('change'), // $.Event
                    originalContent;

                if (active.text() === text || editor.hasClass('error')) {
                    return true;
                }

                originalContent = active.html(); // 保存旧值
                active.text(text).trigger(evt, text);

                if (evt.result === false) {
                    active.html(originalContent);
                }
            },

            // 键盘箭头移动
            movement = function (element, keycode) {
                if (keycode === ARROW_RIGHT) {
                    return element.next('td');
                } else if (keycode === ARROW_LEFT) {
                    return element.prev('td');
                } else if (keycode === ARROW_UP) {
                    return element.parent().prev().children().eq(element.index());
                } else if (keycode === ARROW_DOWN) {
                    return element.parent().next().children().eq(element.index());
                }
                return [];
            };

        // 输入框
        editor
            .blur(function () { // 失去焦点
                setActiveText();
                editor.hide();
            })
            .keydown(function (e) { // 回车
                if (e.which === ENTER) {
                    setActiveText();
                    editor.hide();
                    active.focus();
                    e.preventDefault();
                    e.stopPropagation();
                } else if (e.which === ESC) {
                    editor.val(active.text());

                    e.preventDefault();
                    e.stopPropagation();

                    editor.hide();
                    active.focus();
                } else if (e.which === TAB) {
                    active.focus();
                } else if (this.selectionEnd - this.selectionStart === this.value.length) {
                    var possibleMove = movement(active, e.which);
                    if (possibleMove.length > 0) {
                        possibleMove.focus();
                        e.preventDefault();
                        e.stopPropagation();
                    }
                }
            })
            .on('input paste', function () {
                var evt = $.Event('validate');
                active.trigger(evt, editor.val());
                if (evt.result === false) {
                    editor.addClass('error');
                } else {
                    editor.removeClass('error');
                }
            });

        // 表格元素
        element
            .on('click keypress dblclick', showEditor)
            .css('cursor', 'pointer')
            .keydown(function (e) {
                var prevent = true,
                    possibleMove = movement($(e.target), e.which);
                if (possibleMove.length > 0) {
                    possibleMove.focus();
                } else if (e.which === ENTER) {
                    showEditor(false);
                } else if (e.which === 17 || e.which === 91 || e.which === 93) {
                    showEditor(true);
                    prevent = false;
                } else {
                    prevent = false;
                }
                if (prevent) {
                    e.stopPropagation();
                    e.preventDefault();
                }
            });

        // tab访问顺序
        element.find('td').prop('tabindex', 1);

        // 窗口大小发生改变
        $(window).on('resize', function () {
            if (editor.is(':visible')) {
                editor.offset(active.offset())
                    .width(active.width())
                    .height(active.height());
            }
        });

    });

};

// 默认选项
$.fn.editableTableWidget.defaultOptions = {
    cloneProperties: ['padding', 'padding-top', 'padding-bottom', 'padding-left', 'padding-right',
        'text-align', 'font', 'font-size', 'font-family', 'font-weight',
        'border', 'border-top', 'border-bottom', 'border-left', 'border-right'],
    editor: $('<input>') // jquery对象
};

