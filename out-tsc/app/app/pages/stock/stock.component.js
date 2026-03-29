import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../stock/stock.service";
import * as i3 from "@angular/router";
import * as i4 from "primeng/api";
import * as i5 from "@angular/common";
import * as i6 from "primeng/button";
import * as i7 from "primeng/inputtext";
import * as i8 from "primeng/dialog";
import * as i9 from "primeng/dropdown";
import * as i10 from "primeng/table";
import * as i11 from "primeng/toast";
const _c0 = ["dt"];
function StockComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25)(1, "span", 26);
    i0.ɵɵelement(2, "i", 27)(3, "input", 28);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("formControl", ctx_r1.search);
} }
function StockComponent_ng_template_22_th_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 34)(1, "div", 30);
    i0.ɵɵtext(2, " \u0E08\u0E31\u0E14\u0E01\u0E32\u0E23 ");
    i0.ɵɵelementEnd()();
} }
function StockComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th", 29)(2, "div", 30);
    i0.ɵɵtext(3, " \u0E25\u0E33\u0E14\u0E31\u0E1A ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "th", 29)(5, "div", 30);
    i0.ɵɵtext(6, " \u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "th", 31)(8, "div", 32);
    i0.ɵɵtext(9, " \u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "th", 31)(11, "div", 32);
    i0.ɵɵtext(12, " \u0E0A\u0E37\u0E48\u0E2D\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "th", 31)(14, "div", 32);
    i0.ɵɵtext(15, " \u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "th", 29)(17, "div", 30);
    i0.ɵɵtext(18, " \u0E08\u0E33\u0E19\u0E27\u0E19\u0E04\u0E07\u0E40\u0E2B\u0E25\u0E37\u0E2D ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "th", 29)(20, "div", 30);
    i0.ɵɵtext(21, " \u0E08\u0E33\u0E19\u0E27\u0E19\u0E08\u0E31\u0E14\u0E40\u0E01\u0E47\u0E1A ");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(22, StockComponent_ng_template_22_th_22_Template, 3, 0, "th", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(22);
    i0.ɵɵproperty("ngIf", ctx_r2.permissions.manag_stock);
} }
function StockComponent_ng_template_23_td_17_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 44);
    i0.ɵɵlistener("click", function StockComponent_ng_template_23_td_17_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r13); const item_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.openEdit(item_r7.id)); });
    i0.ɵɵelement(1, "i", 45);
    i0.ɵɵtext(2, "\u0E41\u0E01\u0E49\u0E44\u0E02");
    i0.ɵɵelementEnd();
} }
function StockComponent_ng_template_23_td_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 35)(1, "div", 39)(2, "button", 40);
    i0.ɵɵelement(3, "span")(4, "i", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 42);
    i0.ɵɵtemplate(6, StockComponent_ng_template_23_td_17_button_6_Template, 3, 0, "button", 43);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r9.permissions == null ? null : ctx_r9.permissions.manag_product_type);
} }
function StockComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 35);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 35);
    i0.ɵɵelement(4, "img", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 37);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td", 37);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td", 37);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td", 35);
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td", 35);
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(17, StockComponent_ng_template_23_td_17_Template, 7, 1, "td", 38);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const rowIndex_r8 = ctx.rowIndex;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", rowIndex_r8 + 1, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", item_r7.image, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r7.PRODUCT_TYPE_NAME, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r7.PRODUCT_BRAND_NAME, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r7.NAME, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(13, 8, item_r7.count), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(16, 10, item_r7.max), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.permissions.manag_stock);
} }
function StockComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 35);
    i0.ɵɵtext(2, "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("colspan", 6);
} }
function StockComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 46);
    i0.ɵɵlistener("click", function StockComponent_ng_template_39_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.confirmEdit()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "button", 47);
    i0.ɵɵlistener("click", function StockComponent_ng_template_39_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r16); const ctx_r17 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r17.cancelEdit()); });
    i0.ɵɵelementEnd();
} }
const _c1 = function () { return [10, 25, 50]; };
const _c2 = function () { return { width: "30vw" }; };
const _c3 = function () { return { "960px": "75vw" }; };
export class StockComponent {
    constructor(_fb, _service, _router, _route, _messageService) {
        this._fb = _fb;
        this._service = _service;
        this._router = _router;
        this._route = _route;
        this._messageService = _messageService;
        this.permissions = [];
        this.displayAdd = false;
        this.displayEdit = false;
        this.urlData = {
            product_type_id: '',
            product_brand_id: '',
        };
        this.totalRecords = 0;
        this.search = new FormControl('');
        this.filter_product_types = [];
        this.filter_product_brands = [];
        this.product_types = [];
        this.product_brands = [];
        this.permissions = JSON.parse(localStorage.getItem('permissions'));
        this.branch_id = Number(localStorage.getItem('branch'));
    }
    ngOnInit() {
        this._route.queryParamMap.subscribe(params => {
            this.urlData.product_type_id = params.get('product_type_id');
            this.urlData.product_brand_id = params.get('product_brand_id');
        });
        this.formSetting = this._fb.group({
            product_type: '',
            product_brand: '',
        });
        this.formEdit = this._fb.group({
            count: 0,
            max: 0,
        });
        this.search.valueChanges
            .pipe(debounceTime(500), distinctUntilChanged(), tap((query) => {
            this.loading = true;
            const first = this.table.first;
            const rows = this.table.rows;
            const page = first / rows + 1;
            this._service.page({ branchId: this.branch_id, perPage: rows, page: page, search: query, searchId1: this.urlData.product_type_id, searchId2: this.urlData.product_brand_id })
                .subscribe((resp) => {
                this.data = resp.data;
                this.data = this.data.map((item, index) => ({ ...item, order: index + 1 }));
                this.totalRecords = resp.totalRecords;
                this.loading = false;
            });
        }))
            .subscribe();
        this.loadProductTypeFilter();
    }
    loadTable(event) {
        this.loading = true;
        const page = event.first / event.rows + 1;
        this._service.page({ branchId: this.branch_id, perPage: event.rows, page, search: this.search.value, searchId1: this.urlData.product_type_id, searchId2: this.urlData.product_brand_id })
            .subscribe((resp) => {
            this.data = resp.data;
            this.totalRecords = resp.totalRecords;
            this.loading = false;
        });
    }
    loadProductTypeFilter() {
        this._service.getProductType()
            .subscribe((resp) => {
            this.filter_product_types = resp.data;
            this.product_types = resp.data;
            if (this.urlData.product_type_id != null) {
                const product_type = this.filter_product_types.find(item => item.id == this.urlData.product_type_id);
                this.formSetting.patchValue({ product_type: product_type });
            }
            if (this.urlData.product_type_id != null) {
                this.loadProductBrandFilter(this.urlData.product_brand_id);
            }
        });
    }
    selectProductTypeFilter() {
        this.urlData.product_type_id = this.formSetting.get('product_type').value.id;
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { product_type_id: this.formSetting.get('product_type').value.id },
            queryParamsHandling: 'merge',
        });
        this.table.reset();
        this.loadProductBrandFilter(this.urlData.product_type_id);
    }
    loadProductBrandFilter(id) {
        this._service.getProductBrand(id)
            .subscribe((resp) => {
            this.filter_product_brands = resp.data;
            if (this.urlData.product_brand_id != null) {
                const product_brand = this.filter_product_brands.find(item => item.id == this.urlData.product_brand_id);
                this.formSetting.patchValue({ product_brand: product_brand });
            }
        });
    }
    selectProductBrandFilter() {
        this.urlData.product_brand_id = this.formSetting.get('product_brand').value.id;
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { product_brand_id: this.formSetting.get('product_brand').value.id },
            queryParamsHandling: 'merge',
        });
        this.table.reset();
    }
    selectProductType(id) {
        this._service.getProductBrand(id)
            .subscribe((resp) => {
            this.product_brands = resp.data;
        });
    }
    openEdit(Id) {
        this.editId = Id;
        this.formEdit = this._fb.group({
            count: 0,
            max: 0,
        });
        this._service.getStock(this.editId)
            .subscribe((resp) => {
            this.formEdit.patchValue({
                ...resp.data
            });
            this.displayEdit = true;
        });
    }
    confirmEdit() {
        this._service.updateStock(this.editId, this.formEdit.value).subscribe({
            next: (resp) => {
                this.displayEdit = false;
                this.showSuccess(resp.message);
                this.table.reset();
            },
            error: (err) => {
                this.showError(err.error.message);
            },
        });
    }
    cancelEdit() {
        this.displayEdit = false;
    }
    showError(massage) {
        this._messageService.add({ severity: 'error', summary: 'แจ้งเตือน', detail: massage });
    }
    showSuccess(massage) {
        this._messageService.add({ severity: 'success', summary: 'แจ้งเตือน', detail: massage });
    }
    static { this.ɵfac = function StockComponent_Factory(t) { return new (t || StockComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.StockService), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i4.MessageService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StockComponent, selectors: [["app-stock"]], viewQuery: function StockComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.table = _t.first);
        } }, decls: 41, vars: 22, consts: [[1, "grid"], [1, "col-12"], [1, "card", "p-fluid"], [3, "formGroup"], [1, "col-12", "md:col-6", "pb-0"], [1, "field"], ["for", "product_type"], ["optionLabel", "name", "filterBy", "name", "placeholder", "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32", "formControlName", "product_type", 3, "options", "filter", "showClear", "onChange"], [1, "col-12", "md:col-6"], ["htmlFor", "location"], ["optionLabel", "name", "filterBy", "name", "placeholder", "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32", "formControlName", "product_brand", 3, "options", "filter", "showClear", "onChange"], [1, "card"], ["dataKey", "id", "styleClass", "p-datatable-gridlines", 3, "value", "lazy", "paginator", "loading", "rows", "totalRecords", "rowsPerPageOptions", "onLazyLoad"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptyMessage"], ["header", "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E04\u0E25\u0E31\u0E07", "modal", "modal", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], [1, "col-6", "pb-0"], ["htmlFor", "name"], ["pInputText", "", "type", "number", "formControlName", "count", "min", "0", "max", "99999"], ["pInputText", "", "type", "number", "formControlName", "max", "min", "0", "max", "99999"], ["pTemplate", "footer"], ["position", "top-right"], [1, "flex", "justify-content-between", "flex-column", "sm:flex-row"], [1, "p-input-icon-left"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "\u0E04\u0E49\u0E19\u0E2B\u0E32", 1, "w-full", 3, "formControl"], [2, "width", "100px"], [1, "flex", "justify-content-center", "align-items-center"], [2, "width", "auto"], [1, "flex", "justify-content-start", "align-items-center"], ["style", "width: 70px;", 4, "ngIf"], [2, "width", "70px"], [1, "text-center"], [1, "icon-img", 3, "src"], [1, "text-left"], ["class", "text-center", 4, "ngIf"], [1, "dropdown"], ["pButton", "", "type", "button", 1, "p-button-secondary", "p-button-text"], [1, "pi", "pi-bars"], ["tabindex", "0", 1, "dropdown-content", 2, "cursor", "pointer"], ["type", "button", "class", "dropdown-action", 3, "click", 4, "ngIf"], ["type", "button", 1, "dropdown-action", 3, "click"], [1, "pi", "pi-file-edit", "pr-2"], ["pButton", "", "icon", "pi pi-check", "label", "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19", 1, "p-button-success", "mr-2", "outline", 3, "click"], ["pButton", "", "icon", "pi pi-times", "label", "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01", 1, "p-button-danger", "mr-2", "outline", 3, "click"]], template: function StockComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form", 3)(4, "div", 0)(5, "div", 4)(6, "div", 5)(7, "label", 6);
            i0.ɵɵtext(8, "\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "p-dropdown", 7);
            i0.ɵɵlistener("onChange", function StockComponent_Template_p_dropdown_onChange_9_listener() { return ctx.selectProductTypeFilter(); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(10, "div", 8)(11, "div", 5)(12, "label", 9);
            i0.ɵɵtext(13, "\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "p-dropdown", 10);
            i0.ɵɵlistener("onChange", function StockComponent_Template_p_dropdown_onChange_14_listener() { return ctx.selectProductBrandFilter(); });
            i0.ɵɵelementEnd()()()()()()();
            i0.ɵɵelementStart(15, "div", 1)(16, "div", 11)(17, "h5");
            i0.ɵɵtext(18, "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "p-table", 12, 13);
            i0.ɵɵlistener("onLazyLoad", function StockComponent_Template_p_table_onLazyLoad_19_listener($event) { return ctx.loadTable($event); });
            i0.ɵɵtemplate(21, StockComponent_ng_template_21_Template, 4, 1, "ng-template", 14);
            i0.ɵɵtemplate(22, StockComponent_ng_template_22_Template, 23, 1, "ng-template", 15);
            i0.ɵɵtemplate(23, StockComponent_ng_template_23_Template, 18, 12, "ng-template", 16);
            i0.ɵɵtemplate(24, StockComponent_ng_template_24_Template, 3, 1, "ng-template", 17);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(25, "p-dialog", 18);
            i0.ɵɵlistener("visibleChange", function StockComponent_Template_p_dialog_visibleChange_25_listener($event) { return ctx.displayEdit = $event; });
            i0.ɵɵelementStart(26, "form", 3)(27, "div", 2)(28, "div", 0)(29, "div", 19)(30, "div", 5)(31, "label", 20);
            i0.ɵɵtext(32, "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E04\u0E07\u0E40\u0E2B\u0E25\u0E37\u0E2D");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(33, "input", 21);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(34, "div", 19)(35, "div", 5)(36, "label", 20);
            i0.ɵɵtext(37, "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E08\u0E31\u0E14\u0E40\u0E01\u0E47\u0E1A");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(38, "input", 22);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵtemplate(39, StockComponent_ng_template_39_Template, 2, 0, "ng-template", 23);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(40, "p-toast", 24);
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("formGroup", ctx.formSetting);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("options", ctx.filter_product_types)("filter", true)("showClear", true);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("options", ctx.filter_product_brands)("filter", true)("showClear", true);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("value", ctx.data)("lazy", true)("paginator", true)("loading", ctx.loading)("rows", 10)("totalRecords", ctx.totalRecords)("rowsPerPageOptions", i0.ɵɵpureFunction0(19, _c1));
            i0.ɵɵadvance(6);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(20, _c2));
            i0.ɵɵproperty("visible", ctx.displayEdit)("breakpoints", i0.ɵɵpureFunction0(21, _c3));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.formEdit);
        } }, dependencies: [i5.NgIf, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.MinValidator, i1.MaxValidator, i1.FormControlDirective, i1.FormGroupDirective, i1.FormControlName, i4.PrimeTemplate, i6.ButtonDirective, i7.InputText, i8.Dialog, i9.Dropdown, i10.Table, i11.Toast, i5.DecimalPipe] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StockComponent, [{
        type: Component,
        args: [{ selector: 'app-stock', template: "<div class=\"grid\">\n    <div class=\"col-12\">\n        <div class=\"card p-fluid\">\n            <form [formGroup]=\"formSetting\">\n                <div class=\"grid\">\n                    <div class=\"col-12 md:col-6 pb-0\">\n                        <div class=\"field\">\n                            <label for=\"product_type\">\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</label>\n                            <p-dropdown [options]=\"filter_product_types\" optionLabel=\"name\" [filter]=\"true\"\n                                filterBy=\"name\" [showClear]=\"true\" placeholder=\"\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\"\n                                formControlName=\"product_type\" (onChange)=\"selectProductTypeFilter()\">\n                            </p-dropdown>\n                        </div>\n                    </div>\n                    <div class=\"col-12 md:col-6\">\n                        <div class=\"field\">\n                            <label htmlFor=\"location\">\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</label>\n                            <p-dropdown [options]=\"filter_product_brands\" optionLabel=\"name\" [filter]=\"true\"\n                                filterBy=\"name\" [showClear]=\"true\" placeholder=\"\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\"\n                                formControlName=\"product_brand\" (onChange)=\"selectProductBrandFilter()\">\n                            </p-dropdown>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <h5>\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</h5>\n            <p-table #dt [value]=\"data\" [lazy]=\"true\" (onLazyLoad)=\"loadTable($event)\" dataKey=\"id\" [paginator]=\"true\"\n                [loading]=\"loading\" [rows]=\"10\" [totalRecords]=\"totalRecords\" styleClass=\"p-datatable-gridlines\"\n                [rowsPerPageOptions]=\"[10, 25, 50]\">\n                <!-- \u0E40\u0E1B\u0E34\u0E14 ng-template -->\n                <ng-template pTemplate=\"caption\">\n                    <div class=\"flex justify-content-between flex-column sm:flex-row\">\n                        <span class=\"p-input-icon-left\">\n                            <i class=\"pi pi-search\"></i>\n                            <input pInputText type=\"text\" [formControl]=\"search\" placeholder=\"\u0E04\u0E49\u0E19\u0E2B\u0E32\" class=\"w-full\" />\n                        </span>\n                    </div>\n                </ng-template>\n                <!-- \u0E1B\u0E34\u0E14 ng-template -->\n\n                <ng-template pTemplate=\"header\">\n                    <tr>\n                        <th style=\"width: 100px;\">\n                            <div class=\"flex justify-content-center  align-items-center\">\n                                \u0E25\u0E33\u0E14\u0E31\u0E1A\n                            </div>\n                        </th>\n                        <th style=\"width: 100px;\">\n                            <div class=\"flex justify-content-center  align-items-center\">\n                                \u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E\n                            </div>\n                        </th>\n                        <th style=\"width: auto;\">\n                            <div class=\"flex justify-content-start align-items-center\">\n                                \u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\n                            </div>\n                        </th>\n                        <th style=\"width: auto;\">\n                            <div class=\"flex justify-content-start align-items-center\">\n                                \u0E0A\u0E37\u0E48\u0E2D\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\n                            </div>\n                        </th>\n                        <th style=\"width: auto;\">\n                            <div class=\"flex justify-content-start align-items-center\">\n                                \u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\n                            </div>\n                        </th>\n                        <th style=\"width: 100px;\">\n                            <div class=\"flex justify-content-center align-items-center\">\n                                \u0E08\u0E33\u0E19\u0E27\u0E19\u0E04\u0E07\u0E40\u0E2B\u0E25\u0E37\u0E2D\n                            </div>\n                        </th>\n                        <th style=\"width: 100px;\">\n                            <div class=\"flex justify-content-center align-items-center\">\n                                \u0E08\u0E33\u0E19\u0E27\u0E19\u0E08\u0E31\u0E14\u0E40\u0E01\u0E47\u0E1A\n                            </div>\n                        </th>\n                        <th style=\"width: 70px;\" *ngIf=\"permissions.manag_stock\">\n                            <div class=\"flex justify-content-center align-items-center\">\n                                \u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\n                            </div>\n                        </th>\n                    </tr>\n                </ng-template>\n\n                <!-- open template button edit and delete  -->\n                <ng-template pTemplate=\"body\" let-item let-rowIndex=\"rowIndex\">\n                    <tr>\n\n                        <td class=\"text-center\">\n                            {{ rowIndex + 1 }}\n                        </td>\n                        <td class=\"text-center\">\n                            <img class=\"icon-img\" [src]=\"item.image\">\n                        </td>\n                        <td class=\"text-left\">\n                            {{item.PRODUCT_TYPE_NAME}}\n                        </td>\n                        <td class=\"text-left\">\n                            {{item.PRODUCT_BRAND_NAME}}\n                        </td>\n                        <td class=\"text-left\">\n                            {{item.NAME}}\n                        </td>\n                        <td class=\"text-center\">\n                            {{item.count|number}}\n                        </td>\n                        <td class=\"text-center\">\n                            {{item.max|number}}\n                        </td>\n                        <td class=\"text-center\" *ngIf=\"permissions.manag_stock\">\n                            <div class=\"dropdown\">\n                                <button pButton type=\"button\" class=\"p-button-secondary p-button-text\"><span></span>\n                                    <i class=\"pi pi-bars\"></i>\n                                </button>\n                                <div class=\"dropdown-content\" tabindex=\"0\" style=\"cursor: pointer;\">\n                                    <button type=\"button\" class=\"dropdown-action\" (click)=\"openEdit(item.id)\" *ngIf=\"permissions?.manag_product_type\"><i\n                                            class=\"pi pi-file-edit pr-2\"></i>\u0E41\u0E01\u0E49\u0E44\u0E02</button>\n                                </div>\n                            </div>\n                        </td>\n\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"emptyMessage\" let-columns>\n                    <tr>\n                        <td [attr.colspan]=\"6\" class=\"text-center\">\u0E44\u0E21\u0E48\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25</td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </div>\n    </div>\n</div>\n\n\n<p-dialog header=\"\u0E41\u0E01\u0E49\u0E44\u0E02\u0E04\u0E25\u0E31\u0E07\" [(visible)]=\"displayEdit\" modal=\"modal\" showEffect=\"fade\" [style]=\"{width: '30vw'}\"\n    [breakpoints]=\"{'960px': '75vw'}\">\n    <form [formGroup]=\"formEdit\">\n        <div class=\"card p-fluid\">\n            <div class=\"grid\">\n                <div class=\"col-6 pb-0\">\n                    <div class=\"field\">\n                        <label htmlFor=\"name\">\u0E08\u0E33\u0E19\u0E27\u0E19\u0E04\u0E07\u0E40\u0E2B\u0E25\u0E37\u0E2D</label>\n                        <input pInputText type=\"number\" formControlName=\"count\" min=\"0\" max=\"99999\" />\n                    </div>\n                </div>\n                <div class=\"col-6 pb-0\">\n                    <div class=\"field\">\n                        <label htmlFor=\"name\">\u0E08\u0E33\u0E19\u0E27\u0E19\u0E08\u0E31\u0E14\u0E40\u0E01\u0E47\u0E1A</label>\n                        <input pInputText type=\"number\" formControlName=\"max\" min=\"0\" max=\"99999\" />\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n\n    <ng-template pTemplate=\"footer\">\n        <button pButton icon=\"pi pi-check\" (click)=\"confirmEdit()\" label=\"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\"\n            class=\"p-button-success mr-2 outline\"></button>\n        <button pButton icon=\"pi pi-times\" (click)=\"cancelEdit()\" label=\"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\"\n            class=\"p-button-danger mr-2 outline\"></button>\n    </ng-template>\n</p-dialog>\n\n<p-toast position=\"top-right\"></p-toast>\r\n\r\n" }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.StockService }, { type: i3.Router }, { type: i3.ActivatedRoute }, { type: i4.MessageService }]; }, { table: [{
            type: ViewChild,
            args: ['dt']
        }] }); })();
//# sourceMappingURL=stock.component.js.map