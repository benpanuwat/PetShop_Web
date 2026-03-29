import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../user-group/user-group.service";
import * as i3 from "primeng/api";
import * as i4 from "@angular/common";
import * as i5 from "primeng/button";
import * as i6 from "primeng/checkbox";
import * as i7 from "primeng/inputtext";
import * as i8 from "primeng/dialog";
import * as i9 from "primeng/table";
import * as i10 from "primeng/toast";
const _c0 = ["dt"];
function UserGroupComponent_ng_template_7_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31)(1, "button", 32);
    i0.ɵɵlistener("click", function UserGroupComponent_ng_template_7_div_4_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.openAdd()); });
    i0.ɵɵelementEnd()();
} }
function UserGroupComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26)(1, "span", 27);
    i0.ɵɵelement(2, "i", 28)(3, "input", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, UserGroupComponent_ng_template_7_div_4_Template, 2, 0, "div", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("formControl", ctx_r1.search);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.permissions == null ? null : ctx_r1.permissions.manag_user_group);
} }
function UserGroupComponent_ng_template_8_th_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 38)(1, "div", 34);
    i0.ɵɵtext(2, " \u0E08\u0E31\u0E14\u0E01\u0E32\u0E23 ");
    i0.ɵɵelementEnd()();
} }
function UserGroupComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th", 33)(2, "div", 34);
    i0.ɵɵtext(3, " \u0E25\u0E33\u0E14\u0E31\u0E1A ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "th", 35)(5, "div", 36);
    i0.ɵɵtext(6, " \u0E0A\u0E37\u0E48\u0E2D\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E34\u0E17\u0E18\u0E34 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, UserGroupComponent_ng_template_8_th_7_Template, 3, 0, "th", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r2.permissions == null ? null : ctx_r2.permissions.manag_user_group);
} }
function UserGroupComponent_ng_template_9_td_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 39)(1, "div", 43)(2, "button", 44);
    i0.ɵɵelement(3, "span")(4, "i", 45);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 46)(6, "a", 47);
    i0.ɵɵlistener("click", function UserGroupComponent_ng_template_9_td_5_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r17); const item_r11 = i0.ɵɵnextContext().$implicit; const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.openEdit(item_r11.id)); });
    i0.ɵɵelement(7, "i", 48);
    i0.ɵɵtext(8, "\u0E41\u0E01\u0E49\u0E44\u0E02");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "a", 47);
    i0.ɵɵlistener("click", function UserGroupComponent_ng_template_9_td_5_Template_a_click_9_listener() { i0.ɵɵrestoreView(_r17); const item_r11 = i0.ɵɵnextContext().$implicit; const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.openDelete(item_r11.id)); });
    i0.ɵɵelement(10, "i", 49);
    i0.ɵɵtext(11, "\u0E25\u0E1A");
    i0.ɵɵelementEnd()()()();
} }
function UserGroupComponent_ng_template_9_tr_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 50);
    i0.ɵɵtext(2, " \u0E44\u0E21\u0E48\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 ");
    i0.ɵɵelementEnd()();
} }
function UserGroupComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 39);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td", 40);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, UserGroupComponent_ng_template_9_td_5_Template, 12, 0, "td", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, UserGroupComponent_ng_template_9_tr_6_Template, 3, 0, "tr", 42);
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const rowIndex_r12 = ctx.rowIndex;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", rowIndex_r12 + 1, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r11.name, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.permissions == null ? null : ctx_r3.permissions.manag_user_group);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.data.length == 0);
} }
function UserGroupComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 51);
    i0.ɵɵlistener("click", function UserGroupComponent_ng_template_45_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r20.confirmAdd()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "button", 52);
    i0.ɵɵlistener("click", function UserGroupComponent_ng_template_45_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r21); const ctx_r22 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r22.cancelAdd()); });
    i0.ɵɵelementEnd();
} }
function UserGroupComponent_ng_template_81_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 51);
    i0.ɵɵlistener("click", function UserGroupComponent_ng_template_81_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r23.confirmEdit()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "button", 52);
    i0.ɵɵlistener("click", function UserGroupComponent_ng_template_81_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r24); const ctx_r25 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r25.cancelEdit()); });
    i0.ɵɵelementEnd();
} }
function UserGroupComponent_ng_template_89_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 51);
    i0.ɵɵlistener("click", function UserGroupComponent_ng_template_89_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r27); const ctx_r26 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r26.confirmDelete()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "button", 52);
    i0.ɵɵlistener("click", function UserGroupComponent_ng_template_89_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r27); const ctx_r28 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r28.cancelDelete()); });
    i0.ɵɵelementEnd();
} }
const _c1 = function () { return [10, 25, 50]; };
const _c2 = function () { return { width: "40vw" }; };
const _c3 = function () { return { "960px": "75vw" }; };
const _c4 = function () { return { width: "30vw" }; };
export class UserGroupComponent {
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
            name: [null, Validators.required],
            view_user: 0,
            manag_user: 0,
            view_user_group: 0,
            manag_user_group: 0,
        });
        this.formEdit = this._fb.group({
            name: [null, Validators.required],
            view_user: 0,
            manag_user: 0,
            view_user_group: 0,
            manag_user_group: 0,
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
            view_user: 0,
            manag_user: 0,
            view_user_group: 0,
            manag_user_group: 0,
        });
        this.displayAdd = true;
    }
    confirmAdd() {
        this._service.addUserGroup(this.formAdd.value).subscribe({
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
        this._service.getUserGroup(this.editId)
            .subscribe((resp) => {
            this.formEdit.patchValue({
                ...resp.data
            });
            this.displayEdit = true;
        });
    }
    confirmEdit() {
        this._service.updateUserGroup(this.editId, this.formEdit.value).subscribe({
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
        this._service.deleteUserGroup(this.deleteId, {}).subscribe({
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
    static { this.ɵfac = function UserGroupComponent_Factory(t) { return new (t || UserGroupComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.UserGroupService), i0.ɵɵdirectiveInject(i3.MessageService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UserGroupComponent, selectors: [["app-user-group"]], viewQuery: function UserGroupComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.table = _t.first);
        } }, decls: 91, vars: 45, consts: [[1, "grid"], [1, "col-12"], [1, "card"], ["dataKey", "id", "styleClass", "p-datatable-gridlines", 3, "value", "lazy", "paginator", "loading", "rows", "totalRecords", "rowsPerPageOptions", "onLazyLoad"], ["dt", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["header", "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E34\u0E17\u0E18\u0E34", "modal", "modal", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], [3, "formGroup"], [1, "card", "p-fluid"], [1, "col-12", "py-0"], [1, "field"], ["htmlFor", "name"], ["pInputText", "", "type", "text", "formControlName", "name", "maxlength", "200"], [1, "show-table"], [1, "text-left"], [1, "text-center"], ["formControlName", "view_user", "binary", "true", 3, "trueValue", "falseValue"], ["formControlName", "manag_user", "binary", "true", 3, "trueValue", "falseValue"], ["formControlName", "view_user_group", "binary", "true", 3, "trueValue", "falseValue"], ["formControlName", "manag_user_group", "binary", "true", 3, "trueValue", "falseValue"], ["pTemplate", "footer"], ["header", "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E34\u0E17\u0E18\u0E34", "modal", "modal", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], ["header", "\u0E25\u0E1A\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E34\u0E17\u0E18\u0E34", "modal", "modal", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], ["position", "bottom-center"], [1, "flex", "justify-content-between", "flex-column", "sm:flex-row"], [1, "p-input-icon-left"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "\u0E04\u0E49\u0E19\u0E2B\u0E32", 1, "w-full", 3, "formControl"], ["class", "pt-1", "style", "\n                                display: flex;\n                                align-items: center;", 4, "ngIf"], [1, "pt-1", 2, "display", "flex", "align-items", "center"], ["pButton", "", "icon", "pi pi-plus", "label", "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E34\u0E17\u0E18\u0E34", 2, "width", "auto", 3, "click"], [2, "width", "100px"], [1, "flex", "justify-content-center", "align-items-center"], [2, "width", "auto"], [1, "flex", "justify-content-start", "align-items-center"], ["style", "width: 70px;", 4, "ngIf"], [2, "width", "70px"], [2, "text-align", "center"], [2, "text-align", "start"], ["style", "text-align: center;", 4, "ngIf"], [4, "ngIf"], [1, "dropdown"], ["pButton", "", "type", "button", 1, "p-button-secondary", "p-button-text"], [1, "pi", "pi-bars"], ["tabindex", "0", 1, "dropdown-content"], ["href", "javascript:void(0);", 3, "click"], [1, "pi", "pi-file-edit", "pr-2"], [1, "pi", "pi-trash", "pr-2"], ["colspan", "3", 2, "text-align", "center"], ["pButton", "", "icon", "pi pi-check", "label", "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19", 1, "p-button-success", "mr-2", "outline", 3, "click"], ["pButton", "", "icon", "pi pi-times", "label", "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01", 1, "p-button-danger", "mr-2", "outline", 3, "click"]], template: function UserGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
            i0.ɵɵtext(4, "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E34\u0E17\u0E18\u0E34");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p-table", 3, 4);
            i0.ɵɵlistener("onLazyLoad", function UserGroupComponent_Template_p_table_onLazyLoad_5_listener($event) { return ctx.loadTable($event); });
            i0.ɵɵtemplate(7, UserGroupComponent_ng_template_7_Template, 5, 2, "ng-template", 5);
            i0.ɵɵtemplate(8, UserGroupComponent_ng_template_8_Template, 8, 1, "ng-template", 6);
            i0.ɵɵtemplate(9, UserGroupComponent_ng_template_9_Template, 7, 4, "ng-template", 7);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(10, "p-dialog", 8);
            i0.ɵɵlistener("visibleChange", function UserGroupComponent_Template_p_dialog_visibleChange_10_listener($event) { return ctx.displayAdd = $event; });
            i0.ɵɵelementStart(11, "form", 9)(12, "div", 10)(13, "div", 0)(14, "div", 11)(15, "div", 12)(16, "label", 13);
            i0.ɵɵtext(17, "\u0E0A\u0E37\u0E48\u0E2D\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E34\u0E17\u0E18\u0E34");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(18, "input", 14);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "div", 11)(20, "div", 15)(21, "label", 13);
            i0.ɵɵtext(22, "\u0E2A\u0E34\u0E17\u0E18\u0E34");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "table")(24, "tr")(25, "td", 16);
            i0.ɵɵtext(26, "\u0E40\u0E21\u0E19\u0E39");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "td", 17);
            i0.ɵɵtext(28, "\u0E21\u0E2D\u0E07\u0E40\u0E2B\u0E47\u0E19");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "td", 17);
            i0.ɵɵtext(30, "\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(31, "tr")(32, "td", 16);
            i0.ɵɵtext(33, "\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "td", 17);
            i0.ɵɵelement(35, "p-checkbox", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "td", 17);
            i0.ɵɵelement(37, "p-checkbox", 19);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(38, "tr")(39, "td", 16);
            i0.ɵɵtext(40, "\u0E01\u0E25\u0E38\u0E48\u0E21\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "td", 17);
            i0.ɵɵelement(42, "p-checkbox", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "td", 17);
            i0.ɵɵelement(44, "p-checkbox", 21);
            i0.ɵɵelementEnd()()()()()()()();
            i0.ɵɵtemplate(45, UserGroupComponent_ng_template_45_Template, 2, 0, "ng-template", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "p-dialog", 23);
            i0.ɵɵlistener("visibleChange", function UserGroupComponent_Template_p_dialog_visibleChange_46_listener($event) { return ctx.displayEdit = $event; });
            i0.ɵɵelementStart(47, "form", 9)(48, "div", 10)(49, "div", 0)(50, "div", 11)(51, "div", 12)(52, "label", 13);
            i0.ɵɵtext(53, "\u0E0A\u0E37\u0E48\u0E2D\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E34\u0E17\u0E18\u0E34");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(54, "input", 14);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(55, "div", 11)(56, "div", 15)(57, "label", 13);
            i0.ɵɵtext(58, "\u0E2A\u0E34\u0E17\u0E18\u0E34");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(59, "table")(60, "tr")(61, "td", 16);
            i0.ɵɵtext(62, "\u0E40\u0E21\u0E19\u0E39");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(63, "td", 17);
            i0.ɵɵtext(64, "\u0E21\u0E2D\u0E07\u0E40\u0E2B\u0E47\u0E19");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(65, "td", 17);
            i0.ɵɵtext(66, "\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(67, "tr")(68, "td", 16);
            i0.ɵɵtext(69, "\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(70, "td", 17);
            i0.ɵɵelement(71, "p-checkbox", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(72, "td", 17);
            i0.ɵɵelement(73, "p-checkbox", 19);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(74, "tr")(75, "td", 16);
            i0.ɵɵtext(76, "\u0E01\u0E25\u0E38\u0E48\u0E21\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(77, "td", 17);
            i0.ɵɵelement(78, "p-checkbox", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(79, "td", 17);
            i0.ɵɵelement(80, "p-checkbox", 21);
            i0.ɵɵelementEnd()()()()()()()();
            i0.ɵɵtemplate(81, UserGroupComponent_ng_template_81_Template, 2, 0, "ng-template", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(82, "p-dialog", 24);
            i0.ɵɵlistener("visibleChange", function UserGroupComponent_Template_p_dialog_visibleChange_82_listener($event) { return ctx.displayDelete = $event; });
            i0.ɵɵelementStart(83, "form", 9)(84, "div", 10)(85, "div", 0)(86, "div", 11)(87, "h5");
            i0.ɵɵtext(88, "\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E19\u0E35\u0E49\u0E43\u0E0A\u0E48\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵtemplate(89, UserGroupComponent_ng_template_89_Template, 2, 0, "ng-template", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(90, "p-toast", 25);
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("value", ctx.data)("lazy", true)("paginator", true)("loading", ctx.loading)("rows", 10)("totalRecords", ctx.totalRecords)("rowsPerPageOptions", i0.ɵɵpureFunction0(38, _c1));
            i0.ɵɵadvance(5);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(39, _c2));
            i0.ɵɵproperty("visible", ctx.displayAdd)("breakpoints", i0.ɵɵpureFunction0(40, _c3));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.formAdd);
            i0.ɵɵadvance(24);
            i0.ɵɵproperty("trueValue", 1)("falseValue", 0);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("trueValue", 1)("falseValue", 0);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("trueValue", 1)("falseValue", 0);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("trueValue", 1)("falseValue", 0);
            i0.ɵɵadvance(2);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(41, _c2));
            i0.ɵɵproperty("visible", ctx.displayEdit)("breakpoints", i0.ɵɵpureFunction0(42, _c3));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.formEdit);
            i0.ɵɵadvance(24);
            i0.ɵɵproperty("trueValue", 1)("falseValue", 0);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("trueValue", 1)("falseValue", 0);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("trueValue", 1)("falseValue", 0);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("trueValue", 1)("falseValue", 0);
            i0.ɵɵadvance(2);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(43, _c4));
            i0.ɵɵproperty("visible", ctx.displayDelete)("breakpoints", i0.ɵɵpureFunction0(44, _c3));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.formEdit);
        } }, dependencies: [i4.NgIf, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.MaxLengthValidator, i1.FormControlDirective, i1.FormGroupDirective, i1.FormControlName, i3.PrimeTemplate, i5.ButtonDirective, i6.Checkbox, i7.InputText, i8.Dialog, i9.Table, i10.Toast], styles: [".show-table[_ngcontent-%COMP%] {\r\n    table {\r\n        font-family: arial, sans-serif;\r\n        border-collapse: collapse;\r\n        width: 100%;\r\n      }\r\n      \r\n      td, th {\r\n        border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;\r\n      }\r\n      \r\n}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserGroupComponent, [{
        type: Component,
        args: [{ selector: 'app-user-group', template: "<div class=\"grid\">\n    <div class=\"col-12\">\n        <div class=\"card\">\n            <h5>\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E34\u0E17\u0E18\u0E34</h5>\n            <p-table #dt [value]=\"data\" [lazy]=\"true\" (onLazyLoad)=\"loadTable($event)\" dataKey=\"id\" [paginator]=\"true\"\n                [loading]=\"loading\" [rows]=\"10\" [totalRecords]=\"totalRecords\" styleClass=\"p-datatable-gridlines\"\n                [rowsPerPageOptions]=\"[10, 25, 50]\">\n                <!-- \u0E40\u0E1B\u0E34\u0E14 ng-template -->\n                <ng-template pTemplate=\"caption\">\n                    <div class=\"flex justify-content-between flex-column sm:flex-row\">\n                        <span class=\"p-input-icon-left\">\n                            <i class=\"pi pi-search\"></i>\n                            <input pInputText type=\"text\" [formControl]=\"search\" placeholder=\"\u0E04\u0E49\u0E19\u0E2B\u0E32\" class=\"w-full\" />\n                        </span>\n\n                        <div class=\"pt-1\" style=\"\n                                display: flex;\n                                align-items: center;\" *ngIf=\"permissions?.manag_user_group\">\n                            <button (click)=\"openAdd()\" pButton icon=\"pi pi-plus\" label=\"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E34\u0E17\u0E18\u0E34\"\n                                style=\"width:auto;\"></button>\n                        </div>\n                    </div>\n                </ng-template>\n                <!-- \u0E1B\u0E34\u0E14 ng-template -->\n\n                <ng-template pTemplate=\"header\">\n                    <tr>\n                        <th style=\"width: 100px;\">\n                            <div class=\"flex justify-content-center  align-items-center\">\n                                \u0E25\u0E33\u0E14\u0E31\u0E1A\n                            </div>\n                        </th>\n                        <th style=\"width: auto;\">\n                            <div class=\"flex justify-content-start align-items-center\">\n                                \u0E0A\u0E37\u0E48\u0E2D\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E34\u0E17\u0E18\u0E34\n                            </div>\n                        </th>\n                        <th style=\"width: 70px;\" *ngIf=\"permissions?.manag_user_group\">\n                            <div class=\"flex justify-content-center align-items-center\">\n                                \u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\n                            </div>\n                        </th>\n                    </tr>\n                </ng-template>\n\n                <!-- open template button edit and delete  -->\n                <ng-template pTemplate=\"body\" let-item let-rowIndex=\"rowIndex\">\n                    <tr>\n\n                        <td style=\"text-align: center;\">\n                            {{ rowIndex + 1 }}\n                        </td>\n\n                        <td style=\"text-align: start;\">\n                            {{item.name}}\n                        </td>\n\n                        <td style=\"text-align: center;\" *ngIf=\"permissions?.manag_user_group\">\n                            <div class=\"dropdown\">\n                                <button pButton type=\"button\" class=\"p-button-secondary p-button-text\"><span></span>\n                                    <i class=\"pi pi-bars\"></i>\n                                </button>\n                                <div class=\"dropdown-content\" tabindex=\"0\">\n                                    <a href=\"javascript:void(0);\" (click)=\"openEdit(item.id)\"><i\n                                            class=\"pi pi-file-edit pr-2\"></i>\u0E41\u0E01\u0E49\u0E44\u0E02</a>\n                                    <a href=\"javascript:void(0);\" (click)=\"openDelete(item.id)\"><i\n                                            class=\"pi pi-trash pr-2\"></i>\u0E25\u0E1A</a>\n                                </div>\n                            </div>\n                        </td>\n\n                    </tr>\n                    <tr *ngIf=\"data.length == 0\">\n                        <td colspan=\"3\" style=\"text-align: center;\">\n                            \u0E44\u0E21\u0E48\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\n                        </td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </div>\n    </div>\n</div>\n\n<p-dialog header=\"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E34\u0E17\u0E18\u0E34\" [(visible)]=\"displayAdd\" modal=\"modal\" showEffect=\"fade\" [style]=\"{width: '40vw'}\"\n    [breakpoints]=\"{'960px': '75vw'}\">\n    <form [formGroup]=\"formAdd\">\n        <div class=\"card p-fluid\">\n            <div class=\"grid\">\n                <div class=\"col-12 py-0\">\n                    <div class=\"field\">\n                        <label htmlFor=\"name\">\u0E0A\u0E37\u0E48\u0E2D\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E34\u0E17\u0E18\u0E34</label>\n                        <input pInputText type=\"text\" formControlName=\"name\" maxlength=\"200\" />\n                    </div>\n                </div>\n                <div class=\"col-12 py-0\">\n                    <div class=\"show-table\">\n                        <label htmlFor=\"name\">\u0E2A\u0E34\u0E17\u0E18\u0E34</label>\n                        <table>\n                            <tr>\n                                <td class=\"text-left\">\u0E40\u0E21\u0E19\u0E39</td>\n                                <td class=\"text-center\">\u0E21\u0E2D\u0E07\u0E40\u0E2B\u0E47\u0E19</td>\n                                <td class=\"text-center\">\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23</td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-left\">\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19</td>\n                                <td class=\"text-center\">\n                                    <p-checkbox formControlName=\"view_user\" binary=\"true\" [trueValue]=\"1\"\n                                        [falseValue]=\"0\">\n                                    </p-checkbox>\n                                </td>\n                                <td class=\"text-center\">\n                                    <p-checkbox formControlName=\"manag_user\" binary=\"true\" [trueValue]=\"1\"\n                                        [falseValue]=\"0\">\n                                    </p-checkbox>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-left\">\u0E01\u0E25\u0E38\u0E48\u0E21\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19</td>\n                                <td class=\"text-center\">\n                                    <p-checkbox formControlName=\"view_user_group\" binary=\"true\" [trueValue]=\"1\"\n                                        [falseValue]=\"0\">\n                                    </p-checkbox>\n                                </td>\n                                <td class=\"text-center\">\n                                    <p-checkbox formControlName=\"manag_user_group\" binary=\"true\" [trueValue]=\"1\"\n                                        [falseValue]=\"0\">\n                                    </p-checkbox>\n                                </td>\n                            </tr>\n                            <!-- <tr>\n                                <td class=\"text-left\">\u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48\u0E15\u0E23\u0E27\u0E08</td>\n                                <td class=\"text-center\">\n                                    <p-checkbox formControlName=\"view_location\" binary=\"true\" [trueValue]=\"1\"\n                                        [falseValue]=\"0\">\n                                    </p-checkbox>\n                                </td>\n                                <td class=\"text-center\">\n                                    <p-checkbox formControlName=\"manag_location\" binary=\"true\" [trueValue]=\"1\"\n                                        [falseValue]=\"0\">\n                                    </p-checkbox>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-left\">\u0E2B\u0E49\u0E2D\u0E07\u0E15\u0E23\u0E27\u0E08</td>\n                                <td class=\"text-center\">\n                                    <p-checkbox formControlName=\"view_room\" binary=\"true\" [trueValue]=\"1\"\n                                        [falseValue]=\"0\">\n                                    </p-checkbox>\n                                </td>\n                                <td class=\"text-center\">\n                                    <p-checkbox formControlName=\"manag_room\" binary=\"true\" [trueValue]=\"1\"\n                                        [falseValue]=\"0\">\n                                    </p-checkbox>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-left\">\u0E04\u0E19\u0E44\u0E02\u0E49</td>\n                                <td class=\"text-center\">\n                                    <p-checkbox formControlName=\"view_patient\" binary=\"true\" [trueValue]=\"1\"\n                                        [falseValue]=\"0\">\n                                    </p-checkbox>\n                                </td>\n                                <td class=\"text-center\">\n                                    <p-checkbox formControlName=\"manag_patient\" binary=\"true\" [trueValue]=\"1\"\n                                        [falseValue]=\"0\">\n                                    </p-checkbox>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-left\">\u0E15\u0E23\u0E27\u0E08\u0E1F\u0E31\u0E19</td>\n                                <td class=\"text-center\">\n                                    <p-checkbox formControlName=\"view_dental\" binary=\"true\" [trueValue]=\"1\"\n                                        [falseValue]=\"0\">\n                                    </p-checkbox>\n                                </td>\n                                <td class=\"text-center\">\n                                    <p-checkbox formControlName=\"manag_dental\" binary=\"true\" [trueValue]=\"1\"\n                                        [falseValue]=\"0\">\n                                    </p-checkbox>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-left\">\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19</td>\n                                <td class=\"text-center\">\n                                    <p-checkbox formControlName=\"view_report\" binary=\"true\" [trueValue]=\"1\"\n                                        [falseValue]=\"0\">\n                                    </p-checkbox>\n                                </td>\n                            </tr> -->\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n\n    <ng-template pTemplate=\"footer\">\n        <button pButton icon=\"pi pi-check\" (click)=\"confirmAdd()\" label=\"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\"\n            class=\"p-button-success mr-2 outline\"></button>\n        <button pButton icon=\"pi pi-times\" (click)=\"cancelAdd()\" label=\"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\"\n            class=\"p-button-danger mr-2 outline\"></button>\n    </ng-template>\n</p-dialog>\n\n<p-dialog header=\"\u0E41\u0E01\u0E49\u0E44\u0E02\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E34\u0E17\u0E18\u0E34\" [(visible)]=\"displayEdit\" modal=\"modal\" showEffect=\"fade\" [style]=\"{width: '40vw'}\"\n    [breakpoints]=\"{'960px': '75vw'}\">\n    <form [formGroup]=\"formEdit\">\n        <div class=\"card p-fluid\">\n            <div class=\"grid\">\n                <div class=\"col-12 py-0\">\n                    <div class=\"field\">\n                        <label htmlFor=\"name\">\u0E0A\u0E37\u0E48\u0E2D\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E34\u0E17\u0E18\u0E34</label>\n                        <input pInputText type=\"text\" formControlName=\"name\" maxlength=\"200\" />\n                    </div>\n                </div>\n                <div class=\"col-12 py-0\">\n                    <div class=\"show-table\">\n                        <label htmlFor=\"name\">\u0E2A\u0E34\u0E17\u0E18\u0E34</label>\n                        <table>\n                            <tr>\n                                <td class=\"text-left\">\u0E40\u0E21\u0E19\u0E39</td>\n                                <td class=\"text-center\">\u0E21\u0E2D\u0E07\u0E40\u0E2B\u0E47\u0E19</td>\n                                <td class=\"text-center\">\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23</td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-left\">\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19</td>\n                                <td class=\"text-center\">\n                                    <p-checkbox formControlName=\"view_user\" binary=\"true\" [trueValue]=\"1\"\n                                        [falseValue]=\"0\">\n                                    </p-checkbox>\n                                </td>\n                                <td class=\"text-center\">\n                                    <p-checkbox formControlName=\"manag_user\" binary=\"true\" [trueValue]=\"1\"\n                                        [falseValue]=\"0\">\n                                    </p-checkbox>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-left\">\u0E01\u0E25\u0E38\u0E48\u0E21\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19</td>\n                                <td class=\"text-center\">\n                                    <p-checkbox formControlName=\"view_user_group\" binary=\"true\" [trueValue]=\"1\"\n                                        [falseValue]=\"0\">\n                                    </p-checkbox>\n                                </td>\n                                <td class=\"text-center\">\n                                    <p-checkbox formControlName=\"manag_user_group\" binary=\"true\" [trueValue]=\"1\"\n                                        [falseValue]=\"0\">\n                                    </p-checkbox>\n                                </td>\n                            </tr>\n                            <!-- <tr>\n                                <td class=\"text-left\">\u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48\u0E15\u0E23\u0E27\u0E08</td>\n                                <td class=\"text-center\">\n                                    <p-checkbox formControlName=\"view_location\" binary=\"true\" [trueValue]=\"1\"\n                                        [falseValue]=\"0\">\n                                    </p-checkbox>\n                                </td>\n                                <td class=\"text-center\">\n                                    <p-checkbox formControlName=\"manag_location\" binary=\"true\" [trueValue]=\"1\"\n                                        [falseValue]=\"0\">\n                                    </p-checkbox>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-left\">\u0E2B\u0E49\u0E2D\u0E07\u0E15\u0E23\u0E27\u0E08</td>\n                                <td class=\"text-center\">\n                                    <p-checkbox formControlName=\"view_room\" binary=\"true\" [trueValue]=\"1\"\n                                        [falseValue]=\"0\">\n                                    </p-checkbox>\n                                </td>\n                                <td class=\"text-center\">\n                                    <p-checkbox formControlName=\"manag_room\" binary=\"true\" [trueValue]=\"1\"\n                                        [falseValue]=\"0\">\n                                    </p-checkbox>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-left\">\u0E04\u0E19\u0E44\u0E02\u0E49</td>\n                                <td class=\"text-center\">\n                                    <p-checkbox formControlName=\"view_patient\" binary=\"true\" [trueValue]=\"1\"\n                                        [falseValue]=\"0\">\n                                    </p-checkbox>\n                                </td>\n                                <td class=\"text-center\">\n                                    <p-checkbox formControlName=\"manag_patient\" binary=\"true\" [trueValue]=\"1\"\n                                        [falseValue]=\"0\">\n                                    </p-checkbox>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-left\">\u0E15\u0E23\u0E27\u0E08\u0E1F\u0E31\u0E19</td>\n                                <td class=\"text-center\">\n                                    <p-checkbox formControlName=\"view_dental\" binary=\"true\" [trueValue]=\"1\"\n                                        [falseValue]=\"0\">\n                                    </p-checkbox>\n                                </td>\n                                <td class=\"text-center\">\n                                    <p-checkbox formControlName=\"manag_dental\" binary=\"true\" [trueValue]=\"1\"\n                                        [falseValue]=\"0\">\n                                    </p-checkbox>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-left\">\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19</td>\n                                <td class=\"text-center\">\n                                    <p-checkbox formControlName=\"view_report\" binary=\"true\" [trueValue]=\"1\"\n                                        [falseValue]=\"0\">\n                                    </p-checkbox>\n                                </td>\n                            </tr> -->\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n\n    <ng-template pTemplate=\"footer\">\n        <button pButton icon=\"pi pi-check\" (click)=\"confirmEdit()\" label=\"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\"\n            class=\"p-button-success mr-2 outline\"></button>\n        <button pButton icon=\"pi pi-times\" (click)=\"cancelEdit()\" label=\"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\"\n            class=\"p-button-danger mr-2 outline\"></button>\n    </ng-template>\n</p-dialog>\n\n<p-dialog header=\"\u0E25\u0E1A\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E34\u0E17\u0E18\u0E34\" [(visible)]=\"displayDelete\" modal=\"modal\" showEffect=\"fade\" [style]=\"{width: '30vw'}\"\n    [breakpoints]=\"{'960px': '75vw'}\">\n    <form [formGroup]=\"formEdit\">\n        <div class=\"card p-fluid\">\n            <div class=\"grid\">\n                <div class=\"col-12 py-0\">\n                    <h5>\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E19\u0E35\u0E49\u0E43\u0E0A\u0E48\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?</h5>\n                </div>\n            </div>\n        </div>\n    </form>\n\n    <ng-template pTemplate=\"footer\">\n        <button pButton icon=\"pi pi-check\" (click)=\"confirmDelete()\" label=\"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\"\n            class=\"p-button-success mr-2 outline\"></button>\n        <button pButton icon=\"pi pi-times\" (click)=\"cancelDelete()\" label=\"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\"\n            class=\"p-button-danger mr-2 outline\"></button>\n    </ng-template>\n</p-dialog>\n\n\n<p-toast position=\"bottom-center\"></p-toast>\n", styles: [".show-table {\r\n    table {\r\n        font-family: arial, sans-serif;\r\n        border-collapse: collapse;\r\n        width: 100%;\r\n      }\r\n      \r\n      td, th {\r\n        border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;\r\n      }\r\n      \r\n}\r\n"] }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.UserGroupService }, { type: i3.MessageService }]; }, { table: [{
            type: ViewChild,
            args: ['dt']
        }] }); })();
//# sourceMappingURL=user-group.component.js.map