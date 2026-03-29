import { Component, Input } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./app.main.component";
import * as i2 from "@angular/router";
import * as i3 from "../service/app.service";
import * as i4 from "@angular/common";
import * as i5 from "primeng/ripple";
const _c0 = ["app-menuitem", ""];
function AppMenuitemComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.item.label);
} }
function AppMenuitemComponent_a_2_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r5.item.badge);
} }
function AppMenuitemComponent_a_2_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 11);
} }
function AppMenuitemComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 6);
    i0.ɵɵlistener("click", function AppMenuitemComponent_a_2_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.itemClick($event)); })("mouseenter", function AppMenuitemComponent_a_2_Template_a_mouseenter_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.onMouseEnter()); })("keydown.enter", function AppMenuitemComponent_a_2_Template_a_keydown_enter_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.itemClick($event)); });
    i0.ɵɵelement(1, "i", 7);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, AppMenuitemComponent_a_2_span_4_Template, 2, 1, "span", 8);
    i0.ɵɵtemplate(5, AppMenuitemComponent_a_2_i_5_Template, 1, 0, "i", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r1.item.class);
    i0.ɵɵattribute("href", ctx_r1.item.url, i0.ɵɵsanitizeUrl)("target", ctx_r1.item.target)("tabindex", 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r1.item.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.item.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.item.badge);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.item.items);
} }
function AppMenuitemComponent_a_3_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r11.item.badge);
} }
function AppMenuitemComponent_a_3_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 11);
} }
const _c1 = function (a0) { return { exact: a0 }; };
function AppMenuitemComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 12);
    i0.ɵɵlistener("click", function AppMenuitemComponent_a_3_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r13.itemClick($event)); })("mouseenter", function AppMenuitemComponent_a_3_Template_a_mouseenter_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.onMouseEnter()); });
    i0.ɵɵelement(1, "i", 7);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, AppMenuitemComponent_a_3_span_4_Template, 2, 1, "span", 8);
    i0.ɵɵtemplate(5, AppMenuitemComponent_a_3_i_5_Template, 1, 0, "i", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", ctx_r2.item.routerLink)("routerLinkActiveOptions", i0.ɵɵpureFunction1(9, _c1, !ctx_r2.item.preventExact))("ngClass", ctx_r2.item.class);
    i0.ɵɵattribute("target", ctx_r2.item.target)("tabindex", 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r2.item.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.item.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.item.badge);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.item.items);
} }
function AppMenuitemComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelement(1, "div", 14);
    i0.ɵɵelementStart(2, "div", 15);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r3.item.label);
} }
function AppMenuitemComponent_ul_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "li", 17);
} if (rf & 2) {
    const child_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(child_r17.badgeClass);
    i0.ɵɵproperty("item", child_r17)("index", i_r18)("parentKey", ctx_r16.key);
} }
function AppMenuitemComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ul");
    i0.ɵɵlistener("@children.done", function AppMenuitemComponent_ul_5_Template_ul_animation_children_done_0_listener() { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r19.onAnimationDone()); });
    i0.ɵɵtemplate(1, AppMenuitemComponent_ul_5_ng_template_1_Template, 1, 5, "ng-template", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@children", ctx_r4.app.slimMenu && ctx_r4.root && !ctx_r4.app.isMobile() ? ctx_r4.active ? "visible" : "hidden" : ctx_r4.root ? "visible" : ctx_r4.active ? "visibleAnimated" : "hiddenAnimated");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.item.items);
} }
export class AppMenuitemComponent {
    constructor(app, router, cd, menuService) {
        this.app = app;
        this.router = router;
        this.cd = cd;
        this.menuService = menuService;
        this.animating = false;
        this.active = false;
        this.menuSourceSubscription = this.menuService.menuSource$.subscribe(key => {
            // deactivate current active menu
            if (this.active && this.key !== key && key.indexOf(this.key) !== 0) {
                this.active = false;
            }
        });
        this.menuResetSubscription = this.menuService.resetSource$.subscribe(() => {
            this.active = false;
        });
        this.router.events.pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(params => {
            if (this.app.slimMenu) {
                this.active = false;
            }
            else {
                if (this.item.routerLink) {
                    this.updateActiveStateFromRoute();
                }
                else {
                    this.active = false;
                }
            }
        });
    }
    ngOnInit() {
        if (!this.app.slimMenu && this.item.routerLink) {
            this.updateActiveStateFromRoute();
        }
        this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
    }
    updateActiveStateFromRoute() {
        this.active = this.router.isActive(this.item.routerLink[0], !this.item.items && !this.item.preventExact);
    }
    itemClick(event) {
        // avoid processing disabled items
        if (this.item.disabled) {
            event.preventDefault();
            return;
        }
        // navigate with hover in horizontal mode
        if (this.root) {
            this.app.menuHoverActive = !this.app.menuHoverActive;
        }
        // notify other items
        this.menuService.onMenuStateChange(this.key);
        // execute command
        if (this.item.command) {
            this.item.command({ originalEvent: event, item: this.item });
        }
        // toggle active state
        if (this.item.items) {
            this.active = !this.active;
            this.animating = true;
        }
        else {
            // activate item
            this.active = true;
            // hide overlay menus
            if (this.app.overlayMenu || this.app.isMobile()) {
                this.app.overlayMenuActive = false;
                this.app.mobileMenuActive = false;
            }
            // reset horizontal menu
            if (this.app.slimMenu) {
                this.menuService.reset();
            }
            this.app.menuHoverActive = !this.app.menuHoverActive;
            const ink = this.getInk(event.currentTarget);
            if (ink) {
                this.removeClass(ink, 'p-ink-active');
            }
        }
    }
    getInk(el) {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < el.children.length; i++) {
            if (typeof el.children[i].className === 'string' && el.children[i].className.indexOf('p-ink') !== -1) {
                return el.children[i];
            }
        }
        return null;
    }
    removeClass(element, className) {
        if (element.classList) {
            element.classList.remove(className);
        }
        else {
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }
    onMouseEnter() {
        // activate item on hover
        if (this.root && this.app.menuHoverActive && this.app.slimMenu && !this.app.isMobile()) {
            this.menuService.onMenuStateChange(this.key);
            this.active = true;
        }
    }
    onAnimationDone() {
        this.animating = false;
    }
    ngOnDestroy() {
        if (this.menuSourceSubscription) {
            this.menuSourceSubscription.unsubscribe();
        }
        if (this.menuResetSubscription) {
            this.menuResetSubscription.unsubscribe();
        }
    }
    static { this.ɵfac = function AppMenuitemComponent_Factory(t) { return new (t || AppMenuitemComponent)(i0.ɵɵdirectiveInject(i1.AppMainComponent), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i3.AppService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppMenuitemComponent, selectors: [["", "app-menuitem", ""]], hostVars: 4, hostBindings: function AppMenuitemComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("layout-root-menuitem", ctx.root)("active-menuitem", ctx.active);
        } }, inputs: { item: "item", index: "index", root: "root", parentKey: "parentKey" }, attrs: _c0, decls: 6, vars: 5, consts: [["class", "layout-menuitem-root-text", 4, "ngIf"], ["pRipple", "", 3, "ngClass", "click", "mouseenter", "keydown.enter", 4, "ngIf"], ["routerLinkActive", "active-menuitem-routerlink", "pRipple", "", 3, "routerLink", "routerLinkActiveOptions", "ngClass", "click", "mouseenter", 4, "ngIf"], ["class", "layout-menu-tooltip", 4, "ngIf"], [4, "ngIf"], [1, "layout-menuitem-root-text"], ["pRipple", "", 3, "ngClass", "click", "mouseenter", "keydown.enter"], [1, "layout-menuitem-icon", 3, "ngClass"], ["class", "menuitem-badge", 4, "ngIf"], ["class", "pi pi-fw pi-angle-down layout-menuitem-toggler", 4, "ngIf"], [1, "menuitem-badge"], [1, "pi", "pi-fw", "pi-angle-down", "layout-menuitem-toggler"], ["routerLinkActive", "active-menuitem-routerlink", "pRipple", "", 3, "routerLink", "routerLinkActiveOptions", "ngClass", "click", "mouseenter"], [1, "layout-menu-tooltip"], [1, "layout-menu-tooltip-arrow"], [1, "layout-menu-tooltip-text"], ["ngFor", "", 3, "ngForOf"], ["app-menuitem", "", 3, "item", "index", "parentKey"]], template: function AppMenuitemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, AppMenuitemComponent_div_1_Template, 2, 1, "div", 0);
            i0.ɵɵtemplate(2, AppMenuitemComponent_a_2_Template, 6, 8, "a", 1);
            i0.ɵɵtemplate(3, AppMenuitemComponent_a_3_Template, 6, 11, "a", 2);
            i0.ɵɵtemplate(4, AppMenuitemComponent_div_4_Template, 4, 1, "div", 3);
            i0.ɵɵtemplate(5, AppMenuitemComponent_ul_5_Template, 2, 2, "ul", 4);
            i0.ɵɵelementContainerEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.root && ctx.item.visible !== false);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", (!ctx.item.routerLink || ctx.item.items) && ctx.item.visible !== false);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.item.routerLink && !ctx.item.items && ctx.item.visible !== false);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.item.visible !== false);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", (ctx.item.items || (ctx.active || ctx.animating)) && ctx.item.visible !== false);
        } }, dependencies: [i4.NgClass, i4.NgForOf, i4.NgIf, i2.RouterLink, i2.RouterLinkActive, i5.Ripple, AppMenuitemComponent], encapsulation: 2, data: { animation: [
                trigger('children', [
                    state('void', style({
                        height: '0px'
                    })),
                    state('hiddenAnimated', style({
                        height: '0px'
                    })),
                    state('visibleAnimated', style({
                        height: '*'
                    })),
                    state('visible', style({
                        height: '*',
                        'z-index': 100
                    })),
                    state('hidden', style({
                        height: '0px',
                        'z-index': '*'
                    })),
                    transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                    transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                    transition('void => visibleAnimated, visibleAnimated => void', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
                ])
            ] } }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppMenuitemComponent, [{
        type: Component,
        args: [{
                /* tslint:disable:component-selector */
                selector: '[app-menuitem]',
                /* tslint:enable:component-selector */
                template: `
          <ng-container>
              <div *ngIf="root && item.visible !== false" class="layout-menuitem-root-text">{{item.label}}</div>
              <a [attr.href]="item.url" (click)="itemClick($event)" *ngIf="(!item.routerLink || item.items) && item.visible !== false"
                 (mouseenter)="onMouseEnter()" (keydown.enter)="itemClick($event)"
                 [attr.target]="item.target" [attr.tabindex]="0" [ngClass]="item.class" pRipple>
                  <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
                  <span>{{item.label}}</span>
				  <span class="menuitem-badge" *ngIf="item.badge">{{item.badge}}</span>
                  <i class="pi pi-fw pi-angle-down layout-menuitem-toggler" *ngIf="item.items"></i>
              </a>
              <a (click)="itemClick($event)" (mouseenter)="onMouseEnter()" *ngIf="(item.routerLink && !item.items) && item.visible !== false"
                  [routerLink]="item.routerLink" routerLinkActive="active-menuitem-routerlink"
                  [routerLinkActiveOptions]="{exact: !item.preventExact}" [attr.target]="item.target" [attr.tabindex]="0" [ngClass]="item.class" pRipple>
                  <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
				  <span>{{item.label}}</span>
				  <span class="menuitem-badge" *ngIf="item.badge">{{item.badge}}</span>
				  <i class="pi pi-fw pi-angle-down layout-menuitem-toggler" *ngIf="item.items"></i>
              </a>
			  <div class="layout-menu-tooltip" *ngIf="item.visible !== false">
				  <div class="layout-menu-tooltip-arrow"></div>
				  <div class="layout-menu-tooltip-text">{{item.label}}</div>
			  </div>
              <ul *ngIf="(item.items || (active || animating)) && item.visible !== false" (@children.done)="onAnimationDone()"
                  [@children]="(app.slimMenu && root && !app.isMobile()) ? (active ? 'visible' : 'hidden') :
                  (root ? 'visible' : active ? 'visibleAnimated' : 'hiddenAnimated')">
                  <ng-template ngFor let-child let-i="index" [ngForOf]="item.items">
                      <li app-menuitem [item]="child" [index]="i" [parentKey]="key" [class]="child.badgeClass"></li>
                  </ng-template>
              </ul>
          </ng-container>
      `,
                host: {
                    '[class.layout-root-menuitem]': 'root',
                    '[class.active-menuitem]': 'active'
                },
                animations: [
                    trigger('children', [
                        state('void', style({
                            height: '0px'
                        })),
                        state('hiddenAnimated', style({
                            height: '0px'
                        })),
                        state('visibleAnimated', style({
                            height: '*'
                        })),
                        state('visible', style({
                            height: '*',
                            'z-index': 100
                        })),
                        state('hidden', style({
                            height: '0px',
                            'z-index': '*'
                        })),
                        transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                        transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                        transition('void => visibleAnimated, visibleAnimated => void', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
                    ])
                ]
            }]
    }], function () { return [{ type: i1.AppMainComponent }, { type: i2.Router }, { type: i0.ChangeDetectorRef }, { type: i3.AppService }]; }, { item: [{
            type: Input
        }], index: [{
            type: Input
        }], root: [{
            type: Input
        }], parentKey: [{
            type: Input
        }] }); })();
//# sourceMappingURL=app.menuitem.component.js.map