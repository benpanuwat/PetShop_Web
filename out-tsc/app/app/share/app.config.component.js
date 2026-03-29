import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../app.component";
import * as i2 from "./app.main.component";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "primeng/inputswitch";
import * as i6 from "primeng/radiobutton";
function AppConfigComponent_div_50_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵelement(1, "i", 32);
    i0.ɵɵelementEnd();
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
function AppConfigComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27)(1, "a", 28);
    i0.ɵɵlistener("click", function AppConfigComponent_div_50_Template_a_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const s_r3 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.changeLayout(s_r3.name)); });
    i0.ɵɵelement(2, "span", 29);
    i0.ɵɵtemplate(3, AppConfigComponent_div_50_span_3_Template, 2, 0, "span", 30);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0, "linear-gradient(to right, " + s_r3.color1 + "," + s_r3.color2 + ")"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.app.layout === s_r3.name);
} }
const _c1 = function (a0) { return { "color": a0 }; };
function AppConfigComponent_div_55_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵelement(1, "i", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(1, _c1, f_r7.name === "default" ? "#000000" : ""));
} }
const _c2 = function (a0, a1) { return { "background-color": a0, "border": a1 }; };
function AppConfigComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27)(1, "a", 28);
    i0.ɵɵlistener("click", function AppConfigComponent_div_55_Template_a_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r11); const f_r7 = restoredCtx.$implicit; const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.changeLayout(f_r7.name)); });
    i0.ɵɵelement(2, "span", 29);
    i0.ɵɵtemplate(3, AppConfigComponent_div_55_span_3_Template, 2, 3, "span", 30);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r7 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(2, _c2, f_r7.color, f_r7.name === "default" ? "1px solid #757575" : "none"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.app.layout === f_r7.name);
} }
function AppConfigComponent_div_60_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵelement(1, "i", 32);
    i0.ɵɵelementEnd();
} }
const _c3 = function (a0) { return { "background-color": a0 }; };
function AppConfigComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27)(1, "a", 28);
    i0.ɵɵlistener("click", function AppConfigComponent_div_60_Template_a_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r15); const t_r12 = restoredCtx.$implicit; const ctx_r14 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r14.changeTheme(t_r12.name)); });
    i0.ɵɵelement(2, "span", 29);
    i0.ɵɵtemplate(3, AppConfigComponent_div_60_span_3_Template, 2, 0, "span", 30);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const t_r12 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, t_r12.color));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.theme === t_r12.name);
} }
const _c4 = function (a0) { return { "layout-config-active": a0 }; };
export class AppConfigComponent {
    constructor(app, appMain) {
        this.app = app;
        this.appMain = appMain;
        this.theme = 'turquoise';
    }
    ngOnInit() {
        this.themes = [
            { name: 'blue', color: '#3984b8' },
            { name: 'deeppurple', color: '#B85CC8' },
            { name: 'green', color: '#37a533' },
            { name: 'lime', color: '#BAD638' },
            { name: 'orange', color: '#f6ac2b' },
            { name: 'purple', color: '#7e8dcd' },
            { name: 'turquoise', color: '#39b8b6' },
            { name: 'lightblue', color: '#63aee2' },
        ];
        this.specialLayouts = [
            { name: 'bliss', color1: '#360033', color2: '#0b8793' },
            { name: 'cheer', color1: '#556270', color2: '#ff6b6b' },
            { name: 'crimson', color1: '#642b75', color2: '#c6426e' },
            { name: 'deepsea', color1: '#2c3e50', color2: '#4ca1af' },
            { name: 'disco', color1: '#4ecdc4', color2: '#556270' },
            { name: 'horizon', color1: '#003973', color2: '#e5e5be' },
            { name: 'opa', color1: '#3d7eaa', color2: '#ffe47a' },
            { name: 'sunset', color1: '#e96443', color2: '#904e95' },
            { name: 'smoke', color1: '#5b5b5b', color2: '#5b5b5b' }
        ];
        this.flatLayouts = [
            { name: 'default', color: '#ffffff' },
            { name: 'turquoise', color: '#39b8b6' },
            { name: 'blue', color: '#3984b8' },
            { name: 'deeppurple', color: '#B85CC8' },
            { name: 'green', color: '#37a533' },
            { name: 'lime', color: '#9ed729' },
            { name: 'orange', color: '#f6ac2b' },
            { name: 'purple', color: '#7e8dcd' },
            { name: 'red', color: '#f28a8b' },
        ];
        this.changeLayout(this.theme);
    }
    changeTheme(theme) {
        this.theme = theme;
        const themeLink = document.getElementById('theme-css');
        const href = 'assets/theme/theme-' + theme + '.css';
        this.replaceLink(themeLink, href);
    }
    changeLayout(layout) {
        this.app.layout = layout;
        const layoutLink = document.getElementById('layout-css');
        const href = 'assets/layout/css/layout-' + layout + '.css';
        this.replaceLink(layoutLink, href);
    }
    isIE() {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
    }
    replaceLink(linkElement, href) {
        if (this.isIE()) {
            linkElement.setAttribute('href', href);
        }
        else {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);
            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');
            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);
            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        }
    }
    onConfigButtonClick(event) {
        this.appMain.configActive = !this.appMain.configActive;
        this.appMain.configClick = true;
        event.preventDefault();
    }
    static { this.ɵfac = function AppConfigComponent_Factory(t) { return new (t || AppConfigComponent)(i0.ɵɵdirectiveInject(i1.AppComponent), i0.ɵɵdirectiveInject(i2.AppMainComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppConfigComponent, selectors: [["app-config"]], decls: 61, vars: 13, consts: [[1, "layout-config", 3, "ngClass", "click"], ["id", "layout-config-button", 1, "layout-config-button", 2, "cursor", "pointer", 3, "click"], [1, "pi", "pi-cog"], [1, "layout-config-content"], ["id", "config-form", 1, "layout-config-form"], [1, "layout-config-header"], ["id", "menumodes-panel", 1, "layout-config-section", "options"], [1, "section-name"], [1, "grid", "layout-config-options"], [1, "col-12", "md:col-6"], ["name", "menu", "value", "static", "inputId", "menuMode1", 3, "ngModel", "ngModelChange"], ["for", "menuMode1"], ["name", "menu", "value", "overlay", "inputId", "menuMode2", 3, "ngModel", "ngModelChange"], ["for", "menuMode2"], ["name", "menu", "value", "slim", "inputId", "menuMode3", 3, "ngModel", "ngModelChange"], ["for", "menuMode3"], ["id", "orientation-panel", 1, "layout-config-section", "dark"], [3, "ngModel", "onChange"], ["id", "outlined-panel", 1, "layout-config-section", "options"], ["name", "inputStyle", "value", "outlined", "inputId", "inputStyle1", 3, "ngModel", "ngModelChange"], ["for", "inputStyle1"], ["name", "inputStyle", "value", "filled", "inputId", "inputStyle2", 3, "ngModel", "ngModelChange"], ["for", "inputStyle2"], ["id", "ripple-panel", 1, "layout-config-section", "ripple"], ["id", "componentthemes-panel", 1, "layout-config-section", "colors"], [1, "grid", "layout-config-colors"], ["class", "col col-fixed", 4, "ngFor", "ngForOf"], [1, "col", "col-fixed"], [1, "layout-config-option", 2, "cursor", "pointer", 3, "click"], [1, "layout-config-option-color", 3, "ngStyle"], ["class", "layout-config-option-check-mask", 4, "ngIf"], [1, "layout-config-option-check-mask"], [1, "pi", "pi-check"], [1, "pi", "pi-check", 3, "ngStyle"]], template: function AppConfigComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function AppConfigComponent_Template_div_click_0_listener($event) { return ctx.appMain.onConfigClick($event); });
            i0.ɵɵelementStart(1, "a", 1);
            i0.ɵɵlistener("click", function AppConfigComponent_Template_a_click_1_listener($event) { return ctx.onConfigButtonClick($event); });
            i0.ɵɵelement(2, "i", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h3");
            i0.ɵɵtext(7, "Theme Customization");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "span");
            i0.ɵɵtext(9, "Poseidon offers different themes for layout, topbar, menu etc.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "div", 6)(11, "span", 7);
            i0.ɵɵtext(12, "Menu Mode");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div", 8)(14, "div", 9)(15, "p-radioButton", 10);
            i0.ɵɵlistener("ngModelChange", function AppConfigComponent_Template_p_radioButton_ngModelChange_15_listener($event) { return ctx.app.menu = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "label", 11);
            i0.ɵɵtext(17, "Static");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "div", 9)(19, "p-radioButton", 12);
            i0.ɵɵlistener("ngModelChange", function AppConfigComponent_Template_p_radioButton_ngModelChange_19_listener($event) { return ctx.app.menu = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "label", 13);
            i0.ɵɵtext(21, "Overlay");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "div", 9)(23, "p-radioButton", 14);
            i0.ɵɵlistener("ngModelChange", function AppConfigComponent_Template_p_radioButton_ngModelChange_23_listener($event) { return ctx.app.menu = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "label", 15);
            i0.ɵɵtext(25, "Slim");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(26, "div", 16)(27, "span", 7);
            i0.ɵɵtext(28, "Dark Menu");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "p-inputSwitch", 17);
            i0.ɵɵlistener("onChange", function AppConfigComponent_Template_p_inputSwitch_onChange_29_listener($event) { return ctx.appMain.onMenuColorChange($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(30, "div", 18)(31, "span", 7);
            i0.ɵɵtext(32, "Form Type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "div", 8)(34, "div", 9)(35, "p-radioButton", 19);
            i0.ɵɵlistener("ngModelChange", function AppConfigComponent_Template_p_radioButton_ngModelChange_35_listener($event) { return ctx.app.inputStyle = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "label", 20);
            i0.ɵɵtext(37, "Outlined");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(38, "div", 9)(39, "p-radioButton", 21);
            i0.ɵɵlistener("ngModelChange", function AppConfigComponent_Template_p_radioButton_ngModelChange_39_listener($event) { return ctx.app.inputStyle = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "label", 22);
            i0.ɵɵtext(41, "Filled");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(42, "div", 23)(43, "span", 7);
            i0.ɵɵtext(44, "Ripple Effect");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "p-inputSwitch", 17);
            i0.ɵɵlistener("onChange", function AppConfigComponent_Template_p_inputSwitch_onChange_45_listener($event) { return ctx.appMain.onRippleChange($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(46, "div", 24)(47, "span", 7);
            i0.ɵɵtext(48, "Special Layouts");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(49, "div", 25);
            i0.ɵɵtemplate(50, AppConfigComponent_div_50_Template, 4, 4, "div", 26);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(51, "div", 24)(52, "span", 7);
            i0.ɵɵtext(53, "Flat Layouts");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "div", 25);
            i0.ɵɵtemplate(55, AppConfigComponent_div_55_Template, 4, 5, "div", 26);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(56, "div", 24)(57, "span", 7);
            i0.ɵɵtext(58, "Component Colors");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(59, "div", 25);
            i0.ɵɵtemplate(60, AppConfigComponent_div_60_Template, 4, 4, "div", 26);
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(11, _c4, ctx.appMain.configActive));
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("ngModel", ctx.app.menu);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.app.menu);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.app.menu);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngModel", ctx.app.darkMenu);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngModel", ctx.app.inputStyle);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.app.inputStyle);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngModel", ctx.app.ripple);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.specialLayouts);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.flatLayouts);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.themes);
        } }, dependencies: [i3.NgClass, i3.NgForOf, i3.NgIf, i3.NgStyle, i4.NgControlStatus, i4.NgModel, i5.InputSwitch, i6.RadioButton], encapsulation: 2 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppConfigComponent, [{
        type: Component,
        args: [{
                selector: 'app-config',
                template: `
        <div class="layout-config" [ngClass]="{'layout-config-active': appMain.configActive}" (click)="appMain.onConfigClick($event)">
            <a style="cursor: pointer" id="layout-config-button" class="layout-config-button" (click)="onConfigButtonClick($event)">
                <i class="pi pi-cog"></i>
            </a>
            <div class="layout-config-content">
                <div class="layout-config-form" id="config-form">
                    <div class="layout-config-header">
                        <h3>Theme Customization</h3>
                        <span>Poseidon offers different themes for layout, topbar, menu etc.</span>
                    </div>

                    <div id="menumodes-panel" class="layout-config-section options">
                        <span class="section-name">Menu Mode</span>
                        <div class="grid layout-config-options">
                            <div class="col-12 md:col-6">
                                <p-radioButton name="menu" value="static" [(ngModel)]="app.menu" inputId="menuMode1"></p-radioButton>
                                <label for="menuMode1">Static</label>
                            </div>
                            <div class="col-12 md:col-6">
                                <p-radioButton name="menu" value="overlay" [(ngModel)]="app.menu" inputId="menuMode2"></p-radioButton>
                                <label for="menuMode2">Overlay</label>
                            </div>
                            <div class="col-12 md:col-6">
                                <p-radioButton name="menu" value="slim" [(ngModel)]="app.menu" inputId="menuMode3"></p-radioButton>
                                <label for="menuMode3">Slim</label>
                            </div>
                        </div>
                    </div>

                    <div id="orientation-panel" class="layout-config-section dark">
                        <span class="section-name">Dark Menu</span>
                        <p-inputSwitch [ngModel]="app.darkMenu" (onChange)="appMain.onMenuColorChange($event)"></p-inputSwitch>
                    </div>

                    <div id="outlined-panel" class="layout-config-section options">
                        <span class="section-name">Form Type</span>
                        <div class="grid layout-config-options">
                            <div class="col-12 md:col-6">
                                <p-radioButton name="inputStyle" value="outlined" [(ngModel)]="app.inputStyle" inputId="inputStyle1"></p-radioButton>
                                <label for="inputStyle1">Outlined</label>
                            </div>
                            <div class="col-12 md:col-6">
                                <p-radioButton name="inputStyle" value="filled" [(ngModel)]="app.inputStyle" inputId="inputStyle2"></p-radioButton>
                                <label for="inputStyle2">Filled</label>
                            </div>
                        </div>
                    </div>

                    <div id="ripple-panel" class="layout-config-section ripple">
                        <span class="section-name">Ripple Effect</span>
                        <p-inputSwitch [ngModel]="app.ripple" (onChange)="appMain.onRippleChange($event)"></p-inputSwitch>
                    </div>

                    <div id="componentthemes-panel" class="layout-config-section colors">
                        <span class="section-name">Special Layouts</span>
                        <div class="grid layout-config-colors">
                            <div *ngFor="let s of specialLayouts" class="col col-fixed">
                                <a style="cursor: pointer" (click)="changeLayout(s.name)" class="layout-config-option">
                                    <span class="layout-config-option-color"
                                          [ngStyle]="{'background-image': 'linear-gradient(to right, ' + s.color1 +','+ s.color2+')'} "></span>
                                    <span class="layout-config-option-check-mask" *ngIf="app.layout === s.name">
                                        <i class="pi pi-check"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div id="componentthemes-panel" class="layout-config-section colors">
                        <span class="section-name">Flat Layouts</span>
                        <div class="grid layout-config-colors">
                            <div *ngFor="let f of flatLayouts" class="col col-fixed">
                                <a style="cursor: pointer" (click)="changeLayout(f.name)" class="layout-config-option">
                                    <span class="layout-config-option-color"
                                          [ngStyle]="{'background-color': f.color, 'border': f.name === 'default'?'1px solid #757575':'none'}"></span>
                                    <span class="layout-config-option-check-mask" *ngIf="app.layout === f.name">
                                        <i class="pi pi-check" [ngStyle]="{'color': f.name === 'default'?'#000000':''}"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div id="componentthemes-panel" class="layout-config-section colors">
                        <span class="section-name">Component Colors</span>
                        <div class="grid layout-config-colors">
                            <div *ngFor="let t of themes" class="col col-fixed">
                                <a style="cursor: pointer" (click)="changeTheme(t.name)" class="layout-config-option">
                                    <span class="layout-config-option-color" [ngStyle]="{'background-color': t.color}"></span>
                                    <span class="layout-config-option-check-mask" *ngIf="theme === t.name">
                                        <i class="pi pi-check"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    `
            }]
    }], function () { return [{ type: i1.AppComponent }, { type: i2.AppMainComponent }]; }, null); })();
//# sourceMappingURL=app.config.component.js.map