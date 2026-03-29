import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../receive-product/receive-product.service";
import * as i3 from "primeng/api";
import * as i4 from "@angular/common";
import * as i5 from "primeng/button";
import * as i6 from "primeng/calendar";
import * as i7 from "primeng/inputtext";
import * as i8 from "primeng/dataview";
import * as i9 from "primeng/dialog";
import * as i10 from "primeng/table";
import * as i11 from "primeng/toast";
function ReceiveProductComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 14)(1, "div", 15)(2, "span", 16)(3, "div", 0)(4, "div", 17)(5, "div", 18)(6, "label", 19);
    i0.ɵɵtext(7, "\u0E0A\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E02\u0E2D\u0E07");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "input", 20);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(9, "div", 21)(10, "button", 22);
    i0.ɵɵlistener("click", function ReceiveProductComponent_ng_template_6_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.openAdd()); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r0.formProductLot);
} }
function ReceiveProductComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th", 23);
    i0.ɵɵtext(2, "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "th", 24);
    i0.ɵɵtext(4, "\u0E23\u0E2B\u0E31\u0E2A");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "th");
    i0.ɵɵtext(6, "\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th", 25);
    i0.ɵɵtext(8, "\u0E27\u0E31\u0E19\u0E2B\u0E21\u0E14\u0E2D\u0E32\u0E22\u0E38");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th", 26);
    i0.ɵɵtext(10, "\u0E08\u0E33\u0E19\u0E27\u0E19");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th", 27);
    i0.ɵɵtext(12, "\u0E23\u0E32\u0E04\u0E32\u0E15\u0E48\u0E2D\u0E2B\u0E19\u0E48\u0E27\u0E22");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th", 28);
    i0.ɵɵtext(14, "\u0E23\u0E32\u0E04\u0E32\u0E23\u0E27\u0E21");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th", 29);
    i0.ɵɵtext(16, "\u0E25\u0E1A");
    i0.ɵɵelementEnd()();
} }
function ReceiveProductComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 30);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td")(8, "p-calendar", 31);
    i0.ɵɵlistener("ngModelChange", function ReceiveProductComponent_ng_template_8_Template_p_calendar_ngModelChange_8_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r12); const item_r9 = restoredCtx.$implicit; return i0.ɵɵresetView(item_r9.expiry_date = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "td", 32)(10, "input", 33);
    i0.ɵɵlistener("ngModelChange", function ReceiveProductComponent_ng_template_8_Template_input_ngModelChange_10_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r12); const item_r9 = restoredCtx.$implicit; return i0.ɵɵresetView(item_r9.qty = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "td", 32)(12, "input", 34);
    i0.ɵɵlistener("ngModelChange", function ReceiveProductComponent_ng_template_8_Template_input_ngModelChange_12_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r12); const item_r9 = restoredCtx.$implicit; return i0.ɵɵresetView(item_r9.cost_unit = $event); })("change", function ReceiveProductComponent_ng_template_8_Template_input_change_12_listener() { const restoredCtx = i0.ɵɵrestoreView(_r12); const item_r9 = restoredCtx.$implicit; const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.calCostUnit(item_r9)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "td", 32)(14, "input", 34);
    i0.ɵɵlistener("ngModelChange", function ReceiveProductComponent_ng_template_8_Template_input_ngModelChange_14_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r12); const item_r9 = restoredCtx.$implicit; return i0.ɵɵresetView(item_r9.cost_total = $event); })("change", function ReceiveProductComponent_ng_template_8_Template_input_change_14_listener() { const restoredCtx = i0.ɵɵrestoreView(_r12); const item_r9 = restoredCtx.$implicit; const ctx_r17 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r17.calCostTotal(item_r9)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "td", 32)(16, "button", 35);
    i0.ɵɵlistener("click", function ReceiveProductComponent_ng_template_8_Template_button_click_16_listener() { const restoredCtx = i0.ɵɵrestoreView(_r12); const rowIndex_r10 = restoredCtx.rowIndex; const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.removeProduct(rowIndex_r10)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const rowIndex_r10 = ctx.rowIndex;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", rowIndex_r10 + 1, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r9.code, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r9.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", item_r9.expiry_date)("showIcon", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", item_r9.qty);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", item_r9.cost_unit);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", item_r9.cost_total);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r2.step == "order");
} }
function ReceiveProductComponent_ng_container_15_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵelement(1, "button", 40);
    i0.ɵɵelementStart(2, "span", 41);
    i0.ɵɵelement(3, "i", 42);
    i0.ɵɵelementStart(4, "input", 43);
    i0.ɵɵlistener("input", function ReceiveProductComponent_ng_container_15_ng_template_3_Template_input_input_4_listener($event) { i0.ɵɵrestoreView(_r23); i0.ɵɵnextContext(); const _r19 = i0.ɵɵreference(2); return i0.ɵɵresetView(_r19.filter($event.target.value)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", true);
} }
function ReceiveProductComponent_ng_container_15_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵlistener("click", function ReceiveProductComponent_ng_container_15_ng_template_4_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r26); const item_r24 = restoredCtx.$implicit; const ctx_r25 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r25.selectProductType(item_r24)); });
    i0.ɵɵelementStart(1, "div", 45)(2, "div", 46)(3, "div", 47);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "img", 48);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r24.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", item_r24.image, i0.ɵɵsanitizeUrl)("alt", item_r24.name);
} }
function ReceiveProductComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p-dataView", 36, 37);
    i0.ɵɵtemplate(3, ReceiveProductComponent_ng_container_15_ng_template_3_Template, 5, 1, "ng-template", 5);
    i0.ɵɵtemplate(4, ReceiveProductComponent_ng_container_15_ng_template_4_Template, 6, 3, "ng-template", 38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r3.product_type_groups)("paginator", true)("rows", 20);
} }
function ReceiveProductComponent_ng_container_16_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 39)(1, "button", 49);
    i0.ɵɵlistener("click", function ReceiveProductComponent_ng_container_16_ng_template_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r31); const ctx_r30 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r30.backToProductType()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 41);
    i0.ɵɵelement(3, "i", 42);
    i0.ɵɵelementStart(4, "input", 43);
    i0.ɵɵlistener("input", function ReceiveProductComponent_ng_container_16_ng_template_3_Template_input_input_4_listener($event) { i0.ɵɵrestoreView(_r31); i0.ɵɵnextContext(); const _r27 = i0.ɵɵreference(2); return i0.ɵɵresetView(_r27.filter($event.target.value)); });
    i0.ɵɵelementEnd()()();
} }
function ReceiveProductComponent_ng_container_16_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵlistener("click", function ReceiveProductComponent_ng_container_16_ng_template_4_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r35); const item_r33 = restoredCtx.$implicit; const ctx_r34 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r34.selectProductBrand(item_r33)); });
    i0.ɵɵelementStart(1, "div", 45)(2, "div", 46)(3, "div", 47);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "img", 48);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r33.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", item_r33.image, i0.ɵɵsanitizeUrl)("alt", item_r33.name);
} }
function ReceiveProductComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p-dataView", 36, 37);
    i0.ɵɵtemplate(3, ReceiveProductComponent_ng_container_16_ng_template_3_Template, 5, 0, "ng-template", 5);
    i0.ɵɵtemplate(4, ReceiveProductComponent_ng_container_16_ng_template_4_Template, 6, 3, "ng-template", 38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r4.product_brand_groups)("paginator", true)("rows", 20);
} }
function ReceiveProductComponent_ng_container_17_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 39)(1, "button", 49);
    i0.ɵɵlistener("click", function ReceiveProductComponent_ng_container_17_ng_template_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r40); const ctx_r39 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r39.backToProductBrand()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 41);
    i0.ɵɵelement(3, "i", 42);
    i0.ɵɵelementStart(4, "input", 43);
    i0.ɵɵlistener("input", function ReceiveProductComponent_ng_container_17_ng_template_3_Template_input_input_4_listener($event) { i0.ɵɵrestoreView(_r40); i0.ɵɵnextContext(); const _r36 = i0.ɵɵreference(2); return i0.ɵɵresetView(_r36.filter($event.target.value)); });
    i0.ɵɵelementEnd()()();
} }
function ReceiveProductComponent_ng_container_17_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵlistener("click", function ReceiveProductComponent_ng_container_17_ng_template_4_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r44); const item_r42 = restoredCtx.$implicit; const ctx_r43 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r43.selectProduct(item_r42)); });
    i0.ɵɵelementStart(1, "div", 45)(2, "div", 46)(3, "div", 47);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "img", 48);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 50)(7, "span", 51);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 52);
    i0.ɵɵelement(10, "i", 53);
    i0.ɵɵelementStart(11, "span", 54);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const item_r42 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r42.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", item_r42.image, i0.ɵɵsanitizeUrl)("alt", item_r42.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("\u0E04\u0E25\u0E31\u0E07 : ", item_r42.count, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", item_r42.price, ".-");
} }
function ReceiveProductComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p-dataView", 36, 37);
    i0.ɵɵtemplate(3, ReceiveProductComponent_ng_container_17_ng_template_3_Template, 5, 0, "ng-template", 5);
    i0.ɵɵtemplate(4, ReceiveProductComponent_ng_container_17_ng_template_4_Template, 13, 5, "ng-template", 38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r5.product_groups)("paginator", true)("rows", 20);
} }
function ReceiveProductComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 55);
    i0.ɵɵlistener("click", function ReceiveProductComponent_ng_template_18_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r46); const ctx_r45 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r45.displayAdd = false); });
    i0.ɵɵelementEnd();
} }
const _c0 = function () { return { width: "70vw" }; };
const _c1 = function () { return { "960px": "75vw" }; };
export class ReceiveProductComponent {
    constructor(_fb, _service, _messageService) {
        this._fb = _fb;
        this._service = _service;
        this._messageService = _messageService;
        this.permissions = [];
        this.displayAdd = false;
        this.product_carts = [];
        this.select_type = "product_type";
        this.permissions = JSON.parse(localStorage.getItem('permissions'));
    }
    ngOnInit() {
        this.formProductLot = this._fb.group({
            name: "",
            products: this._fb.array([]),
        });
        this.loadProduct();
    }
    get products() {
        return this.formProductLot.get('products');
    }
    loadProduct() {
        this._service.getProductTypeGroup()
            .subscribe((resp) => {
            this.product_type_groups = resp.data;
        });
    }
    openAdd() {
        this.displayAdd = true;
    }
    selectProductType(selectProductType) {
        this.select_type = "product_brand";
        this.product_brand_groups = selectProductType.product_brands;
    }
    backToProductType() {
        this.select_type = "product_type";
    }
    selectProductBrand(selectProductBrand) {
        this.select_type = "product";
        this.product_groups = selectProductBrand.products;
    }
    backToProductBrand() {
        this.select_type = "product_brand";
    }
    selectProduct(selectProduct) {
        this.products.push(this._fb.group({
            id: selectProduct.id,
            code: selectProduct.code,
            name: selectProduct.name,
            qty: 1,
            cost_unit: 0,
            cost_total: 0,
            expiry_date: null,
        }));
    }
    removeProduct(index) {
        this.products.removeAt(index);
    }
    calCostUnit(product) {
        product.cost_unit = Number(product.cost_unit);
        product.qty = Number(product.qty);
        if (!isNaN(product.cost_unit) && !isNaN(product.qty)) {
            product.cost_total = product.cost_unit * product.qty;
        }
        else {
            product.cost_total = 0;
        }
    }
    calCostTotal(product) {
        const costTotal = parseFloat(product.cost_total);
        const qty = parseFloat(product.qty);
        if (!isNaN(costTotal) && !isNaN(qty) && qty !== 0) {
            product.cost_unit = Math.ceil(costTotal / qty);
        }
        else {
            product.cost_unit = 0;
        }
    }
    clearData() {
        this.formProductLot = this._fb.group({
            name: "",
            products: this._fb.array([]),
        });
    }
    addProductLot() {
        this._service.addProductLot(this.formProductLot.value).subscribe({
            next: (resp) => {
                window.location.reload();
                this.showSuccess(resp.message);
            },
            error: (err) => {
                this.showError(err.error.message);
            },
        });
    }
    showError(massage) {
        this._messageService.add({ severity: 'error', summary: 'แจ้งเตือน', detail: massage });
    }
    showSuccess(massage) {
        this._messageService.add({ severity: 'success', summary: 'แจ้งเตือน', detail: massage });
    }
    static { this.ɵfac = function ReceiveProductComponent_Factory(t) { return new (t || ReceiveProductComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.ReceiveProductService), i0.ɵɵdirectiveInject(i3.MessageService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ReceiveProductComponent, selectors: [["app-receive-product"]], decls: 20, vars: 11, consts: [[1, "grid"], [1, "col-12"], [1, "card"], ["responsiveLayout", "scroll", "scrollHeight", "400px", 3, "value", "scrollable"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "card", 2, "display", "flex", "justify-content", "space-between"], ["pButton", "", "icon", "pi pi-trash", "label", "\u0E25\u0E49\u0E32\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25", 1, "p-button-danger", "mr-2", "outline", 2, "width", "auto", 3, "click"], ["pButton", "", "icon", "pi pi-check", "label", "\u0E23\u0E31\u0E1A\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32", 1, "p-button-success", "mr-2", "outline", 2, "width", "auto", 3, "click"], ["header", "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32", "modal", "modal", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], [4, "ngIf"], ["pTemplate", "footer"], ["position", "bottom-center"], [3, "formGroup"], [1, "flex", "justify-content-between", "flex-column", "sm:flex-row"], [1, "p-input-icon-left"], [1, "col-12", "pb-0"], [1, "field"], ["htmlFor", "name"], ["pInputText", "", "type", "text", "formControlName", "name", "maxlength", "200", 1, "ml-3"], [1, "pt-1", "flex", "align-items-center"], ["pButton", "", "icon", "pi pi-plus", "label", "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32", 2, "width", "auto", 3, "click"], [2, "width", "70px", "text-align", "center"], [2, "width", "100px", "text-align", "center"], [2, "width", "160px", "text-align", "right"], [2, "width", "auto", "text-align", "right"], [2, "width", "140px", "text-align", "right"], [2, "width", "120px", "text-align", "right"], [2, "width", "50px", "text-align", "right"], [2, "text-align", "center"], ["dateFormat", "ddmmyy", "appendTo", "body", 3, "ngModel", "showIcon", "ngModelChange"], [2, "text-align", "right"], ["pInputText", "", "type", "number", "min", "1", "max", "9999", 3, "ngModel", "ngModelChange"], ["pInputText", "", "type", "number", "min", "1", "max", "9999", 3, "ngModel", "ngModelChange", "change"], ["pButton", "", "icon", "pi pi-trash", 1, "p-button-danger", "mr-2", "outline", 3, "disabled", "click"], ["filterBy", "name", "layout", "grid", 3, "value", "paginator", "rows"], ["dv", ""], ["pTemplate", "gridItem"], [1, "grid", "grid-nogutter", "flex-column", "md:flex-row", "justify-content-between"], ["pButton", "", "icon", "pi pi-arrow-left", "label", "\u0E01\u0E25\u0E31\u0E1A", 1, "p-button-danger", "mr-2", "outline", 2, "width", "auto", 3, "disabled"], [1, "p-input-icon-left", "mb-2", "md:mb-0"], [1, "pi", "pi-search"], ["type", "search", "pInputText", "", "placeholder", "\u0E04\u0E49\u0E19\u0E2B\u0E32", 3, "input"], [1, "col-6", "md:col-3", 2, "cursor", "pointer", 3, "click"], [1, "card", "m-3", "border-1", "surface-border"], [1, "text-center"], [1, "text-xl", 2, "color", "blue"], ["draggable", "false", 1, "w-9", "shadow-2", "my-3", "mx-0", 3, "src", "alt"], ["pButton", "", "icon", "pi pi-arrow-left", "label", "\u0E01\u0E25\u0E31\u0E1A", 1, "p-button-danger", "mr-2", "outline", 2, "width", "auto", 3, "click"], [1, "flex", "align-items-center", "justify-content-between"], [1, "sm:ml-2", "product-badge", "status-instock"], [1, "flex", "align-items-center"], [1, "pi", "pi-tag", "mr-2"], [1, "font-semibold", 2, "color", "red"], ["pButton", "", "icon", "pi pi-window-close", "label", "\u0E1B\u0E34\u0E14", 1, "p-button-secondary", "ml-2", 3, "click"]], template: function ReceiveProductComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
            i0.ɵɵtext(4, "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p-table", 3);
            i0.ɵɵtemplate(6, ReceiveProductComponent_ng_template_6_Template, 11, 1, "ng-template", 4);
            i0.ɵɵtemplate(7, ReceiveProductComponent_ng_template_7_Template, 17, 0, "ng-template", 5);
            i0.ɵɵtemplate(8, ReceiveProductComponent_ng_template_8_Template, 17, 9, "ng-template", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 7)(10, "button", 8);
            i0.ɵɵlistener("click", function ReceiveProductComponent_Template_button_click_10_listener() { return ctx.clearData(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "button", 9);
            i0.ɵɵlistener("click", function ReceiveProductComponent_Template_button_click_11_listener() { return ctx.addProductLot(); });
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(12, "p-dialog", 10);
            i0.ɵɵlistener("visibleChange", function ReceiveProductComponent_Template_p_dialog_visibleChange_12_listener($event) { return ctx.displayAdd = $event; });
            i0.ɵɵelementStart(13, "div", 0)(14, "div", 1);
            i0.ɵɵtemplate(15, ReceiveProductComponent_ng_container_15_Template, 5, 3, "ng-container", 11);
            i0.ɵɵtemplate(16, ReceiveProductComponent_ng_container_16_Template, 5, 3, "ng-container", 11);
            i0.ɵɵtemplate(17, ReceiveProductComponent_ng_container_17_Template, 5, 3, "ng-container", 11);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(18, ReceiveProductComponent_ng_template_18_Template, 1, 0, "ng-template", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(19, "p-toast", 13);
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("value", ctx.formProductLot.value == null ? null : ctx.formProductLot.value.products)("scrollable", true);
            i0.ɵɵadvance(7);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(9, _c0));
            i0.ɵɵproperty("visible", ctx.displayAdd)("breakpoints", i0.ɵɵpureFunction0(10, _c1));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.select_type == "product_type");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.select_type == "product_brand");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.select_type == "product");
        } }, dependencies: [i4.NgIf, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.MaxLengthValidator, i1.MinValidator, i1.MaxValidator, i1.NgModel, i1.FormGroupDirective, i1.FormControlName, i3.PrimeTemplate, i5.ButtonDirective, i6.Calendar, i7.InputText, i8.DataView, i9.Dialog, i10.Table, i11.Toast], styles: [".cart-item-animate[_ngcontent-%COMP%] {\r\n  animation: _ngcontent-%COMP%_popIn 0.3s ease-in-out;\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_popIn {\r\n  0% { transform: scale(0.8); opacity: 0; }\r\n  100% { transform: scale(1); opacity: 1; }\r\n}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReceiveProductComponent, [{
        type: Component,
        args: [{ selector: 'app-receive-product', template: "<div class=\"grid\">\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <h5>\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</h5>\n            <p-table [value]=\"formProductLot.value?.products\" responsiveLayout=\"scroll\" [scrollable]=\"true\"\n                scrollHeight=\"400px\">\n\n                <ng-template pTemplate=\"caption\">\n                    <form [formGroup]=\"formProductLot\">\n                        <div class=\"flex justify-content-between flex-column sm:flex-row\">\n                            <span class=\"p-input-icon-left\">\n                                <div class=\"grid\">\n                                    <div class=\"col-12 pb-0\">\n                                        <div class=\"field\">\n                                            <label htmlFor=\"name\">\u0E0A\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E02\u0E2D\u0E07</label>\n                                            <input class=\"ml-3\" pInputText type=\"text\" formControlName=\"name\"\n                                                maxlength=\"200\" />\n                                        </div>\n                                    </div>\n                                </div>\n                            </span>\n\n                            <div class=\"pt-1 flex align-items-center\">\n                                <button (click)=\"openAdd()\" pButton icon=\"pi pi-plus\" label=\"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\"\n                                    style=\"width:auto;\"></button>\n                            </div>\n                        </div>\n                    </form>\n                </ng-template>\n\n                <ng-template pTemplate=\"header\">\n                    <tr>\n                        <th style=\"width: 70px;text-align: center;\">\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48</th>\n                        <th style=\"width: 100px;text-align: center;\">\u0E23\u0E2B\u0E31\u0E2A</th>\n                        <th>\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</th>\n                        <th style=\"width: 160px;text-align: right;\">\u0E27\u0E31\u0E19\u0E2B\u0E21\u0E14\u0E2D\u0E32\u0E22\u0E38</th>\n                        <th style=\"width: auto;text-align: right;\">\u0E08\u0E33\u0E19\u0E27\u0E19</th>\n                        <th style=\"width: 140px;text-align: right;\">\u0E23\u0E32\u0E04\u0E32\u0E15\u0E48\u0E2D\u0E2B\u0E19\u0E48\u0E27\u0E22</th>\n                        <th style=\"width: 120px;text-align: right;\">\u0E23\u0E32\u0E04\u0E32\u0E23\u0E27\u0E21</th>\n                        <th style=\"width: 50px;text-align: right;\">\u0E25\u0E1A</th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-item let-rowIndex=\"rowIndex\">\n                    <tr>\n                        <td style=\"text-align: center;\">\n                            {{rowIndex+1}}\n                        </td>\n                        <td style=\"text-align: center;\">\n                            {{item.code}}\n                        </td>\n                        <td>\n                            {{item.name}}\n                        </td>\n                        <td><p-calendar [(ngModel)]=\"item.expiry_date\" [showIcon]=\"true\" dateFormat=\"ddmmyy\"\n                                appendTo=\"body\">\n                            </p-calendar></td>\n                        <td style=\"text-align: right;\">\n                            <input pInputText type=\"number\" [(ngModel)]=\"item.qty\" min=\"1\" max=\"9999\" />\n                        </td>\n                        <td style=\"text-align: right;\">\n                            <input pInputText type=\"number\" [(ngModel)]=\"item.cost_unit\" min=\"1\" max=\"9999\"\n                                (change)=\"calCostUnit(item)\" />\n                        </td>\n                        <td style=\"text-align: right;\">\n                            <input pInputText type=\"number\" [(ngModel)]=\"item.cost_total\" min=\"1\" max=\"9999\"\n                                (change)=\"calCostTotal(item)\" />\n                        </td>\n                        <td style=\"text-align: right;\">\n                            <button pButton icon=\"pi pi-trash\" class=\"p-button-danger mr-2 outline\"\n                                (click)=\"removeProduct(rowIndex)\" [disabled]=\"step=='order'\"></button>\n                        </td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </div>\n        <div class=\"card\" style=\"display: flex; justify-content: space-between;\">\n            <button pButton icon=\"pi pi-trash\" label=\"\u0E25\u0E49\u0E32\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\" style=\"width:auto;\"\n                class=\"p-button-danger mr-2 outline\" (click)=\"clearData()\"></button>\n            <button pButton icon=\"pi pi-check\" label=\"\u0E23\u0E31\u0E1A\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\" style=\"width:auto;\"\n                class=\"p-button-success mr-2 outline\" (click)=\"addProductLot()\"></button>\n        </div>\n    </div>\n\n</div>\n\n<p-dialog header=\"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\" [(visible)]=\"displayAdd\" modal=\"modal\" showEffect=\"fade\" [style]=\"{width: '70vw'}\"\n    [breakpoints]=\"{'960px': '75vw'}\">\n\n    <div class=\"grid\">\n        <div class=\"col-12\">\n            <ng-container *ngIf=\"select_type=='product_type'\">\n                <p-dataView #dv [value]=\"product_type_groups\" [paginator]=\"true\" [rows]=\"20\" filterBy=\"name\"\n                    layout=\"grid\">\n                    <ng-template pTemplate=\"header\">\n                        <div class=\"grid grid-nogutter flex-column md:flex-row justify-content-between\">\n\n\n                            <button pButton icon=\"pi pi-arrow-left\" label=\"\u0E01\u0E25\u0E31\u0E1A\" style=\"width:auto;\" [disabled]=\"true\"\n                                class=\"p-button-danger mr-2 outline\"></button>\n\n\n                            <span class=\"p-input-icon-left mb-2 md:mb-0\">\n                                <i class=\"pi pi-search\"></i>\n                                <input type=\"search\" pInputText placeholder=\"\u0E04\u0E49\u0E19\u0E2B\u0E32\"\n                                    (input)=\"dv.filter($event.target.value)\">\n                            </span>\n\n                            <!-- <p-dropdown [options]=\"sortOptions\" [(ngModel)]=\"sortKey\" placeholder=\"Sort By Price\"\n                                (onChange)=\"onSortChange($event)\"></p-dropdown> -->\n                        </div>\n                    </ng-template>\n\n                    <ng-template let-item pTemplate=\"gridItem\">\n                        <div class=\"col-6 md:col-3\" style=\"cursor: pointer;\" (click)=\"selectProductType(item)\">\n                            <div class=\"card m-3 border-1 surface-border\">\n                                <div class=\"text-center\">\n                                    <div class=\"text-xl\" style=\"color: blue;\">{{item.name}}</div>\n                                    <img [src]=\"item.image\" [alt]=\"item.name\" class=\"w-9 shadow-2 my-3 mx-0\"\n                                        draggable=\"false\" />\n\n                                </div>\n                            </div>\n                        </div>\n                    </ng-template>\n                </p-dataView>\n            </ng-container>\n            <ng-container *ngIf=\"select_type=='product_brand'\">\n                <p-dataView #dv [value]=\"product_brand_groups\" [paginator]=\"true\" [rows]=\"20\" filterBy=\"name\"\n                    layout=\"grid\">\n                    <ng-template pTemplate=\"header\">\n                        <div class=\"grid grid-nogutter flex-column md:flex-row justify-content-between\">\n\n\n                            <button (click)=\"backToProductType()\" pButton icon=\"pi pi-arrow-left\" label=\"\u0E01\u0E25\u0E31\u0E1A\"\n                                style=\"width:auto;\" class=\"p-button-danger mr-2 outline\"></button>\n\n\n                            <span class=\"p-input-icon-left mb-2 md:mb-0\">\n                                <i class=\"pi pi-search\"></i>\n                                <input type=\"search\" pInputText placeholder=\"\u0E04\u0E49\u0E19\u0E2B\u0E32\"\n                                    (input)=\"dv.filter($event.target.value)\">\n                            </span>\n\n                            <!-- <p-dropdown [options]=\"sortOptions\" [(ngModel)]=\"sortKey\" placeholder=\"Sort By Price\"\n                                (onChange)=\"onSortChange($event)\"></p-dropdown> -->\n                        </div>\n                    </ng-template>\n\n                    <ng-template let-item pTemplate=\"gridItem\">\n                        <div class=\"col-6 md:col-3\" style=\"cursor: pointer;\" (click)=\"selectProductBrand(item)\">\n                            <div class=\"card m-3 border-1 surface-border\">\n                                <div class=\"text-center\">\n                                    <div class=\"text-xl\" style=\"color: blue;\">{{item.name}}</div>\n                                    <img [src]=\"item.image\" [alt]=\"item.name\" class=\"w-9 shadow-2 my-3 mx-0\"\n                                        draggable=\"false\" />\n\n                                </div>\n                            </div>\n                        </div>\n                    </ng-template>\n                </p-dataView>\n            </ng-container>\n            <ng-container *ngIf=\"select_type=='product'\">\n                <p-dataView #dv [value]=\"product_groups\" [paginator]=\"true\" [rows]=\"20\" filterBy=\"name\" layout=\"grid\">\n                    <ng-template pTemplate=\"header\">\n                        <div class=\"grid grid-nogutter flex-column md:flex-row justify-content-between\">\n\n\n                            <button (click)=\"backToProductBrand()\" pButton icon=\"pi pi-arrow-left\" label=\"\u0E01\u0E25\u0E31\u0E1A\"\n                                style=\"width:auto;\" class=\"p-button-danger mr-2 outline\"></button>\n\n\n                            <span class=\"p-input-icon-left mb-2 md:mb-0\">\n                                <i class=\"pi pi-search\"></i>\n                                <input type=\"search\" pInputText placeholder=\"\u0E04\u0E49\u0E19\u0E2B\u0E32\"\n                                    (input)=\"dv.filter($event.target.value)\">\n                            </span>\n\n                            <!-- <p-dropdown [options]=\"sortOptions\" [(ngModel)]=\"sortKey\" placeholder=\"Sort By Price\"\n                                (onChange)=\"onSortChange($event)\"></p-dropdown> -->\n                        </div>\n                    </ng-template>\n\n                    <ng-template let-item pTemplate=\"gridItem\">\n                        <div class=\"col-6 md:col-3\" style=\"cursor: pointer;\" (click)=\"selectProduct(item)\">\n                            <div class=\"card m-3 border-1 surface-border\">\n                                <div class=\"text-center\">\n                                    <div class=\"text-xl\" style=\"color: blue;\">{{item.name}}</div>\n                                    <img [src]=\"item.image\" [alt]=\"item.name\" class=\"w-9 shadow-2 my-3 mx-0\"\n                                        draggable=\"false\" />\n\n                                </div>\n                                <div class=\"flex align-items-center justify-content-between\">\n                                    <span class=\"sm:ml-2 product-badge status-instock\">\u0E04\u0E25\u0E31\u0E07 :\n                                        {{item.count}}</span>\n                                    <div class=\"flex align-items-center\">\n                                        <i class=\"pi pi-tag mr-2\"></i>\n                                        <span class=\"font-semibold\" style=\"color: red;\">{{item.price}}.-</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-template>\n                </p-dataView>\n            </ng-container>\n        </div>\n    </div>\n\n    <ng-template pTemplate=\"footer\">\n        <button pButton icon=\"pi pi-window-close\" (click)=\"displayAdd = false\" label=\"\u0E1B\u0E34\u0E14\"\n            class=\"p-button-secondary ml-2\"></button>\n    </ng-template>\n</p-dialog>\n\n<p-toast position=\"bottom-center\"></p-toast>", styles: [".cart-item-animate {\r\n  animation: popIn 0.3s ease-in-out;\r\n}\r\n\r\n@keyframes popIn {\r\n  0% { transform: scale(0.8); opacity: 0; }\r\n  100% { transform: scale(1); opacity: 1; }\r\n}"] }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.ReceiveProductService }, { type: i3.MessageService }]; }, null); })();
//# sourceMappingURL=receive-product.component.js.map