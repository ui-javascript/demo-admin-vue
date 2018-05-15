/**
 * Widget类
 */

define(['jquery'], function ($) {

    // widget类
    function Widget() {

        //属性：最外层容器
        this.boudingBox = null;
    }

    // 扩展方法
    Widget.prototype = {

        // 事件监听
        on: function (type, handler) {
            if (typeof this.handlers[type] == 'undefined') {
                this.handlers[type] = [];
            }
            this.handlers[type].push(handler);
            return this;
        },

        //
        fire: function (type, data) {
            if (this.handlers[type] instanceof Array) {
                var handlers = this.handlers[type];
                for (var i = 0, len = handlers.length; i < len; i++) {
                    handlers[i](data);
                }
            }

        },

        // 渲染
        render: function (container) {		//方法：渲染组件
            this.renderUI();
            this.handlers = {};
            this.bindUI();
            this.syncUI();
            $(container || document.body).append(this.boudingBox);
        },

        // 方法：销毁前
        destroy: function () {
            this.destructor();
            this.boudingBox.off();
            this.boudingBox.remove();
        },

        // 接口：添加dom节点
        renderUI: function () {

        },

        // 接口：监听事件
        bindUI: function () {

        },

        // 接口：初始化组件属性
        syncUI: function () {

        },

        // 接口：销毁前的处理函数
        destructor: function () {

        }

    };

    // 返回widget
    return {
        Widget: Widget
    }
});