import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../service/app.service";
import * as i2 from "primeng/api";
import * as i3 from "../app.component";
function AppMainComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 5);
} }
const _c0 = function (a0, a1, a2, a3, a4, a5, a6, a7) { return { "layout-menu-slim": a0, "layout-menu-overlay": a1, "layout-menu-static": a2, "layout-menu-static-inactive": a3, "layout-menu-overlay-active": a4, "layout-menu-active": a5, "p-input-filled": a6, "p-ripple-disabled": a7 }; };
export class AppMainComponent {
    constructor(menuService, primengConfig, app) {
        this.menuService = menuService;
        this.primengConfig = primengConfig;
        this.app = app;
    }
    onLayoutClick() {
        if (!this.menuClick && !this.menuButtonClick) {
            if (this.slimMenu) {
                this.menuService.reset();
            }
            this.mobileMenuActive = false;
            this.overlayMenuActive = false;
            this.menuHoverActive = false;
        }
        if (!this.topbarMenuButtonClick) {
            this.activeTopbarItem = null;
            this.topbarMenuActive = false;
        }
        if (this.configActive && !this.configClick) {
            this.configActive = false;
        }
        this.configClick = false;
        this.menuClick = false;
        this.menuButtonClick = false;
        this.topbarMenuButtonClick = false;
    }
    onMenuButtonClick(event) {
        this.menuButtonClick = true;
        if (this.isMobile()) {
            this.mobileMenuActive = !this.mobileMenuActive;
        }
        else {
            if (this.staticMenu) {
                this.staticMenuInactive = !this.staticMenuInactive;
            }
            else if (this.overlayMenu) {
                this.overlayMenuActive = !this.overlayMenuActive;
            }
        }
        event.preventDefault();
    }
    onTopbarMenuButtonClick(event) {
        this.topbarMenuButtonClick = true;
        this.topbarMenuActive = !this.topbarMenuActive;
        event.preventDefault();
    }
    onTopbarItemClick(event, item) {
        this.topbarMenuButtonClick = true;
        if (this.activeTopbarItem === item) {
            this.activeTopbarItem = null;
        }
        else {
            this.activeTopbarItem = item;
        }
        event.preventDefault();
    }
    onTopbarSubItemClick(event) {
        event.preventDefault();
    }
    onMenuClick(event) {
        this.menuClick = true;
    }
    onMenuColorChange(event) {
        this.app.darkMenu = event.checked;
    }
    onRippleChange(event) {
        this.app.ripple = event.checked;
        this.primengConfig.ripple = event.checked;
    }
    onConfigClick(event) {
        this.configClick = true;
    }
    get slimMenu() {
        return this.app.menu === 'slim';
    }
    get overlayMenu() {
        return this.app.menu === 'overlay';
    }
    get staticMenu() {
        return this.app.menu === 'static';
    }
    isMobile() {
        return window.innerWidth <= 640;
    }
    static { this.ɵfac = function AppMainComponent_Factory(t) { return new (t || AppMainComponent)(i0.ɵɵdirectiveInject(i1.AppService), i0.ɵɵdirectiveInject(i2.PrimeNGConfig), i0.ɵɵdirectiveInject(i3.AppComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppMainComponent, selectors: [["app-main"]], decls: 9, vars: 11, consts: [[1, "layout-wrapper", 3, "ngClass", "click"], [1, "layout-main"], [1, "layout-content"], ["hidden", ""], ["class", "layout-mask", 4, "ngIf"], [1, "layout-mask"]], template: function AppMainComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function AppMainComponent_Template_div_click_0_listener() { return ctx.onLayoutClick(); });
            i0.ɵɵelement(1, "app-topbar");
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵelement(3, "app-menu");
            i0.ɵɵelementStart(4, "div", 2);
            i0.ɵɵelement(5, "router-outlet");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "app-footer");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(7, "app-config", 3);
            i0.ɵɵtemplate(8, AppMainComponent_div_8_Template, 1, 0, "div", 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction8(2, _c0, ctx.slimMenu, ctx.overlayMenu, ctx.staticMenu, ctx.staticMenuInactive, ctx.overlayMenuActive, ctx.mobileMenuActive, ctx.app.inputStyle === "filled", !ctx.app.ripple));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", ctx.mobileMenuActive);
        } }, encapsulation: 2 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppMainComponent, [{
        type: Component,
        args: [{ selector: 'app-main', template: "<div class=\"layout-wrapper\" (click)=\"onLayoutClick()\" [ngClass]=\"{'layout-menu-slim': slimMenu,\n                'layout-menu-overlay': overlayMenu,\n                'layout-menu-static': staticMenu,\n                'layout-menu-static-inactive': staticMenuInactive,\n                'layout-menu-overlay-active': overlayMenuActive,\n                'layout-menu-active': mobileMenuActive,\n                'p-input-filled': app.inputStyle === 'filled', 'p-ripple-disabled': !app.ripple}\">\n\n    <app-topbar></app-topbar>\n\n    <div class=\"layout-main\">\n        <app-menu></app-menu>\n\n        <div class=\"layout-content\">\n            <router-outlet></router-outlet>\n        </div>\n\n        <app-footer></app-footer>\n    </div>\n\n    <app-config hidden></app-config>\n\n    <div class=\"layout-mask\" *ngIf=\"mobileMenuActive\"></div>\n</div>\n" }]
    }], function () { return [{ type: i1.AppService }, { type: i2.PrimeNGConfig }, { type: i3.AppComponent }]; }, null); })();
//# sourceMappingURL=app.main.component.js.map