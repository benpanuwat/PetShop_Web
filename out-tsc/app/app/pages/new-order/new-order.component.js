import { Component, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../new-order/new-order.service";
import * as i3 from "@angular/router";
import * as i4 from "primeng/api";
import * as i5 from "@angular/common";
import * as i6 from "primeng/button";
import * as i7 from "primeng/inputtext";
import * as i8 from "primeng/dataview";
import * as i9 from "primeng/dialog";
import * as i10 from "primeng/dropdown";
import * as i11 from "primeng/table";
import * as i12 from "primeng/toast";
const _c0 = ["dt"];
function NewOrderComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th", 70);
    i0.ɵɵtext(2, "\u0E23\u0E39\u0E1B");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "th");
    i0.ɵɵtext(4, "\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "th", 71);
    i0.ɵɵtext(6, "\u0E23\u0E32\u0E04\u0E32");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th", 72);
    i0.ɵɵtext(8, "\u0E08\u0E33\u0E19\u0E27\u0E19");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th", 71);
    i0.ɵɵtext(10, "\u0E23\u0E32\u0E04\u0E32\u0E23\u0E27\u0E21");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th", 73);
    i0.ɵɵtext(12, "\u0E25\u0E1A");
    i0.ɵɵelementEnd()();
} }
function NewOrderComponent_ng_template_26_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "img", 77);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r16 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", item_r16.image, i0.ɵɵsanitizeUrl);
} }
function NewOrderComponent_ng_template_26_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td");
} }
function NewOrderComponent_ng_template_26_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r16 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r16.name, " ");
} }
function NewOrderComponent_ng_template_26_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td")(1, "input", 78);
    i0.ɵɵlistener("ngModelChange", function NewOrderComponent_ng_template_26_td_4_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r30); const item_r16 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView(item_r16.name = $event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r16 = i0.ɵɵnextContext().$implicit;
    const ctx_r21 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", item_r16.name)("readonly", ctx_r21.step == "order");
} }
function NewOrderComponent_ng_template_26_td_5_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 79)(1, "span", 80);
    i0.ɵɵlistener("click", function NewOrderComponent_ng_template_26_td_5_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r34); const item_r16 = i0.ɵɵnextContext().$implicit; const ctx_r32 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r32.openPrice(item_r16)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r16 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r16.price);
} }
function NewOrderComponent_ng_template_26_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r16 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r16.price, "");
} }
function NewOrderComponent_ng_template_26_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 79)(1, "span", 80);
    i0.ɵɵlistener("click", function NewOrderComponent_ng_template_26_td_7_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r39); const item_r16 = i0.ɵɵnextContext().$implicit; const ctx_r37 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r37.openQty(item_r16)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r16 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r16.qty);
} }
function NewOrderComponent_ng_template_26_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r16 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r16.qty, "");
} }
function NewOrderComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, NewOrderComponent_ng_template_26_td_1_Template, 2, 1, "td", 15);
    i0.ɵɵtemplate(2, NewOrderComponent_ng_template_26_td_2_Template, 1, 0, "td", 15);
    i0.ɵɵtemplate(3, NewOrderComponent_ng_template_26_td_3_Template, 2, 1, "td", 15);
    i0.ɵɵtemplate(4, NewOrderComponent_ng_template_26_td_4_Template, 2, 2, "td", 15);
    i0.ɵɵtemplate(5, NewOrderComponent_ng_template_26_td_5_Template, 3, 1, "td", 74);
    i0.ɵɵtemplate(6, NewOrderComponent_ng_template_26_td_6_Template, 2, 1, "td", 75);
    i0.ɵɵtemplate(7, NewOrderComponent_ng_template_26_td_7_Template, 3, 1, "td", 74);
    i0.ɵɵtemplate(8, NewOrderComponent_ng_template_26_td_8_Template, 2, 1, "td", 75);
    i0.ɵɵelementStart(9, "td", 26);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td", 26)(13, "button", 76);
    i0.ɵɵlistener("click", function NewOrderComponent_ng_template_26_Template_button_click_13_listener() { const restoredCtx = i0.ɵɵrestoreView(_r43); const rowIndex_r17 = restoredCtx.rowIndex; const ctx_r42 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r42.removeProduct(rowIndex_r17)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r16.id != 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r16.id == 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r16.id != 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r16.id == 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.step == "select");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.step == "order");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.step == "select");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.step == "order");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(11, 10, item_r16.net_total, "1.2-2"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r2.step == "order");
} }
function NewOrderComponent_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 81)(2, "button", 82);
    i0.ɵɵlistener("click", function NewOrderComponent_ng_container_27_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r45); const ctx_r44 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r44.clearData()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 83);
    i0.ɵɵlistener("click", function NewOrderComponent_ng_container_27_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r45); const ctx_r46 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r46.addOrder()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r3.disabledAddOrder);
} }
function NewOrderComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 81)(2, "button", 84);
    i0.ɵɵlistener("click", function NewOrderComponent_ng_container_28_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r48); const ctx_r47 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r47.newCreate()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 85);
    i0.ɵɵlistener("click", function NewOrderComponent_ng_container_28_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r48); const ctx_r49 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r49.printSlip()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} }
function NewOrderComponent_div_67_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r52 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19)(1, "label", 5);
    i0.ɵɵtext(2, "\u0E22\u0E2D\u0E14\u0E42\u0E2D\u0E19");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "table")(4, "tr")(5, "td");
    i0.ɵɵelement(6, "input", 89);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td")(8, "button", 88);
    i0.ɵɵlistener("click", function NewOrderComponent_div_67_div_1_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r52); const ctx_r51 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r51.openCashTransfer()); });
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("readonly", true);
} }
function NewOrderComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    const _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, NewOrderComponent_div_67_div_1_Template, 9, 1, "div", 86);
    i0.ɵɵelementStart(2, "div", 19)(3, "label", 5);
    i0.ɵɵtext(4, "\u0E40\u0E07\u0E34\u0E19\u0E2A\u0E14\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "table")(6, "tr")(7, "td");
    i0.ɵɵelement(8, "input", 87);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td")(10, "button", 88);
    i0.ɵɵlistener("click", function NewOrderComponent_div_67_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r54); const ctx_r53 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r53.openCashReceived()); });
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    let tmp_0_0;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_0_0 = ctx_r5.formCart.get("payment_type")) == null ? null : tmp_0_0.value) == "\u0E42\u0E2D\u0E19" || ((tmp_0_0 = ctx_r5.formCart.get("payment_type")) == null ? null : tmp_0_0.value) == "\u0E04\u0E19\u0E25\u0E30\u0E04\u0E23\u0E36\u0E48\u0E07");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("readonly", true);
} }
function NewOrderComponent_ng_template_124_Template(rf, ctx) { if (rf & 1) {
    const _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 90);
    i0.ɵɵlistener("click", function NewOrderComponent_ng_template_124_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r56); const ctx_r55 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r55.confirmAddMember()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "button", 91);
    i0.ɵɵlistener("click", function NewOrderComponent_ng_template_124_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r56); const ctx_r57 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r57.cancelAddMember()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r6.disabledAddMember);
} }
function NewOrderComponent_ng_container_128_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 95);
    i0.ɵɵelement(1, "button", 96);
    i0.ɵɵelementStart(2, "span", 97);
    i0.ɵɵelement(3, "i", 98);
    i0.ɵɵelementStart(4, "input", 99);
    i0.ɵɵlistener("input", function NewOrderComponent_ng_container_128_ng_template_3_Template_input_input_4_listener($event) { i0.ɵɵrestoreView(_r62); i0.ɵɵnextContext(); const _r58 = i0.ɵɵreference(2); return i0.ɵɵresetView(_r58.filter($event.target.value)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", true);
} }
function NewOrderComponent_ng_container_128_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r65 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 100);
    i0.ɵɵlistener("click", function NewOrderComponent_ng_container_128_ng_template_4_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r65); const item_r63 = restoredCtx.$implicit; const ctx_r64 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r64.selectProductType(item_r63)); });
    i0.ɵɵelementStart(1, "div", 101)(2, "div", 102)(3, "div", 103);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "img", 104);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r63 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r63.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", item_r63.image, i0.ɵɵsanitizeUrl)("alt", item_r63.name);
} }
function NewOrderComponent_ng_container_128_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p-dataView", 92, 93);
    i0.ɵɵtemplate(3, NewOrderComponent_ng_container_128_ng_template_3_Template, 5, 1, "ng-template", 13);
    i0.ɵɵtemplate(4, NewOrderComponent_ng_container_128_ng_template_4_Template, 6, 3, "ng-template", 94);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r7.product_type_groups)("paginator", true)("rows", 20);
} }
function NewOrderComponent_ng_container_129_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r70 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 95)(1, "button", 105);
    i0.ɵɵlistener("click", function NewOrderComponent_ng_container_129_ng_template_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r70); const ctx_r69 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r69.backToProductType()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 97);
    i0.ɵɵelement(3, "i", 98);
    i0.ɵɵelementStart(4, "input", 99);
    i0.ɵɵlistener("input", function NewOrderComponent_ng_container_129_ng_template_3_Template_input_input_4_listener($event) { i0.ɵɵrestoreView(_r70); i0.ɵɵnextContext(); const _r66 = i0.ɵɵreference(2); return i0.ɵɵresetView(_r66.filter($event.target.value)); });
    i0.ɵɵelementEnd()()();
} }
function NewOrderComponent_ng_container_129_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r74 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 100);
    i0.ɵɵlistener("click", function NewOrderComponent_ng_container_129_ng_template_4_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r74); const item_r72 = restoredCtx.$implicit; const ctx_r73 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r73.selectProductBrand(item_r72)); });
    i0.ɵɵelementStart(1, "div", 101)(2, "div", 102)(3, "div", 103);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "img", 104);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r72 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r72.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", item_r72.image, i0.ɵɵsanitizeUrl)("alt", item_r72.name);
} }
function NewOrderComponent_ng_container_129_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p-dataView", 92, 93);
    i0.ɵɵtemplate(3, NewOrderComponent_ng_container_129_ng_template_3_Template, 5, 0, "ng-template", 13);
    i0.ɵɵtemplate(4, NewOrderComponent_ng_container_129_ng_template_4_Template, 6, 3, "ng-template", 94);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r8.product_brand_groups)("paginator", true)("rows", 20);
} }
function NewOrderComponent_ng_container_130_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r79 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 95)(1, "button", 105);
    i0.ɵɵlistener("click", function NewOrderComponent_ng_container_130_ng_template_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r79); const ctx_r78 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r78.backToProductBrand()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 97);
    i0.ɵɵelement(3, "i", 98);
    i0.ɵɵelementStart(4, "input", 99);
    i0.ɵɵlistener("input", function NewOrderComponent_ng_container_130_ng_template_3_Template_input_input_4_listener($event) { i0.ɵɵrestoreView(_r79); i0.ɵɵnextContext(); const _r75 = i0.ɵɵreference(2); return i0.ɵɵresetView(_r75.filter($event.target.value)); });
    i0.ɵɵelementEnd()()();
} }
function NewOrderComponent_ng_container_130_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r83 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 100);
    i0.ɵɵlistener("click", function NewOrderComponent_ng_container_130_ng_template_4_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r83); const item_r81 = restoredCtx.$implicit; const ctx_r82 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r82.selectProduct(item_r81)); });
    i0.ɵɵelementStart(1, "div", 101)(2, "div", 102)(3, "div", 103);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "img", 104);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 106)(7, "span", 107);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 108);
    i0.ɵɵelement(10, "i", 109);
    i0.ɵɵelementStart(11, "span", 110);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const item_r81 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r81.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", item_r81.image, i0.ɵɵsanitizeUrl)("alt", item_r81.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("\u0E04\u0E25\u0E31\u0E07 : ", item_r81.count, "");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", item_r81.price, ".-");
} }
function NewOrderComponent_ng_container_130_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p-dataView", 92, 93);
    i0.ɵɵtemplate(3, NewOrderComponent_ng_container_130_ng_template_3_Template, 5, 0, "ng-template", 13);
    i0.ɵɵtemplate(4, NewOrderComponent_ng_container_130_ng_template_4_Template, 13, 5, "ng-template", 94);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r9.product_groups)("paginator", true)("rows", 20);
} }
function NewOrderComponent_ng_template_131_Template(rf, ctx) { if (rf & 1) {
    const _r85 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 111);
    i0.ɵɵlistener("click", function NewOrderComponent_ng_template_131_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r85); const ctx_r84 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r84.displayAddProduct = false); });
    i0.ɵɵelementEnd();
} }
function NewOrderComponent_ng_template_168_Template(rf, ctx) { if (rf & 1) {
    const _r87 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 112);
    i0.ɵɵlistener("click", function NewOrderComponent_ng_template_168_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r87); const ctx_r86 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r86.confirmPrice()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "button", 91);
    i0.ɵɵlistener("click", function NewOrderComponent_ng_template_168_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r87); const ctx_r88 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r88.cancelPrice()); });
    i0.ɵɵelementEnd();
} }
function NewOrderComponent_ng_template_205_Template(rf, ctx) { if (rf & 1) {
    const _r90 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 112);
    i0.ɵɵlistener("click", function NewOrderComponent_ng_template_205_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r90); const ctx_r89 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r89.confirmQty()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "button", 91);
    i0.ɵɵlistener("click", function NewOrderComponent_ng_template_205_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r90); const ctx_r91 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r91.cancelQty()); });
    i0.ɵɵelementEnd();
} }
function NewOrderComponent_ng_template_242_Template(rf, ctx) { if (rf & 1) {
    const _r93 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 112);
    i0.ɵɵlistener("click", function NewOrderComponent_ng_template_242_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r93); const ctx_r92 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r92.confirmCashTransfer()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "button", 91);
    i0.ɵɵlistener("click", function NewOrderComponent_ng_template_242_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r93); const ctx_r94 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r94.cancelCashTransfer()); });
    i0.ɵɵelementEnd();
} }
function NewOrderComponent_ng_template_279_Template(rf, ctx) { if (rf & 1) {
    const _r96 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 112);
    i0.ɵɵlistener("click", function NewOrderComponent_ng_template_279_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r96); const ctx_r95 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r95.confirmCashReceived()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "button", 91);
    i0.ɵɵlistener("click", function NewOrderComponent_ng_template_279_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r96); const ctx_r97 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r97.cancelCashReceived()); });
    i0.ɵɵelementEnd();
} }
function NewOrderComponent_tr_317_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 64);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 113);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 114);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "number");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const product_r98 = ctx.$implicit;
    const i_r99 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", i_r99 + 1, ".", product_r98.name, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", product_r98.qty, " \u0E0A\u0E34\u0E49\u0E19");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(7, 4, product_r98.net_total, "1.2-2"));
} }
const _c1 = function () { return { "width": "200px" }; };
const _c2 = function () { return { width: "30vw" }; };
const _c3 = function () { return { "960px": "75vw" }; };
const _c4 = function () { return { width: "70vw" }; };
const _c5 = function () { return { width: "25vw" }; };
export class NewOrderComponent {
    constructor(_fb, _service, _router, _route, _messageService) {
        this._fb = _fb;
        this._service = _service;
        this._router = _router;
        this._route = _route;
        this._messageService = _messageService;
        this.permissions = [];
        this.displayAddMember = false;
        this.displayAddProduct = false;
        this.displayQty = false;
        this.displayPrice = false;
        this.displayCashTransfer = false;
        this.displayCashReceived = false;
        this.disabledAddMember = true;
        this.disabledAddOrder = false;
        this.payment_types = [];
        this.product_carts = [];
        this.select_type = "product_type";
        this.step = 'select';
        this.itemSelect = {};
        this._editNumber = "";
        this.permissions = JSON.parse(localStorage.getItem('permissions'));
        this.branch_id = Number(localStorage.getItem('branch'));
    }
    ngOnInit() {
        this.formSetting = this._fb.group({
            barcode: "",
        });
        this.formAddMember = this._fb.group({
            name: "",
            phone: "",
            discount: 0,
        });
        this.formCart = this._fb.group({
            code: "",
            created_date: "",
            products: this._fb.array([]),
            member_id: 0,
            member_name: "",
            member_phone: "",
            payment_type: "เงินสด",
            total: 0,
            discount_per: 0,
            discount: 0,
            net_total: 0,
            cash_transfer: 0,
            cash_received: 0,
            cash_return: 0,
            branch_id: this.branch_id,
        });
        this.loadPaymentType();
        this.loadProduct();
    }
    get products() {
        return this.formCart.get('products');
    }
    deleteBracode() {
        this.formSetting = this._fb.group({
            barcode: "",
        });
    }
    loadPaymentType() {
        this._service.getPaymentType()
            .subscribe((resp) => {
            this.payment_types = resp.data;
        });
    }
    loadProduct() {
        this._service.getProductTypeGroup()
            .subscribe((resp) => {
            this.product_type_groups = resp.data;
        });
    }
    openAddMember() {
        this.formAddMember.reset();
        this.formAddMember = this._fb.group({
            name: "",
            phone: "",
            discount: 0,
        });
        this.displayAddMember = true;
        this.disabledAddMember = false;
    }
    confirmAddMember() {
        this.disabledAddMember = true;
        this._service.addMember(this.formAddMember.value).subscribe({
            next: (resp) => {
                this._service.getMemberByPhone(this.formAddMember.value.phone).subscribe({
                    next: (resp) => {
                        this.formCart.patchValue({
                            member_id: resp.data.id,
                            member_name: resp.data.name,
                            member_phone: resp.data.phone,
                            discount_per: resp.data.discount,
                        });
                        this.calSum();
                    },
                    error: (err) => {
                        this.showError(err.error.message);
                    },
                });
                this.displayAddMember = false;
                this.showSuccess(resp.message);
            },
            error: (err) => {
                this.showError(err.error.message);
            },
        });
    }
    cancelAddMember() {
        this.displayAddMember = false;
    }
    openAddProduct() {
        this.displayAddProduct = true;
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
    addItem() {
        this.products.push(this._fb.group({
            id: 0,
            code: '',
            name: 'อื่นๆ',
            qty: 1,
            price: 0,
            pack_count: 1,
            pack_price: 0,
            total: 0,
            discount: 0,
            net_total: 0,
        }));
        this.calSum();
        setTimeout(() => this.scrollToLastRow(), 100);
        console.log(55);
    }
    selectProduct(selectProduct) {
        if (this.step == 'select') {
            let product_cart = this.formCart.value.products.find(p => p.id === selectProduct.id);
            if (!product_cart) {
                this.products.push(this._fb.group({
                    id: selectProduct.id,
                    code: selectProduct.code,
                    name: selectProduct.name,
                    image: selectProduct.image,
                    qty: 1,
                    price: selectProduct.price,
                    pack_count: selectProduct.pack_count,
                    pack_price: selectProduct.pack_price,
                    total: selectProduct.price,
                    discount: 0,
                    net_total: selectProduct.price,
                }));
            }
            else {
                product_cart.qty += 1;
                this.calAmount(product_cart);
            }
            this.calSum();
            setTimeout(() => this.scrollToLastRow(), 100);
        }
    }
    removeProduct(index) {
        this.products.removeAt(index);
        this.calSum();
    }
    openPrice(item) {
        this.itemSelect = item;
        this._editNumber = "";
        this.displayPrice = true;
    }
    editPrice(value) {
        if (value === 'del') {
            this._editNumber = this._editNumber.slice(0, -1);
            return;
        }
        if (value === 'clear') {
            this._editNumber = '';
            return;
        }
        this._editNumber += value;
    }
    confirmPrice() {
        let number = Number(this._editNumber);
        if (number > 9999)
            number = 9999;
        this.itemSelect.price = number;
        this.calAmount(this.itemSelect);
        this.displayPrice = false;
    }
    cancelPrice() {
        this.displayPrice = false;
    }
    openQty(item) {
        this.itemSelect = item;
        this._editNumber = "";
        this.displayQty = true;
    }
    editQty(value) {
        if (value === 'del') {
            this._editNumber = this._editNumber.slice(0, -1);
            return;
        }
        if (value === 'clear') {
            this._editNumber = '';
            return;
        }
        this._editNumber += value;
    }
    confirmQty() {
        let number = Number(this._editNumber);
        if (number > 9999)
            number = 9999;
        this.itemSelect.qty = number;
        this.calAmount(this.itemSelect);
        this.displayQty = false;
    }
    cancelQty() {
        this.displayQty = false;
    }
    editNumber(value) {
        if (value === 'del') {
            this._editNumber = this._editNumber.slice(0, -1);
            return;
        }
        if (value === 'clear') {
            this._editNumber = '';
            return;
        }
        this._editNumber += value;
    }
    openCashTransfer() {
        this._editNumber = "";
        this.displayCashTransfer = true;
    }
    confirmCashTransfer() {
        let number = Number(this._editNumber);
        if (number > 9999)
            number = 9999;
        this.formCart.patchValue({
            cash_transfer: number,
        });
        this.displayCashTransfer = false;
    }
    cancelCashTransfer() {
        this.displayCashTransfer = false;
    }
    openCashReceived() {
        this._editNumber = "";
        this.displayCashReceived = true;
    }
    confirmCashReceived() {
        let number = Number(this._editNumber);
        if (number > 9999)
            number = 9999;
        this.formCart.patchValue({
            cash_received: number,
        });
        if (this.formCart.value.payment_type == 'เงินสด') {
            this.formCart.patchValue({
                cash_return: this.formCart.value.cash_received - this.formCart.value.net_total,
            });
        }
        else if (this.formCart.value.payment_type == 'โอน' || this.formCart.value.payment_type == 'คนละครึ่ง') {
            this.formCart.patchValue({
                cash_return: this.formCart.value.cash_received - (this.formCart.value.net_total - this.formCart.value.cash_transfer),
            });
        }
        this.displayCashReceived = false;
    }
    cancelCashReceived() {
        this.displayCashReceived = false;
    }
    selectPaymentType() {
        if (this.formCart.value.payment_type == 'เงินสด') {
            this.formCart.patchValue({
                cash_received: 0,
                cash_return: this.formCart.value.cash_received - this.formCart.value.net_total,
            });
        }
        else if (this.formCart.value.payment_type == 'โอน' || this.formCart.value.payment_type == 'คนละครึ่ง') {
            this.formCart.patchValue({
                cash_transfer: this.formCart.value.net_total,
                cash_received: 0,
                cash_return: 0,
            });
        }
        else {
            this.formCart.patchValue({
                cash_received: 0,
                cash_return: 0,
            });
        }
    }
    calAmount(product_cart) {
        product_cart.total = product_cart.price * product_cart.qty;
        product_cart.net_total = product_cart.total;
        this.calSum();
        // let pack_count = Math.floor(product_cart.qty / product_cart.pack_count);
        // let pack_over = product_cart.qty % product_cart.pack_count;
        // let to_pack_count = product_cart.pack_count - (product_cart.qty % product_cart.pack_count);
        // if (pack_count == 0) {
        //   product_cart.total = product_cart.price * product_cart.qty;
        //   product_cart.net_total = product_cart.total;
        // product_cart.noti_discount = "";
        // if (to_pack_count != product_cart.pack_count) {
        //   let add_discount = (product_cart.price * product_cart.pack_count) - product_cart.pack_price;
        //   product_cart.noti_add_qty = `เพิ่ม ${to_pack_count} ชิ้น ลด ${add_discount}`;
        // }
        // else {
        //   product_cart.noti_add_qty = "";
        // }
        // }
        // else {
        //   console.log(product_cart);
        //   product_cart.total = product_cart.price * product_cart.qty;
        //   product_cart.net_total = (pack_count * product_cart.pack_price) + (pack_over * product_cart.price);
        //product_cart.discount = ((product_cart.qty * product_cart.price) - product_cart.net_total);
        // product_cart.noti_discount = `ลดแล้ว ${product_cart.discount}`;
        // if (to_pack_count != product_cart.pack_count) {
        //   let add_discount = (product_cart.price * product_cart.pack_count) - product_cart.pack_price;
        //   product_cart.noti_add_qty = `เพิ่ม ${to_pack_count} ชิ้น ลด ${add_discount.toFixed(2)}`;
        // }
        // else {
        //   product_cart.noti_add_qty = "";
        // }
        // }
    }
    calSum() {
        let total = 0;
        let discount_per = this.formCart.get('discount_per').value;
        for (const product of this.formCart.value.products) {
            total += product.net_total;
        }
        let discount = Math.ceil((total * discount_per) / 100);
        let net_total = total - discount;
        this.formCart.patchValue({
            total: total,
            discount: discount,
            net_total: net_total,
        });
    }
    onEnterBracode() {
        const product = this.product_type_groups
            .flatMap(t => t.product_brands)
            .flatMap(b => b.products)
            .find(p => p.code === this.formSetting.value.barcode);
        if (product) {
            this.selectProduct(product);
            this.calSum();
            this.formSetting.reset();
            setTimeout(() => this.scrollToLastRow(), 100);
        }
        else {
            this.showError("ไม่พบรายการสินค้า");
        }
        // this._service.getProductByBarcode(this.formSetting.value.barcode).subscribe({
        //   next: (resp: any) => {
        //     const product = this.product_type_groups
        //       .flatMap(t => t.product_brands)
        //       .flatMap(b => b.products)
        //       .find(p => p.id === resp.data.id);
        //     if (product) {
        //       this.selectProduct(product);
        //       this.calSum();
        //     }
        //     this.formSetting.reset();
        //   },
        //   error: (err) => {
        //     this.showError(err.error.message);
        //     this.formSetting.reset();
        //   },
        // });
    }
    scrollToLastRow() {
        const tableBody = this.table.el.nativeElement.querySelector('.p-datatable-wrapper');
        if (tableBody) {
            tableBody.scrollTop = tableBody.scrollHeight; // scroll แนวตั้ง
            tableBody.scrollLeft = tableBody.scrollWidth; // scroll แนวนอน (ถ้ามี)
        }
    }
    onEnterMemberPhone() {
        this._service.getMemberByPhone(this.formCart.value.member_phone).subscribe({
            next: (resp) => {
                this.formCart.patchValue({
                    member_id: resp.data.id,
                    member_name: resp.data.name,
                    member_phone: resp.data.phone,
                    discount_per: resp.data.discount,
                });
                this.calSum();
                this.showSuccess(resp.message);
            },
            error: (err) => {
                this.showError(err.error.message);
            },
        });
    }
    clearData() {
        this.formCart = this._fb.group({
            code: "",
            created_date: "",
            products: this._fb.array([]),
            member_id: 0,
            member_name: "",
            member_phone: "",
            payment_type: "เงินสด",
            total: 0,
            discount_per: 0,
            discount: 0,
            net_total: 0,
            cash_transfer: 0,
            cash_received: 0,
            cash_return: 0,
            branch_id: this.branch_id,
        });
        this.select_type = "product_type";
    }
    addOrder() {
        if (this.formCart.value.payment_type == 'เงินสด' && this.formCart.value.cash_received == 0) {
            this.showError("กรุณากรอกเงินสดที่ได้รับ");
        }
        else if (this.formCart.value.payment_type == 'โอน' && (this.formCart.value.cash_transfer + this.formCart.value.cash_received) < this.formCart.value.net_total) {
            this.showError("กรุณากรอกจำนวนเงินให้มากกว่าราคาสินค้า");
        }
        else if (this.formCart.value.payment_type == 'คนละครึ่ง' && (this.formCart.value.cash_transfer + this.formCart.value.cash_received) < this.formCart.value.net_total) {
            this.showError("กรุณากรอกจำนวนเงินให้มากกว่าราคาสินค้า");
        }
        else {
            this.disabledAddOrder = true;
            this._service.addOrder(this.formCart.value).subscribe({
                next: (resp) => {
                    this.formCart.patchValue({
                        code: resp.data.code,
                        created_date: resp.data.created_date,
                    });
                    this.step = "order";
                    this.showSuccess(resp.message);
                },
                error: (err) => {
                    this.showError(err.error.message);
                    this.disabledAddOrder = false;
                },
            });
        }
    }
    newCreate() {
        this.loadProduct();
        this.clearData();
        this.step = "select";
        this.disabledAddOrder = false;
    }
    printSlip() {
        const printContents = document.getElementById('slip-content')?.innerHTML;
        const popupWin = window.open('', '_blank', 'width=800,height=600');
        if (popupWin) {
            popupWin.document.open();
            popupWin.document.write(`
        <html>
          <head>
            <title>ใบเสร็จรับเงิน</title>
          </head>
          <body onload="window.print(); window.close();">
            ${printContents}
          </body>
        </html>
      `);
            popupWin.document.close();
        }
    }
    showError(massage) {
        this._messageService.add({ severity: 'error', summary: 'แจ้งเตือน', detail: massage });
    }
    showSuccess(massage) {
        this._messageService.add({ severity: 'success', summary: 'แจ้งเตือน', detail: massage });
    }
    static { this.ɵfac = function NewOrderComponent_Factory(t) { return new (t || NewOrderComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.NewOrderService), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i4.MessageService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NewOrderComponent, selectors: [["app-new-order"]], viewQuery: function NewOrderComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.table = _t.first);
        } }, decls: 349, vars: 96, consts: [[1, "grid"], [1, "col-12"], [1, "card"], [2, "display", "flex", "justify-content", "space-between", "padding-bottom", "10px"], [3, "formGroup"], ["for", "name"], ["pInputText", "", "type", "text", "formControlName", "barcode", "maxlength", "50", 3, "keydown.enter"], ["pButton", "", "label", "\u0E25\u0E1A", 1, "p-button-danger", "mr-2", "outline", 2, "width", "auto", 3, "click"], ["pButton", "", "icon", "pi pi-plus", "label", "\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01", 1, "p-button-primary", "mr-2", "outline", 2, "width", "auto", 3, "click"], ["pButton", "", "icon", "pi pi-plus", "label", "\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32", 1, "p-button-primary", "mr-2", "outline", 2, "width", "auto", 3, "click"], ["pButton", "", "icon", "pi pi-plus", "label", "\u0E2D\u0E37\u0E48\u0E19\u0E46", 1, "p-button-primary", "mr-2", "outline", 2, "width", "auto", 3, "click"], ["responsiveLayout", "scroll", "scrollHeight", "400px", 3, "value", "scrollable"], ["dt", ""], ["pTemplate", "header"], ["pTemplate", "body"], [4, "ngIf"], [1, "col-6"], [2, "width", "100%"], [1, "col-6", "pb-0"], [1, "field"], ["pInputText", "", "type", "text", "formControlName", "member_phone", "maxlength", "20", 3, "readonly", "keydown.enter"], [1, "table"], [2, "width", "20px"], [1, "col-6", "pb-0", "py-0"], ["optionLabel", "name", "optionValue", "name", "placeholder", "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E01\u0E32\u0E23\u0E0A\u0E33\u0E23\u0E30", "formControlName", "payment_type", 3, "options", "onChange"], ["class", "col-6 pb-0 py-0", 4, "ngIf"], [2, "text-align", "right"], ["pInputText", "", "type", "number", "formControlName", "discount_per", "min", "0", "max", "20", 2, "text-align", "right", 3, "readonly", "change"], ["position", "bottom-center"], ["header", "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01", "modal", "modal", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], [1, "card", "p-fluid"], [1, "col-12", "py-0"], ["htmlFor", "name"], ["pInputText", "", "type", "text", "formControlName", "name", "maxlength", "200"], ["pInputText", "", "type", "text", "formControlName", "phone", "maxlength", "20"], [1, "col-6", "py-0"], ["pInputText", "", "type", "number", "formControlName", "discount", "min", "0", "max", "20"], ["pTemplate", "footer"], ["header", "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32", "modal", "modal", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], ["header", "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E08\u0E33\u0E19\u0E27\u0E19\u0E40\u0E07\u0E34\u0E19", "modal", "modal", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], ["pInputText", "", "type", "number", "min", "1", "max", "9999", 2, "text-align", "center", "font-size", "40px", 3, "ngModel", "readOnly", "ngModelChange"], [1, "col-12", "py-0", "center"], ["pButton", "", "label", "7", 1, "p-button-primary", "mr-2", "outline", 2, "width", "80px", "height", "70px", 3, "click"], ["pButton", "", "label", "8", 1, "p-button-primary", "mr-2", "outline", 2, "width", "80px", "height", "70px", 3, "click"], ["pButton", "", "label", "9", 1, "p-button-primary", "mr-2", "outline", 2, "width", "80px", "height", "70px", 3, "click"], ["pButton", "", "label", "4", 1, "p-button-primary", "mr-2", "outline", 2, "width", "80px", "height", "70px", 3, "click"], ["pButton", "", "label", "5", 1, "p-button-primary", "mr-2", "outline", 2, "width", "80px", "height", "70px", 3, "click"], ["pButton", "", "label", "6", 1, "p-button-primary", "mr-2", "outline", 2, "width", "80px", "height", "70px", 3, "click"], ["pButton", "", "label", "1", 1, "p-button-primary", "mr-2", "outline", 2, "width", "80px", "height", "70px", 3, "click"], ["pButton", "", "label", "2", 1, "p-button-primary", "mr-2", "outline", 2, "width", "80px", "height", "70px", 3, "click"], ["pButton", "", "label", "3", 1, "p-button-primary", "mr-2", "outline", 2, "width", "80px", "height", "70px", 3, "click"], ["pButton", "", "label", "\u0E25\u0E1A\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14", 1, "p-button-danger", "mr-2", "outline", 2, "width", "80px", "height", "70px", 3, "click"], ["pButton", "", "label", "0", 1, "p-button-primary", "mr-2", "outline", 2, "width", "80px", "height", "70px", 3, "click"], ["pButton", "", "label", "\u0E25\u0E1A", 1, "p-button-danger", "mr-2", "outline", 2, "width", "80px", "height", "70px", 3, "click"], ["header", "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E08\u0E33\u0E19\u0E27\u0E19", "modal", "modal", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], ["header", "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E08\u0E33\u0E19\u0E27\u0E19\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E34\u0E19\u0E42\u0E2D\u0E19", "modal", "modal", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], ["header", "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E08\u0E33\u0E19\u0E27\u0E19\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E34\u0E19\u0E2A\u0E14", "modal", "modal", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], ["id", "slip-content", "hidden", "", 2, "width", "80mm", "padding", "3px", "font-family", "'Courier New', Courier, monospace", "font-size", "10px"], [2, "text-align", "center", "margin-top", "10px"], ["src", "assets/images/logo.jpg", "width", "150"], [2, "width", "100%", "text-align", "center", "font-size", "10px"], [2, "border-top", "1px dashed #000"], [2, "width", "100%", "font-size", "10px"], [2, "width", "80px"], [2, "width", "auto"], [2, "width", "60px"], [2, "font-size", "14px"], [4, "ngFor", "ngForOf"], [2, "width", "80px", "text-align", "right"], [2, "font-size", "16px"], [2, "width", "100px"], [2, "width", "120px", "text-align", "right"], [2, "width", "auto", "text-align", "right"], [2, "width", "50px", "text-align", "right"], ["style", "text-align: right;color: blue;", 4, "ngIf"], ["style", "text-align: right;", 4, "ngIf"], ["pButton", "", "icon", "pi pi-trash", 1, "p-button-danger", "mr-2", "outline", 3, "disabled", "click"], [1, "icon-img", 3, "src"], ["pInputText", "", "type", "text", "maxlength", "200", 2, "text-align", "left", "width", "300px", 3, "ngModel", "readonly", "ngModelChange"], [2, "text-align", "right", "color", "blue"], [2, "cursor", "pointer", 3, "click"], [1, "card", 2, "display", "flex", "justify-content", "space-between"], ["pButton", "", "icon", "pi pi-trash", "label", "\u0E25\u0E49\u0E32\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25", 1, "p-button-danger", "mr-2", "outline", 2, "width", "auto", 3, "click"], ["pButton", "", "icon", "pi pi-check", "label", "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D", 1, "p-button-success", "mr-2", "outline", 2, "width", "auto", 3, "disabled", "click"], ["pButton", "", "icon", "pi pi-plus", "label", "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D\u0E43\u0E2B\u0E21\u0E48", 1, "p-button-success", "mr-2", "outline", 2, "width", "auto", 3, "click"], ["pButton", "", "icon", "pi pi-print", "label", "\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E43\u0E1A\u0E40\u0E2A\u0E23\u0E47\u0E08", 1, "p-button-primary", "mr-2", "outline", 2, "width", "auto", 3, "click"], ["class", "field", 4, "ngIf"], ["pInputText", "", "type", "number", "formControlName", "cash_received", 3, "readonly"], ["type", "button", "pButton", "", "icon", "pi pi-th-large", "label", "", 1, "p-button-primary", "mr-2", "outline", 2, "width", "50px", 3, "click"], ["pInputText", "", "type", "number", "formControlName", "cash_transfer", 3, "readonly"], ["pButton", "", "icon", "pi pi-check", "label", "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19", 1, "p-button-success", "mr-2", "outline", 3, "disabled", "click"], ["pButton", "", "icon", "pi pi-times", "label", "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01", 1, "p-button-danger", "mr-2", "outline", 3, "click"], ["filterBy", "name", "layout", "grid", 3, "value", "paginator", "rows"], ["dv", ""], ["pTemplate", "gridItem"], [1, "grid", "grid-nogutter", "flex-column", "md:flex-row", "justify-content-between"], ["pButton", "", "icon", "pi pi-arrow-left", "label", "\u0E01\u0E25\u0E31\u0E1A", 1, "p-button-danger", "mr-2", "outline", 2, "width", "auto", 3, "disabled"], [1, "p-input-icon-left", "mb-2", "md:mb-0"], [1, "pi", "pi-search"], ["type", "search", "pInputText", "", "placeholder", "\u0E04\u0E49\u0E19\u0E2B\u0E32", 3, "input"], [1, "col-6", "md:col-3", 2, "cursor", "pointer", 3, "click"], [1, "card", "m-3", "border-1", "surface-border"], [1, "text-center"], [1, "text-xl", 2, "color", "blue"], ["draggable", "false", 1, "w-9", "shadow-2", "my-3", "mx-0", 3, "src", "alt"], ["pButton", "", "icon", "pi pi-arrow-left", "label", "\u0E01\u0E25\u0E31\u0E1A", 1, "p-button-danger", "mr-2", "outline", 2, "width", "auto", 3, "click"], [1, "flex", "align-items-center", "justify-content-between"], [1, "sm:ml-2", "product-badge", "status-instock"], [1, "flex", "align-items-center"], [1, "pi", "pi-tag", "mr-2"], [1, "font-semibold", 2, "color", "red"], ["pButton", "", "icon", "pi pi-window-close", "label", "\u0E1B\u0E34\u0E14", 1, "p-button-secondary", "ml-2", 3, "click"], ["pButton", "", "icon", "pi pi-check", "label", "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19", 1, "p-button-success", "mr-2", "outline", 3, "click"], [2, "width", "15%"], [2, "width", "15%", "text-align", "right"]], template: function NewOrderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 0)(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "h5");
            i0.ɵɵtext(7, "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div")(9, "form", 4)(10, "table")(11, "tr")(12, "td")(13, "label", 5);
            i0.ɵɵtext(14, "Barcode");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "td")(16, "input", 6);
            i0.ɵɵlistener("keydown.enter", function NewOrderComponent_Template_input_keydown_enter_16_listener() { return ctx.onEnterBracode(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "td")(18, "button", 7);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_18_listener() { return ctx.deleteBracode(); });
            i0.ɵɵelementEnd()()()()()();
            i0.ɵɵelementStart(19, "div")(20, "button", 8);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_20_listener() { return ctx.openAddMember(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "button", 9);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_21_listener() { return ctx.openAddProduct(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "button", 10);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_22_listener() { return ctx.addItem(); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(23, "p-table", 11, 12);
            i0.ɵɵtemplate(25, NewOrderComponent_ng_template_25_Template, 13, 0, "ng-template", 13);
            i0.ɵɵtemplate(26, NewOrderComponent_ng_template_26_Template, 14, 13, "ng-template", 14);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(27, NewOrderComponent_ng_container_27_Template, 4, 1, "ng-container", 15);
            i0.ɵɵtemplate(28, NewOrderComponent_ng_container_28_Template, 4, 0, "ng-container", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "div", 16)(30, "form", 4)(31, "div", 2)(32, "table", 17)(33, "tr")(34, "td")(35, "div", 0)(36, "div", 18)(37, "div", 19)(38, "label", 5);
            i0.ɵɵtext(39, "\u0E40\u0E25\u0E02\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "table")(41, "tr")(42, "td")(43, "input", 20);
            i0.ɵɵlistener("keydown.enter", function NewOrderComponent_Template_input_keydown_enter_43_listener() { return ctx.onEnterMemberPhone(); });
            i0.ɵɵelementEnd()()()()()();
            i0.ɵɵelementStart(44, "div", 18)(45, "div", 19)(46, "label", 5);
            i0.ɵɵtext(47, "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "table", 21)(49, "tr")(50, "td", 22);
            i0.ɵɵtext(51, "\u0E0A\u0E37\u0E48\u0E2D");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "td");
            i0.ɵɵtext(53);
            i0.ɵɵelementEnd()()()()()()()()()();
            i0.ɵɵelementStart(54, "div", 2)(55, "table", 17)(56, "tr")(57, "td")(58, "div", 0)(59, "div", 23)(60, "div", 19)(61, "label", 5);
            i0.ɵɵtext(62, "\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E01\u0E32\u0E23\u0E0A\u0E33\u0E23\u0E30");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(63, "table")(64, "tr")(65, "td")(66, "p-dropdown", 24);
            i0.ɵɵlistener("onChange", function NewOrderComponent_Template_p_dropdown_onChange_66_listener() { return ctx.selectPaymentType(); });
            i0.ɵɵelementEnd()()()()()();
            i0.ɵɵtemplate(67, NewOrderComponent_div_67_Template, 11, 2, "div", 25);
            i0.ɵɵelementEnd()()()()()()();
            i0.ɵɵelementStart(68, "div", 16)(69, "div", 2)(70, "form", 4)(71, "table", 17)(72, "tr")(73, "td")(74, "h5");
            i0.ɵɵtext(75, "\u0E23\u0E32\u0E04\u0E32\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E23\u0E27\u0E21");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(76, "td", 26);
            i0.ɵɵtext(77);
            i0.ɵɵpipe(78, "number");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(79, "tr")(80, "td")(81, "h5");
            i0.ɵɵtext(82, "\u0E2A\u0E48\u0E27\u0E19\u0E25\u0E14 ");
            i0.ɵɵelementStart(83, "input", 27);
            i0.ɵɵlistener("change", function NewOrderComponent_Template_input_change_83_listener() { return ctx.calSum(); });
            i0.ɵɵelementEnd();
            i0.ɵɵtext(84, "% ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(85, "td", 26);
            i0.ɵɵtext(86);
            i0.ɵɵpipe(87, "number");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(88, "tr")(89, "td")(90, "h5");
            i0.ɵɵtext(91, "\u0E22\u0E2D\u0E14\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E0A\u0E33\u0E23\u0E30");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(92, "td", 26)(93, "u");
            i0.ɵɵtext(94);
            i0.ɵɵpipe(95, "number");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(96, "tr")(97, "td")(98, "h5");
            i0.ɵɵtext(99, "\u0E40\u0E07\u0E34\u0E19\u0E17\u0E2D\u0E19");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(100, "td", 26)(101, "u");
            i0.ɵɵtext(102);
            i0.ɵɵpipe(103, "number");
            i0.ɵɵelementEnd()()()()()()()()()();
            i0.ɵɵelement(104, "p-toast", 28);
            i0.ɵɵelementStart(105, "p-dialog", 29);
            i0.ɵɵlistener("visibleChange", function NewOrderComponent_Template_p_dialog_visibleChange_105_listener($event) { return ctx.displayAddMember = $event; });
            i0.ɵɵelementStart(106, "form", 4)(107, "div", 30)(108, "div", 0)(109, "div", 31)(110, "div", 19)(111, "label", 32);
            i0.ɵɵtext(112, "\u0E0A\u0E37\u0E48\u0E2D");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(113, "input", 33);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(114, "div", 31)(115, "div", 19)(116, "label", 32);
            i0.ɵɵtext(117, "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(118, "input", 34);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(119, "div", 35)(120, "div", 19)(121, "label", 32);
            i0.ɵɵtext(122, "\u0E2A\u0E48\u0E27\u0E19\u0E25\u0E14(%)");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(123, "input", 36);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵtemplate(124, NewOrderComponent_ng_template_124_Template, 2, 1, "ng-template", 37);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(125, "p-dialog", 38);
            i0.ɵɵlistener("visibleChange", function NewOrderComponent_Template_p_dialog_visibleChange_125_listener($event) { return ctx.displayAddProduct = $event; });
            i0.ɵɵelementStart(126, "div", 0)(127, "div", 1);
            i0.ɵɵtemplate(128, NewOrderComponent_ng_container_128_Template, 5, 3, "ng-container", 15);
            i0.ɵɵtemplate(129, NewOrderComponent_ng_container_129_Template, 5, 3, "ng-container", 15);
            i0.ɵɵtemplate(130, NewOrderComponent_ng_container_130_Template, 5, 3, "ng-container", 15);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(131, NewOrderComponent_ng_template_131_Template, 1, 0, "ng-template", 37);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(132, "p-dialog", 39);
            i0.ɵɵlistener("visibleChange", function NewOrderComponent_Template_p_dialog_visibleChange_132_listener($event) { return ctx.displayPrice = $event; });
            i0.ɵɵelementStart(133, "div", 30)(134, "div", 0)(135, "div", 31)(136, "div", 19)(137, "input", 40);
            i0.ɵɵlistener("ngModelChange", function NewOrderComponent_Template_input_ngModelChange_137_listener($event) { return ctx._editNumber = $event; });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(138, "div", 41)(139, "table")(140, "tr")(141, "td")(142, "button", 42);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_142_listener() { return ctx.editNumber("7"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(143, "td")(144, "button", 43);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_144_listener() { return ctx.editNumber("8"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(145, "td")(146, "button", 44);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_146_listener() { return ctx.editNumber("9"); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(147, "tr")(148, "td")(149, "button", 45);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_149_listener() { return ctx.editNumber("4"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(150, "td")(151, "button", 46);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_151_listener() { return ctx.editNumber("5"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(152, "td")(153, "button", 47);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_153_listener() { return ctx.editNumber("6"); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(154, "tr")(155, "td")(156, "button", 48);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_156_listener() { return ctx.editNumber("1"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(157, "td")(158, "button", 49);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_158_listener() { return ctx.editNumber("2"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(159, "td")(160, "button", 50);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_160_listener() { return ctx.editNumber("3"); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(161, "tr")(162, "td")(163, "button", 51);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_163_listener() { return ctx.editNumber("clear"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(164, "td")(165, "button", 52);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_165_listener() { return ctx.editNumber("0"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(166, "td")(167, "button", 53);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_167_listener() { return ctx.editNumber("del"); });
            i0.ɵɵelementEnd()()()()()()();
            i0.ɵɵtemplate(168, NewOrderComponent_ng_template_168_Template, 2, 0, "ng-template", 37);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(169, "p-dialog", 54);
            i0.ɵɵlistener("visibleChange", function NewOrderComponent_Template_p_dialog_visibleChange_169_listener($event) { return ctx.displayQty = $event; });
            i0.ɵɵelementStart(170, "div", 30)(171, "div", 0)(172, "div", 31)(173, "div", 19)(174, "input", 40);
            i0.ɵɵlistener("ngModelChange", function NewOrderComponent_Template_input_ngModelChange_174_listener($event) { return ctx._editNumber = $event; });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(175, "div", 31)(176, "table")(177, "tr")(178, "td")(179, "button", 42);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_179_listener() { return ctx.editNumber("7"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(180, "td")(181, "button", 43);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_181_listener() { return ctx.editNumber("8"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(182, "td")(183, "button", 44);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_183_listener() { return ctx.editNumber("9"); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(184, "tr")(185, "td")(186, "button", 45);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_186_listener() { return ctx.editNumber("4"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(187, "td")(188, "button", 46);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_188_listener() { return ctx.editNumber("5"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(189, "td")(190, "button", 47);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_190_listener() { return ctx.editNumber("6"); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(191, "tr")(192, "td")(193, "button", 48);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_193_listener() { return ctx.editNumber("1"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(194, "td")(195, "button", 49);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_195_listener() { return ctx.editNumber("2"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(196, "td")(197, "button", 50);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_197_listener() { return ctx.editNumber("3"); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(198, "tr")(199, "td")(200, "button", 51);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_200_listener() { return ctx.editNumber("clear"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(201, "td")(202, "button", 52);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_202_listener() { return ctx.editNumber("0"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(203, "td")(204, "button", 53);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_204_listener() { return ctx.editNumber("del"); });
            i0.ɵɵelementEnd()()()()()()();
            i0.ɵɵtemplate(205, NewOrderComponent_ng_template_205_Template, 2, 0, "ng-template", 37);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(206, "p-dialog", 55);
            i0.ɵɵlistener("visibleChange", function NewOrderComponent_Template_p_dialog_visibleChange_206_listener($event) { return ctx.displayCashTransfer = $event; });
            i0.ɵɵelementStart(207, "div", 30)(208, "div", 0)(209, "div", 31)(210, "div", 19)(211, "input", 40);
            i0.ɵɵlistener("ngModelChange", function NewOrderComponent_Template_input_ngModelChange_211_listener($event) { return ctx._editNumber = $event; });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(212, "div", 31)(213, "table")(214, "tr")(215, "td")(216, "button", 42);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_216_listener() { return ctx.editNumber("7"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(217, "td")(218, "button", 43);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_218_listener() { return ctx.editNumber("8"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(219, "td")(220, "button", 44);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_220_listener() { return ctx.editNumber("9"); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(221, "tr")(222, "td")(223, "button", 45);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_223_listener() { return ctx.editNumber("4"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(224, "td")(225, "button", 46);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_225_listener() { return ctx.editNumber("5"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(226, "td")(227, "button", 47);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_227_listener() { return ctx.editNumber("6"); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(228, "tr")(229, "td")(230, "button", 48);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_230_listener() { return ctx.editNumber("1"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(231, "td")(232, "button", 49);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_232_listener() { return ctx.editNumber("2"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(233, "td")(234, "button", 50);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_234_listener() { return ctx.editNumber("3"); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(235, "tr")(236, "td")(237, "button", 51);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_237_listener() { return ctx.editNumber("clear"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(238, "td")(239, "button", 52);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_239_listener() { return ctx.editNumber("0"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(240, "td")(241, "button", 53);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_241_listener() { return ctx.editNumber("del"); });
            i0.ɵɵelementEnd()()()()()()();
            i0.ɵɵtemplate(242, NewOrderComponent_ng_template_242_Template, 2, 0, "ng-template", 37);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(243, "p-dialog", 56);
            i0.ɵɵlistener("visibleChange", function NewOrderComponent_Template_p_dialog_visibleChange_243_listener($event) { return ctx.displayCashReceived = $event; });
            i0.ɵɵelementStart(244, "div", 30)(245, "div", 0)(246, "div", 31)(247, "div", 19)(248, "input", 40);
            i0.ɵɵlistener("ngModelChange", function NewOrderComponent_Template_input_ngModelChange_248_listener($event) { return ctx._editNumber = $event; });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(249, "div", 31)(250, "table")(251, "tr")(252, "td")(253, "button", 42);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_253_listener() { return ctx.editNumber("7"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(254, "td")(255, "button", 43);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_255_listener() { return ctx.editNumber("8"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(256, "td")(257, "button", 44);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_257_listener() { return ctx.editNumber("9"); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(258, "tr")(259, "td")(260, "button", 45);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_260_listener() { return ctx.editNumber("4"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(261, "td")(262, "button", 46);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_262_listener() { return ctx.editNumber("5"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(263, "td")(264, "button", 47);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_264_listener() { return ctx.editNumber("6"); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(265, "tr")(266, "td")(267, "button", 48);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_267_listener() { return ctx.editNumber("1"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(268, "td")(269, "button", 49);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_269_listener() { return ctx.editNumber("2"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(270, "td")(271, "button", 50);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_271_listener() { return ctx.editNumber("3"); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(272, "tr")(273, "td")(274, "button", 51);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_274_listener() { return ctx.editNumber("clear"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(275, "td")(276, "button", 52);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_276_listener() { return ctx.editNumber("0"); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(277, "td")(278, "button", 53);
            i0.ɵɵlistener("click", function NewOrderComponent_Template_button_click_278_listener() { return ctx.editNumber("del"); });
            i0.ɵɵelementEnd()()()()()()();
            i0.ɵɵtemplate(279, NewOrderComponent_ng_template_279_Template, 2, 0, "ng-template", 37);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(280, "div", 57)(281, "div", 2)(282, "div", 58);
            i0.ɵɵelement(283, "img", 59);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(284, "table", 60)(285, "tr")(286, "td");
            i0.ɵɵtext(287, "\u0E2A\u0E32\u0E02\u0E32\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E15\u0E31\u0E14\u0E43\u0E2B\u0E21\u0E48");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(288, "tr")(289, "td");
            i0.ɵɵtext(290, "\u0E16\u0E19\u0E19\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E15\u0E31\u0E14\u0E43\u0E2B\u0E21\u0E48, \u0E41\u0E02\u0E27\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E27\u0E28 \u0E40\u0E02\u0E15\u0E1B\u0E23\u0E30\u0E40\u0E27\u0E28 \u0E01\u0E23\u0E38\u0E07\u0E40\u0E17\u0E1E\u0E21\u0E2B\u0E32\u0E19\u0E04\u0E23 10250");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(291, "tr")(292, "td");
            i0.ɵɵtext(293, "\u0E42\u0E17\u0E23. 094-657-8259");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(294, "hr", 61);
            i0.ɵɵelementStart(295, "table", 62)(296, "tr")(297, "td", 63);
            i0.ɵɵtext(298, "\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E25\u0E02\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(299, "td", 64);
            i0.ɵɵtext(300);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(301, "td", 65);
            i0.ɵɵtext(302, "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(303, "td", 65);
            i0.ɵɵtext(304);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(305, "tr")(306, "td");
            i0.ɵɵtext(307, "\u0E23\u0E2B\u0E31\u0E2A\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(308, "td");
            i0.ɵɵtext(309);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(310, "td")(311, "td");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(312, "hr", 61);
            i0.ɵɵelementStart(313, "div", 66)(314, "b");
            i0.ɵɵtext(315, "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(316, "table", 62);
            i0.ɵɵtemplate(317, NewOrderComponent_tr_317_Template, 8, 7, "tr", 67);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(318, "hr", 61);
            i0.ɵɵelementStart(319, "table", 62)(320, "tr")(321, "td", 63);
            i0.ɵɵtext(322, "\u0E01\u0E32\u0E23\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(323, "td", 63);
            i0.ɵɵtext(324);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(325, "td", 63);
            i0.ɵɵtext(326, "\u0E23\u0E27\u0E21:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(327, "td", 68);
            i0.ɵɵtext(328);
            i0.ɵɵpipe(329, "number");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(330, "tr");
            i0.ɵɵelement(331, "td")(332, "td");
            i0.ɵɵelementStart(333, "td");
            i0.ɵɵtext(334, "\u0E2A\u0E48\u0E27\u0E19\u0E25\u0E14:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(335, "td", 26);
            i0.ɵɵtext(336);
            i0.ɵɵpipe(337, "number");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(338, "tr");
            i0.ɵɵelement(339, "td")(340, "td");
            i0.ɵɵelementStart(341, "td");
            i0.ɵɵtext(342, "\u0E22\u0E2D\u0E14\u0E0A\u0E33\u0E23\u0E30:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(343, "td", 26);
            i0.ɵɵtext(344);
            i0.ɵɵpipe(345, "number");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(346, "div", 58)(347, "div", 69);
            i0.ɵɵtext(348, "\u0E02\u0E2D\u0E1A\u0E04\u0E38\u0E13\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            let tmp_10_0;
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("formGroup", ctx.formSetting);
            i0.ɵɵadvance(14);
            i0.ɵɵproperty("value", ctx.formCart.value == null ? null : ctx.formCart.value.products)("scrollable", true);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.step == "select");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.step == "order");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("formGroup", ctx.formCart);
            i0.ɵɵadvance(13);
            i0.ɵɵproperty("readonly", ctx.step == "order");
            i0.ɵɵadvance(10);
            i0.ɵɵtextInterpolate(ctx.formCart.value.member_name);
            i0.ɵɵadvance(13);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(83, _c1));
            i0.ɵɵproperty("options", ctx.payment_types);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ((tmp_10_0 = ctx.formCart.get("payment_type")) == null ? null : tmp_10_0.value) == "\u0E40\u0E07\u0E34\u0E19\u0E2A\u0E14" || ((tmp_10_0 = ctx.formCart.get("payment_type")) == null ? null : tmp_10_0.value) == "\u0E42\u0E2D\u0E19" || ((tmp_10_0 = ctx.formCart.get("payment_type")) == null ? null : tmp_10_0.value) == "\u0E04\u0E19\u0E25\u0E30\u0E04\u0E23\u0E36\u0E48\u0E07");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("formGroup", ctx.formCart);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(78, 62, ctx.formCart.value.total, "1.2-2"));
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("readonly", ctx.step == "order");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(87, 65, ctx.formCart.value.discount, "1.2-2"));
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(95, 68, ctx.formCart.value.net_total, "1.2-2"));
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(103, 71, ctx.formCart.value.cash_return, "1.2-2"));
            i0.ɵɵadvance(3);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(84, _c2));
            i0.ɵɵproperty("visible", ctx.displayAddMember)("breakpoints", i0.ɵɵpureFunction0(85, _c3));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.formAddMember);
            i0.ɵɵadvance(19);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(86, _c4));
            i0.ɵɵproperty("visible", ctx.displayAddProduct)("breakpoints", i0.ɵɵpureFunction0(87, _c3));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.select_type == "product_type");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.select_type == "product_brand");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.select_type == "product");
            i0.ɵɵadvance(2);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(88, _c5));
            i0.ɵɵproperty("visible", ctx.displayPrice)("breakpoints", i0.ɵɵpureFunction0(89, _c3));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx._editNumber)("readOnly", true);
            i0.ɵɵadvance(32);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(90, _c5));
            i0.ɵɵproperty("visible", ctx.displayQty)("breakpoints", i0.ɵɵpureFunction0(91, _c3));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx._editNumber)("readOnly", true);
            i0.ɵɵadvance(32);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(92, _c5));
            i0.ɵɵproperty("visible", ctx.displayCashTransfer)("breakpoints", i0.ɵɵpureFunction0(93, _c3));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx._editNumber)("readOnly", true);
            i0.ɵɵadvance(32);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(94, _c5));
            i0.ɵɵproperty("visible", ctx.displayCashReceived)("breakpoints", i0.ɵɵpureFunction0(95, _c3));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx._editNumber)("readOnly", true);
            i0.ɵɵadvance(52);
            i0.ɵɵtextInterpolate(ctx.formCart.value.code);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.formCart.value.created_date);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.formCart.value.member_phone);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngForOf", ctx.formCart.value == null ? null : ctx.formCart.value.products);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.formCart.value.payment_type);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(329, 74, ctx.formCart.value.total, "1.2-2"), " \u0E1A\u0E32\u0E17");
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(337, 77, ctx.formCart.value.discount, "1.2-2"), " \u0E1A\u0E32\u0E17");
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(345, 80, ctx.formCart.value.net_total, "1.2-2"), " \u0E1A\u0E32\u0E17");
        } }, dependencies: [i5.NgForOf, i5.NgIf, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.MaxLengthValidator, i1.MinValidator, i1.MaxValidator, i1.NgModel, i1.FormGroupDirective, i1.FormControlName, i4.PrimeTemplate, i6.ButtonDirective, i7.InputText, i8.DataView, i9.Dialog, i10.Dropdown, i11.Table, i12.Toast, i5.DecimalPipe], styles: [".cart-item-animate[_ngcontent-%COMP%] {\r\n  animation: _ngcontent-%COMP%_popIn 0.3s ease-in-out;\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_popIn {\r\n  0% { transform: scale(0.8); opacity: 0; }\r\n  100% { transform: scale(1); opacity: 1; }\r\n}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NewOrderComponent, [{
        type: Component,
        args: [{ selector: 'app-new-order', template: "<div class=\"grid\">\n    <div class=\"col-12\">\n        <div class=\"grid\">\n            <div class=\"col-12\">\n                <div class=\"card\">\n                    <div style=\"display: flex; justify-content: space-between;padding-bottom: 10px;\">\n                        <h5>\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D</h5>\n                        <div>\n                            <form [formGroup]=\"formSetting\">\n                                <table>\n                                    <tr>\n                                        <td>\n                                            <label for=\"name\">Barcode</label>\n                                        </td>\n                                        <td><input pInputText type=\"text\" formControlName=\"barcode\" maxlength=\"50\"\n                                                (keydown.enter)=\"onEnterBracode()\" />\n                                        </td>\n                                        <td>\n                                            <button pButton label=\"\u0E25\u0E1A\" style=\"width:auto;\"\n                                                class=\"p-button-danger mr-2 outline\" (click)=\"deleteBracode()\"></button>\n                                        </td>\n                                    </tr>\n                                </table>\n                            </form>\n                        </div>\n                        <div> <button pButton icon=\"pi pi-plus\" label=\"\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\" style=\"width:auto;\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"openAddMember()\"></button>\n                            <button pButton icon=\"pi pi-plus\" label=\"\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\" style=\"width:auto;\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"openAddProduct()\"></button>\n                            <button pButton icon=\"pi pi-plus\" label=\"\u0E2D\u0E37\u0E48\u0E19\u0E46\" style=\"width:auto;\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"addItem()\"></button>\n                        </div>\n                    </div>\n\n                    <p-table #dt [value]=\"formCart.value?.products\" responsiveLayout=\"scroll\" [scrollable]=\"true\"\n                        scrollHeight=\"400px\">\n                        <ng-template pTemplate=\"header\">\n                            <tr>\n                                <th style=\"width: 100px;\">\u0E23\u0E39\u0E1B</th>\n                                <th>\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</th>\n                                <th style=\"width: 120px;text-align: right;\">\u0E23\u0E32\u0E04\u0E32</th>\n                                <th style=\"width: auto;text-align: right;\">\u0E08\u0E33\u0E19\u0E27\u0E19</th>\n                                <th style=\"width: 120px;text-align: right;\">\u0E23\u0E32\u0E04\u0E32\u0E23\u0E27\u0E21</th>\n                                <th style=\"width: 50px;text-align: right;\">\u0E25\u0E1A</th>\n                            </tr>\n                        </ng-template>\n                        <ng-template pTemplate=\"body\" let-item let-rowIndex=\"rowIndex\">\n                            <tr>\n                                <td *ngIf=\"item.id!=0\">\n                                    <img class=\"icon-img\" [src]=\"item.image\">\n                                </td>\n                                <td *ngIf=\"item.id==0\">\n                                </td>\n                                <td *ngIf=\"item.id!=0\">\n                                    {{item.name}}\n                                </td>\n                                <td *ngIf=\"item.id==0\">\n                                    <input pInputText type=\"text\" [(ngModel)]=\"item.name\" maxlength=\"200\"\n                                        style=\"text-align: left;width: 300px;\" [readonly]=\"step=='order'\" />\n                                </td>\n\n                                <td *ngIf=\"step=='select'\" style=\"text-align: right;color: blue;\">\n                                    <span style=\"cursor: pointer;\" (click)=\"openPrice(item)\">{{item.price}}</span>\n                                </td>\n                                <td *ngIf=\"step=='order'\" style=\"text-align: right;\">\n                                    {{item.price}}</td>\n\n                                <td *ngIf=\"step=='select'\" style=\"text-align: right;color: blue;\"> <span\n                                        style=\"cursor: pointer;\" (click)=\"openQty(item)\">{{item.qty}}</span></td>\n                                <td *ngIf=\"step=='order'\" style=\"text-align: right;\">\n                                    {{item.qty}}</td>\n\n                                <td style=\"text-align: right;\">\n                                    {{item.net_total| number:'1.2-2'}}\n                                </td>\n                                <td style=\"text-align: right;\">\n                                    <button pButton icon=\"pi pi-trash\" class=\"p-button-danger mr-2 outline\"\n                                        (click)=\"removeProduct(rowIndex)\" [disabled]=\"step=='order'\"></button>\n                                </td>\n                            </tr>\n                        </ng-template>\n                    </p-table>\n                </div>\n                <ng-container *ngIf=\"step=='select'\">\n                    <div class=\"card\" style=\"display: flex; justify-content: space-between;\">\n                        <button pButton icon=\"pi pi-trash\" label=\"\u0E25\u0E49\u0E32\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\" style=\"width:auto;\"\n                            class=\"p-button-danger mr-2 outline\" (click)=\"clearData()\"></button>\n                        <button pButton icon=\"pi pi-check\" label=\"\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D\" style=\"width:auto;\"\n                            [disabled]=\"disabledAddOrder\" class=\"p-button-success mr-2 outline\"\n                            (click)=\"addOrder()\"></button>\n                    </div>\n                </ng-container>\n                <ng-container *ngIf=\"step=='order'\">\n                    <div class=\"card\" style=\"display: flex; justify-content: space-between;\">\n                        <button pButton icon=\"pi pi-plus\" label=\"\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D\u0E43\u0E2B\u0E21\u0E48\" style=\"width:auto;\"\n                            class=\"p-button-success mr-2 outline\" (click)=\"newCreate()\"></button>\n                        <button pButton icon=\"pi pi-print\" label=\"\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E43\u0E1A\u0E40\u0E2A\u0E23\u0E47\u0E08\" style=\"width:auto;\"\n                            class=\"p-button-primary mr-2 outline\" (click)=\"printSlip()\"></button>\n                    </div>\n                </ng-container>\n            </div>\n            <div class=\"col-6\">\n                <form [formGroup]=\"formCart\">\n                    <div class=\"card\">\n                        <table style=\"width: 100%;\">\n                            <tr>\n                                <td>\n                                    <div class=\"grid\">\n                                        <div class=\"col-6 pb-0\">\n                                            <div class=\"field\">\n                                                <label for=\"name\">\u0E40\u0E25\u0E02\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01</label>\n                                                <table>\n                                                    <tr>\n                                                        <td><input pInputText type=\"text\" formControlName=\"member_phone\"\n                                                                maxlength=\"20\" (keydown.enter)=\"onEnterMemberPhone()\"\n                                                                [readonly]=\"step=='order'\" /></td>\n                                                    </tr>\n                                                </table>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-6 pb-0\">\n                                            <div class=\"field\">\n                                                <label for=\"name\">\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01</label>\n                                                <table class=\"table\">\n                                                    <tr>\n                                                        <td style=\"width: 20px;\">\u0E0A\u0E37\u0E48\u0E2D</td>\n                                                        <td>{{this.formCart.value.member_name}}</td>\n                                                    </tr>\n                                                </table>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n                    <div class=\"card\">\n                        <table style=\"width: 100%;\">\n                            <tr>\n                                <td>\n                                    <div class=\"grid\">\n                                        <div class=\"col-6 pb-0 py-0\">\n                                            <div class=\"field\">\n                                                <label for=\"name\">\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E01\u0E32\u0E23\u0E0A\u0E33\u0E23\u0E30</label>\n                                                <table>\n                                                    <tr>\n                                                        <td> <p-dropdown [options]=\"payment_types\" optionLabel=\"name\"\n                                                                optionValue=\"name\" placeholder=\"\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E01\u0E32\u0E23\u0E0A\u0E33\u0E23\u0E30\"\n                                                                formControlName=\"payment_type\"\n                                                                (onChange)=\"selectPaymentType()\"\n                                                                [style]=\"{'width': '200px'}\"></p-dropdown></td>\n                                                    </tr>\n                                                </table>\n                                            </div>\n                                        </div>\n\n                                        <div *ngIf=\"formCart.get('payment_type')?.value == '\u0E40\u0E07\u0E34\u0E19\u0E2A\u0E14' ||\n                                         formCart.get('payment_type')?.value == '\u0E42\u0E2D\u0E19' ||\n                                          formCart.get('payment_type')?.value == '\u0E04\u0E19\u0E25\u0E30\u0E04\u0E23\u0E36\u0E48\u0E07'\" class=\"col-6 pb-0 py-0\">\n\n                                            <div class=\"field\" *ngIf=\"formCart.get('payment_type')?.value == '\u0E42\u0E2D\u0E19' ||\n                                          formCart.get('payment_type')?.value == '\u0E04\u0E19\u0E25\u0E30\u0E04\u0E23\u0E36\u0E48\u0E07'\">\n                                                <label for=\"name\">\u0E22\u0E2D\u0E14\u0E42\u0E2D\u0E19</label>\n                                                <table>\n                                                    <tr>\n                                                        <td><input pInputText type=\"number\"\n                                                                formControlName=\"cash_transfer\" [readonly]=\"true\" />\n                                                        </td>\n                                                        <td>\n                                                            <button type=\"button\" pButton icon=\"pi pi-th-large\" label=\"\"\n                                                                style=\"width:50px;\"\n                                                                class=\"p-button-primary mr-2 outline\"\n                                                                (click)=\"openCashTransfer()\"></button>\n                                                        </td>\n                                                    </tr>\n                                                </table>\n                                            </div>\n                                            <div class=\"field\">\n                                                <label for=\"name\">\u0E40\u0E07\u0E34\u0E19\u0E2A\u0E14\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A</label>\n                                                <table>\n                                                    <tr>\n                                                        <td><input pInputText type=\"number\"\n                                                                formControlName=\"cash_received\" [readonly]=\"true\" />\n                                                        </td>\n                                                        <td>\n                                                            <button type=\"button\" pButton icon=\"pi pi-th-large\" label=\"\"\n                                                                style=\"width:50px;\"\n                                                                class=\"p-button-primary mr-2 outline\"\n                                                                (click)=\"openCashReceived()\"></button>\n                                                        </td>\n                                                    </tr>\n                                                </table>\n                                            </div>\n\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n                </form>\n\n            </div>\n            <div class=\"col-6\">\n                <div class=\"card\">\n                    <form [formGroup]=\"formCart\">\n                        <table style=\"width: 100%;\">\n                            <tr>\n                                <td>\n                                    <h5>\u0E23\u0E32\u0E04\u0E32\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E23\u0E27\u0E21</h5>\n                                </td>\n                                <td style=\"text-align: right;\">{{this.formCart.value.total| number:'1.2-2'}}</td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <h5>\u0E2A\u0E48\u0E27\u0E19\u0E25\u0E14\n                                        <input pInputText type=\"number\" formControlName=\"discount_per\" min=\"0\" max=\"20\"\n                                            style=\"text-align: right;\" (change)=\"calSum()\"\n                                            [readonly]=\"step=='order'\" />%\n                                    </h5>\n                                </td>\n                                <td style=\"text-align: right;\">{{this.formCart.value.discount| number:'1.2-2'}}</td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <h5>\u0E22\u0E2D\u0E14\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E0A\u0E33\u0E23\u0E30</h5>\n                                </td>\n                                <td style=\"text-align: right;\"><u>{{this.formCart.value.net_total| number:'1.2-2'}}</u>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <h5>\u0E40\u0E07\u0E34\u0E19\u0E17\u0E2D\u0E19</h5>\n                                </td>\n                                <td style=\"text-align: right;\"><u>{{this.formCart.value.cash_return|\n                                        number:'1.2-2'}}</u>\n                                </td>\n                            </tr>\n                        </table>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<p-toast position=\"bottom-center\"></p-toast>\n\n<p-dialog header=\"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\" [(visible)]=\"displayAddMember\" modal=\"modal\" showEffect=\"fade\" [style]=\"{width: '30vw'}\"\n    [breakpoints]=\"{'960px': '75vw'}\">\n    <form [formGroup]=\"formAddMember\">\n        <div class=\"card p-fluid\">\n            <div class=\"grid\">\n                <div class=\"col-12 py-0\">\n                    <div class=\"field\">\n                        <label htmlFor=\"name\">\u0E0A\u0E37\u0E48\u0E2D</label>\n                        <input pInputText type=\"text\" formControlName=\"name\" maxlength=\"200\" />\n                    </div>\n                </div>\n                <div class=\"col-12 py-0\">\n                    <div class=\"field\">\n                        <label htmlFor=\"name\">\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23</label>\n                        <input pInputText type=\"text\" formControlName=\"phone\" maxlength=\"20\" />\n                    </div>\n                </div>\n                <div class=\"col-6  py-0\">\n                    <div class=\"field\">\n                        <label htmlFor=\"name\">\u0E2A\u0E48\u0E27\u0E19\u0E25\u0E14(%)</label>\n                        <input pInputText type=\"number\" formControlName=\"discount\" min=\"0\" max=\"20\" />\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n\n    <ng-template pTemplate=\"footer\">\n        <button pButton icon=\"pi pi-check\" (click)=\"confirmAddMember()\" label=\"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\" [disabled]=\"disabledAddMember\"\n            class=\"p-button-success mr-2 outline\"></button>\n        <button pButton icon=\"pi pi-times\" (click)=\"cancelAddMember()\" label=\"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\"\n            class=\"p-button-danger mr-2 outline\"></button>\n    </ng-template>\n</p-dialog>\n\n<p-dialog header=\"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\" [(visible)]=\"displayAddProduct\" modal=\"modal\" showEffect=\"fade\" [style]=\"{width: '70vw'}\"\n    [breakpoints]=\"{'960px': '75vw'}\">\n\n    <div class=\"grid\">\n        <div class=\"col-12\">\n            <ng-container *ngIf=\"select_type=='product_type'\">\n                <p-dataView #dv [value]=\"product_type_groups\" [paginator]=\"true\" [rows]=\"20\" filterBy=\"name\"\n                    layout=\"grid\">\n                    <ng-template pTemplate=\"header\">\n                        <div class=\"grid grid-nogutter flex-column md:flex-row justify-content-between\">\n\n\n                            <button pButton icon=\"pi pi-arrow-left\" label=\"\u0E01\u0E25\u0E31\u0E1A\" style=\"width:auto;\" [disabled]=\"true\"\n                                class=\"p-button-danger mr-2 outline\"></button>\n\n\n                            <span class=\"p-input-icon-left mb-2 md:mb-0\">\n                                <i class=\"pi pi-search\"></i>\n                                <input type=\"search\" pInputText placeholder=\"\u0E04\u0E49\u0E19\u0E2B\u0E32\"\n                                    (input)=\"dv.filter($event.target.value)\">\n                            </span>\n\n                            <!-- <p-dropdown [options]=\"sortOptions\" [(ngModel)]=\"sortKey\" placeholder=\"Sort By Price\"\n                                (onChange)=\"onSortChange($event)\"></p-dropdown> -->\n                        </div>\n                    </ng-template>\n\n                    <ng-template let-item pTemplate=\"gridItem\">\n                        <div class=\"col-6 md:col-3\" style=\"cursor: pointer;\" (click)=\"selectProductType(item)\">\n                            <div class=\"card m-3 border-1 surface-border\">\n                                <div class=\"text-center\">\n                                    <div class=\"text-xl\" style=\"color: blue;\">{{item.name}}</div>\n                                    <img [src]=\"item.image\" [alt]=\"item.name\" class=\"w-9 shadow-2 my-3 mx-0\"\n                                        draggable=\"false\" />\n\n                                </div>\n                            </div>\n                        </div>\n                    </ng-template>\n                </p-dataView>\n            </ng-container>\n            <ng-container *ngIf=\"select_type=='product_brand'\">\n                <p-dataView #dv [value]=\"product_brand_groups\" [paginator]=\"true\" [rows]=\"20\" filterBy=\"name\"\n                    layout=\"grid\">\n                    <ng-template pTemplate=\"header\">\n                        <div class=\"grid grid-nogutter flex-column md:flex-row justify-content-between\">\n\n\n                            <button (click)=\"backToProductType()\" pButton icon=\"pi pi-arrow-left\" label=\"\u0E01\u0E25\u0E31\u0E1A\"\n                                style=\"width:auto;\" class=\"p-button-danger mr-2 outline\"></button>\n\n\n                            <span class=\"p-input-icon-left mb-2 md:mb-0\">\n                                <i class=\"pi pi-search\"></i>\n                                <input type=\"search\" pInputText placeholder=\"\u0E04\u0E49\u0E19\u0E2B\u0E32\"\n                                    (input)=\"dv.filter($event.target.value)\">\n                            </span>\n\n                            <!-- <p-dropdown [options]=\"sortOptions\" [(ngModel)]=\"sortKey\" placeholder=\"Sort By Price\"\n                                (onChange)=\"onSortChange($event)\"></p-dropdown> -->\n                        </div>\n                    </ng-template>\n\n                    <ng-template let-item pTemplate=\"gridItem\">\n                        <div class=\"col-6 md:col-3\" style=\"cursor: pointer;\" (click)=\"selectProductBrand(item)\">\n                            <div class=\"card m-3 border-1 surface-border\">\n                                <div class=\"text-center\">\n                                    <div class=\"text-xl\" style=\"color: blue;\">{{item.name}}</div>\n                                    <img [src]=\"item.image\" [alt]=\"item.name\" class=\"w-9 shadow-2 my-3 mx-0\"\n                                        draggable=\"false\" />\n\n                                </div>\n                            </div>\n                        </div>\n                    </ng-template>\n                </p-dataView>\n            </ng-container>\n            <ng-container *ngIf=\"select_type=='product'\">\n                <p-dataView #dv [value]=\"product_groups\" [paginator]=\"true\" [rows]=\"20\" filterBy=\"name\" layout=\"grid\">\n                    <ng-template pTemplate=\"header\">\n                        <div class=\"grid grid-nogutter flex-column md:flex-row justify-content-between\">\n\n\n                            <button (click)=\"backToProductBrand()\" pButton icon=\"pi pi-arrow-left\" label=\"\u0E01\u0E25\u0E31\u0E1A\"\n                                style=\"width:auto;\" class=\"p-button-danger mr-2 outline\"></button>\n\n\n                            <span class=\"p-input-icon-left mb-2 md:mb-0\">\n                                <i class=\"pi pi-search\"></i>\n                                <input type=\"search\" pInputText placeholder=\"\u0E04\u0E49\u0E19\u0E2B\u0E32\"\n                                    (input)=\"dv.filter($event.target.value)\">\n                            </span>\n\n                            <!-- <p-dropdown [options]=\"sortOptions\" [(ngModel)]=\"sortKey\" placeholder=\"Sort By Price\"\n                                (onChange)=\"onSortChange($event)\"></p-dropdown> -->\n                        </div>\n                    </ng-template>\n\n                    <ng-template let-item pTemplate=\"gridItem\">\n                        <div class=\"col-6 md:col-3\" style=\"cursor: pointer;\" (click)=\"selectProduct(item)\">\n                            <div class=\"card m-3 border-1 surface-border\">\n                                <div class=\"text-center\">\n                                    <div class=\"text-xl\" style=\"color: blue;\">{{item.name}}</div>\n                                    <img [src]=\"item.image\" [alt]=\"item.name\" class=\"w-9 shadow-2 my-3 mx-0\"\n                                        draggable=\"false\" />\n\n                                </div>\n                                <div class=\"flex align-items-center justify-content-between\">\n                                    <span class=\"sm:ml-2 product-badge status-instock\">\u0E04\u0E25\u0E31\u0E07 :\n                                        {{item.count}}</span>\n                                    <div class=\"flex align-items-center\">\n                                        <i class=\"pi pi-tag mr-2\"></i>\n                                        <span class=\"font-semibold\" style=\"color: red;\">{{item.price}}.-</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-template>\n                </p-dataView>\n            </ng-container>\n        </div>\n    </div>\n\n    <ng-template pTemplate=\"footer\">\n        <button pButton icon=\"pi pi-window-close\" (click)=\"displayAddProduct = false\" label=\"\u0E1B\u0E34\u0E14\"\n            class=\"p-button-secondary ml-2\"></button>\n    </ng-template>\n</p-dialog>\n\n<p-dialog header=\"\u0E41\u0E01\u0E49\u0E44\u0E02\u0E08\u0E33\u0E19\u0E27\u0E19\u0E40\u0E07\u0E34\u0E19\" [(visible)]=\"displayPrice\" modal=\"modal\" showEffect=\"fade\" [style]=\"{width: '25vw'}\"\n    [breakpoints]=\"{'960px': '75vw'}\">\n    <div class=\"card p-fluid\">\n        <div class=\"grid\">\n            <div class=\"col-12 py-0\">\n                <div class=\"field\">\n                    <input pInputText type=\"number\" min=\"1\" max=\"9999\" [(ngModel)]=\"_editNumber\"\n                        style=\"text-align: center;font-size: 40px;\" [readOnly]=\"true\" />\n                </div>\n            </div>\n            <div class=\"col-12 py-0 center\">\n                <table>\n                    <tr>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"7\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('7')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"8\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('8')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"9\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('9')\"></button>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"4\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('4')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"5\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('5')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"6\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('6')\"></button>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"1\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('1')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"2\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('2')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"3\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('3')\"></button>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"\u0E25\u0E1A\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\"\n                                class=\"p-button-danger mr-2 outline\" (click)=\"editNumber('clear')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"0\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('0')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"\u0E25\u0E1A\"\n                                class=\"p-button-danger mr-2 outline\" (click)=\"editNumber('del')\"></button>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n        </div>\n    </div>\n\n    <ng-template pTemplate=\"footer\">\n        <button pButton icon=\"pi pi-check\" (click)=\"confirmPrice()\" label=\"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\"\n            class=\"p-button-success mr-2 outline\"></button>\n        <button pButton icon=\"pi pi-times\" (click)=\"cancelPrice()\" label=\"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\"\n            class=\"p-button-danger mr-2 outline\"></button>\n    </ng-template>\n</p-dialog>\n\n<p-dialog header=\"\u0E41\u0E01\u0E49\u0E44\u0E02\u0E08\u0E33\u0E19\u0E27\u0E19\" [(visible)]=\"displayQty\" modal=\"modal\" showEffect=\"fade\" [style]=\"{width: '25vw'}\"\n    [breakpoints]=\"{'960px': '75vw'}\">\n    <div class=\"card p-fluid\">\n        <div class=\"grid\">\n            <div class=\"col-12 py-0\">\n                <div class=\"field\">\n                    <input pInputText type=\"number\" min=\"1\" max=\"9999\" [(ngModel)]=\"_editNumber\"\n                        style=\"text-align: center;font-size: 40px;\" [readOnly]=\"true\" />\n                </div>\n            </div>\n            <div class=\"col-12 py-0\">\n                <table>\n                    <tr>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"7\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('7')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"8\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('8')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"9\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('9')\"></button>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"4\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('4')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"5\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('5')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"6\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('6')\"></button>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"1\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('1')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"2\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('2')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"3\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('3')\"></button>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"\u0E25\u0E1A\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\"\n                                class=\"p-button-danger mr-2 outline\" (click)=\"editNumber('clear')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"0\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('0')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"\u0E25\u0E1A\"\n                                class=\"p-button-danger mr-2 outline\" (click)=\"editNumber('del')\"></button>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n        </div>\n    </div>\n\n    <ng-template pTemplate=\"footer\">\n        <button pButton icon=\"pi pi-check\" (click)=\"confirmQty()\" label=\"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\"\n            class=\"p-button-success mr-2 outline\"></button>\n        <button pButton icon=\"pi pi-times\" (click)=\"cancelQty()\" label=\"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\"\n            class=\"p-button-danger mr-2 outline\"></button>\n    </ng-template>\n</p-dialog>\n\n<p-dialog header=\"\u0E41\u0E01\u0E49\u0E44\u0E02\u0E08\u0E33\u0E19\u0E27\u0E19\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E34\u0E19\u0E42\u0E2D\u0E19\" [(visible)]=\"displayCashTransfer\" modal=\"modal\" showEffect=\"fade\"\n    [style]=\"{width: '25vw'}\" [breakpoints]=\"{'960px': '75vw'}\">\n    <div class=\"card p-fluid\">\n        <div class=\"grid\">\n            <div class=\"col-12 py-0\">\n                <div class=\"field\">\n                    <input pInputText type=\"number\" min=\"1\" max=\"9999\" [(ngModel)]=\"_editNumber\"\n                        style=\"text-align: center;font-size: 40px;\" [readOnly]=\"true\" />\n                </div>\n            </div>\n            <div class=\"col-12 py-0\">\n                <table>\n                    <tr>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"7\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('7')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"8\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('8')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"9\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('9')\"></button>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"4\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('4')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"5\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('5')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"6\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('6')\"></button>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"1\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('1')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"2\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('2')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"3\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('3')\"></button>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"\u0E25\u0E1A\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\"\n                                class=\"p-button-danger mr-2 outline\" (click)=\"editNumber('clear')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"0\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('0')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"\u0E25\u0E1A\"\n                                class=\"p-button-danger mr-2 outline\" (click)=\"editNumber('del')\"></button>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n        </div>\n    </div>\n\n    <ng-template pTemplate=\"footer\">\n        <button pButton icon=\"pi pi-check\" (click)=\"confirmCashTransfer()\" label=\"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\"\n            class=\"p-button-success mr-2 outline\"></button>\n        <button pButton icon=\"pi pi-times\" (click)=\"cancelCashTransfer()\" label=\"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\"\n            class=\"p-button-danger mr-2 outline\"></button>\n    </ng-template>\n</p-dialog>\n\n<p-dialog header=\"\u0E41\u0E01\u0E49\u0E44\u0E02\u0E08\u0E33\u0E19\u0E27\u0E19\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E34\u0E19\u0E2A\u0E14\" [(visible)]=\"displayCashReceived\" modal=\"modal\" showEffect=\"fade\"\n    [style]=\"{width: '25vw'}\" [breakpoints]=\"{'960px': '75vw'}\">\n    <div class=\"card p-fluid\">\n        <div class=\"grid\">\n            <div class=\"col-12 py-0\">\n                <div class=\"field\">\n                    <input pInputText type=\"number\" min=\"1\" max=\"9999\" [(ngModel)]=\"_editNumber\"\n                        style=\"text-align: center;font-size: 40px;\" [readOnly]=\"true\" />\n                </div>\n            </div>\n            <div class=\"col-12 py-0\">\n                <table>\n                    <tr>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"7\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('7')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"8\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('8')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"9\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('9')\"></button>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"4\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('4')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"5\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('5')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"6\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('6')\"></button>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"1\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('1')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"2\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('2')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"3\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('3')\"></button>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"\u0E25\u0E1A\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\"\n                                class=\"p-button-danger mr-2 outline\" (click)=\"editNumber('clear')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"0\"\n                                class=\"p-button-primary mr-2 outline\" (click)=\"editNumber('0')\"></button>\n                        </td>\n                        <td>\n                            <button pButton style=\"width:80px;height: 70px;\" label=\"\u0E25\u0E1A\"\n                                class=\"p-button-danger mr-2 outline\" (click)=\"editNumber('del')\"></button>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n        </div>\n    </div>\n\n    <ng-template pTemplate=\"footer\">\n        <button pButton icon=\"pi pi-check\" (click)=\"confirmCashReceived()\" label=\"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\"\n            class=\"p-button-success mr-2 outline\"></button>\n        <button pButton icon=\"pi pi-times\" (click)=\"cancelCashReceived()\" label=\"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\"\n            class=\"p-button-danger mr-2 outline\"></button>\n    </ng-template>\n</p-dialog>\n\n<div id=\"slip-content\"\n    style=\"width: 80mm; padding: 3px; font-family: 'Courier New', Courier, monospace; font-size: 10px;\" hidden>\n    <div class=\"card\">\n        <div style=\"text-align: center; margin-top: 10px;\">\n            <img src=\"assets/images/logo.jpg\" width=\"150\">\n        </div>\n        <table style=\"width: 100%;text-align: center;font-size: 10px;\">\n            <tr>\n                <td>\u0E2A\u0E32\u0E02\u0E32\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E15\u0E31\u0E14\u0E43\u0E2B\u0E21\u0E48</td>\n            </tr>\n            <tr>\n                <td>\u0E16\u0E19\u0E19\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E01\u0E32\u0E23\u0E15\u0E31\u0E14\u0E43\u0E2B\u0E21\u0E48, \u0E41\u0E02\u0E27\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E27\u0E28 \u0E40\u0E02\u0E15\u0E1B\u0E23\u0E30\u0E40\u0E27\u0E28 \u0E01\u0E23\u0E38\u0E07\u0E40\u0E17\u0E1E\u0E21\u0E2B\u0E32\u0E19\u0E04\u0E23 10250</td>\n            </tr>\n            <tr>\n                <td>\u0E42\u0E17\u0E23. 094-657-8259</td>\n            </tr>\n        </table>\n        <hr style=\"border-top: 1px dashed #000;\">\n        <table style=\"width: 100%;font-size: 10px;\">\n            <tr>\n                <td style=\"width: 80px;\">\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E25\u0E02\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D</td>\n                <td style=\"width: auto;\">{{this.formCart.value.code}}</td>\n                <td style=\"width: 60px;\">\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D</td>\n                <td style=\"width: 60px;\">{{this.formCart.value.created_date}}</td>\n            </tr>\n            <tr>\n                <td>\u0E23\u0E2B\u0E31\u0E2A\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32</td>\n                <td>{{this.formCart.value.member_phone}}</td>\n                <td></td>\n                <td></td>\n            </tr>\n        </table>\n        <hr style=\"border-top: 1px dashed #000;\">\n        <div style=\"font-size: 14px;\"><b>\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</b></div>\n        <table style=\"width: 100%;font-size: 10px;\">\n            <tr *ngFor=\"let product of formCart.value?.products;let i = index\">\n                <td style=\"width: auto;\">{{i+1}}.{{ product.name }}</td>\n                <td style=\"width: 15%;\">{{ product.qty }} \u0E0A\u0E34\u0E49\u0E19</td>\n                <td style=\"width: 15%;text-align: right;\">{{ product.net_total| number:'1.2-2' }}</td>\n            </tr>\n        </table>\n        <hr style=\"border-top: 1px dashed #000;\">\n        <table style=\"width: 100%;font-size: 10px;\">\n            <tr>\n                <td style=\"width: 80px;\">\u0E01\u0E32\u0E23\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19:</td>\n                <td style=\"width: 80px;\">{{this.formCart.value.payment_type}}</td>\n                <td style=\"width: 80px;\">\u0E23\u0E27\u0E21:</td>\n                <td style=\"width: 80px;text-align: right;\"> {{this.formCart.value.total| number:'1.2-2'}} \u0E1A\u0E32\u0E17</td>\n            </tr>\n            <tr>\n                <td></td>\n                <td></td>\n                <td>\u0E2A\u0E48\u0E27\u0E19\u0E25\u0E14:</td>\n                <td style=\"text-align: right;\"> {{this.formCart.value.discount| number:'1.2-2'}} \u0E1A\u0E32\u0E17</td>\n            </tr>\n            <tr>\n                <td></td>\n                <td></td>\n                <td>\u0E22\u0E2D\u0E14\u0E0A\u0E33\u0E23\u0E30:</td>\n                <td style=\"text-align: right;\"> {{this.formCart.value.net_total| number:'1.2-2'}} \u0E1A\u0E32\u0E17</td>\n            </tr>\n        </table>\n        <div style=\"text-align: center; margin-top: 10px;\">\n            <div style=\"font-size: 16px;\">\u0E02\u0E2D\u0E1A\u0E04\u0E38\u0E13\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23</div>\n        </div>\n    </div>\n</div>", styles: [".cart-item-animate {\r\n  animation: popIn 0.3s ease-in-out;\r\n}\r\n\r\n@keyframes popIn {\r\n  0% { transform: scale(0.8); opacity: 0; }\r\n  100% { transform: scale(1); opacity: 1; }\r\n}"] }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.NewOrderService }, { type: i3.Router }, { type: i3.ActivatedRoute }, { type: i4.MessageService }]; }, { table: [{
            type: ViewChild,
            args: ['dt']
        }] }); })();
//# sourceMappingURL=new-order.component.js.map