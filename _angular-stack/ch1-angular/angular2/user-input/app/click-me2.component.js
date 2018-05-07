"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ClickMe2Component = (function () {
    function ClickMe2Component() {
        this.clickMessage = '';
        this.clicks = 1;
    }
    // 非强类型
    ClickMe2Component.prototype.onClickMe2 = function (event) {
        var evtMsg = event ? ' 触发事件的元素是:' + event.target.tagName : '';
        this.clickMessage = ("Click #" + this.clicks++ + ". " + evtMsg);
    };
    return ClickMe2Component;
}());
ClickMe2Component = __decorate([
    core_1.Component({
        selector: 'click-me2',
        template: "\n    <button (click)=\"onClickMe2($event)\">\u4E0D! .. \u70B9\u6211!</button>\n    {{clickMessage}}"
    })
], ClickMe2Component);
exports.ClickMe2Component = ClickMe2Component;
//# sourceMappingURL=click-me2.component.js.map