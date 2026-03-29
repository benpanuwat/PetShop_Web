import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../order/order.service";
import * as i3 from "@angular/router";
import * as i4 from "primeng/api";
import * as i5 from "@angular/common";
import * as i6 from "primeng/button";
import * as i7 from "primeng/calendar";
import * as i8 from "primeng/inputtext";
import * as i9 from "primeng/dialog";
import * as i10 from "primeng/inputtextarea";
import * as i11 from "primeng/table";
import * as i12 from "primeng/toast";
const _c0 = ["dt"];
function OrderComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27)(1, "span", 28);
    i0.ɵɵelement(2, "i", 29)(3, "input", 30);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("formControl", ctx_r1.search);
} }
function OrderComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th", 31)(2, "div", 32);
    i0.ɵɵtext(3, " \u0E25\u0E33\u0E14\u0E31\u0E1A ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "th", 33)(5, "div", 32);
    i0.ɵɵtext(6, " \u0E40\u0E25\u0E02\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "th", 34)(8, "div", 32);
    i0.ɵɵtext(9, " \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "th", 31)(11, "div", 32);
    i0.ɵɵtext(12, " \u0E23\u0E2B\u0E31\u0E2A\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "th", 35)(14, "div", 36);
    i0.ɵɵtext(15, " \u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "th", 34)(17, "div", 32);
    i0.ɵɵtext(18, " \u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "th", 31)(20, "div", 32);
    i0.ɵɵtext(21, " \u0E22\u0E2D\u0E14\u0E23\u0E27\u0E21 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "th", 31)(23, "div", 32);
    i0.ɵɵtext(24, " \u0E2A\u0E48\u0E27\u0E19\u0E25\u0E14 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "th", 31)(26, "div", 32);
    i0.ɵɵtext(27, " \u0E22\u0E2D\u0E14\u0E0A\u0E33\u0E23\u0E30 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "th", 31)(29, "div", 32);
    i0.ɵɵtext(30, " \u0E2A\u0E16\u0E32\u0E19\u0E30 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "th", 37)(32, "div", 32);
    i0.ɵɵtext(33, " \u0E08\u0E31\u0E14\u0E01\u0E32\u0E23 ");
    i0.ɵɵelementEnd()()();
} }
function OrderComponent_ng_template_28_span_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 52);
    i0.ɵɵtext(1, "\u0E1B\u0E01\u0E15\u0E34");
    i0.ɵɵelementEnd();
} }
function OrderComponent_ng_template_28_span_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 53);
    i0.ɵɵtext(1, "\u0E41\u0E01\u0E49\u0E44\u0E02");
    i0.ɵɵelementEnd();
} }
function OrderComponent_ng_template_28_span_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 54);
    i0.ɵɵtext(1, "\u0E25\u0E1A");
    i0.ɵɵelementEnd();
} }
function OrderComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 38);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 39);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 39);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td", 40);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td", 40);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td", 39);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td", 41);
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td", 41);
    i0.ɵɵtext(17);
    i0.ɵɵpipe(18, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "td", 41);
    i0.ɵɵtext(20);
    i0.ɵɵpipe(21, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "td", 42);
    i0.ɵɵtemplate(23, OrderComponent_ng_template_28_span_23_Template, 2, 0, "span", 43);
    i0.ɵɵtemplate(24, OrderComponent_ng_template_28_span_24_Template, 2, 0, "span", 44);
    i0.ɵɵtemplate(25, OrderComponent_ng_template_28_span_25_Template, 2, 0, "span", 45);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "td", 39)(27, "div", 46)(28, "button", 47);
    i0.ɵɵelement(29, "span")(30, "i", 48);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "div", 49)(32, "button", 50);
    i0.ɵɵlistener("click", function OrderComponent_ng_template_28_Template_button_click_32_listener() { const restoredCtx = i0.ɵɵrestoreView(_r12); const item_r6 = restoredCtx.$implicit; const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.openCancel(item_r6.id)); });
    i0.ɵɵelement(33, "i", 51);
    i0.ɵɵtext(34, "\u0E25\u0E1A");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const rowIndex_r7 = ctx.rowIndex;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", rowIndex_r7 + 1, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r6.CODE, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r6.CREATED_DATE, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r6.MEMBER_PHONE, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r6.MEMBER_NAME, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r6.PAYMENT_TYPE, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(15, 12, item_r6.TOTAL), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(18, 14, item_r6.DiSCOUNT), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(21, 16, item_r6.NET_TOTAL), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", item_r6.status === "normal");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.status === "edit");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.status === "cancel");
} }
function OrderComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 39);
    i0.ɵɵtext(2, "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("colspan", 11);
} }
function OrderComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 55);
    i0.ɵɵlistener("click", function OrderComponent_ng_template_39_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r14.confirmCancel()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "button", 56);
    i0.ɵɵlistener("click", function OrderComponent_ng_template_39_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r15); const ctx_r16 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r16.cencelCancel()); });
    i0.ɵɵelementEnd();
} }
const _c1 = function () { return [10, 25, 50]; };
const _c2 = function () { return { width: "30vw" }; };
const _c3 = function () { return { "960px": "75vw" }; };
export class OrderComponent {
    constructor(_fb, _service, _router, _route, _messageService) {
        this._fb = _fb;
        this._service = _service;
        this._router = _router;
        this._route = _route;
        this._messageService = _messageService;
        this.permissions = [];
        this.displayAdd = false;
        this.displayEdit = false;
        this.cancelDisplay = false;
        this.totalRecords = 0;
        this.search = new FormControl('');
        this.permissions = JSON.parse(localStorage.getItem('permissions'));
        this.branch_id = Number(localStorage.getItem('branch'));
    }
    ngOnInit() {
        const now = new Date();
        this.formSetting = this._fb.group({
            date_start: now,
            date_end: now,
        });
        this.cancelForm = this._fb.group({
            remark: "",
        });
        this.search.valueChanges
            .pipe(debounceTime(500), distinctUntilChanged(), tap((query) => {
            this.loading = true;
            const first = this.table.first;
            const rows = this.table.rows;
            const page = first / rows + 1;
            this.formSetting.value.date_start.setHours(now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
            const date_start = this.formSetting.value.date_start.toISOString();
            this.formSetting.value.date_end.setHours(now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
            const date_end = this.formSetting.value.date_end.toISOString();
            this._service.page({ branchId: this.branch_id, perPage: rows, page: page, search: query, date_start: date_start, date_end: date_end })
                .subscribe((resp) => {
                this.data = resp.data;
                this.data = this.data.map((item, index) => ({ ...item, order: index + 1 }));
                this.totalRecords = resp.totalRecords;
                this.loading = false;
            });
        }))
            .subscribe();
    }
    loadTable(event) {
        this.loading = true;
        const page = event.first / event.rows + 1;
        const now = new Date();
        this.formSetting.value.date_start.setHours(now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
        const date_start = this.formSetting.value.date_start.toISOString();
        this.formSetting.value.date_end.setHours(now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
        const date_end = this.formSetting.value.date_end.toISOString();
        this._service.page({ branchId: this.branch_id, perPage: event.rows, page, search: this.search.value, date_start: date_start, date_end: date_end })
            .subscribe((resp) => {
            this.data = resp.data;
            this.totalRecords = resp.totalRecords;
            this.loading = false;
        });
    }
    filterData() {
        this.table.reset();
    }
    openCancel(id) {
        this.cancelId = id;
        this.cancelDisplay = true;
        this.cancelForm.reset();
    }
    confirmCancel() {
        this._service.cancelOrder(this.cancelId, this.cancelForm.value).subscribe({
            next: (resp) => {
                this.showSuccess(resp.message);
                this.cancelDisplay = false;
                this.table.reset();
            },
            error: (err) => {
                this.showError(err.error.message);
            },
        });
    }
    cencelCancel() {
        this.cancelDisplay = false;
    }
    showError(massage) {
        this._messageService.add({ severity: 'error', summary: 'แจ้งเตือน', detail: massage });
    }
    showSuccess(massage) {
        this._messageService.add({ severity: 'success', summary: 'แจ้งเตือน', detail: massage });
    }
    static { this.ɵfac = function OrderComponent_Factory(t) { return new (t || OrderComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.OrderService), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i4.MessageService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OrderComponent, selectors: [["app-order"]], viewQuery: function OrderComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.table = _t.first);
        } }, decls: 41, vars: 20, consts: [[1, "grid"], [1, "col-12"], [1, "card", "p-fluid"], [3, "formGroup"], [1, "col-6", "md:col-6", "pb-0"], [1, "field"], ["htmlFor", "date_start"], ["formControlName", "date_start", "dateFormat", "dd/mm/yy", 3, "readonlyInput", "showIcon"], [1, "col-6", "md:col-6"], ["htmlFor", "date_end"], ["formControlName", "date_end", "dateFormat", "dd/mm/yy", 3, "readonlyInput", "showIcon"], [1, "m-2", "w-2"], ["position", "bottom-center", "key", "data"], ["pButton", "", "icon", "pi pi-search", "label", "\u0E04\u0E49\u0E19\u0E2B\u0E32", 1, "p-button-warning", "mr-2", "outline", 3, "click"], [1, "card"], ["dataKey", "id", "styleClass", "p-datatable-gridlines", 3, "value", "lazy", "paginator", "loading", "rows", "totalRecords", "rowsPerPageOptions", "onLazyLoad"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptyMessage"], ["header", "\u0E25\u0E1A", "modal", "modal", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], [1, "col-12", "py-0"], ["htmlFor", "name"], ["pInputTextarea", "", "formControlName", "remark", "maxlength", "1000", "rows", "4"], ["pTemplate", "footer"], ["position", "bottom-center"], [1, "flex", "justify-content-between", "flex-column", "sm:flex-row"], [1, "p-input-icon-left"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "\u0E04\u0E49\u0E19\u0E2B\u0E32", 1, "w-full", 3, "formControl"], [2, "width", "100px"], [1, "flex", "justify-content-center", "align-items-center"], [2, "width", "120px"], [2, "width", "150px"], [2, "width", "auto"], [1, "flex", "justify-content-start", "align-items-center"], [2, "width", "70px"], [2, "text-align", "center"], [1, "text-center"], [1, "text-left"], [1, "text-right"], [1, "white-space-nowrap", 2, "text-align", "center"], ["class", "status-badge status-open", 4, "ngIf"], ["class", "status-badge status-edit", 4, "ngIf"], ["class", "status-badge status-cancel", 4, "ngIf"], [1, "dropdown"], ["pButton", "", "type", "button", 1, "p-button-secondary", "p-button-text"], [1, "pi", "pi-bars"], ["tabindex", "0", 1, "dropdown-content", 2, "cursor", "pointer"], ["type", "button", 1, "dropdown-action", 3, "click"], [1, "pi", "pi-trash", "pr-2"], [1, "status-badge", "status-open"], [1, "status-badge", "status-edit"], [1, "status-badge", "status-cancel"], ["pButton", "", "icon", "pi pi-check", "label", "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19", 1, "p-button-success", "mr-2", "outline", 3, "click"], ["pButton", "", "icon", "pi pi-times", "label", "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01", 1, "p-button-danger", "mr-2", "outline", 3, "click"]], template: function OrderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form", 3)(4, "div", 0)(5, "div", 4)(6, "div", 5)(7, "label", 6)(8, "b");
            i0.ɵɵtext(9, "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E23\u0E34\u0E48\u0E21");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(10, "p-calendar", 7);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div", 8)(12, "div", 5)(13, "label", 9)(14, "b");
            i0.ɵɵtext(15, "\u0E16\u0E36\u0E07\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(16, "p-calendar", 10);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "div", 11);
            i0.ɵɵelement(18, "p-toast", 12);
            i0.ɵɵelementStart(19, "button", 13);
            i0.ɵɵlistener("click", function OrderComponent_Template_button_click_19_listener() { return ctx.filterData(); });
            i0.ɵɵelementEnd()()()()()();
            i0.ɵɵelementStart(20, "div", 1)(21, "div", 14)(22, "h5");
            i0.ɵɵtext(23, "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "p-table", 15, 16);
            i0.ɵɵlistener("onLazyLoad", function OrderComponent_Template_p_table_onLazyLoad_24_listener($event) { return ctx.loadTable($event); });
            i0.ɵɵtemplate(26, OrderComponent_ng_template_26_Template, 4, 1, "ng-template", 17);
            i0.ɵɵtemplate(27, OrderComponent_ng_template_27_Template, 34, 0, "ng-template", 18);
            i0.ɵɵtemplate(28, OrderComponent_ng_template_28_Template, 35, 18, "ng-template", 19);
            i0.ɵɵtemplate(29, OrderComponent_ng_template_29_Template, 3, 1, "ng-template", 20);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(30, "p-dialog", 21);
            i0.ɵɵlistener("visibleChange", function OrderComponent_Template_p_dialog_visibleChange_30_listener($event) { return ctx.cancelDisplay = $event; });
            i0.ɵɵelementStart(31, "form", 3)(32, "div", 2)(33, "div", 0)(34, "div", 22)(35, "div", 5)(36, "label", 23);
            i0.ɵɵtext(37, "\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E2B\u0E15\u0E38");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(38, "textarea", 24);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵtemplate(39, OrderComponent_ng_template_39_Template, 2, 0, "ng-template", 25);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(40, "p-toast", 26);
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("formGroup", ctx.formSetting);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("readonlyInput", true)("showIcon", true);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("readonlyInput", true)("showIcon", true);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("value", ctx.data)("lazy", true)("paginator", true)("loading", ctx.loading)("rows", 10)("totalRecords", ctx.totalRecords)("rowsPerPageOptions", i0.ɵɵpureFunction0(17, _c1));
            i0.ɵɵadvance(6);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(18, _c2));
            i0.ɵɵproperty("visible", ctx.cancelDisplay)("breakpoints", i0.ɵɵpureFunction0(19, _c3));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.cancelForm);
        } }, dependencies: [i5.NgIf, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.MaxLengthValidator, i1.FormControlDirective, i1.FormGroupDirective, i1.FormControlName, i4.PrimeTemplate, i6.ButtonDirective, i7.Calendar, i8.InputText, i9.Dialog, i10.InputTextarea, i11.Table, i12.Toast, i5.DecimalPipe], styles: [".status-badge[_ngcontent-%COMP%] {\r\n  padding: 4px 8px;\r\n  border-radius: 12px;\r\n  font-weight: bold;\r\n  color: white;\r\n  display: inline-block;\r\n  min-width: 80px;\r\n  \n\r\n  text-align: center;\r\n}\r\n\r\n.status-open[_ngcontent-%COMP%] {\r\n  background-color: #238626;\r\n}\r\n\r\n.status-edit[_ngcontent-%COMP%] {\r\n  background-color: #e3c934;\r\n}\r\n\r\n.status-cancel[_ngcontent-%COMP%] {\r\n  background-color: #ff0000;\r\n}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OrderComponent, [{
        type: Component,
        args: [{ selector: 'app-order', template: "<div class=\"grid\">\n    <div class=\"col-12\">\n        <div class=\"card p-fluid\">\n            <form [formGroup]=\"formSetting\">\n                <div class=\"grid\">\n                    <div class=\"col-6 md:col-6 pb-0\">\n                        <div class=\"field\">\n                            <label htmlFor=\"date_start\"><b>\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E23\u0E34\u0E48\u0E21</b></label>\n                            <p-calendar [readonlyInput]=\"true\" formControlName=\"date_start\" [showIcon]=\"true\"\n                                dateFormat=\"dd/mm/yy\">\n                            </p-calendar>\n                        </div>\n                    </div>\n                    <div class=\"col-6 md:col-6\">\n                        <div class=\"field\">\n                            <label htmlFor=\"date_end\"><b>\u0E16\u0E36\u0E07\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48</b></label>\n                            <p-calendar [readonlyInput]=\"true\" formControlName=\"date_end\" [showIcon]=\"true\"\n                                dateFormat=\"dd/mm/yy\">\n                            </p-calendar>\n                        </div>\n                    </div>\n                    <div class=\"m-2 w-2\">\n                        <p-toast position=\"bottom-center\" key=\"data\"></p-toast>\n                        <button pButton icon=\"pi pi-search\" (click)=\"filterData()\" label=\"\u0E04\u0E49\u0E19\u0E2B\u0E32\"\n                            class=\"p-button-warning mr-2 outline\"></button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <h5>\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D</h5>\n            <p-table #dt [value]=\"data\" [lazy]=\"true\" (onLazyLoad)=\"loadTable($event)\" dataKey=\"id\" [paginator]=\"true\"\n                [loading]=\"loading\" [rows]=\"10\" [totalRecords]=\"totalRecords\" styleClass=\"p-datatable-gridlines\"\n                [rowsPerPageOptions]=\"[10, 25, 50]\">\n                <!-- \u0E40\u0E1B\u0E34\u0E14 ng-template -->\n                <ng-template pTemplate=\"caption\">\n                    <div class=\"flex justify-content-between flex-column sm:flex-row\">\n                        <span class=\"p-input-icon-left\">\n                            <i class=\"pi pi-search\"></i>\n                            <input pInputText type=\"text\" [formControl]=\"search\" placeholder=\"\u0E04\u0E49\u0E19\u0E2B\u0E32\" class=\"w-full\" />\n                        </span>\n\n                    </div>\n                </ng-template>\n                <!-- \u0E1B\u0E34\u0E14 ng-template -->\n\n                <ng-template pTemplate=\"header\">\n                    <tr>\n                        <th style=\"width: 100px;\">\n                            <div class=\"flex justify-content-center  align-items-center\">\n                                \u0E25\u0E33\u0E14\u0E31\u0E1A\n                            </div>\n                        </th>\n                        <th style=\"width: 120px;\">\n                            <div class=\"flex justify-content-center  align-items-center\">\n                                \u0E40\u0E25\u0E02\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D\n                            </div>\n                        </th>\n                        <th style=\"width: 150px;\">\n                            <div class=\"flex justify-content-center  align-items-center\">\n                                \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\n                            </div>\n                        </th>\n                        <th style=\"width: 100px;\">\n                            <div class=\"flex justify-content-center align-items-center\">\n                                \u0E23\u0E2B\u0E31\u0E2A\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\n                            </div>\n                        </th>\n                        <th style=\"width: auto;\">\n                            <div class=\"flex justify-content-start align-items-center\">\n                                \u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\n                            </div>\n                        </th>\n                        <th style=\"width: 150px;\">\n                            <div class=\"flex justify-content-center align-items-center\">\n                                \u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19\n                            </div>\n                        </th>\n                        <th style=\"width: 100px;\">\n                            <div class=\"flex justify-content-center align-items-center\">\n                                \u0E22\u0E2D\u0E14\u0E23\u0E27\u0E21\n                            </div>\n                        </th>\n                        <th style=\"width: 100px;\">\n                            <div class=\"flex justify-content-center align-items-center\">\n                                \u0E2A\u0E48\u0E27\u0E19\u0E25\u0E14\n                            </div>\n                        </th>\n                        <th style=\"width: 100px;\">\n                            <div class=\"flex justify-content-center align-items-center\">\n                                \u0E22\u0E2D\u0E14\u0E0A\u0E33\u0E23\u0E30\n                            </div>\n                        </th>\n                        <th style=\"width: 100px;\">\n                            <div class=\"flex justify-content-center align-items-center\">\n                                \u0E2A\u0E16\u0E32\u0E19\u0E30\n                            </div>\n                        </th>\n                        <th style=\"width: 70px;\">\n                            <div class=\"flex justify-content-center align-items-center\">\n                                \u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\n                            </div>\n                        </th>\n                    </tr>\n                </ng-template>\n\n                <!-- open template button edit and delete  -->\n                <ng-template pTemplate=\"body\" let-item let-rowIndex=\"rowIndex\">\n                    <tr>\n                        <td style=\"text-align: center;\">\n                            {{ rowIndex + 1 }}\n                        </td>\n                        <td class=\"text-center\">\n                            {{ item.CODE}}\n                        </td>\n                        <td class=\"text-center\">\n                            {{item.CREATED_DATE}}\n                        </td>\n                        <td class=\"text-left\">\n                            {{item.MEMBER_PHONE}}\n                        </td>\n                        <td class=\"text-left\">\n                            {{item.MEMBER_NAME}}\n                        </td>\n                        <td class=\"text-center\">\n                            {{item.PAYMENT_TYPE}}\n                        </td>\n                        <td class=\"text-right\">\n                            {{item.TOTAL|number}}\n                        </td>\n                        <td class=\"text-right\">\n                            {{item.DiSCOUNT|number}}\n                        </td>\n                        <td class=\"text-right\">\n                            {{item.NET_TOTAL|number}}\n                        </td>\n\n                        <td style=\"text-align: center;\" class=\"white-space-nowrap\">\n                            <span class=\"status-badge status-open\" *ngIf=\"item.status === 'normal'\">\u0E1B\u0E01\u0E15\u0E34</span>\n                            <span class=\"status-badge status-edit\" *ngIf=\"item.status === 'edit'\">\u0E41\u0E01\u0E49\u0E44\u0E02</span>\n                            <span class=\"status-badge status-cancel\" *ngIf=\"item.status === 'cancel'\">\u0E25\u0E1A</span>\n                        </td>\n\n                        <td class=\"text-center\">\n                            <div class=\"dropdown\">\n                                <button pButton type=\"button\" class=\"p-button-secondary p-button-text\"><span></span>\n                                    <i class=\"pi pi-bars\"></i>\n                                </button>\n                                <div class=\"dropdown-content\" tabindex=\"0\" style=\"cursor: pointer;\">\n                                    <!-- <button type=\"button\" class=\"dropdown-action\" (click)=\"openedit(item.id)\" *ngIf=\"permissions?.manag_product_type\"><i\n                                            class=\"pi pi-file-edit pr-2\"></i>\u0E41\u0E01\u0E49\u0E44\u0E02</button> -->\n                                    <button type=\"button\" class=\"dropdown-action\" (click)=\"openCancel(item.id)\"><i class=\"pi pi-trash pr-2\"></i>\u0E25\u0E1A</button>\n                                </div>\n                            </div>\n                        </td>\n\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"emptyMessage\" let-columns>\n                    <tr>\n                        <td [attr.colspan]=\"11\" class=\"text-center\">\u0E44\u0E21\u0E48\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25</td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </div>\n    </div>\n</div>\n\n<p-dialog header=\"\u0E25\u0E1A\" [(visible)]=\"cancelDisplay\" modal=\"modal\" showEffect=\"fade\" [style]=\"{width: '30vw'}\"\n    [breakpoints]=\"{'960px': '75vw'}\">\n    <form [formGroup]=\"cancelForm\">\n        <div class=\"card p-fluid\">\n            <div class=\"grid\">\n                <div class=\"col-12 py-0\">\n                    <div class=\"field\">\n                        <label htmlFor=\"name\">\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E2B\u0E15\u0E38</label>\n                        <textarea pInputTextarea formControlName=\"remark\" maxlength=\"1000\" rows=\"4\"></textarea>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n\n    <ng-template pTemplate=\"footer\">\n        <button pButton icon=\"pi pi-check\" (click)=\"confirmCancel()\" label=\"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\"\n            class=\"p-button-success mr-2 outline\"></button>\n        <button pButton icon=\"pi pi-times\" (click)=\"cencelCancel()\" label=\"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\"\n            class=\"p-button-danger mr-2 outline\"></button>\n    </ng-template>\n</p-dialog>\n\n<p-toast position=\"bottom-center\"></p-toast>\n\n\n", styles: ["\r\n.status-badge {\r\n  padding: 4px 8px;\r\n  border-radius: 12px;\r\n  font-weight: bold;\r\n  color: white;\r\n  display: inline-block;\r\n  min-width: 80px;\r\n  /* Adjust as needed */\r\n  text-align: center;\r\n}\r\n\r\n.status-open {\r\n  background-color: #238626;\r\n}\r\n\r\n.status-edit {\r\n  background-color: #e3c934;\r\n}\r\n\r\n.status-cancel {\r\n  background-color: #ff0000;\r\n}"] }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.OrderService }, { type: i3.Router }, { type: i3.ActivatedRoute }, { type: i4.MessageService }]; }, { table: [{
            type: ViewChild,
            args: ['dt']
        }] }); })();
//# sourceMappingURL=order.component.js.map