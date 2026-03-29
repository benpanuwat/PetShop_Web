import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../product_brand/product_brand.service";
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
function ProductBrandComponent_ng_template_16_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 37)(1, "button", 38);
    i0.ɵɵlistener("click", function ProductBrandComponent_ng_template_16_div_4_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r13.openAdd()); });
    i0.ɵɵelementEnd()();
} }
function ProductBrandComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "span", 33);
    i0.ɵɵelement(2, "i", 34)(3, "input", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, ProductBrandComponent_ng_template_16_div_4_Template, 2, 0, "div", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("formControl", ctx_r1.search);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.permissions == null ? null : ctx_r1.permissions.manag_product_brand);
} }
function ProductBrandComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th", 39)(2, "div", 40);
    i0.ɵɵtext(3, " \u0E25\u0E33\u0E14\u0E31\u0E1A ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "th", 39)(5, "div", 40);
    i0.ɵɵtext(6, " \u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "th", 41)(8, "div", 42);
    i0.ɵɵtext(9, " \u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "th", 41)(11, "div", 42);
    i0.ɵɵtext(12, " \u0E0A\u0E37\u0E48\u0E2D\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "th", 43)(14, "div", 40);
    i0.ɵɵtext(15, " \u0E08\u0E31\u0E14\u0E01\u0E32\u0E23 ");
    i0.ɵɵelementEnd()()();
} }
function ProductBrandComponent_ng_template_18_i_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 56);
} }
function ProductBrandComponent_ng_template_18_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 57);
    i0.ɵɵlistener("click", function ProductBrandComponent_ng_template_18_button_18_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r21); const item_r15 = i0.ɵɵnextContext().$implicit; const ctx_r19 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r19.openEdit(item_r15.id)); });
    i0.ɵɵelement(1, "i", 58);
    i0.ɵɵtext(2, "\u0E41\u0E01\u0E49\u0E44\u0E02");
    i0.ɵɵelementEnd();
} }
const _c1 = function () { return ["/app/product"]; };
const _c2 = function (a0, a1) { return { product_type_id: a0, product_brand_id: a1 }; };
function ProductBrandComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 44);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 44);
    i0.ɵɵelement(4, "img", 45);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 46);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td", 46);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td", 44)(10, "div", 47)(11, "button", 48);
    i0.ɵɵelement(12, "span")(13, "i", 49);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 50)(15, "a", 51);
    i0.ɵɵtemplate(16, ProductBrandComponent_ng_template_18_i_16_Template, 1, 0, "i", 52);
    i0.ɵɵtext(17, "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(18, ProductBrandComponent_ng_template_18_button_18_Template, 3, 0, "button", 53);
    i0.ɵɵelementStart(19, "a", 54);
    i0.ɵɵlistener("click", function ProductBrandComponent_ng_template_18_Template_a_click_19_listener() { const restoredCtx = i0.ɵɵrestoreView(_r23); const item_r15 = restoredCtx.$implicit; const ctx_r22 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r22.openDelete(item_r15.id)); });
    i0.ɵɵelement(20, "i", 55);
    i0.ɵɵtext(21, "\u0E25\u0E1A");
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
    i0.ɵɵtextInterpolate1(" ", item_r15.PRODUCT_TYPE_NAME, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r15.name, " ");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(8, _c1))("queryParams", i0.ɵɵpureFunction2(9, _c2, ctx_r3.urlData.product_type_id, item_r15.id));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.permissions == null ? null : ctx_r3.permissions.view_product);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.permissions == null ? null : ctx_r3.permissions.manag_product_type);
} }
function ProductBrandComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 44);
    i0.ɵɵtext(2, "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("colspan", 4);
} }
function ProductBrandComponent_img_25_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 59);
    i0.ɵɵlistener("click", function ProductBrandComponent_img_25_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r26); i0.ɵɵnextContext(); const _r7 = i0.ɵɵreference(28); return i0.ɵɵresetView(_r7.click()); });
    i0.ɵɵelementEnd();
} }
function ProductBrandComponent_img_26_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 28);
    i0.ɵɵlistener("click", function ProductBrandComponent_img_26_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r28); i0.ɵɵnextContext(); const _r7 = i0.ɵɵreference(28); return i0.ɵɵresetView(_r7.click()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r6.formAdd.get("image").value, i0.ɵɵsanitizeUrl);
} }
function ProductBrandComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 60);
    i0.ɵɵlistener("click", function ProductBrandComponent_ng_template_39_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r29.addConfirm()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "button", 61);
    i0.ɵɵlistener("click", function ProductBrandComponent_ng_template_39_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r30); const ctx_r31 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r31.addCancel()); });
    i0.ɵɵelementEnd();
} }
function ProductBrandComponent_ng_template_58_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 60);
    i0.ɵɵlistener("click", function ProductBrandComponent_ng_template_58_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r33); const ctx_r32 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r32.confirmEdit()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "button", 61);
    i0.ɵɵlistener("click", function ProductBrandComponent_ng_template_58_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r33); const ctx_r34 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r34.cancelEdit()); });
    i0.ɵɵelementEnd();
} }
function ProductBrandComponent_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 60);
    i0.ɵɵlistener("click", function ProductBrandComponent_ng_template_65_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r36); const ctx_r35 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r35.confirmDelete()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "button", 61);
    i0.ɵɵlistener("click", function ProductBrandComponent_ng_template_65_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r36); const ctx_r37 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r37.cancelDelete()); });
    i0.ɵɵelementEnd();
} }
const _c3 = function () { return [10, 25, 50]; };
const _c4 = function () { return { width: "30vw" }; };
const _c5 = function () { return { "960px": "75vw" }; };
export class ProductBrandComponent {
    constructor(_fb, _service, _router, _route, _messageService) {
        this._fb = _fb;
        this._service = _service;
        this._router = _router;
        this._route = _route;
        this._messageService = _messageService;
        this.permissions = [];
        this.displayAdd = false;
        this.displayEdit = false;
        this.displayDelete = false;
        this.urlData = {
            product_type_id: '',
        };
        this.totalRecords = 0;
        this.search = new FormControl('');
        this.filter_product_types = [];
        this.product_types = [];
        this.permissions = JSON.parse(localStorage.getItem('permissions'));
    }
    ngOnInit() {
        this._route.queryParamMap.subscribe(params => {
            this.urlData.product_type_id = params.get('product_type_id');
        });
        this.formSetting = this._fb.group({
            product_type: '',
        });
        this.formAdd = this._fb.group({
            product_type_id: 0,
            name: '',
            upload_image_status: false,
            image: '',
        });
        this.formEdit = this._fb.group({
            product_type_id: 0,
            name: '',
            upload_image_status: false,
            image: '',
        });
        this.search.valueChanges
            .pipe(debounceTime(500), distinctUntilChanged(), tap((query) => {
            this.loading = true;
            const first = this.table.first;
            const rows = this.table.rows;
            const page = first / rows + 1;
            this._service.page({ perPage: rows, page: page, search: query, searchId: this.urlData.product_type_id })
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
        this._service.page({ perPage: event.rows, page, search: this.search.value, searchId: this.urlData.product_type_id })
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
    }
    openAdd() {
        this.formAdd = this._fb.group({
            product_type_id: Number(this.urlData.product_type_id),
            name: '',
            upload_image_status: false,
            image: '',
        });
        this.displayAdd = true;
    }
    addConfirm() {
        this._service.addProductBrand(this.formAdd.value).subscribe({
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
            product_type_id: '',
            name: '',
            upload_image_status: false,
            image: '',
        });
        this._service.getProductBrand(this.editId)
            .subscribe((resp) => {
            this.formEdit.patchValue({
                ...resp.data
            });
            this.displayEdit = true;
        });
    }
    confirmEdit() {
        this._service.updateProductBrand(this.editId, this.formEdit.value).subscribe({
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
        this._service.deleteProductBrand(this.deleteId, {}).subscribe({
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
    static { this.ɵfac = function ProductBrandComponent_Factory(t) { return new (t || ProductBrandComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.ProductBrandService), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i4.MessageService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductBrandComponent, selectors: [["app-product_brand"]], viewQuery: function ProductBrandComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.table = _t.first);
        } }, decls: 67, vars: 39, consts: [[1, "grid"], [1, "col-12"], [1, "card", "p-fluid"], [3, "formGroup"], [1, "col-12", "md:col-6", "pb-0"], [1, "field"], ["for", "product_type"], ["optionLabel", "name", "filterBy", "name", "placeholder", "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32", "formControlName", "product_type", 3, "options", "filter", "showClear", "onChange"], [1, "card"], ["dataKey", "id", "styleClass", "p-datatable-gridlines", 3, "value", "lazy", "paginator", "loading", "rows", "totalRecords", "rowsPerPageOptions", "onLazyLoad"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptyMessage"], ["header", "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32", "modal", "modal", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], [1, "col-12", "py-0", "pb-5", 2, "text-align", "center"], ["class", "img", "src", "assets/images/product.png", "width", "100", "height", "100", "style", "cursor: pointer;", 3, "click", 4, "ngIf"], ["class", "img", "width", "100", "height", "100", "style", "cursor: pointer;", 3, "src", "click", 4, "ngIf"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change"], ["fileinputadd", ""], [1, "col-12", "py-0"], ["htmlFor", "name"], ["pInputText", "", "type", "text", "formControlName", "name", "maxlength", "200"], [1, "col-12", "pb-0"], ["optionLabel", "name", "optionValue", "id", "filterBy", "name", "placeholder", "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32", "formControlName", "product_type_id", "appendTo", "body", 3, "options", "filter"], ["pTemplate", "footer"], ["header", "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32", "modal", "modal", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], ["width", "100", "height", "100", 1, "img", 2, "cursor", "pointer", 3, "src", "click"], ["fileinputedit", ""], ["header", "\u0E25\u0E1A\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32", "modal", "modal", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], ["position", "bottom-center"], [1, "flex", "justify-content-between", "flex-column", "sm:flex-row"], [1, "p-input-icon-left"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "\u0E04\u0E49\u0E19\u0E2B\u0E32", 1, "w-full", 3, "formControl"], ["class", "pt-1 flex align-items-center", 4, "ngIf"], [1, "pt-1", "flex", "align-items-center"], ["pButton", "", "icon", "pi pi-plus", "label", "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32", 2, "width", "auto", 3, "click"], [2, "width", "100px"], [1, "flex", "justify-content-center", "align-items-center"], [2, "width", "auto"], [1, "flex", "justify-content-start", "align-items-center"], [2, "width", "70px"], [1, "text-center"], [1, "icon-img", 3, "src"], [1, "text-left"], [1, "dropdown"], ["pButton", "", "type", "button", 1, "p-button-secondary", "p-button-text"], [1, "pi", "pi-bars"], ["tabindex", "0", 1, "dropdown-content", 2, "cursor", "pointer"], ["tabindex", "0", 3, "routerLink", "queryParams"], ["class", "pi pi-list pr-2", 4, "ngIf"], ["type", "button", "class", "dropdown-action", 3, "click", 4, "ngIf"], ["href", "javascript:void(0);", 3, "click"], [1, "pi", "pi-trash", "pr-2"], [1, "pi", "pi-list", "pr-2"], ["type", "button", 1, "dropdown-action", 3, "click"], [1, "pi", "pi-file-edit", "pr-2"], ["src", "assets/images/product.png", "width", "100", "height", "100", 1, "img", 2, "cursor", "pointer", 3, "click"], ["pButton", "", "icon", "pi pi-check", "label", "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19", 1, "p-button-success", "mr-2", "outline", 3, "click"], ["pButton", "", "icon", "pi pi-times", "label", "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01", 1, "p-button-danger", "mr-2", "outline", 3, "click"]], template: function ProductBrandComponent_Template(rf, ctx) { if (rf & 1) {
            const _r38 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form", 3)(4, "div", 0)(5, "div", 4)(6, "div", 5)(7, "label", 6);
            i0.ɵɵtext(8, "\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "p-dropdown", 7);
            i0.ɵɵlistener("onChange", function ProductBrandComponent_Template_p_dropdown_onChange_9_listener() { return ctx.selectProductTypeFilter(); });
            i0.ɵɵelementEnd()()()()()()();
            i0.ɵɵelementStart(10, "div", 1)(11, "div", 8)(12, "h5");
            i0.ɵɵtext(13, "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "p-table", 9, 10);
            i0.ɵɵlistener("onLazyLoad", function ProductBrandComponent_Template_p_table_onLazyLoad_14_listener($event) { return ctx.loadTable($event); });
            i0.ɵɵtemplate(16, ProductBrandComponent_ng_template_16_Template, 5, 2, "ng-template", 11);
            i0.ɵɵtemplate(17, ProductBrandComponent_ng_template_17_Template, 16, 0, "ng-template", 12);
            i0.ɵɵtemplate(18, ProductBrandComponent_ng_template_18_Template, 22, 12, "ng-template", 13);
            i0.ɵɵtemplate(19, ProductBrandComponent_ng_template_19_Template, 3, 1, "ng-template", 14);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(20, "p-dialog", 15);
            i0.ɵɵlistener("visibleChange", function ProductBrandComponent_Template_p_dialog_visibleChange_20_listener($event) { return ctx.displayAdd = $event; });
            i0.ɵɵelementStart(21, "form", 3)(22, "div", 2)(23, "div", 0)(24, "div", 16);
            i0.ɵɵtemplate(25, ProductBrandComponent_img_25_Template, 1, 0, "img", 17);
            i0.ɵɵtemplate(26, ProductBrandComponent_img_26_Template, 1, 1, "img", 18);
            i0.ɵɵelementStart(27, "input", 19, 20);
            i0.ɵɵlistener("change", function ProductBrandComponent_Template_input_change_27_listener($event) { return ctx.onSelectImageProfile($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(29, "div", 21)(30, "div", 5)(31, "label", 22);
            i0.ɵɵtext(32, "\u0E0A\u0E37\u0E48\u0E2D\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(33, "input", 23);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(34, "div", 24)(35, "div", 5)(36, "label", 6);
            i0.ɵɵtext(37, "\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(38, "p-dropdown", 25);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵtemplate(39, ProductBrandComponent_ng_template_39_Template, 2, 0, "ng-template", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "p-dialog", 27);
            i0.ɵɵlistener("visibleChange", function ProductBrandComponent_Template_p_dialog_visibleChange_40_listener($event) { return ctx.displayEdit = $event; });
            i0.ɵɵelementStart(41, "form", 3)(42, "div", 2)(43, "div", 0)(44, "div", 16)(45, "img", 28);
            i0.ɵɵlistener("click", function ProductBrandComponent_Template_img_click_45_listener() { i0.ɵɵrestoreView(_r38); const _r9 = i0.ɵɵreference(47); return i0.ɵɵresetView(_r9.click()); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "input", 19, 29);
            i0.ɵɵlistener("change", function ProductBrandComponent_Template_input_change_46_listener($event) { return ctx.onSelectImageProfileEdit($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(48, "div", 21)(49, "div", 5)(50, "label", 22);
            i0.ɵɵtext(51, "\u0E0A\u0E37\u0E48\u0E2D\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(52, "input", 23);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(53, "div", 24)(54, "div", 5)(55, "label", 6);
            i0.ɵɵtext(56, "\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(57, "p-dropdown", 25);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵtemplate(58, ProductBrandComponent_ng_template_58_Template, 2, 0, "ng-template", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(59, "p-dialog", 30);
            i0.ɵɵlistener("visibleChange", function ProductBrandComponent_Template_p_dialog_visibleChange_59_listener($event) { return ctx.displayDelete = $event; });
            i0.ɵɵelementStart(60, "div", 2)(61, "div", 0)(62, "div", 21)(63, "h5");
            i0.ɵɵtext(64, "\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E19\u0E35\u0E49\u0E43\u0E0A\u0E48\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(65, ProductBrandComponent_ng_template_65_Template, 2, 0, "ng-template", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(66, "p-toast", 31);
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("formGroup", ctx.formSetting);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("options", ctx.filter_product_types)("filter", true)("showClear", true);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("value", ctx.data)("lazy", true)("paginator", true)("loading", ctx.loading)("rows", 10)("totalRecords", ctx.totalRecords)("rowsPerPageOptions", i0.ɵɵpureFunction0(32, _c3));
            i0.ɵɵadvance(6);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(33, _c4));
            i0.ɵɵproperty("visible", ctx.displayAdd)("breakpoints", i0.ɵɵpureFunction0(34, _c5));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.formAdd);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", !ctx.formAdd.get("upload_image_status").value);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.formAdd.get("upload_image_status").value);
            i0.ɵɵadvance(12);
            i0.ɵɵproperty("options", ctx.product_types)("filter", true);
            i0.ɵɵadvance(2);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(35, _c4));
            i0.ɵɵproperty("visible", ctx.displayEdit)("breakpoints", i0.ɵɵpureFunction0(36, _c5));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.formEdit);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("src", ctx.formEdit.get("image").value, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(12);
            i0.ɵɵproperty("options", ctx.product_types)("filter", true);
            i0.ɵɵadvance(2);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(37, _c4));
            i0.ɵɵproperty("visible", ctx.displayDelete)("breakpoints", i0.ɵɵpureFunction0(38, _c5));
        } }, dependencies: [i5.NgIf, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.MaxLengthValidator, i1.FormControlDirective, i1.FormGroupDirective, i1.FormControlName, i3.RouterLink, i4.PrimeTemplate, i6.ButtonDirective, i7.InputText, i8.Dialog, i9.Dropdown, i10.Table, i11.Toast] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductBrandComponent, [{
        type: Component,
        args: [{ selector: 'app-product_brand', template: "<div class=\"grid\">\n    <div class=\"col-12\">\n        <div class=\"card p-fluid\">\n            <form [formGroup]=\"formSetting\">\n                <div class=\"grid\">\n                    <div class=\"col-12 md:col-6 pb-0\">\n                        <div class=\"field\">\n                            <label for=\"product_type\">\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</label>\n                            <p-dropdown [options]=\"filter_product_types\" optionLabel=\"name\" [filter]=\"true\"\n                                filterBy=\"name\" [showClear]=\"true\" placeholder=\"\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\"\n                                formControlName=\"product_type\" (onChange)=\"selectProductTypeFilter()\">\n                            </p-dropdown>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <h5>\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</h5>\n            <p-table #dt [value]=\"data\" [lazy]=\"true\" (onLazyLoad)=\"loadTable($event)\" dataKey=\"id\" [paginator]=\"true\"\n                [loading]=\"loading\" [rows]=\"10\" [totalRecords]=\"totalRecords\" styleClass=\"p-datatable-gridlines\"\n                [rowsPerPageOptions]=\"[10, 25, 50]\">\n                <!-- \u0E40\u0E1B\u0E34\u0E14 ng-template -->\n                <ng-template pTemplate=\"caption\">\n                    <div class=\"flex justify-content-between flex-column sm:flex-row\">\n                        <span class=\"p-input-icon-left\">\n                            <i class=\"pi pi-search\"></i>\n                            <input pInputText type=\"text\" [formControl]=\"search\" placeholder=\"\u0E04\u0E49\u0E19\u0E2B\u0E32\" class=\"w-full\" />\n                        </span>\n\n                        <div class=\"pt-1 flex align-items-center\" *ngIf=\"permissions?.manag_product_brand\">\n                            <button (click)=\"openAdd()\" pButton icon=\"pi pi-plus\" label=\"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\"\n                                style=\"width:auto;\"></button>\n                        </div>\n                    </div>\n                </ng-template>\n                <!-- \u0E1B\u0E34\u0E14 ng-template -->\n\n                <ng-template pTemplate=\"header\">\n                    <tr>\n                        <th style=\"width: 100px;\">\n                            <div class=\"flex justify-content-center  align-items-center\">\n                                \u0E25\u0E33\u0E14\u0E31\u0E1A\n                            </div>\n                        </th>\n                        <th style=\"width: 100px;\">\n                            <div class=\"flex justify-content-center  align-items-center\">\n                                \u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E\n                            </div>\n                        </th>\n                        <th style=\"width: auto;\">\n                            <div class=\"flex justify-content-start align-items-center\">\n                                \u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\n                            </div>\n                        </th>\n                        <th style=\"width: auto;\">\n                            <div class=\"flex justify-content-start align-items-center\">\n                                \u0E0A\u0E37\u0E48\u0E2D\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\n                            </div>\n                        </th>\n                        <th style=\"width: 70px;\">\n                            <div class=\"flex justify-content-center align-items-center\">\n                                \u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\n                            </div>\n                        </th>\n                    </tr>\n                </ng-template>\n\n                <!-- open template button edit and delete  -->\n                <ng-template pTemplate=\"body\" let-item let-rowIndex=\"rowIndex\">\n                    <tr>\n\n                        <td class=\"text-center\">\n                            {{ rowIndex + 1 }}\n                        </td>\n                        <td class=\"text-center\">\n                            <img class=\"icon-img\" [src]=\"item.image\">\n                        </td>\n                        <td class=\"text-left\">\n                            {{item.PRODUCT_TYPE_NAME}}\n                        </td>\n                        <td class=\"text-left\">\n                            {{item.name}}\n                        </td>\n\n                        <td class=\"text-center\">\n                            <div class=\"dropdown\">\n                                <button pButton type=\"button\" class=\"p-button-secondary p-button-text\"><span></span>\n                                    <i class=\"pi pi-bars\"></i>\n                                </button>\n                                <div class=\"dropdown-content\" tabindex=\"0\" style=\"cursor: pointer;\">\n                                    <a [routerLink]=\"['/app/product']\" tabindex=\"0\"\n                                        [queryParams]=\"{product_type_id:urlData.product_type_id,product_brand_id:item.id}\"><i\n                                            class=\"pi pi-list pr-2\"\n                                            *ngIf=\"permissions?.view_product\"></i>\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</a>\n                                    <button type=\"button\" class=\"dropdown-action\" (click)=\"openEdit(item.id)\" *ngIf=\"permissions?.manag_product_type\"><i\n                                            class=\"pi pi-file-edit pr-2\"></i>\u0E41\u0E01\u0E49\u0E44\u0E02</button>\n                                    <a href=\"javascript:void(0);\" (click)=\"openDelete(item.id)\"><i\n                                            class=\"pi pi-trash pr-2\"></i>\u0E25\u0E1A</a>\n                                </div>\n                            </div>\n                        </td>\n\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"emptyMessage\" let-columns>\n                    <tr>\n                        <td [attr.colspan]=\"4\" class=\"text-center\">\u0E44\u0E21\u0E48\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25</td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </div>\n    </div>\n</div>\n\n<p-dialog header=\"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\" [(visible)]=\"displayAdd\" modal=\"modal\" showEffect=\"fade\" [style]=\"{width: '30vw'}\"\n    [breakpoints]=\"{'960px': '75vw'}\">\n    <form [formGroup]=\"formAdd\">\n        <div class=\"card p-fluid\">\n            <div class=\"grid\">\n                <div class=\"col-12 py-0 pb-5\" style=\"text-align: center;\">\n                    <img *ngIf=\"!formAdd.get('upload_image_status')!.value\" class=\"img\" src=\"assets/images/product.png\"\n                        width=\"100\" height=\"100\" style=\"cursor: pointer;\" (click)=\"fileinputadd.click()\">\n\n                    <img *ngIf=\"formAdd.get('upload_image_status')!.value\" class=\"img\"\n                        [src]=\"formAdd.get('image')!.value\" width=\"100\" height=\"100\" style=\"cursor: pointer;\"\n                        (click)=\"fileinputadd.click()\">\n\n                    <input #fileinputadd type=\"file\" (change)=\"onSelectImageProfile($event)\" accept=\"image/*\" hidden />\n                </div>\n                <div class=\"col-12 py-0\">\n                    <div class=\"field\">\n                        <label htmlFor=\"name\">\u0E0A\u0E37\u0E48\u0E2D\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</label>\n                        <input pInputText type=\"text\" formControlName=\"name\" maxlength=\"200\" />\n                    </div>\n                </div>\n                <div class=\"col-12 pb-0\">\n                    <div class=\"field\">\n                        <label for=\"product_type\">\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</label>\n                        <p-dropdown [options]=\"product_types\" optionLabel=\"name\" optionValue=\"id\" [filter]=\"true\"\n                            filterBy=\"name\" placeholder=\"\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\" formControlName=\"product_type_id\"\n                            appendTo=\"body\">\n                        </p-dropdown>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n\n    <ng-template pTemplate=\"footer\">\n        <button pButton icon=\"pi pi-check\" (click)=\"addConfirm()\" label=\"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\"\n            class=\"p-button-success mr-2 outline\"></button>\n        <button pButton icon=\"pi pi-times\" (click)=\"addCancel()\" label=\"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\"\n            class=\"p-button-danger mr-2 outline\"></button>\n    </ng-template>\n</p-dialog>\n\n<p-dialog header=\"\u0E41\u0E01\u0E49\u0E44\u0E02\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\" [(visible)]=\"displayEdit\" modal=\"modal\" showEffect=\"fade\" [style]=\"{width: '30vw'}\"\n    [breakpoints]=\"{'960px': '75vw'}\">\n    <form [formGroup]=\"formEdit\">\n        <div class=\"card p-fluid\">\n            <div class=\"grid\">\n                <div class=\"col-12 py-0 pb-5\" style=\"text-align: center;\">\n                    <img class=\"img\" [src]=\"formEdit.get('image')!.value\" width=\"100\" height=\"100\"\n                        style=\"cursor: pointer;\" (click)=\"fileinputedit.click()\">\n\n                    <input #fileinputedit type=\"file\" (change)=\"onSelectImageProfileEdit($event)\" accept=\"image/*\"\n                        hidden />\n                </div>\n                <div class=\"col-12 py-0\">\n                    <div class=\"field\">\n                        <label htmlFor=\"name\">\u0E0A\u0E37\u0E48\u0E2D\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</label>\n                        <input pInputText type=\"text\" formControlName=\"name\" maxlength=\"200\" />\n                    </div>\n                </div>\n                <div class=\"col-12 pb-0\">\n                    <div class=\"field\">\n                        <label for=\"product_type\">\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</label>\n                        <p-dropdown [options]=\"product_types\" optionLabel=\"name\" optionValue=\"id\" [filter]=\"true\"\n                            filterBy=\"name\" placeholder=\"\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\" formControlName=\"product_type_id\"\n                            appendTo=\"body\">\n                        </p-dropdown>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n\n    <ng-template pTemplate=\"footer\">\n        <button pButton icon=\"pi pi-check\" (click)=\"confirmEdit()\" label=\"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\"\n            class=\"p-button-success mr-2 outline\"></button>\n        <button pButton icon=\"pi pi-times\" (click)=\"cancelEdit()\" label=\"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\"\n            class=\"p-button-danger mr-2 outline\"></button>\n    </ng-template>\n</p-dialog>\n\n<p-dialog header=\"\u0E25\u0E1A\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\" [(visible)]=\"displayDelete\" modal=\"modal\" showEffect=\"fade\" [style]=\"{width: '30vw'}\"\n    [breakpoints]=\"{'960px': '75vw'}\">\n    <div class=\"card p-fluid\">\n        <div class=\"grid\">\n            <div class=\"col-12 py-0\">\n                <h5>\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E19\u0E35\u0E49\u0E43\u0E0A\u0E48\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?</h5>\n            </div>\n        </div>\n    </div>\n\n    <ng-template pTemplate=\"footer\">\n        <button pButton icon=\"pi pi-check\" (click)=\"confirmDelete()\" label=\"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\"\n            class=\"p-button-success mr-2 outline\"></button>\n        <button pButton icon=\"pi pi-times\" (click)=\"cancelDelete()\" label=\"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\"\n            class=\"p-button-danger mr-2 outline\"></button>\n    </ng-template>\n</p-dialog>\n\n<p-toast position=\"bottom-center\"></p-toast>\n\r\n\r\n" }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.ProductBrandService }, { type: i3.Router }, { type: i3.ActivatedRoute }, { type: i4.MessageService }]; }, { table: [{
            type: ViewChild,
            args: ['dt']
        }] }); })();
//# sourceMappingURL=product_brand.component.js.map