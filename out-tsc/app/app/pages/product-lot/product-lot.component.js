import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "./product-lot.service";
import * as i3 from "primeng/api";
import * as i4 from "@angular/common";
import * as i5 from "@angular/router";
import * as i6 from "primeng/button";
import * as i7 from "primeng/inputtext";
import * as i8 from "primeng/dialog";
import * as i9 from "primeng/table";
import * as i10 from "primeng/toast";
const _c0 = ["dt"];
function ProductLotComponent_ng_template_7_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 32)(1, "button", 33);
    i0.ɵɵlistener("click", function ProductLotComponent_ng_template_7_div_4_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r13.openAdd()); });
    i0.ɵɵelementEnd()();
} }
function ProductLotComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27)(1, "span", 28);
    i0.ɵɵelement(2, "i", 29)(3, "input", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, ProductLotComponent_ng_template_7_div_4_Template, 2, 0, "div", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("formControl", ctx_r1.search);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.permissions == null ? null : ctx_r1.permissions.manag_product_type);
} }
function ProductLotComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th", 34)(2, "div", 35);
    i0.ɵɵtext(3, " \u0E25\u0E33\u0E14\u0E31\u0E1A ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "th", 34)(5, "div", 35);
    i0.ɵɵtext(6, " \u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "th", 36)(8, "div", 37);
    i0.ɵɵtext(9, " \u0E0A\u0E37\u0E48\u0E2D\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "th", 38)(11, "div", 35);
    i0.ɵɵtext(12, " \u0E08\u0E31\u0E14\u0E01\u0E32\u0E23 ");
    i0.ɵɵelementEnd()()();
} }
function ProductLotComponent_ng_template_9_i_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 51);
} }
function ProductLotComponent_ng_template_9_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 52);
    i0.ɵɵlistener("click", function ProductLotComponent_ng_template_9_button_16_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r21); const item_r15 = i0.ɵɵnextContext().$implicit; const ctx_r19 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r19.openEdit(item_r15.id)); });
    i0.ɵɵelement(1, "i", 53);
    i0.ɵɵtext(2, "\u0E41\u0E01\u0E49\u0E44\u0E02");
    i0.ɵɵelementEnd();
} }
const _c1 = function () { return ["/app/product_brand"]; };
const _c2 = function (a0) { return { product_type_id: a0 }; };
function ProductLotComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 39);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 39);
    i0.ɵɵelement(4, "img", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 41);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td", 39)(8, "div", 42)(9, "button", 43);
    i0.ɵɵelement(10, "span")(11, "i", 44);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 45)(13, "a", 46);
    i0.ɵɵtemplate(14, ProductLotComponent_ng_template_9_i_14_Template, 1, 0, "i", 47);
    i0.ɵɵtext(15, "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(16, ProductLotComponent_ng_template_9_button_16_Template, 3, 0, "button", 48);
    i0.ɵɵelementStart(17, "a", 49);
    i0.ɵɵlistener("click", function ProductLotComponent_ng_template_9_Template_a_click_17_listener() { const restoredCtx = i0.ɵɵrestoreView(_r23); const item_r15 = restoredCtx.$implicit; const ctx_r22 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r22.openDelete(item_r15.id)); });
    i0.ɵɵelement(18, "i", 50);
    i0.ɵɵtext(19, "\u0E25\u0E1A");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const rowIndex_r16 = ctx.rowIndex;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", rowIndex_r16 + 1, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", item_r15.image, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r15.name, " ");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(7, _c1))("queryParams", i0.ɵɵpureFunction1(8, _c2, item_r15.id));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.permissions == null ? null : ctx_r3.permissions.view_product_brand);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.permissions == null ? null : ctx_r3.permissions.manag_product_type);
} }
function ProductLotComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 39);
    i0.ɵɵtext(2, "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("colspan", 4);
} }
function ProductLotComponent_img_16_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 54);
    i0.ɵɵlistener("click", function ProductLotComponent_img_16_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r26); i0.ɵɵnextContext(); const _r7 = i0.ɵɵreference(19); return i0.ɵɵresetView(_r7.click()); });
    i0.ɵɵelementEnd();
} }
function ProductLotComponent_img_17_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 23);
    i0.ɵɵlistener("click", function ProductLotComponent_img_17_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r28); i0.ɵɵnextContext(); const _r7 = i0.ɵɵreference(19); return i0.ɵɵresetView(_r7.click()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r6.formAdd.get("image").value, i0.ɵɵsanitizeUrl);
} }
function ProductLotComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 55);
    i0.ɵɵlistener("click", function ProductLotComponent_ng_template_25_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r29.addConfirm()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "button", 56);
    i0.ɵɵlistener("click", function ProductLotComponent_ng_template_25_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r30); const ctx_r31 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r31.addCancel()); });
    i0.ɵɵelementEnd();
} }
function ProductLotComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 55);
    i0.ɵɵlistener("click", function ProductLotComponent_ng_template_39_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r33); const ctx_r32 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r32.confirmEdit()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "button", 56);
    i0.ɵɵlistener("click", function ProductLotComponent_ng_template_39_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r33); const ctx_r34 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r34.cancelEdit()); });
    i0.ɵɵelementEnd();
} }
function ProductLotComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 55);
    i0.ɵɵlistener("click", function ProductLotComponent_ng_template_46_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r36); const ctx_r35 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r35.confirmDelete()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "button", 56);
    i0.ɵɵlistener("click", function ProductLotComponent_ng_template_46_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r36); const ctx_r37 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r37.cancelDelete()); });
    i0.ɵɵelementEnd();
} }
const _c3 = function () { return [10, 25, 50]; };
const _c4 = function () { return { width: "30vw" }; };
const _c5 = function () { return { "960px": "75vw" }; };
export class ProductLotComponent {
    constructor(_fb, _service, _messageService) {
        this._fb = _fb;
        this._service = _service;
        this._messageService = _messageService;
        this.permissions = [];
        this.displayAdd = false;
        this.displayEdit = false;
        this.displayDelete = false;
        this.totalRecords = 0;
        this.search = new FormControl('');
        this.permissions = JSON.parse(localStorage.getItem('permissions'));
    }
    ngOnInit() {
        this.formAdd = this._fb.group({
            name: '',
            upload_image_status: false,
            image: '',
        });
        this.formEdit = this._fb.group({
            name: '',
            upload_image_status: false,
            image: '',
        });
        console.log(this.formAdd.get('image').value);
        this.search.valueChanges
            .pipe(debounceTime(500), distinctUntilChanged(), tap((query) => {
            this.loading = true;
            const first = this.table.first;
            const rows = this.table.rows;
            const page = first / rows + 1;
            this._service.page({ perPage: rows, page: page, search: query })
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
        this._service.page({ perPage: event.rows, page, search: this.search.value })
            .subscribe((resp) => {
            this.data = resp.data;
            this.totalRecords = resp.totalRecords;
            this.loading = false;
        });
    }
    openAdd() {
        this.formAdd = this._fb.group({
            name: '',
            upload_image_status: false,
            image: '',
        });
        this.displayAdd = true;
    }
    addConfirm() {
        this._service.addProductType(this.formAdd.value).subscribe({
            next: (resp) => {
                this.displayAdd = false;
                this.showSuccess(resp.message);
                this.table.reset();
            },
            error: (err) => {
                this.showError(err.error.message);
            },
        });
    }
    addCancel() {
        this.displayAdd = false;
    }
    openEdit(Id) {
        this.editId = Id;
        this.formEdit = this._fb.group({
            name: '',
            upload_image_status: false,
            image: '',
        });
        this._service.getProductType(this.editId)
            .subscribe((resp) => {
            this.formEdit.patchValue({
                ...resp.data
            });
            this.displayEdit = true;
        });
    }
    confirmEdit() {
        this._service.updateProductType(this.editId, this.formEdit.value).subscribe({
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
    openDelete(Id) {
        this.deleteId = Id;
        this.displayDelete = true;
    }
    confirmDelete() {
        this._service.deleteProductType(this.deleteId, {}).subscribe({
            next: (resp) => {
                this.displayDelete = false;
                this.showSuccess(resp.message);
                this.table.reset();
            },
            error: (err) => {
                this.showError(err.error.message);
            },
        });
    }
    cancelDelete() {
        this.displayDelete = false;
    }
    onSelectImageProfile(event) {
        const input = event.target;
        if (input.files?.length) {
            this._service.uploadImage(input.files[0]).subscribe({
                next: (resp) => {
                    this.formAdd.patchValue({
                        upload_image_status: true,
                        image: resp.url,
                    });
                },
                error: (err) => {
                    this.showError(err.error.message);
                },
            });
        }
    }
    onSelectImageProfileEdit(event) {
        const input = event.target;
        if (input.files?.length) {
            this._service.uploadImage(input.files[0]).subscribe({
                next: (resp) => {
                    this.formEdit.patchValue({
                        upload_image_status: true,
                        image: resp.url,
                    });
                },
                error: (err) => {
                    this.showError(err.error.message);
                },
            });
        }
    }
    showError(massage) {
        this._messageService.add({ severity: 'error', summary: 'แจ้งเตือน', detail: massage });
    }
    showSuccess(massage) {
        this._messageService.add({ severity: 'success', summary: 'แจ้งเตือน', detail: massage });
    }
    static { this.ɵfac = function ProductLotComponent_Factory(t) { return new (t || ProductLotComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.ProductLotService), i0.ɵɵdirectiveInject(i3.MessageService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductLotComponent, selectors: [["app-product-lot"]], viewQuery: function ProductLotComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.table = _t.first);
        } }, decls: 48, vars: 31, consts: [[1, "grid"], [1, "col-12"], [1, "card"], ["dataKey", "id", "styleClass", "p-datatable-gridlines", 3, "value", "lazy", "paginator", "loading", "rows", "totalRecords", "rowsPerPageOptions", "onLazyLoad"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptyMessage"], ["header", "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32", "modal", "modal", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], [3, "formGroup"], [1, "card", "p-fluid"], [1, "col-12", "py-0", "pb-5", 2, "text-align", "center"], ["class", "img", "src", "assets/images/product.png", "width", "100", "height", "100", "style", "cursor: pointer;", 3, "click", 4, "ngIf"], ["class", "img", "width", "100", "height", "100", "style", "cursor: pointer;", 3, "src", "click", 4, "ngIf"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change"], ["fileinputadd", ""], [1, "col-12", "py-0"], [1, "field"], ["htmlFor", "name"], ["pInputText", "", "type", "text", "formControlName", "name", "maxlength", "200"], ["pTemplate", "footer"], ["header", "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32", "modal", "modal", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], ["width", "100", "height", "100", 1, "img", 2, "cursor", "pointer", 3, "src", "click"], ["fileinputedit", ""], ["header", "\u0E25\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32", "modal", "modal", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], ["position", "bottom-center"], [1, "flex", "justify-content-between", "flex-column", "sm:flex-row"], [1, "p-input-icon-left"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "\u0E04\u0E49\u0E19\u0E2B\u0E32", 1, "w-full", 3, "formControl"], ["class", "pt-1 flex align-items-center", 4, "ngIf"], [1, "pt-1", "flex", "align-items-center"], ["pButton", "", "icon", "pi pi-plus", "label", "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32", 2, "width", "auto", 3, "click"], [2, "width", "100px"], [1, "flex", "justify-content-center", "align-items-center"], [2, "width", "auto"], [1, "flex", "justify-content-start", "align-items-center"], [2, "width", "70px"], [1, "text-center"], [1, "icon-img", 3, "src"], [1, "text-left"], [1, "dropdown"], ["pButton", "", "type", "button", 1, "p-button-secondary", "p-button-text"], [1, "pi", "pi-bars"], ["tabindex", "0", 1, "dropdown-content", 2, "cursor", "pointer"], [3, "routerLink", "queryParams"], ["class", "pi pi-list pr-2", 4, "ngIf"], ["type", "button", "class", "dropdown-action", 3, "click", 4, "ngIf"], ["href", "javascript:void(0);", 3, "click"], [1, "pi", "pi-trash", "pr-2"], [1, "pi", "pi-list", "pr-2"], ["type", "button", 1, "dropdown-action", 3, "click"], [1, "pi", "pi-file-edit", "pr-2"], ["src", "assets/images/product.png", "width", "100", "height", "100", 1, "img", 2, "cursor", "pointer", 3, "click"], ["pButton", "", "icon", "pi pi-check", "label", "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19", 1, "p-button-success", "mr-2", "outline", 3, "click"], ["pButton", "", "icon", "pi pi-times", "label", "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01", 1, "p-button-danger", "mr-2", "outline", 3, "click"]], template: function ProductLotComponent_Template(rf, ctx) { if (rf & 1) {
            const _r38 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
            i0.ɵɵtext(4, "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p-table", 3, 4);
            i0.ɵɵlistener("onLazyLoad", function ProductLotComponent_Template_p_table_onLazyLoad_5_listener($event) { return ctx.loadTable($event); });
            i0.ɵɵtemplate(7, ProductLotComponent_ng_template_7_Template, 5, 2, "ng-template", 5);
            i0.ɵɵtemplate(8, ProductLotComponent_ng_template_8_Template, 13, 0, "ng-template", 6);
            i0.ɵɵtemplate(9, ProductLotComponent_ng_template_9_Template, 20, 10, "ng-template", 7);
            i0.ɵɵtemplate(10, ProductLotComponent_ng_template_10_Template, 3, 1, "ng-template", 8);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(11, "p-dialog", 9);
            i0.ɵɵlistener("visibleChange", function ProductLotComponent_Template_p_dialog_visibleChange_11_listener($event) { return ctx.displayAdd = $event; });
            i0.ɵɵelementStart(12, "form", 10)(13, "div", 11)(14, "div", 0)(15, "div", 12);
            i0.ɵɵtemplate(16, ProductLotComponent_img_16_Template, 1, 0, "img", 13);
            i0.ɵɵtemplate(17, ProductLotComponent_img_17_Template, 1, 1, "img", 14);
            i0.ɵɵelementStart(18, "input", 15, 16);
            i0.ɵɵlistener("change", function ProductLotComponent_Template_input_change_18_listener($event) { return ctx.onSelectImageProfile($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "div", 17)(21, "div", 18)(22, "label", 19);
            i0.ɵɵtext(23, "\u0E0A\u0E37\u0E48\u0E2D\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(24, "input", 20);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵtemplate(25, ProductLotComponent_ng_template_25_Template, 2, 0, "ng-template", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "p-dialog", 22);
            i0.ɵɵlistener("visibleChange", function ProductLotComponent_Template_p_dialog_visibleChange_26_listener($event) { return ctx.displayEdit = $event; });
            i0.ɵɵelementStart(27, "form", 10)(28, "div", 11)(29, "div", 0)(30, "div", 12)(31, "img", 23);
            i0.ɵɵlistener("click", function ProductLotComponent_Template_img_click_31_listener() { i0.ɵɵrestoreView(_r38); const _r9 = i0.ɵɵreference(33); return i0.ɵɵresetView(_r9.click()); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "input", 15, 24);
            i0.ɵɵlistener("change", function ProductLotComponent_Template_input_change_32_listener($event) { return ctx.onSelectImageProfileEdit($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(34, "div", 17)(35, "div", 18)(36, "label", 19);
            i0.ɵɵtext(37, "\u0E0A\u0E37\u0E48\u0E2D\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(38, "input", 20);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵtemplate(39, ProductLotComponent_ng_template_39_Template, 2, 0, "ng-template", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "p-dialog", 25);
            i0.ɵɵlistener("visibleChange", function ProductLotComponent_Template_p_dialog_visibleChange_40_listener($event) { return ctx.displayDelete = $event; });
            i0.ɵɵelementStart(41, "div", 11)(42, "div", 0)(43, "div", 17)(44, "h5");
            i0.ɵɵtext(45, "\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E19\u0E35\u0E49\u0E43\u0E0A\u0E48\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(46, ProductLotComponent_ng_template_46_Template, 2, 0, "ng-template", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(47, "p-toast", 26);
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("value", ctx.data)("lazy", true)("paginator", true)("loading", ctx.loading)("rows", 10)("totalRecords", ctx.totalRecords)("rowsPerPageOptions", i0.ɵɵpureFunction0(24, _c3));
            i0.ɵɵadvance(6);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(25, _c4));
            i0.ɵɵproperty("visible", ctx.displayAdd)("breakpoints", i0.ɵɵpureFunction0(26, _c5));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.formAdd);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", !ctx.formAdd.get("upload_image_status").value);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.formAdd.get("upload_image_status").value);
            i0.ɵɵadvance(9);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(27, _c4));
            i0.ɵɵproperty("visible", ctx.displayEdit)("breakpoints", i0.ɵɵpureFunction0(28, _c5));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.formEdit);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("src", ctx.formEdit.get("image").value, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(9);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(29, _c4));
            i0.ɵɵproperty("visible", ctx.displayDelete)("breakpoints", i0.ɵɵpureFunction0(30, _c5));
        } }, dependencies: [i4.NgIf, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.MaxLengthValidator, i1.FormControlDirective, i1.FormGroupDirective, i1.FormControlName, i5.RouterLink, i3.PrimeTemplate, i6.ButtonDirective, i7.InputText, i8.Dialog, i9.Table, i10.Toast] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductLotComponent, [{
        type: Component,
        args: [{ selector: 'app-product-lot', template: "<div class=\"grid\">\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <h5>\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</h5>\n            <p-table #dt [value]=\"data\" [lazy]=\"true\" (onLazyLoad)=\"loadTable($event)\" dataKey=\"id\" [paginator]=\"true\"\n                [loading]=\"loading\" [rows]=\"10\" [totalRecords]=\"totalRecords\" styleClass=\"p-datatable-gridlines\"\n                [rowsPerPageOptions]=\"[10, 25, 50]\">\n                <!-- \u0E40\u0E1B\u0E34\u0E14 ng-template -->\n                <ng-template pTemplate=\"caption\">\n                    <div class=\"flex justify-content-between flex-column sm:flex-row\">\n                        <span class=\"p-input-icon-left\">\n                            <i class=\"pi pi-search\"></i>\n                            <input pInputText type=\"text\" [formControl]=\"search\" placeholder=\"\u0E04\u0E49\u0E19\u0E2B\u0E32\" class=\"w-full\" />\n                        </span>\n\n                        <div class=\"pt-1 flex align-items-center\" *ngIf=\"permissions?.manag_product_type\">\n\n                            <button (click)=\"openAdd()\" pButton icon=\"pi pi-plus\" label=\"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\"\n                                style=\"width:auto;\"></button>\n                        </div>\n                    </div>\n                </ng-template>\n                <!-- \u0E1B\u0E34\u0E14 ng-template -->\n\n                <ng-template pTemplate=\"header\">\n                    <tr>\n                        <th style=\"width: 100px;\">\n                            <div class=\"flex justify-content-center  align-items-center\">\n                                \u0E25\u0E33\u0E14\u0E31\u0E1A\n                            </div>\n                        </th>\n                        <th style=\"width: 100px;\">\n                            <div class=\"flex justify-content-center  align-items-center\">\n                                \u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E\n                            </div>\n                        </th>\n                        <th style=\"width: auto;\">\n                            <div class=\"flex justify-content-start align-items-center\">\n                                \u0E0A\u0E37\u0E48\u0E2D\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\n                            </div>\n                        </th>\n                        <th style=\"width: 70px;\">\n                            <div class=\"flex justify-content-center align-items-center\">\n                                \u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\n                            </div>\n                        </th>\n                    </tr>\n                </ng-template>\n\n                <!-- open template button edit and delete  -->\n                <ng-template pTemplate=\"body\" let-item let-rowIndex=\"rowIndex\">\n                    <tr>\n\n                        <td class=\"text-center\">\n                            {{ rowIndex + 1 }}\n                        </td>\n                        <td class=\"text-center\">\n                            <img class=\"icon-img\" [src]=\"item.image\">\n                        </td>\n                        <td class=\"text-left\">\n                            {{item.name}}\n                        </td>\n\n                        <td class=\"text-center\">\n                            <div class=\"dropdown\">\n                                <button pButton type=\"button\" class=\"p-button-secondary p-button-text\"><span></span>\n                                    <i class=\"pi pi-bars\"></i>\n                                </button>\n                                <div class=\"dropdown-content\" tabindex=\"0\" style=\"cursor: pointer;\">\n                                    <a [routerLink]=\"['/app/product_brand']\"\n                                        [queryParams]=\"{product_type_id:item.id}\"><i class=\"pi pi-list pr-2\"\n                                            *ngIf=\"permissions?.view_product_brand\"></i>\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</a>\n                                    <button type=\"button\" class=\"dropdown-action\" (click)=\"openEdit(item.id)\" *ngIf=\"permissions?.manag_product_type\"><i\n                                            class=\"pi pi-file-edit pr-2\"></i>\u0E41\u0E01\u0E49\u0E44\u0E02</button>\n                                    <a href=\"javascript:void(0);\" (click)=\"openDelete(item.id)\"><i\n                                            class=\"pi pi-trash pr-2\"></i>\u0E25\u0E1A</a>\n                                </div>\n                            </div>\n                        </td>\n\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"emptyMessage\" let-columns>\n                    <tr>\n                        <td [attr.colspan]=\"4\" class=\"text-center\">\u0E44\u0E21\u0E48\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25</td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </div>\n    </div>\n</div>\n\n<p-dialog header=\"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\" [(visible)]=\"displayAdd\" modal=\"modal\" showEffect=\"fade\" [style]=\"{width: '30vw'}\"\n    [breakpoints]=\"{'960px': '75vw'}\">\n    <form [formGroup]=\"formAdd\">\n        <div class=\"card p-fluid\">\n            <div class=\"grid\">\n                <div class=\"col-12 py-0 pb-5\" style=\"text-align: center;\">\n                    <img *ngIf=\"!formAdd.get('upload_image_status')!.value\" class=\"img\" src=\"assets/images/product.png\"\n                        width=\"100\" height=\"100\" style=\"cursor: pointer;\" (click)=\"fileinputadd.click()\">\n\n                    <img *ngIf=\"formAdd.get('upload_image_status')!.value\" class=\"img\"\n                        [src]=\"formAdd.get('image')!.value\" width=\"100\" height=\"100\" style=\"cursor: pointer;\"\n                        (click)=\"fileinputadd.click()\">\n\n                    <input #fileinputadd type=\"file\" (change)=\"onSelectImageProfile($event)\" accept=\"image/*\" hidden />\n                </div>\n                <div class=\"col-12 py-0\">\n                    <div class=\"field\">\n                        <label htmlFor=\"name\">\u0E0A\u0E37\u0E48\u0E2D\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</label>\n                        <input pInputText type=\"text\" formControlName=\"name\" maxlength=\"200\" />\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n\n    <ng-template pTemplate=\"footer\">\n        <button pButton icon=\"pi pi-check\" (click)=\"addConfirm()\" label=\"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\"\n            class=\"p-button-success mr-2 outline\"></button>\n        <button pButton icon=\"pi pi-times\" (click)=\"addCancel()\" label=\"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\"\n            class=\"p-button-danger mr-2 outline\"></button>\n    </ng-template>\n</p-dialog>\n\n<p-dialog header=\"\u0E41\u0E01\u0E49\u0E44\u0E02\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\" [(visible)]=\"displayEdit\" modal=\"modal\" showEffect=\"fade\" [style]=\"{width: '30vw'}\"\n    [breakpoints]=\"{'960px': '75vw'}\">\n    <form [formGroup]=\"formEdit\">\n        <div class=\"card p-fluid\">\n            <div class=\"grid\">\n                <div class=\"col-12 py-0 pb-5\" style=\"text-align: center;\">\n                    <img class=\"img\" [src]=\"formEdit.get('image')!.value\" width=\"100\" height=\"100\"\n                        style=\"cursor: pointer;\" (click)=\"fileinputedit.click()\">\n\n                    <input #fileinputedit type=\"file\" (change)=\"onSelectImageProfileEdit($event)\" accept=\"image/*\"\n                        hidden />\n                </div>\n                <div class=\"col-12 py-0\">\n                    <div class=\"field\">\n                        <label htmlFor=\"name\">\u0E0A\u0E37\u0E48\u0E2D\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</label>\n                        <input pInputText type=\"text\" formControlName=\"name\" maxlength=\"200\" />\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n\n    <ng-template pTemplate=\"footer\">\n        <button pButton icon=\"pi pi-check\" (click)=\"confirmEdit()\" label=\"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\"\n            class=\"p-button-success mr-2 outline\"></button>\n        <button pButton icon=\"pi pi-times\" (click)=\"cancelEdit()\" label=\"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\"\n            class=\"p-button-danger mr-2 outline\"></button>\n    </ng-template>\n</p-dialog>\n\n<p-dialog header=\"\u0E25\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\" [(visible)]=\"displayDelete\" modal=\"modal\" showEffect=\"fade\" [style]=\"{width: '30vw'}\"\n    [breakpoints]=\"{'960px': '75vw'}\">\n    <div class=\"card p-fluid\">\n        <div class=\"grid\">\n            <div class=\"col-12 py-0\">\n                <h5>\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E19\u0E35\u0E49\u0E43\u0E0A\u0E48\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?</h5>\n            </div>\n        </div>\n    </div>\n\n    <ng-template pTemplate=\"footer\">\n        <button pButton icon=\"pi pi-check\" (click)=\"confirmDelete()\" label=\"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\"\n            class=\"p-button-success mr-2 outline\"></button>\n        <button pButton icon=\"pi pi-times\" (click)=\"cancelDelete()\" label=\"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\"\n            class=\"p-button-danger mr-2 outline\"></button>\n    </ng-template>\n</p-dialog>\n\n<p-toast position=\"bottom-center\"></p-toast>\n\r\n\r\n" }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.ProductLotService }, { type: i3.MessageService }]; }, { table: [{
            type: ViewChild,
            args: ['dt']
        }] }); })();
//# sourceMappingURL=product-lot.component.js.map