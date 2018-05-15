/**
 * 弹框类
 */
define(['widget', 'jquery', 'jqueryUI'], function (widget, $, $UI) {

    // 窗口类
    function Window() {

        // 配置项
        this.CONFIG = {

            // 内容
            width: 500,
            height: 300,
            title: '系统消息',
            content: "",
            hanMask: true,
            skinClassName: null,

            // 拖拽
            isDraggable: true,
            dragHandle: null,

            // 关闭
            hasCloseBtn: false,
            handler4CloseBtn: null,
            text4CancelBtn: '取消',
            handler4CancelBtn: null,

            // Alert
            text4AlertBtn: '确定',
            handler4AlertBtn: null,

            // Confirm
            handler4ConfirmBtn: null,

            // Prompt
            text4PromptBtn: '确定',
            isPromptInputPassword: false,
            defaultValue4PromptInput: false,
            maxlength4PromptInput: 10,
            handler4PromptBtn: null
        };
    }

    // Widget基础上扩展
    Window.prototype = $.extend({}, new widget.Widget(), {

        // 渲染UI
        renderUI: function () {
            var footerContent = '';

            // 根据弹框类型
            switch (this.CONFIG.winType) {
                case "alert":
                    footerContent = '<input type="button" value="' + this.CONFIG.text4AlertBtn + '" class="window_alertBtn">';
                    break;
                case "confirm":
                    footerContent = '<input type="button" value="' +
                        this.CONFIG.text4ConfirmBtn + '" class="window_confirmBtn"><input type="button" value="' +
                        this.CONFIG.text4CancelBtn + '" class="window_cancelBtn">';
                    break;
                case "prompt":
                    this.CONFIG.content += '<p class="window_promptInputWrapper"><input type="' +
                        (this.CONFIG.isPromptInputPassword ? "password" : "text") +
                        '" value="' + this.CONFIG.defaultValue4PromptInput +
                        '" maxlength="' + this.CONFIG.maxlength4PromptInput +
                        '" class="window_promptInput"></p>';
                    footerContent = '<input type="button" value="' + this.CONFIG.text4PromptBtn +
                        ' " class="window_promptBtn"><input type="button" value="' +
                        this.CONFIG.text4CancelBtn + '" class="window_cancelBtn">';
                    break;
            }

            // 弹框内容
            this.boudingBox = $(
                '<div class="window_boundingBox">' +
                '<div class="window_body">' + this.CONFIG.content + '</div>' +
                '</div>'
            );

            // 普通弹框
            if (this.CONFIG.winType != "common") {
                this.boudingBox.prepend('<div class="window_header">' + this.CONFIG.title + '</div>');
                this.boudingBox.append('<div class="window_footer">' + footerContent + '</div>');
            }

            // 处理模态
            if (this.CONFIG.hanMask) {
                this._mask = $('<div class="window_mask"></div>');
                this._mask.appendTo("body");
            }

            // 是否有关闭按钮
            if (this.CONFIG.hasCloseBtn) {
                this.boudingBox.append('<span class="window_closeBtn">X</span>');
            }

            // 追加元素
            // 位于
            this.boudingBox.appendTo(document.body);

            // 确定输入框
            // 没有的话就是 undefined
            this._promptInput = this.boudingBox.find('.window_promptInput');
        },


        // 绑定
        bindUI: function () {
            var that = this;

            this.boudingBox.delegate(".window_alertBtn", "click", function () {
                that.fire('alert');
                that.destroy();
            }).delegate(".window_closeBtn", "click", function () {
                that.fire('close');
                that.destroy();
            }).delegate(".window_confirmBtn", "click", function () {
                that.fire('confirm');
                that.destroy();
            }).delegate(".window_cancelBtn", "click", function () {
                that.fire('cancel');
                that.destroy();
            }).delegate(".window_promptBtn", "click", function () {
                that.fire('prompt', that._promptInput.val());
                that.destroy();
            });
            if (this.CONFIG.handler4AlertBtn) {
                this.on('alert', this.CONFIG.handler4AlertBtn);
            }

            if (this.CONFIG.handler4CloseBtn) {
                this.on('close', this.CONFIG.handler4CloseBtn);
            }

            if (this.CONFIG.handler4PromptBtn) {
                this.on("prompt", this.CONFIG.handler4PromptBtn);
            }

        },

        //
        syncUI: function () {
            this.boudingBox.css({
                width: this.CONFIG.width + 'px',
                height: this.CONFIG.height + 'px',
                left: (this.CONFIG.x || (window.innerWidth - this.CONFIG.width) / 2) + 'px',
                top: (this.CONFIG.y || (window.innerHeight - this.CONFIG.height) / 2) + 'px'
            });
            if (this.CONFIG.skinClassName) {
                this.boudingBox.addClass(this.CONFIG.skinClassName);
            }

            if (this.CONFIG.isDraggable) {
                if (this.CONFIG.dragHandle) {
                    this.boudingBox.draggable({handle: this.CONFIG.dragHandle});
                } else {
                    this.boudingBox.draggable();
                }
            }

        },

        //
        destructor: function () {
            this._mask && this._mask.remove();
        },

        //
        alert: function (CONFIG) {
            $.extend(this.CONFIG, CONFIG, {winType: 'alert'});
            this.render();
            return this;
        },

        //
        confirm: function (CONFIG) {
            $.extend(this.CONFIG, CONFIG, {winType: 'confirm'});
            this.render();
            return this;
        },

        //
        prompt: function (CONFIG) {
            $.extend(this.CONFIG, CONFIG, {winType: 'prompt'});
            this.render();

            // 默认聚焦
            this._promptInput.focus();

            return this;
        },

        //
        common: function (CONFIG) {
            $.extend(this.CONFIG, CONFIG, {winType: 'common'});
            this.render();
            return this;
        }
    });

    // 返回对象
    return {
        Window: Window
    }
});