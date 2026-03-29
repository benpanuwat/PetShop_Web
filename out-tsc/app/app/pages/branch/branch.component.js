import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../branch/branch.service";
import * as i3 from "primeng/api";
import * as i4 from "@angular/common";
import * as i5 from "primeng/button";
import * as i6 from "primeng/inputtext";
import * as i7 from "primeng/dialog";
import * as i8 from "primeng/table";
import * as i9 from "primeng/toast";
const _c0 = ["dt"];
function BranchComponent_ng_template_7_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 24)(1, "button", 25);
    i0.ɵɵlistener("click", function BranchComponent_ng_template_7_div_4_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.openAdd()); });
    i0.ɵɵelementEnd()();
} }
function BranchComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19)(1, "span", 20);
    i0.ɵɵelement(2, "i", 21)(3, "input", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, BranchComponent_ng_template_7_div_4_Template, 2, 0, "div", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("formControl", ctx_r1.search);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.permissions == null ? null : ctx_r1.permissions.manag_user);
} }
function BranchComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th", 26)(2, "div", 27);
    i0.ɵɵtext(3, " \u0E25\u0E33\u0E14\u0E31\u0E1A ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "th", 28)(5, "div", 29);
    i0.ɵɵtext(6, " \u0E2A\u0E32\u0E02\u0E32 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "th", 30)(8, "div", 27);
    i0.ɵɵtext(9, " \u0E08\u0E31\u0E14\u0E01\u0E32\u0E23 ");
    i0.ɵɵelementEnd()()();
} }
function BranchComponent_ng_template_9_tr_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 41);
    i0.ɵɵtext(2, " \u0E44\u0E21\u0E48\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 ");
    i0.ɵɵelementEnd()();
} }
function BranchComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 31);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 32);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td", 31)(6, "div", 33)(7, "button", 34);
    i0.ɵɵelement(8, "span")(9, "i", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 36)(11, "a", 37);
    i0.ɵɵlistener("click", function BranchComponent_ng_template_9_Template_a_click_11_listener() { const restoredCtx = i0.ɵɵrestoreView(_r14); const item_r10 = restoredCtx.$implicit; const ctx_r13 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r13.openEdit(item_r10.id)); });
    i0.ɵɵelement(12, "i", 38);
    i0.ɵɵtext(13, "\u0E41\u0E01\u0E49\u0E44\u0E02");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "a", 37);
    i0.ɵɵlistener("click", function BranchComponent_ng_template_9_Template_a_click_14_listener() { const restoredCtx = i0.ɵɵrestoreView(_r14); const item_r10 = restoredCtx.$implicit; const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.openDelete(item_r10.id)); });
    i0.ɵɵelement(15, "i", 39);
    i0.ɵɵtext(16, "\u0E25\u0E1A");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵtemplate(17, BranchComponent_ng_template_9_tr_17_Template, 3, 0, "tr", 40);
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const rowIndex_r11 = ctx.rowIndex;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", rowIndex_r11 + 1, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r10.name, " ");
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("ngIf", ctx_r3.data.length == 0);
} }
function BranchComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 42);
    i0.ɵɵlistener("click", function BranchComponent_ng_template_19_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r16.confirmAdd()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "button", 43);
    i0.ɵɵlistener("click", function BranchComponent_ng_template_19_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r17); const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.cancelAdd()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r4.disabledAddBranch);
} }
function BranchComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 44);
    i0.ɵɵlistener("click", function BranchComponent_ng_template_29_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r19.confirmEdit()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "button", 43);
    i0.ɵɵlistener("click", function BranchComponent_ng_template_29_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r20); const ctx_r21 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r21.cancelEdit()); });
    i0.ɵɵelementEnd();
} }
function BranchComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 44);
    i0.ɵɵlistener("click", function BranchComponent_ng_template_36_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r22.confirmDelete()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "button", 43);
    i0.ɵɵlistener("click", function BranchComponent_ng_template_36_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r23); const ctx_r24 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r24.cancelDelete()); });
    i0.ɵɵelementEnd();
} }
const _c1 = function () { return [10, 25, 50]; };
const _c2 = function () { return { width: "30vw" }; };
const _c3 = function () { return { "960px": "75vw" }; };
const _c4 = function () { return { width: "40vw" }; };
export class BranchComponent {
    constructor(_fb, _service, _messageService) {
        this._fb = _fb;
        this._service = _service;
        this._messageService = _messageService;
        this.permissions = [];
        this.displayAdd = false;
        this.displayEdit = false;
        this.displayResetPass = false;
        this.displayDelete = false;
        this.disabledAddBranch = true;
        this.totalRecords = 0;
        this.search = new FormControl('');
        this.userGroups = [];
        this.permissions = JSON.parse(localStorage.getItem('permissions'));
    }
    ngOnInit() {
        this.formAdd = this._fb.group({
            name: "",
        });
        this.formEdit = this._fb.group({
            name: "",
        });
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
        this.formAdd.reset();
        this.formAdd = this._fb.group({
            name: "",
            phone: "",
            discount: 0,
        });
        this.displayAdd = true;
        this.disabledAddBranch = false;
    }
    confirmAdd() {
        this.disabledAddBranch = true;
        this._service.addBranch(this.formAdd.value).subscribe({
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
    cancelAdd() {
        this.displayAdd = false;
    }
    openEdit(Id) {
        this.editId = Id;
        this.formEdit.reset();
        this.formEdit = this._fb.group({
            name: "",
            phone: "",
            discount: 0,
        });
        this._service.getBranch(this.editId)
            .subscribe((resp) => {
            this.formEdit.patchValue({
                ...resp.data
            });
            this.displayEdit = true;
        });
    }
    confirmEdit() {
        this._service.updateBranch(this.editId, this.formEdit.value).subscribe({
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
        this._service.deleteBranch(this.deleteId, {}).subscribe({
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
    showError(massage) {
        this._messageService.add({ severity: 'error', summary: 'แจ้งเตือน', detail: massage });
    }
    showSuccess(massage) {
        this._messageService.add({ severity: 'success', summary: 'แจ้งเตือน', detail: massage });
    }
    static { this.ɵfac = function BranchComponent_Factory(t) { return new (t || BranchComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.BranchService), i0.ɵɵdirectiveInject(i3.MessageService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BranchComponent, selectors: [["app-branch"]], viewQuery: function BranchComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.table = _t.first);
        } }, decls: 38, vars: 28, consts: [[1, "grid"], [1, "col-12"], [1, "card"], ["dataKey", "id", "styleClass", "p-datatable-gridlines", 3, "value", "lazy", "paginator", "loading", "rows", "totalRecords", "rowsPerPageOptions", "onLazyLoad"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["header", "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E32\u0E02\u0E32", "modal", "modal", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], [3, "formGroup"], [1, "card", "p-fluid"], [1, "col-12", "py-0"], [1, "field"], ["htmlFor", "name"], ["pInputText", "", "type", "text", "formControlName", "name", "maxlength", "200"], ["pTemplate", "footer"], ["header", "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E2A\u0E32\u0E02\u0E32", "modal", "modal", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], ["header", "\u0E25\u0E1A\u0E2A\u0E32\u0E02\u0E32", "modal", "modal", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], ["position", "top-right"], [1, "flex", "justify-content-between", "flex-column", "sm:flex-row"], [1, "p-input-icon-left"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "\u0E04\u0E49\u0E19\u0E2B\u0E32", 1, "w-full", 3, "formControl"], ["class", "pt-1", "style", "\n                                display: flex;\n                                align-items: center;", 4, "ngIf"], [1, "pt-1", 2, "display", "flex", "align-items", "center"], ["pButton", "", "icon", "pi pi-plus", "label", "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E32\u0E02\u0E32", 2, "width", "auto", 3, "click"], [2, "width", "100px"], [1, "flex", "justify-content-center", "align-items-center"], [2, "width", "auto"], [1, "flex", "justify-content-start", "align-items-center"], [2, "width", "70px"], [2, "text-align", "center"], [2, "text-align", "start"], [1, "dropdown"], ["pButton", "", "type", "button", 1, "p-button-secondary", "p-button-text"], [1, "pi", "pi-bars"], ["tabindex", "0", 1, "dropdown-content"], ["href", "javascript:void(0);", 3, "click"], [1, "pi", "pi-file-edit", "pr-2"], [1, "pi", "pi-trash", "pr-2"], [4, "ngIf"], ["colspan", "3", 2, "text-align", "center"], ["pButton", "", "icon", "pi pi-check", "label", "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19", 1, "p-button-success", "mr-2", "outline", 3, "disabled", "click"], ["pButton", "", "icon", "pi pi-times", "label", "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01", 1, "p-button-danger", "mr-2", "outline", 3, "click"], ["pButton", "", "icon", "pi pi-check", "label", "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19", 1, "p-button-success", "mr-2", "outline", 3, "click"]], template: function BranchComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
            i0.ɵɵtext(4, "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E2A\u0E32\u0E02\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p-table", 3, 4);
            i0.ɵɵlistener("onLazyLoad", function BranchComponent_Template_p_table_onLazyLoad_5_listener($event) { return ctx.loadTable($event); });
            i0.ɵɵtemplate(7, BranchComponent_ng_template_7_Template, 5, 2, "ng-template", 5);
            i0.ɵɵtemplate(8, BranchComponent_ng_template_8_Template, 10, 0, "ng-template", 6);
            i0.ɵɵtemplate(9, BranchComponent_ng_template_9_Template, 18, 3, "ng-template", 7);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(10, "p-dialog", 8);
            i0.ɵɵlistener("visibleChange", function BranchComponent_Template_p_dialog_visibleChange_10_listener($event) { return ctx.displayAdd = $event; });
            i0.ɵɵelementStart(11, "form", 9)(12, "div", 10)(13, "div", 0)(14, "div", 11)(15, "div", 12)(16, "label", 13);
            i0.ɵɵtext(17, "\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E02\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(18, "input", 14);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵtemplate(19, BranchComponent_ng_template_19_Template, 2, 1, "ng-template", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "p-dialog", 16);
            i0.ɵɵlistener("visibleChange", function BranchComponent_Template_p_dialog_visibleChange_20_listener($event) { return ctx.displayEdit = $event; });
            i0.ɵɵelementStart(21, "form", 9)(22, "div", 10)(23, "div", 0)(24, "div", 11)(25, "div", 12)(26, "label", 13);
            i0.ɵɵtext(27, "\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E02\u0E32");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(28, "input", 14);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵtemplate(29, BranchComponent_ng_template_29_Template, 2, 0, "ng-template", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "p-dialog", 17);
            i0.ɵɵlistener("visibleChange", function BranchComponent_Template_p_dialog_visibleChange_30_listener($event) { return ctx.displayDelete = $event; });
            i0.ɵɵelementStart(31, "div", 10)(32, "div", 0)(33, "div", 11)(34, "h5");
            i0.ɵɵtext(35, "\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E2A\u0E32\u0E02\u0E32\u0E19\u0E35\u0E49\u0E43\u0E0A\u0E48\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(36, BranchComponent_ng_template_36_Template, 2, 0, "ng-template", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(37, "p-toast", 18);
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("value", ctx.data)("lazy", true)("paginator", true)("loading", ctx.loading)("rows", 10)("totalRecords", ctx.totalRecords)("rowsPerPageOptions", i0.ɵɵpureFunction0(21, _c1));
            i0.ɵɵadvance(5);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(22, _c2));
            i0.ɵɵproperty("visible", ctx.displayAdd)("breakpoints", i0.ɵɵpureFunction0(23, _c3));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.formAdd);
            i0.ɵɵadvance(9);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(24, _c4));
            i0.ɵɵproperty("visible", ctx.displayEdit)("breakpoints", i0.ɵɵpureFunction0(25, _c3));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.formEdit);
            i0.ɵɵadvance(9);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(26, _c2));
            i0.ɵɵproperty("visible", ctx.displayDelete)("breakpoints", i0.ɵɵpureFunction0(27, _c3));
        } }, dependencies: [i4.NgIf, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.MaxLengthValidator, i1.FormControlDirective, i1.FormGroupDirective, i1.FormControlName, i3.PrimeTemplate, i5.ButtonDirective, i6.InputText, i7.Dialog, i8.Table, i9.Toast] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BranchComponent, [{
        type: Component,
        args: [{ selector: 'app-branch', template: "<div class=\"grid\">\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <h5>\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E2A\u0E32\u0E02\u0E32</h5>\n            <p-table #dt [value]=\"data\" [lazy]=\"true\" (onLazyLoad)=\"loadTable($event)\" dataKey=\"id\" [paginator]=\"true\"\n                [loading]=\"loading\" [rows]=\"10\" [totalRecords]=\"totalRecords\" styleClass=\"p-datatable-gridlines\"\n                [rowsPerPageOptions]=\"[10, 25, 50]\">\n                <!-- \u0E40\u0E1B\u0E34\u0E14 ng-template -->\n                <ng-template pTemplate=\"caption\">\n                    <div class=\"flex justify-content-between flex-column sm:flex-row\">\n                        <span class=\"p-input-icon-left\">\n                            <i class=\"pi pi-search\"></i>\n                            <input pInputText type=\"text\" [formControl]=\"search\" placeholder=\"\u0E04\u0E49\u0E19\u0E2B\u0E32\" class=\"w-full\" />\n                        </span>\n\n                        <div class=\"pt-1\" style=\"\n                                display: flex;\n                                align-items: center;\" *ngIf=\"permissions?.manag_user\">\n                            <button (click)=\"openAdd()\" pButton icon=\"pi pi-plus\" label=\"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E32\u0E02\u0E32\"\n                                style=\"width:auto;\"></button>\n                        </div>\n                    </div>\n                </ng-template>\n                <!-- \u0E1B\u0E34\u0E14 ng-template -->\n\n                <ng-template pTemplate=\"header\">\n                    <tr>\n                        <th style=\"width: 100px;\">\n                            <div class=\"flex justify-content-center  align-items-center\">\n                                \u0E25\u0E33\u0E14\u0E31\u0E1A\n                            </div>\n                        </th>\n                        <th style=\"width: auto;\">\n                            <div class=\"flex justify-content-start align-items-center\">\n                                \u0E2A\u0E32\u0E02\u0E32\n                            </div>\n                        </th>\n                        <th style=\"width: 70px;\">\n                            <div class=\"flex justify-content-center align-items-center\">\n                                \u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\n                            </div>\n                        </th>\n                    </tr>\n                </ng-template>\n\n                <!-- open template button edit and delete  -->\n                <ng-template pTemplate=\"body\" let-item let-rowIndex=\"rowIndex\">\n                    <tr>\n\n                        <td style=\"text-align: center;\">\n                            {{ rowIndex + 1 }}\n                        </td>\n\n                        <td style=\"text-align: start;\">\n                            {{item.name}}\n                        </td>\n\n                        <td style=\"text-align: center;\">\n                            <div class=\"dropdown\">\n                                <button pButton type=\"button\" class=\"p-button-secondary p-button-text\"><span></span>\n                                    <i class=\"pi pi-bars\"></i>\n                                </button>\n                                <div class=\"dropdown-content\" tabindex=\"0\">\n                                    <a href=\"javascript:void(0);\" (click)=\"openEdit(item.id)\"><i\n                                            class=\"pi pi-file-edit pr-2\"></i>\u0E41\u0E01\u0E49\u0E44\u0E02</a>\n                                    <a href=\"javascript:void(0);\" (click)=\"openDelete(item.id)\"><i\n                                            class=\"pi pi-trash pr-2\"></i>\u0E25\u0E1A</a>\n                                </div>\n                            </div>\n                        </td>\n\n                    </tr>\n                    <tr *ngIf=\"data.length == 0\">\n                        <td colspan=\"3\" style=\"text-align: center;\">\n                            \u0E44\u0E21\u0E48\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\n                        </td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </div>\n    </div>\n</div>\n\n<p-dialog header=\"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E32\u0E02\u0E32\" [(visible)]=\"displayAdd\" modal=\"modal\" showEffect=\"fade\" [style]=\"{width: '30vw'}\"\n    [breakpoints]=\"{'960px': '75vw'}\">\n    <form [formGroup]=\"formAdd\">\n        <div class=\"card p-fluid\">\n            <div class=\"grid\">\n                <div class=\"col-12 py-0\">\n                    <div class=\"field\">\n                        <label htmlFor=\"name\">\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E02\u0E32</label>\n                        <input pInputText type=\"text\" formControlName=\"name\" maxlength=\"200\" />\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n\n    <ng-template pTemplate=\"footer\">\n        <button pButton icon=\"pi pi-check\" (click)=\"confirmAdd()\" label=\"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\" [disabled]=\"disabledAddBranch\"\n            class=\"p-button-success mr-2 outline\"></button>\n        <button pButton icon=\"pi pi-times\" (click)=\"cancelAdd()\" label=\"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\"\n            class=\"p-button-danger mr-2 outline\"></button>\n    </ng-template>\n</p-dialog>\n\n<p-dialog header=\"\u0E41\u0E01\u0E49\u0E44\u0E02\u0E2A\u0E32\u0E02\u0E32\" [(visible)]=\"displayEdit\" modal=\"modal\" showEffect=\"fade\" [style]=\"{width: '40vw'}\"\n    [breakpoints]=\"{'960px': '75vw'}\">\n    <form [formGroup]=\"formEdit\">\n        <div class=\"card p-fluid\">\n            <div class=\"grid\">\n                <div class=\"col-12 py-0\">\n                    <div class=\"field\">\n                        <label htmlFor=\"name\">\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E02\u0E32</label>\n                        <input pInputText type=\"text\" formControlName=\"name\" maxlength=\"200\" />\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n\n    <ng-template pTemplate=\"footer\">\n        <button pButton icon=\"pi pi-check\" (click)=\"confirmEdit()\" label=\"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\"\n            class=\"p-button-success mr-2 outline\"></button>\n        <button pButton icon=\"pi pi-times\" (click)=\"cancelEdit()\" label=\"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\"\n            class=\"p-button-danger mr-2 outline\"></button>\n    </ng-template>\n</p-dialog>\n\n<p-dialog header=\"\u0E25\u0E1A\u0E2A\u0E32\u0E02\u0E32\" [(visible)]=\"displayDelete\" modal=\"modal\" showEffect=\"fade\" [style]=\"{width: '30vw'}\"\n    [breakpoints]=\"{'960px': '75vw'}\">\n    <div class=\"card p-fluid\">\n        <div class=\"grid\">\n            <div class=\"col-12 py-0\">\n                <h5>\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E2A\u0E32\u0E02\u0E32\u0E19\u0E35\u0E49\u0E43\u0E0A\u0E48\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?</h5>\n            </div>\n        </div>\n    </div>\n\n    <ng-template pTemplate=\"footer\">\n        <button pButton icon=\"pi pi-check\" (click)=\"confirmDelete()\" label=\"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\"\n            class=\"p-button-success mr-2 outline\"></button>\n        <button pButton icon=\"pi pi-times\" (click)=\"cancelDelete()\" label=\"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\"\n            class=\"p-button-danger mr-2 outline\"></button>\n    </ng-template>\n</p-dialog>\n\n\n\n<p-toast position=\"top-right\"></p-toast>" }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.BranchService }, { type: i3.MessageService }]; }, { table: [{
            type: ViewChild,
            args: ['dt']
        }] }); })();
//# sourceMappingURL=branch.component.js.map