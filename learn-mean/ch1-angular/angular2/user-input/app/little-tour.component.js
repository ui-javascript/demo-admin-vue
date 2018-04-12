"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LittleTourComponent = (function () {
    function LittleTourComponent() {
        this.sites = ['菜鸟教程', 'Google', 'Taobao', 'Facebook'];
    }
    LittleTourComponent.prototype.addSite = function (newSite) {
        if (newSite) {
            this.sites.push(newSite);
        }
    };
    return LittleTourComponent;
}());
LittleTourComponent = __decorate([
    core_1.Component({
        selector: 'little-tour',
        template: "\n    <input #newSite\n      (keyup.enter)=\"addSite(newSite.value)\"\n      (blur)=\"addSite(newSite.value); newSite.value='' \">\n\n    <button (click)=addSite(newSite.value)>Add</button>\n\n    <ul><li *ngFor=\"let site of sites\">{{site}}</li></ul>\n  "
    })
], LittleTourComponent);
exports.LittleTourComponent = LittleTourComponent;
//# sourceMappingURL=little-tour.component.js.map