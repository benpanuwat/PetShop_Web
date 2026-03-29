import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../product/product.service";
import * as i3 from "@angular/router";
import * as i4 from "primeng/api";
import * as i5 from "@angular/common";
import * as i6 from "primeng/button";
import * as i7 from "primeng/inputtext";
import * as i8 from "primeng/dialog";
import * as i9 from "primeng/dropdown";
import * as i10 from "primeng/inputtextarea";
import * as i11 from "primeng/table";
import * as i12 from "primeng/toast";
const _c0 = ["dt"];
function ProductComponent_ng_template_21_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 46)(1, "button", 47);
    i0.ɵɵlistener("click", function ProductComponent_ng_template_21_div_4_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r12.openAdd()); });
    i0.ɵɵelementEnd()();
} }
function ProductComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41)(1, "span", 42);
    i0.ɵɵelement(2, "i", 43)(3, "input", 44);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, ProductComponent_ng_template_21_div_4_Template, 2, 0, "div", 45);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("formControl", ctx_r1.search);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.permissions == null ? null : ctx_r1.permissions.manag_product_type);
} }
function ProductComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th", 48)(2, "div", 49);
    i0.ɵɵtext(3, " \u0E25\u0E33\u0E14\u0E31\u0E1A ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "th", 48)(5, "div", 49);
    i0.ɵɵtext(6, " \u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "th", 48)(8, "div", 49);
    i0.ɵɵtext(9, " \u0E23\u0E2B\u0E31\u0E2A ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "th", 50)(11, "div", 51);
    i0.ɵɵtext(12, " \u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "th", 50)(14, "div", 51);
    i0.ɵɵtext(15, " \u0E0A\u0E37\u0E48\u0E2D\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "th", 50)(17, "div", 51);
    i0.ɵɵtext(18, " \u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "th", 48)(20, "div", 49);
    i0.ɵɵtext(21, " \u0E23\u0E32\u0E04\u0E32 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "th", 52)(23, "div", 49);
    i0.ɵɵtext(24, " \u0E08\u0E31\u0E14\u0E01\u0E32\u0E23 ");
    i0.ɵɵelementEnd()()();
} }
function ProductComponent_ng_template_23_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 61);
    i0.ɵɵlistener("click", function ProductComponent_ng_template_23_button_22_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r19); const item_r14 = i0.ɵɵnextContext().$implicit; const ctx_r17 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r17.openEdit(item_r14.id)); });
    i0.ɵɵelement(1, "i", 62);
    i0.ɵɵtext(2, "\u0E41\u0E01\u0E49\u0E44\u0E02");
    i0.ɵɵelementEnd();
} }
function ProductComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 53);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 53);
    i0.ɵɵelement(4, "img", 54);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 55);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td", 55);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td", 55);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td", 55);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td", 53);
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td", 53)(17, "div", 56)(18, "button", 57);
    i0.ɵɵelement(19, "span")(20, "i", 58);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 59);
    i0.ɵɵtemplate(22, ProductComponent_ng_template_23_button_22_Template, 3, 0, "button", 60);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const rowIndex_r15 = ctx.rowIndex;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", rowIndex_r15 + 1, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", item_r14.image, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r14.code, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r14.PRODUCT_TYPE_NAME, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r14.PRODUCT_BRAND_NAME, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r14.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(15, 8, item_r14.price), ".- ");
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", ctx_r3.permissions == null ? null : ctx_r3.permissions.manag_product_type);
} }
function ProductComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 53);
    i0.ɵɵtext(2, "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("colspan", 4);
} }
function ProductComponent_img_30_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 63);
    i0.ɵɵlistener("click", function ProductComponent_img_30_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r22); i0.ɵɵnextContext(); const _r7 = i0.ɵɵreference(33); return i0.ɵɵresetView(_r7.click()); });
    i0.ɵɵelementEnd();
} }
function ProductComponent_img_31_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 38);
    i0.ɵɵlistener("click", function ProductComponent_img_31_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r24); i0.ɵɵnextContext(); const _r7 = i0.ɵɵreference(33); return i0.ɵɵresetView(_r7.click()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r6.formAdd.get("image").value, i0.ɵɵsanitizeUrl);
} }
function ProductComponent_ng_template_75_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 64);
    i0.ɵɵlistener("click", function ProductComponent_ng_template_75_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r25.addConfirm()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "button", 65);
    i0.ɵɵlistener("click", function ProductComponent_ng_template_75_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r26); const ctx_r27 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r27.addCancel()); });
    i0.ɵɵelementEnd();
} }
function ProductComponent_ng_template_125_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 64);
    i0.ɵɵlistener("click", function ProductComponent_ng_template_125_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r28.confirmEdit()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "button", 65);
    i0.ɵɵlistener("click", function ProductComponent_ng_template_125_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r29); const ctx_r30 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r30.cancelEdit()); });
    i0.ɵɵelementEnd();
} }
const _c1 = function () { return [10, 25, 50]; };
const _c2 = function () { return { width: "30vw" }; };
const _c3 = function () { return { "960px": "75vw" }; };
export class ProductComponent {
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
        this.formAdd = this._fb.group({
            product_type_id: 0,
            product_brand_id: 0,
            code: '',
            name: '',
            description: '',
            upload_image_status: false,
            image: '',
            price: 0,
            pack_count: 0,
            pack_price: 0,
            // prices: this._fb.array([]),
        });
        this.formEdit = this._fb.group({
            product_type_id: 0,
            product_brand_id: 0,
            code: '',
            name: '',
            description: '',
            upload_image_status: false,
            image: '',
            price: 0,
            pack_count: 0,
            pack_price: 0,
            // prices: this._fb.array([]),
        });
        this.search.valueChanges
            .pipe(debounceTime(500), distinctUntilChanged(), tap((query) => {
            this.loading = true;
            const first = this.table.first;
            const rows = this.table.rows;
            const page = first / rows + 1;
            this._service.page({ perPage: rows, page: page, search: query, searchId1: this.urlData.product_type_id, searchId2: this.urlData.product_brand_id })
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
        this._service.page({ perPage: event.rows, page, search: this.search.value, searchId1: this.urlData.product_type_id, searchId2: this.urlData.product_brand_id })
            .subscribe((resp) => {
            this.data = resp.data;
            this.totalRecords = resp.totalRecords;
            this.loading = false;
        });
    }
    // get prices(): FormArray {
    //   return this.formAdd.get('prices') as FormArray;
    // }
    // get edit_prices(): FormArray {
    //   return this.formEdit.get('prices') as FormArray;
    // }
    // addPrice() {
    //   const itemGroup = this._fb.group({
    //     id: 0,
    //     count: 1,
    //     price: 0,
    //   });
    //   this.prices.push(itemGroup);
    // }
    // removePrice(index: number) {
    //   if (this.prices.length > 1)
    //     this.prices.removeAt(index);
    // }
    // addEditPrice() {
    //   const itemGroup = this._fb.group({
    //     id: 0,
    //     count: 1,
    //     price: 0,
    //   });
    //   this.edit_prices.push(itemGroup);
    // }
    // removeEditPrice(index: number) {
    //   if (this.edit_prices.length > 1)
    //     this.edit_prices.removeAt(index);
    // }
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
    openAdd() {
        this.formAdd = this._fb.group({
            product_type_id: 0,
            product_brand_id: 0,
            code: '',
            name: '',
            upload_image_status: false,
            image: '',
            price: 0,
            pack_count: 0,
            pack_price: 0,
            // prices: this._fb.array([]),
        });
        // this.addPrice();
        this.displayAdd = true;
    }
    addConfirm() {
        this._service.addProduct(this.formAdd.value).subscribe({
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
            product_type_id: 0,
            product_brand_id: 0,
            code: '',
            name: '',
            description: '',
            upload_image_status: false,
            image: '',
            price: 0,
            pack_count: 0,
            pack_price: 0,
            // prices: this._fb.array([]),
        });
        this._service.getProduct(this.editId)
            .subscribe((resp) => {
            this.formEdit.patchValue({
                ...resp.data
            });
            // this.edit_prices.clear();
            // if (resp.data.prices != null) {
            //   for (let price of resp.data.prices) {
            //     const itemGroup = this._fb.group({
            //       id: [price.id],
            //       count: [price.count],
            //       price: [price.price],
            //     });
            //     this.edit_prices.push(itemGroup);
            //   };
            // }
            this.selectProductType(this.formEdit.value.product_type_id);
            this.displayEdit = true;
        });
    }
    confirmEdit() {
        this._service.updateProduct(this.editId, this.formEdit.value).subscribe({
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
    static { this.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.ProductService), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i4.MessageService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductComponent, selectors: [["app-product"]], viewQuery: function ProductComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.table = _t.first);
        } }, decls: 127, vars: 40, consts: [[1, "grid"], [1, "col-12"], [1, "card", "p-fluid"], [3, "formGroup"], [1, "col-12", "md:col-6", "pb-0"], [1, "field"], ["for", "product_type"], ["optionLabel", "name", "filterBy", "name", "placeholder", "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32", "formControlName", "product_type", 3, "options", "filter", "showClear", "onChange"], [1, "col-12", "md:col-6"], ["htmlFor", "location"], ["optionLabel", "name", "filterBy", "name", "placeholder", "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32", "formControlName", "product_brand", 3, "options", "filter", "showClear", "onChange"], [1, "card"], ["dataKey", "id", "styleClass", "p-datatable-gridlines", 3, "value", "lazy", "paginator", "loading", "rows", "totalRecords", "rowsPerPageOptions", "onLazyLoad"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptyMessage"], ["header", "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32", "modal", "modal", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], [1, "col-12", "py-0", "pb-5", 2, "text-align", "center"], ["class", "img", "src", "assets/images/product.png", "width", "100", "height", "100", "style", "cursor: pointer;", 3, "click", 4, "ngIf"], ["class", "img", "width", "100", "height", "100", "style", "cursor: pointer;", 3, "src", "click", 4, "ngIf"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change"], ["fileinputadd", ""], [1, "col-12", "py-0"], ["htmlFor", "name"], ["pInputText", "", "type", "text", "formControlName", "code", "maxlength", "50"], ["pInputText", "", "type", "text", "formControlName", "name", "maxlength", "200"], ["pInputTextarea", "", "formControlName", "description", "maxlength", "1000", "rows", "3"], [1, "col-12", "pb-0"], ["optionLabel", "name", "optionValue", "id", "filterBy", "name", "placeholder", "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32", "formControlName", "product_type_id", "appendTo", "body", 3, "options", "filter", "onChange"], ["optionLabel", "name", "optionValue", "id", "filterBy", "name", "placeholder", "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32", "formControlName", "product_brand_id", "appendTo", "body", 3, "options", "filter"], [1, "col-4", "pb-0"], ["pInputText", "", "type", "number", "formControlName", "price", "min", "0", "max", "99999"], ["pInputText", "", "type", "number", "formControlName", "pack_count", "min", "0", "max", "99999"], ["pInputText", "", "type", "number", "formControlName", "pack_price", "min", "0", "max", "99999"], ["pTemplate", "footer"], ["header", "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32", "modal", "modal", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], ["width", "100", "height", "100", 1, "img", 2, "cursor", "pointer", 3, "src", "click"], ["fileinputedit", ""], ["position", "bottom-center"], [1, "flex", "justify-content-between", "flex-column", "sm:flex-row"], [1, "p-input-icon-left"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "\u0E04\u0E49\u0E19\u0E2B\u0E32", 1, "w-full", 3, "formControl"], ["class", "pt-1 flex align-items-center", 4, "ngIf"], [1, "pt-1", "flex", "align-items-center"], ["pButton", "", "icon", "pi pi-plus", "label", "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32", 2, "width", "auto", 3, "click"], [2, "width", "100px"], [1, "flex", "justify-content-center", "align-items-center"], [2, "width", "auto"], [1, "flex", "justify-content-start", "align-items-center"], [2, "width", "70px"], [1, "text-center"], [1, "icon-img", 3, "src"], [1, "text-left"], [1, "dropdown"], ["pButton", "", "type", "button", 1, "p-button-secondary", "p-button-text"], [1, "pi", "pi-bars"], ["tabindex", "0", 1, "dropdown-content", 2, "cursor", "pointer"], ["type", "button", "class", "dropdown-action", 3, "click", 4, "ngIf"], ["type", "button", 1, "dropdown-action", 3, "click"], [1, "pi", "pi-file-edit", "pr-2"], ["src", "assets/images/product.png", "width", "100", "height", "100", 1, "img", 2, "cursor", "pointer", 3, "click"], ["pButton", "", "icon", "pi pi-check", "label", "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19", 1, "p-button-success", "mr-2", "outline", 3, "click"], ["pButton", "", "icon", "pi pi-times", "label", "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01", 1, "p-button-danger", "mr-2", "outline", 3, "click"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
            const _r31 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form", 3)(4, "div", 0)(5, "div", 4)(6, "div", 5)(7, "label", 6);
            i0.ɵɵtext(8, "\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "p-dropdown", 7);
            i0.ɵɵlistener("onChange", function ProductComponent_Template_p_dropdown_onChange_9_listener() { return ctx.selectProductTypeFilter(); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(10, "div", 8)(11, "div", 5)(12, "label", 9);
            i0.ɵɵtext(13, "\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "p-dropdown", 10);
            i0.ɵɵlistener("onChange", function ProductComponent_Template_p_dropdown_onChange_14_listener() { return ctx.selectProductBrandFilter(); });
            i0.ɵɵelementEnd()()()()()()();
            i0.ɵɵelementStart(15, "div", 1)(16, "div", 11)(17, "h5");
            i0.ɵɵtext(18, "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "p-table", 12, 13);
            i0.ɵɵlistener("onLazyLoad", function ProductComponent_Template_p_table_onLazyLoad_19_listener($event) { return ctx.loadTable($event); });
            i0.ɵɵtemplate(21, ProductComponent_ng_template_21_Template, 5, 2, "ng-template", 14);
            i0.ɵɵtemplate(22, ProductComponent_ng_template_22_Template, 25, 0, "ng-template", 15);
            i0.ɵɵtemplate(23, ProductComponent_ng_template_23_Template, 23, 10, "ng-template", 16);
            i0.ɵɵtemplate(24, ProductComponent_ng_template_24_Template, 3, 1, "ng-template", 17);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(25, "p-dialog", 18);
            i0.ɵɵlistener("visibleChange", function ProductComponent_Template_p_dialog_visibleChange_25_listener($event) { return ctx.displayAdd = $event; });
            i0.ɵɵelementStart(26, "form", 3)(27, "div", 2)(28, "div", 0)(29, "div", 19);
            i0.ɵɵtemplate(30, ProductComponent_img_30_Template, 1, 0, "img", 20);
            i0.ɵɵtemplate(31, ProductComponent_img_31_Template, 1, 1, "img", 21);
            i0.ɵɵelementStart(32, "input", 22, 23);
            i0.ɵɵlistener("change", function ProductComponent_Template_input_change_32_listener($event) { return ctx.onSelectImageProfile($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(34, "div", 24)(35, "div", 5)(36, "label", 25);
            i0.ɵɵtext(37, "\u0E23\u0E2B\u0E31\u0E2A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(38, "input", 26);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(39, "div", 24)(40, "div", 5)(41, "label", 25);
            i0.ɵɵtext(42, "\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(43, "input", 27);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(44, "div", 24)(45, "div", 5)(46, "label", 25);
            i0.ɵɵtext(47, "\u0E25\u0E32\u0E22\u0E23\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(48, "textarea", 28);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(49, "div", 29)(50, "div", 5)(51, "label", 6);
            i0.ɵɵtext(52, "\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "p-dropdown", 30);
            i0.ɵɵlistener("onChange", function ProductComponent_Template_p_dropdown_onChange_53_listener() { return ctx.selectProductType(ctx.formAdd.get("product_type_id").value); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(54, "div", 29)(55, "div", 5)(56, "label", 9);
            i0.ɵɵtext(57, "\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(58, "p-dropdown", 31);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(59, "div", 32)(60, "div", 5)(61, "label", 25);
            i0.ɵɵtext(62, "\u0E23\u0E32\u0E04\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(63, "input", 33);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(64, "div", 32)(65, "div", 5)(66, "label", 25);
            i0.ɵɵtext(67, "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E15\u0E48\u0E2D\u0E41\u0E1E\u0E47\u0E04");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(68, "input", 34);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(69, "div", 32)(70, "div", 5)(71, "label", 25);
            i0.ɵɵtext(72, "\u0E23\u0E32\u0E04\u0E32\u0E17\u0E31\u0E49\u0E41\u0E1E\u0E47\u0E04");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(73, "input", 35);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(74, "div", 29);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(75, ProductComponent_ng_template_75_Template, 2, 0, "ng-template", 36);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(76, "p-dialog", 37);
            i0.ɵɵlistener("visibleChange", function ProductComponent_Template_p_dialog_visibleChange_76_listener($event) { return ctx.displayEdit = $event; });
            i0.ɵɵelementStart(77, "form", 3)(78, "div", 2)(79, "div", 0)(80, "div", 19)(81, "img", 38);
            i0.ɵɵlistener("click", function ProductComponent_Template_img_click_81_listener() { i0.ɵɵrestoreView(_r31); const _r9 = i0.ɵɵreference(83); return i0.ɵɵresetView(_r9.click()); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(82, "input", 22, 39);
            i0.ɵɵlistener("change", function ProductComponent_Template_input_change_82_listener($event) { return ctx.onSelectImageProfileEdit($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(84, "div", 24)(85, "div", 5)(86, "label", 25);
            i0.ɵɵtext(87, "\u0E23\u0E2B\u0E31\u0E2A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(88, "input", 26);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(89, "div", 24)(90, "div", 5)(91, "label", 25);
            i0.ɵɵtext(92, "\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(93, "input", 27);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(94, "div", 24)(95, "div", 5)(96, "label", 25);
            i0.ɵɵtext(97, "\u0E25\u0E32\u0E22\u0E23\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(98, "textarea", 28);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(99, "div", 29)(100, "div", 5)(101, "label", 6);
            i0.ɵɵtext(102, "\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(103, "p-dropdown", 30);
            i0.ɵɵlistener("onChange", function ProductComponent_Template_p_dropdown_onChange_103_listener() { return ctx.selectProductType(ctx.formEdit.get("product_type_id").value); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(104, "div", 29)(105, "div", 5)(106, "label", 9);
            i0.ɵɵtext(107, "\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(108, "p-dropdown", 31);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(109, "div", 32)(110, "div", 5)(111, "label", 25);
            i0.ɵɵtext(112, "\u0E23\u0E32\u0E04\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(113, "input", 33);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(114, "div", 32)(115, "div", 5)(116, "label", 25);
            i0.ɵɵtext(117, "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E15\u0E48\u0E2D\u0E41\u0E1E\u0E47\u0E04");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(118, "input", 34);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(119, "div", 32)(120, "div", 5)(121, "label", 25);
            i0.ɵɵtext(122, "\u0E23\u0E32\u0E04\u0E32\u0E17\u0E31\u0E49\u0E41\u0E1E\u0E47\u0E04");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(123, "input", 35);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(124, "div", 29);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(125, ProductComponent_ng_template_125_Template, 2, 0, "ng-template", 36);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(126, "p-toast", 40);
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("formGroup", ctx.formSetting);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("options", ctx.filter_product_types)("filter", true)("showClear", true);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("options", ctx.filter_product_brands)("filter", true)("showClear", true);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("value", ctx.data)("lazy", true)("paginator", true)("loading", ctx.loading)("rows", 10)("totalRecords", ctx.totalRecords)("rowsPerPageOptions", i0.ɵɵpureFunction0(35, _c1));
            i0.ɵɵadvance(6);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(36, _c2));
            i0.ɵɵproperty("visible", ctx.displayAdd)("breakpoints", i0.ɵɵpureFunction0(37, _c3));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.formAdd);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", !ctx.formAdd.get("upload_image_status").value);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.formAdd.get("upload_image_status").value);
            i0.ɵɵadvance(22);
            i0.ɵɵproperty("options", ctx.product_types)("filter", true);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("options", ctx.product_brands)("filter", true);
            i0.ɵɵadvance(18);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(38, _c2));
            i0.ɵɵproperty("visible", ctx.displayEdit)("breakpoints", i0.ɵɵpureFunction0(39, _c3));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.formEdit);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("src", ctx.formEdit.get("image").value, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(22);
            i0.ɵɵproperty("options", ctx.product_types)("filter", true);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("options", ctx.product_brands)("filter", true);
        } }, dependencies: [i5.NgIf, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.MaxLengthValidator, i1.MinValidator, i1.MaxValidator, i1.FormControlDirective, i1.FormGroupDirective, i1.FormControlName, i4.PrimeTemplate, i6.ButtonDirective, i7.InputText, i8.Dialog, i9.Dropdown, i10.InputTextarea, i11.Table, i12.Toast, i5.DecimalPipe] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductComponent, [{
        type: Component,
        args: [{ selector: 'app-product', template: "<div class=\"grid\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card p-fluid\">\r\n            <form [formGroup]=\"formSetting\">\r\n                <div class=\"grid\">\r\n                    <div class=\"col-12 md:col-6 pb-0\">\r\n                        <div class=\"field\">\r\n                            <label for=\"product_type\">\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</label>\r\n                            <p-dropdown [options]=\"filter_product_types\" optionLabel=\"name\" [filter]=\"true\"\r\n                                filterBy=\"name\" [showClear]=\"true\" placeholder=\"\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\"\r\n                                formControlName=\"product_type\" (onChange)=\"selectProductTypeFilter()\">\r\n                            </p-dropdown>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-12 md:col-6\">\r\n                        <div class=\"field\">\r\n                            <label htmlFor=\"location\">\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</label>\r\n                            <p-dropdown [options]=\"filter_product_brands\" optionLabel=\"name\" [filter]=\"true\"\r\n                                filterBy=\"name\" [showClear]=\"true\" placeholder=\"\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\"\r\n                                formControlName=\"product_brand\" (onChange)=\"selectProductBrandFilter()\">\r\n                            </p-dropdown>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <h5>\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</h5>\r\n            <p-table #dt [value]=\"data\" [lazy]=\"true\" (onLazyLoad)=\"loadTable($event)\" dataKey=\"id\" [paginator]=\"true\"\r\n                [loading]=\"loading\" [rows]=\"10\" [totalRecords]=\"totalRecords\" styleClass=\"p-datatable-gridlines\"\r\n                [rowsPerPageOptions]=\"[10, 25, 50]\">\r\n                <!-- \u0E40\u0E1B\u0E34\u0E14 ng-template -->\r\n                <ng-template pTemplate=\"caption\">\r\n                    <div class=\"flex justify-content-between flex-column sm:flex-row\">\r\n                        <span class=\"p-input-icon-left\">\r\n                            <i class=\"pi pi-search\"></i>\r\n                            <input pInputText type=\"text\" [formControl]=\"search\" placeholder=\"\u0E04\u0E49\u0E19\u0E2B\u0E32\" class=\"w-full\" />\r\n                        </span>\r\n\r\n                        <div class=\"pt-1 flex align-items-center\" *ngIf=\"permissions?.manag_product_type\">\r\n\r\n                            <button (click)=\"openAdd()\" pButton icon=\"pi pi-plus\" label=\"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\"\r\n                                style=\"width:auto;\"></button>\r\n                        </div>\r\n                    </div>\r\n                </ng-template>\r\n                <!-- \u0E1B\u0E34\u0E14 ng-template -->\r\n\r\n                <ng-template pTemplate=\"header\">\r\n                    <tr>\r\n                        <th style=\"width: 100px;\">\r\n                            <div class=\"flex justify-content-center  align-items-center\">\r\n                                \u0E25\u0E33\u0E14\u0E31\u0E1A\r\n                            </div>\r\n                        </th>\r\n                        <th style=\"width: 100px;\">\r\n                            <div class=\"flex justify-content-center  align-items-center\">\r\n                                \u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E\r\n                            </div>\r\n                        </th>\r\n                        <th style=\"width: 100px;\">\r\n                            <div class=\"flex justify-content-center align-items-center\">\r\n                                \u0E23\u0E2B\u0E31\u0E2A\r\n                            </div>\r\n                        </th>\r\n                        <th style=\"width: auto;\">\r\n                            <div class=\"flex justify-content-start align-items-center\">\r\n                                \u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\r\n                            </div>\r\n                        </th>\r\n                        <th style=\"width: auto;\">\r\n                            <div class=\"flex justify-content-start align-items-center\">\r\n                                \u0E0A\u0E37\u0E48\u0E2D\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\r\n                            </div>\r\n                        </th>\r\n                        <th style=\"width: auto;\">\r\n                            <div class=\"flex justify-content-start align-items-center\">\r\n                                \u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\r\n                            </div>\r\n                        </th>\r\n                        <th style=\"width: 100px;\">\r\n                            <div class=\"flex justify-content-center align-items-center\">\r\n                                \u0E23\u0E32\u0E04\u0E32\r\n                            </div>\r\n                        </th>\r\n                        <th style=\"width: 70px;\">\r\n                            <div class=\"flex justify-content-center align-items-center\">\r\n                                \u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\r\n                            </div>\r\n                        </th>\r\n                    </tr>\r\n                </ng-template>\r\n\r\n                <!-- open template button edit and delete  -->\r\n                <ng-template pTemplate=\"body\" let-item let-rowIndex=\"rowIndex\">\r\n                    <tr>\r\n\r\n                        <td class=\"text-center\">\r\n                            {{ rowIndex + 1 }}\r\n                        </td>\r\n                        <td class=\"text-center\">\r\n                            <img class=\"icon-img\" [src]=\"item.image\">\r\n                        </td>\r\n                        <td class=\"text-left\">\r\n                            {{item.code}}\r\n                        </td>\r\n                        <td class=\"text-left\">\r\n                            {{item.PRODUCT_TYPE_NAME}}\r\n                        </td>\r\n                        <td class=\"text-left\">\r\n                            {{item.PRODUCT_BRAND_NAME}}\r\n                        </td>\r\n                        <td class=\"text-left\">\r\n                            {{item.name}}\r\n                        </td>\r\n                        <td class=\"text-center\">\r\n                            {{item.price|number}}.-\r\n                        </td>\r\n\r\n                        <td class=\"text-center\">\r\n                            <div class=\"dropdown\">\r\n                                <button pButton type=\"button\" class=\"p-button-secondary p-button-text\"><span></span>\r\n                                    <i class=\"pi pi-bars\"></i>\r\n                                </button>\r\n                                <div class=\"dropdown-content\" tabindex=\"0\" style=\"cursor: pointer;\">\r\n                                    <button type=\"button\" class=\"dropdown-action\" (click)=\"openEdit(item.id)\" *ngIf=\"permissions?.manag_product_type\"><i\r\n                                            class=\"pi pi-file-edit pr-2\"></i>\u0E41\u0E01\u0E49\u0E44\u0E02</button>\r\n                                </div>\r\n                            </div>\r\n                        </td>\r\n\r\n                    </tr>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"emptyMessage\" let-columns>\r\n                    <tr>\r\n                        <td [attr.colspan]=\"4\" class=\"text-center\">\u0E44\u0E21\u0E48\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25</td>\r\n                    </tr>\r\n                </ng-template>\r\n            </p-table>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<p-dialog header=\"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\" [(visible)]=\"displayAdd\" modal=\"modal\" showEffect=\"fade\" [style]=\"{width: '30vw'}\"\r\n    [breakpoints]=\"{'960px': '75vw'}\">\r\n    <form [formGroup]=\"formAdd\">\r\n        <div class=\"card p-fluid\">\r\n            <div class=\"grid\">\r\n                <div class=\"col-12 py-0 pb-5\" style=\"text-align: center;\">\r\n                    <img *ngIf=\"!formAdd.get('upload_image_status')!.value\" class=\"img\" src=\"assets/images/product.png\"\r\n                        width=\"100\" height=\"100\" style=\"cursor: pointer;\" (click)=\"fileinputadd.click()\">\r\n\r\n                    <img *ngIf=\"formAdd.get('upload_image_status')!.value\" class=\"img\"\r\n                        [src]=\"formAdd.get('image')!.value\" width=\"100\" height=\"100\" style=\"cursor: pointer;\"\r\n                        (click)=\"fileinputadd.click()\">\r\n\r\n                    <input #fileinputadd type=\"file\" (change)=\"onSelectImageProfile($event)\" accept=\"image/*\" hidden />\r\n                </div>\r\n                <div class=\"col-12 py-0\">\r\n                    <div class=\"field\">\r\n                        <label htmlFor=\"name\">\u0E23\u0E2B\u0E31\u0E2A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</label>\r\n                        <input pInputText type=\"text\" formControlName=\"code\" maxlength=\"50\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 py-0\">\r\n                    <div class=\"field\">\r\n                        <label htmlFor=\"name\">\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</label>\r\n                        <input pInputText type=\"text\" formControlName=\"name\" maxlength=\"200\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 py-0\">\r\n                    <div class=\"field\">\r\n                        <label htmlFor=\"name\">\u0E25\u0E32\u0E22\u0E23\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</label>\r\n                        <textarea pInputTextarea formControlName=\"description\" maxlength=\"1000\" rows=\"3\"></textarea>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 pb-0\">\r\n                    <div class=\"field\">\r\n                        <label for=\"product_type\">\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</label>\r\n                        <p-dropdown [options]=\"product_types\" optionLabel=\"name\" optionValue=\"id\" [filter]=\"true\"\r\n                            filterBy=\"name\" placeholder=\"\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\" formControlName=\"product_type_id\"\r\n                            (onChange)=\"selectProductType(formAdd.get('product_type_id')!.value)\" appendTo=\"body\">\r\n                        </p-dropdown>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 pb-0\">\r\n                    <div class=\"field\">\r\n                        <label htmlFor=\"location\">\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</label>\r\n                        <p-dropdown [options]=\"product_brands\" optionLabel=\"name\" optionValue=\"id\" [filter]=\"true\"\r\n                            filterBy=\"name\" placeholder=\"\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\" formControlName=\"product_brand_id\"\r\n                            appendTo=\"body\">\r\n                        </p-dropdown>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-4 pb-0\">\r\n                    <div class=\"field\">\r\n                        <label htmlFor=\"name\">\u0E23\u0E32\u0E04\u0E32</label>\r\n                        <input pInputText type=\"number\" formControlName=\"price\" min=\"0\" max=\"99999\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-4 pb-0\">\r\n                    <div class=\"field\">\r\n                        <label htmlFor=\"name\">\u0E08\u0E33\u0E19\u0E27\u0E19\u0E15\u0E48\u0E2D\u0E41\u0E1E\u0E47\u0E04</label>\r\n                        <input pInputText type=\"number\" formControlName=\"pack_count\" min=\"0\" max=\"99999\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-4 pb-0\">\r\n                    <div class=\"field\">\r\n                        <label htmlFor=\"name\">\u0E23\u0E32\u0E04\u0E32\u0E17\u0E31\u0E49\u0E41\u0E1E\u0E47\u0E04</label>\r\n                        <input pInputText type=\"number\" formControlName=\"pack_price\" min=\"0\" max=\"99999\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 pb-0\">\r\n                    <!-- <div class=\"field\">\r\n                        <label htmlFor=\"name\">\u0E23\u0E32\u0E04\u0E32</label>\r\n                        <p-table styleClass=\"p-datatable-gridlines\" [value]=\"prices.controls\">\r\n                            <ng-template pTemplate=\"header\">\r\n                                <tr>\r\n                                    <th style=\"width: 40%;\">\r\n                                        <div class=\"flex justify-content-center  align-items-center\">\r\n                                            \u0E08\u0E33\u0E19\u0E27\u0E19\r\n                                        </div>\r\n                                    </th>\r\n                                    <th style=\"width: 40%;\">\r\n                                        <div class=\"flex justify-content-center  align-items-center\">\r\n                                            \u0E23\u0E32\u0E04\u0E32\r\n                                        </div>\r\n                                    </th>\r\n                                    <th style=\"width: 20%;\">\r\n                                        <div class=\"flex justify-content-center  align-items-center\">\r\n                                            \u0E25\u0E1A\r\n                                        </div>\r\n                                    </th>\r\n                                </tr>\r\n                            </ng-template>\r\n                            <ng-template pTemplate=\"body\" formArrayName=\"prices\" let-item let-i=\"rowIndex\">\r\n                                <tr [formGroupName]=\"i\">\r\n                                    <td style=\"vertical-align: top;\">\r\n                                        <p-inputnumber mode=\"decimal\" locale=\"en-us\" formControlName=\"count\"\r\n                                            [readonly]=\"i == 0\" maxlength=\"9999\" inputStyleClass=\"text-right\">\r\n                                        </p-inputnumber>\r\n                                    </td>\r\n                                    <td style=\"vertical-align: top;\">\r\n                                        <p-inputnumber mode=\"decimal\" locale=\"en-us\" [minFractionDigits]=\"2\"\r\n                                            formControlName=\"price\" inputStyleClass=\"text-right\">\r\n                                        </p-inputnumber>\r\n                                    </td>\r\n                                    <td style=\"text-align: center;\" class=\"p-0\">\r\n                                        <div *ngIf=\"i != 0\"\r\n                                            class=\"col flex flex-column md:flex-row md:justify-content-center\">\r\n                                            <button (click)=\"removePrice(i)\" pButton type=\"button\" icon=\"pi pi-trash\"\r\n                                                class=\"p-button-danger\"></button>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </ng-template>\r\n                            <ng-template pTemplate=\"summary\">\r\n                                <div class=\"col flex flex-column md:flex-row md:justify-content-end\">\r\n                                    <button (click)=\"addPrice()\" pButton icon=\"pi pi-plus\" label=\"\u0E40\u0E1E\u0E34\u0E48\u0E21\"\r\n                                        style=\"width:auto;\"></button>\r\n                                </div>\r\n                            </ng-template>\r\n                        </p-table>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n\r\n    <ng-template pTemplate=\"footer\">\r\n        <button pButton icon=\"pi pi-check\" (click)=\"addConfirm()\" label=\"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\"\r\n            class=\"p-button-success mr-2 outline\"></button>\r\n        <button pButton icon=\"pi pi-times\" (click)=\"addCancel()\" label=\"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\"\r\n            class=\"p-button-danger mr-2 outline\"></button>\r\n    </ng-template>\r\n</p-dialog>\r\n\r\n<p-dialog header=\"\u0E41\u0E01\u0E49\u0E44\u0E02\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\" [(visible)]=\"displayEdit\" modal=\"modal\" showEffect=\"fade\" [style]=\"{width: '30vw'}\"\r\n    [breakpoints]=\"{'960px': '75vw'}\">\r\n    <form [formGroup]=\"formEdit\">\r\n        <div class=\"card p-fluid\">\r\n            <div class=\"grid\">\r\n                <div class=\"col-12 py-0 pb-5\" style=\"text-align: center;\">\r\n                    <img class=\"img\" [src]=\"formEdit.get('image')!.value\" width=\"100\" height=\"100\"\r\n                        style=\"cursor: pointer;\" (click)=\"fileinputedit.click()\">\r\n\r\n                    <input #fileinputedit type=\"file\" (change)=\"onSelectImageProfileEdit($event)\" accept=\"image/*\"\r\n                        hidden />\r\n                </div>\r\n                <div class=\"col-12 py-0\">\r\n                    <div class=\"field\">\r\n                        <label htmlFor=\"name\">\u0E23\u0E2B\u0E31\u0E2A\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</label>\r\n                        <input pInputText type=\"text\" formControlName=\"code\" maxlength=\"50\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 py-0\">\r\n                    <div class=\"field\">\r\n                        <label htmlFor=\"name\">\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</label>\r\n                        <input pInputText type=\"text\" formControlName=\"name\" maxlength=\"200\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 py-0\">\r\n                    <div class=\"field\">\r\n                        <label htmlFor=\"name\">\u0E25\u0E32\u0E22\u0E23\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</label>\r\n                        <textarea pInputTextarea formControlName=\"description\" maxlength=\"1000\" rows=\"3\"></textarea>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 pb-0\">\r\n                    <div class=\"field\">\r\n                        <label for=\"product_type\">\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</label>\r\n                        <p-dropdown [options]=\"product_types\" optionLabel=\"name\" optionValue=\"id\" [filter]=\"true\"\r\n                            filterBy=\"name\" placeholder=\"\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\" formControlName=\"product_type_id\"\r\n                            (onChange)=\"selectProductType(formEdit.get('product_type_id')!.value)\" appendTo=\"body\">\r\n                        </p-dropdown>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 pb-0\">\r\n                    <div class=\"field\">\r\n                        <label htmlFor=\"location\">\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32</label>\r\n                        <p-dropdown [options]=\"product_brands\" optionLabel=\"name\" optionValue=\"id\" [filter]=\"true\"\r\n                            filterBy=\"name\" placeholder=\"\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\" formControlName=\"product_brand_id\"\r\n                            appendTo=\"body\">\r\n                        </p-dropdown>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-4 pb-0\">\r\n                    <div class=\"field\">\r\n                        <label htmlFor=\"name\">\u0E23\u0E32\u0E04\u0E32</label>\r\n                        <input pInputText type=\"number\" formControlName=\"price\" min=\"0\" max=\"99999\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-4 pb-0\">\r\n                    <div class=\"field\">\r\n                        <label htmlFor=\"name\">\u0E08\u0E33\u0E19\u0E27\u0E19\u0E15\u0E48\u0E2D\u0E41\u0E1E\u0E47\u0E04</label>\r\n                        <input pInputText type=\"number\" formControlName=\"pack_count\" min=\"0\" max=\"99999\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-4 pb-0\">\r\n                    <div class=\"field\">\r\n                        <label htmlFor=\"name\">\u0E23\u0E32\u0E04\u0E32\u0E17\u0E31\u0E49\u0E41\u0E1E\u0E47\u0E04</label>\r\n                        <input pInputText type=\"number\" formControlName=\"pack_price\" min=\"0\" max=\"99999\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-12 pb-0\">\r\n                    <!-- <div class=\"field\">\r\n                        <label htmlFor=\"name\">\u0E23\u0E32\u0E04\u0E32</label>\r\n                        <p-table styleClass=\"p-datatable-gridlines\" [value]=\"edit_prices.controls\">\r\n                            <ng-template pTemplate=\"header\">\r\n                                <tr>\r\n                                    <th style=\"width: 40%;\">\r\n                                        <div class=\"flex justify-content-center  align-items-center\">\r\n                                            \u0E08\u0E33\u0E19\u0E27\u0E19\r\n                                        </div>\r\n                                    </th>\r\n                                    <th style=\"width: 40%;\">\r\n                                        <div class=\"flex justify-content-center  align-items-center\">\r\n                                            \u0E23\u0E32\u0E04\u0E32\r\n                                        </div>\r\n                                    </th>\r\n                                    <th style=\"width: 20%;\">\r\n                                        <div class=\"flex justify-content-center  align-items-center\">\r\n                                            \u0E25\u0E1A\r\n                                        </div>\r\n                                    </th>\r\n                                </tr>\r\n                            </ng-template>\r\n                            <ng-template pTemplate=\"body\" formArrayName=\"prices\" let-item let-i=\"rowIndex\">\r\n                                <tr [formGroupName]=\"i\">\r\n                                    <td style=\"vertical-align: top;\">\r\n                                        <p-inputnumber mode=\"decimal\" locale=\"en-us\" formControlName=\"count\"\r\n                                            [readonly]=\"i == 0\" maxlength=\"9999\" inputStyleClass=\"text-right\">\r\n                                        </p-inputnumber>\r\n                                    </td>\r\n                                    <td style=\"vertical-align: top;\">\r\n                                        <p-inputnumber mode=\"decimal\" locale=\"en-us\" [minFractionDigits]=\"2\"\r\n                                            formControlName=\"price\" inputStyleClass=\"text-right\">\r\n                                        </p-inputnumber>\r\n                                    </td>\r\n                                    <td style=\"text-align: center;\" class=\"p-0\">\r\n                                        <div *ngIf=\"i != 0\"\r\n                                            class=\"col flex flex-column md:flex-row md:justify-content-center\">\r\n                                            <button (click)=\"removeEditPrice(i)\" pButton type=\"button\"\r\n                                                icon=\"pi pi-trash\" class=\"p-button-danger\"></button>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </ng-template>\r\n                            <ng-template pTemplate=\"summary\">\r\n                                <div class=\"col flex flex-column md:flex-row md:justify-content-end\">\r\n                                    <button (click)=\"addEditPrice()\" pButton icon=\"pi pi-plus\" label=\"\u0E40\u0E1E\u0E34\u0E48\u0E21\"\r\n                                        style=\"width:auto;\"></button>\r\n                                </div>\r\n                            </ng-template>\r\n                        </p-table>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n\r\n    <ng-template pTemplate=\"footer\">\r\n        <button pButton icon=\"pi pi-check\" (click)=\"confirmEdit()\" label=\"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\"\r\n            class=\"p-button-success mr-2 outline\"></button>\r\n        <button pButton icon=\"pi pi-times\" (click)=\"cancelEdit()\" label=\"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\"\r\n            class=\"p-button-danger mr-2 outline\"></button>\r\n    </ng-template>\r\n</p-dialog>\r\n\r\n<p-toast position=\"bottom-center\"></p-toast>\r\n\r\n" }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.ProductService }, { type: i3.Router }, { type: i3.ActivatedRoute }, { type: i4.MessageService }]; }, { table: [{
            type: ViewChild,
            args: ['dt']
        }] }); })();
//# sourceMappingURL=product.component.js.map