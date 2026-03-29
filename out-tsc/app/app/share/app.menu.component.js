import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../app.component";
import * as i2 from "./app.main.component";
import * as i3 from "../service/app.service";
import * as i4 from "@angular/router";
import * as i5 from "@angular/common";
import * as i6 from "./app.menuitem.component";
function AppMenuComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "li", 7);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    i0.ɵɵproperty("item", item_r1)("index", i_r2)("root", true);
} }
export class AppMenuComponent {
    constructor(app, appMain, _service, router) {
        this.app = app;
        this.appMain = appMain;
        this._service = _service;
        this.router = router;
        this.permissions = {};
    }
    ngOnInit() {
        this._service.getPermissions().subscribe({
            next: (resp) => {
                this.permissions = resp.data;
                localStorage.setItem('permissions', JSON.stringify(this.permissions));
                let itemsMenu1 = [];
                if (this.permissions.view_user)
                    itemsMenu1.push({ label: 'ผู้ใช้งาน', icon: 'pi pi-fw pi-user', routerLink: ['/app/user'] });
                if (this.permissions.view_user_group)
                    itemsMenu1.push({ label: 'กลุ่มสิทธิ', icon: 'pi pi-fw pi-lock', routerLink: ['/app/user_group'] });
                let itemsMenu2 = [];
                itemsMenu2.push({ label: 'สมาชิก', icon: 'pi pi-fw pi-users', routerLink: ['/app/member'] });
                let itemsMenu3 = [];
                itemsMenu3.push({ label: 'สาขา', icon: 'pi pi-fw pi-building', routerLink: ['/app/branch'] });
                let itemsMenu4 = [];
                if (this.permissions.view_product_type)
                    itemsMenu4.push({ label: 'ประเภทสินค้า', icon: 'pi pi-th-large', routerLink: ['/app/product_type'] });
                // if (this.permissions.view_product_brand)
                itemsMenu4.push({ label: 'แบรนด์สินค้า', icon: 'pi pi-apple', routerLink: ['/app/product_brand'] });
                if (this.permissions.view_product)
                    itemsMenu4.push({ label: 'สินค้า', icon: 'pi pi-fw pi-box', routerLink: ['/app/product'] });
                if (this.permissions.view_patient)
                    itemsMenu4.push({ label: 'คนไข้', icon: 'pi pi-fw pi-users', routerLink: ['/app/patient'] });
                if (this.permissions.view_report)
                    itemsMenu4.push({
                        label: 'รายงาน', icon: 'pi pi-fw pi-chart-bar', items: [
                            { label: 'รายงานสถานที่ตรวจ', routerLink: ['/app/location_report'] },
                            { label: 'รายงานห้องตรวจ', routerLink: ['/app/room_report'] }
                        ]
                    });
                let itemsMenu5 = [];
                if (this.permissions.view_stock)
                    itemsMenu5.push({ label: 'คลังสินค้า', icon: 'pi pi-fw pi-th-large', routerLink: ['/app/stock'] });
                itemsMenu5.push({ label: 'รับสินค้า', icon: 'pi pi-fw pi-download', routerLink: ['/app/receive_product'] });
                itemsMenu5.push({ label: 'รายการรับสินค้า', icon: 'pi pi-fw pi-list', routerLink: ['/app/product_lot'] });
                let itemsMenu6 = [];
                itemsMenu6.push({ label: 'เพิ่มคำสั่งซื้อ', icon: 'pi pi-fw pi-cart-plus', routerLink: ['/app/new_order'] });
                itemsMenu6.push({ label: 'รายการคำสั่งซื้อ', icon: 'pi pi-fw pi-list', routerLink: ['/app/order'] });
                this.model = [
                    {
                        label: 'ผู้ใช้งาน/สิทธิ', icon: 'pi pi-fw pi-user',
                        items: itemsMenu1,
                    },
                    {
                        label: 'สมาชิก', icon: 'pi pi-fw pi-users',
                        items: itemsMenu2,
                    },
                    {
                        label: 'จัดการสาขา', icon: 'pi pi-fw pi-building',
                        items: itemsMenu3,
                    },
                    {
                        label: 'จัดการข้อมูล', icon: 'pi pi-fw pi-box',
                        items: itemsMenu4,
                    },
                    {
                        label: 'คลังสินค้า', icon: 'pi pi-fw pi-th-large',
                        items: itemsMenu5,
                    },
                    {
                        label: 'คำสั่งซื้อ', icon: 'pi pi-fw pi-cart-plus',
                        items: itemsMenu6,
                    },
                ];
            },
            error: (err) => {
                localStorage.clear();
                this.router.navigate(['/login']);
            },
        });
    }
    static { this.ɵfac = function AppMenuComponent_Factory(t) { return new (t || AppMenuComponent)(i0.ɵɵdirectiveInject(i1.AppComponent), i0.ɵɵdirectiveInject(i2.AppMainComponent), i0.ɵɵdirectiveInject(i3.AppService), i0.ɵɵdirectiveInject(i4.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppMenuComponent, selectors: [["app-menu"]], decls: 7, vars: 3, consts: [[1, "layout-menu-wrapper", 3, "click"], [1, "layout-menu-container"], [1, "mobile-search"], [1, "pi", "pi-fw", "pi-search", "topbar-search-icon"], ["type", "text", "placeholder", "Type your search here", 1, "topbar-search"], [1, "layout-menu"], ["app-menuitem", "", 3, "item", "index", "root", 4, "ngFor", "ngForOf"], ["app-menuitem", "", 3, "item", "index", "root"]], template: function AppMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function AppMenuComponent_Template_div_click_0_listener($event) { return ctx.appMain.onMenuClick($event); });
            i0.ɵɵelementStart(1, "div", 1)(2, "div", 2);
            i0.ɵɵelement(3, "i", 3)(4, "input", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "ul", 5);
            i0.ɵɵtemplate(6, AppMenuComponent_li_6_Template, 1, 3, "li", 6);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵclassProp("layout-menu-dark", ctx.app.darkMenu);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngForOf", ctx.model);
        } }, dependencies: [i5.NgForOf, i6.AppMenuitemComponent], encapsulation: 2 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppMenuComponent, [{
        type: Component,
        args: [{ selector: 'app-menu', template: "<div class=\"layout-menu-wrapper\" [class.layout-menu-dark]=\"app.darkMenu\" (click)=\"appMain.onMenuClick($event)\">\n        <div class=\"layout-menu-container\">\n            <div class=\"mobile-search\">\n                <i class=\"pi pi-fw pi-search topbar-search-icon\"></i>\n                <input type=\"text\" class=\"topbar-search\" placeholder=\"Type your search here\"/>\n            </div>\n\n            <ul class=\"layout-menu\">\n                <li app-menuitem *ngFor=\"let item of model; let i = index;\" [item]=\"item\" [index]=\"i\" [root]=\"true\"></li>\n            </ul>\n        </div>\n</div>\n\n" }]
    }], function () { return [{ type: i1.AppComponent }, { type: i2.AppMainComponent }, { type: i3.AppService }, { type: i4.Router }]; }, null); })();
//# sourceMappingURL=app.menu.component.js.map