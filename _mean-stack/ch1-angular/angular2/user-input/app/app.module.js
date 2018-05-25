"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var click_me_component_1 = require("./click-me.component");
var click_me2_component_1 = require("./click-me2.component");
var keyup_components_1 = require("./keyup.components");
var little_tour_component_1 = require("./little-tour.component");
var loop_back_component_1 = require("./loop-back.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule
        ],
        declarations: [
            app_component_1.AppComponent,
            click_me_component_1.ClickMeComponent,
            click_me2_component_1.ClickMe2Component,
            keyup_components_1.KeyUpComponent_v1,
            keyup_components_1.KeyUpComponent_v2,
            keyup_components_1.KeyUpComponent_v3,
            keyup_components_1.KeyUpComponent_v4,
            little_tour_component_1.LittleTourComponent,
            loop_back_component_1.LoopbackComponent
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map