import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../app.component";
import * as i2 from "./app.main.component";
import * as i3 from "@angular/router";
import * as i4 from "@angular/forms";
import * as i5 from "../service/app.service";
import * as i6 from "../service/auth.service";
import * as i7 from "primeng/api";
import * as i8 from "@angular/common";
import * as i9 from "primeng/button";
import * as i10 from "primeng/inputtext";
import * as i11 from "primeng/dialog";
import * as i12 from "primeng/dropdown";
import * as i13 from "primeng/toast";
function AppTopBarComponent_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 42);
    i0.ɵɵlistener("click", function AppTopBarComponent_ng_template_55_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.confirmEdit()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "button", 43);
    i0.ɵɵlistener("click", function AppTopBarComponent_ng_template_55_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.cancelEdit()); });
    i0.ɵɵelementEnd();
} }
function AppTopBarComponent_ng_template_75_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 42);
    i0.ɵɵlistener("click", function AppTopBarComponent_ng_template_75_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.confirmChangePass()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "button", 43);
    i0.ɵɵlistener("click", function AppTopBarComponent_ng_template_75_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.cancelChangePass()); });
    i0.ɵɵelementEnd();
} }
const _c0 = function (a0) { return { "topbar-menu-visible": a0 }; };
const _c1 = function () { return { width: "25vw" }; };
const _c2 = function () { return { "960px": "75vw" }; };
const _c3 = function () { return { width: "20vw" }; };
export class AppTopBarComponent {
    constructor(app, appMain, _router, _fb, _app_service, _service, _messageService) {
        this.app = app;
        this.appMain = appMain;
        this._router = _router;
        this._fb = _fb;
        this._app_service = _app_service;
        this._service = _service;
        this._messageService = _messageService;
        this.branch_name = "";
        this.profile = {};
        this.displayEditProfile = false;
        this.displayChangePass = false;
        this.genders = [
            { name: 'ชาย', value: 'M' },
            { name: 'หญิง', value: 'F' },
        ];
        this.branch_name = localStorage.getItem('branch_name');
    }
    ngOnInit() {
        this.formResetPass = this._fb.group({
            old_password: '',
            password: '',
            confirm_password: '',
        });
        this.formEdit = this._fb.group({
            upload_image_profile_status: false,
            image_profile: "",
            first_name: '',
            last_name: '',
            gender: '',
            member_group_name: "",
        });
        this.loadProfie();
    }
    loadProfie() {
        this._app_service.getProfile().subscribe((resp) => {
            this.profile = resp.data;
        });
    }
    openChangePass() {
        this.formResetPass = this._fb.group({
            old_password: '',
            password: '',
            confirm_password: '',
        });
        this.formResetPass = this._fb.group({
            old_password: "",
            password: "",
            confirm_password: "",
        });
        this.displayChangePass = true;
    }
    confirmChangePass() {
        this._app_service.changeMemberPass(this.formResetPass.value).subscribe({
            next: (resp) => {
                this.displayChangePass = false;
                this.showSuccess(resp.message);
            },
            error: (err) => {
                this.showError(err.error.message);
            },
        });
    }
    cancelChangePass() {
        this.displayChangePass = false;
    }
    openEditProfile() {
        this.formEdit = this._fb.group({
            upload_image_profile_status: false,
            image_profile: "",
            first_name: '',
            last_name: '',
            gender: '',
            member_group_name: "",
        });
        this._app_service.getProfile()
            .subscribe((resp) => {
            this.formEdit.patchValue({
                ...resp.data
            });
            this.displayEditProfile = true;
        });
    }
    onSelectImageProfile(event) {
        const input = event.target;
        if (input.files?.length) {
            this._app_service.uploadImage(input.files[0]).subscribe({
                next: (resp) => {
                    this.formEdit.patchValue({
                        upload_image_profile_status: true,
                        image_profile: resp.url,
                    });
                },
                error: (err) => {
                    this.showError(err.error.message);
                },
            });
        }
    }
    confirmEdit() {
        this._app_service.updateProfile(this.formEdit.value).subscribe({
            next: (resp) => {
                this.displayEditProfile = false;
                this.showSuccess(resp.message);
            },
            error: (err) => {
                this.showError(err.error.message);
            },
        });
    }
    cancelEdit() {
        this.displayEditProfile = false;
    }
    logout() {
        localStorage.removeItem('permissions');
        this._service.logout();
        this._router.navigate(['/login']);
    }
    showError(massage) {
        this._messageService.add({ severity: 'error', summary: 'แจ้งเตือน', detail: massage });
    }
    showSuccess(massage) {
        this._messageService.add({ severity: 'success', summary: 'แจ้งเตือน', detail: massage });
    }
    static { this.ɵfac = function AppTopBarComponent_Factory(t) { return new (t || AppTopBarComponent)(i0.ɵɵdirectiveInject(i1.AppComponent), i0.ɵɵdirectiveInject(i2.AppMainComponent), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i4.FormBuilder), i0.ɵɵdirectiveInject(i5.AppService), i0.ɵɵdirectiveInject(i6.AuthService), i0.ɵɵdirectiveInject(i7.MessageService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppTopBarComponent, selectors: [["app-topbar"]], decls: 77, vars: 23, consts: [[1, "topbar"], [1, "topbar-wrapper"], [1, "topbar-left"], ["href", "javascript:void(0);", 1, "topbar-logo"], [2, "margin-top", "10px"], ["href", "#", "id", "menu-button", 3, "click"], [1, "pi", "pi-bars"], [1, "topbar-right"], ["href", "#", "id", "user-display", 3, "click"], [1, "username"], [2, "border", "0px", "border-radius", "25px", 3, "src"], ["id", "topbar-menu", 1, "fadeInDown", 3, "ngClass"], ["href", "javascript:void(0);", 3, "click"], [1, "topbar-icon", "pi", "pi-fw", "pi-user"], [1, "topbar-item-name"], [1, "topbar-icon", "pi", "pi-fw", "pi-key"], [1, "topbar-icon", "pi", "pi-fw", "pi-sign-out"], ["header", "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27", "modal", "modal", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], [3, "formGroup"], [1, "card", "p-fluid"], [1, "grid"], [1, "col-12", "py-0", "pb-5", 2, "text-align", "center"], ["width", "100", "height", "100", 1, "profile-img", 2, "cursor", "pointer", 3, "src", "click"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change"], ["fileInput", ""], [1, "col-12", "py-5"], [1, "field"], ["htmlFor", "first_name"], ["pInputText", "", "type", "text", "formControlName", "first_name", "maxlength", "200"], [1, "col-12", "py-0"], ["htmlFor", "last_name"], ["pInputText", "", "type", "text", "formControlName", "last_name", "maxlength", "200"], ["htmlFor", "gender"], ["formControlName", "gender", "optionLabel", "name", "optionValue", "value", "placeholder", "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E1E\u0E28", "appendTo", "body", 3, "options"], ["htmlFor", "member_group_name"], ["pInputText", "", "type", "text", "formControlName", "member_group_name", "maxlength", "200", "readonly", "", 1, "disabled"], ["pTemplate", "footer"], ["header", "\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19", "modal", "modal", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], ["pInputText", "", "type", "password", "formControlName", "old_password", "maxlength", "20"], ["pInputText", "", "type", "password", "formControlName", "password", "maxlength", "20"], ["pInputText", "", "type", "password", "formControlName", "confirm_password", "maxlength", "20"], ["position", "top-right"], ["pButton", "", "icon", "pi pi-check", "label", "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19", 1, "p-button-success", "mr-2", "outline", 3, "click"], ["pButton", "", "icon", "pi pi-times", "label", "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01", 1, "p-button-danger", "mr-2", "outline", 3, "click"]], template: function AppTopBarComponent_Template(rf, ctx) { if (rf & 1) {
            const _r9 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3)(4, "h1", 4);
            i0.ɵɵtext(5, "PuyPuy PetMart");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "a", 5);
            i0.ɵɵlistener("click", function AppTopBarComponent_Template_a_click_6_listener($event) { return ctx.appMain.onMenuButtonClick($event); });
            i0.ɵɵelement(7, "i", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "div", 7)(9, "a", 8);
            i0.ɵɵlistener("click", function AppTopBarComponent_Template_a_click_9_listener($event) { return ctx.appMain.onTopbarMenuButtonClick($event); });
            i0.ɵɵelementStart(10, "span", 9);
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(12, "img", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "ul", 11)(14, "li")(15, "a", 12);
            i0.ɵɵlistener("click", function AppTopBarComponent_Template_a_click_15_listener() { return ctx.openEditProfile(); });
            i0.ɵɵelement(16, "i", 13);
            i0.ɵɵelementStart(17, "span", 14);
            i0.ɵɵtext(18, "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "a", 12);
            i0.ɵɵlistener("click", function AppTopBarComponent_Template_a_click_19_listener() { return ctx.openChangePass(); });
            i0.ɵɵelement(20, "i", 15);
            i0.ɵɵelementStart(21, "span", 14);
            i0.ɵɵtext(22, "\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "a", 12);
            i0.ɵɵlistener("click", function AppTopBarComponent_Template_a_click_23_listener() { return ctx.logout(); });
            i0.ɵɵelement(24, "i", 16);
            i0.ɵɵelementStart(25, "span", 14);
            i0.ɵɵtext(26, "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A");
            i0.ɵɵelementEnd()()()()()()();
            i0.ɵɵelementStart(27, "p-dialog", 17);
            i0.ɵɵlistener("visibleChange", function AppTopBarComponent_Template_p_dialog_visibleChange_27_listener($event) { return ctx.displayEditProfile = $event; });
            i0.ɵɵelementStart(28, "form", 18)(29, "div", 19)(30, "div", 20)(31, "div", 21)(32, "img", 22);
            i0.ɵɵlistener("click", function AppTopBarComponent_Template_img_click_32_listener() { i0.ɵɵrestoreView(_r9); const _r0 = i0.ɵɵreference(34); return i0.ɵɵresetView(_r0.click()); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "input", 23, 24);
            i0.ɵɵlistener("change", function AppTopBarComponent_Template_input_change_33_listener($event) { return ctx.onSelectImageProfile($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(35, "div", 25)(36, "div", 26)(37, "label", 27);
            i0.ɵɵtext(38, "\u0E0A\u0E37\u0E48\u0E2D");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(39, "input", 28);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(40, "div", 29)(41, "div", 26)(42, "label", 30);
            i0.ɵɵtext(43, "\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(44, "input", 31);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(45, "div", 29)(46, "div", 26)(47, "label", 32);
            i0.ɵɵtext(48, "\u0E40\u0E1E\u0E28");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(49, "p-dropdown", 33);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(50, "div", 29)(51, "div", 26)(52, "label", 34);
            i0.ɵɵtext(53, "\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E34\u0E17\u0E18\u0E34");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(54, "input", 35);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵtemplate(55, AppTopBarComponent_ng_template_55_Template, 2, 0, "ng-template", 36);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "p-dialog", 37);
            i0.ɵɵlistener("visibleChange", function AppTopBarComponent_Template_p_dialog_visibleChange_56_listener($event) { return ctx.displayChangePass = $event; });
            i0.ɵɵelementStart(57, "form", 18)(58, "div", 19)(59, "div", 20)(60, "div", 29)(61, "div", 26)(62, "label", 30);
            i0.ɵɵtext(63, "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E40\u0E14\u0E34\u0E21");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(64, "input", 38);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(65, "div", 29)(66, "div", 26)(67, "label", 30);
            i0.ɵɵtext(68, "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E43\u0E2B\u0E21\u0E48");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(69, "input", 39);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(70, "div", 29)(71, "div", 26)(72, "label", 30);
            i0.ɵɵtext(73, "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E43\u0E2B\u0E21\u0E48");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(74, "input", 40);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵtemplate(75, AppTopBarComponent_ng_template_75_Template, 2, 0, "ng-template", 36);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(76, "p-toast", 41);
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵtextInterpolate3("[\u0E2A\u0E32\u0E02\u0E32 ", ctx.branch_name, "] ", ctx.profile.first_name, " ", ctx.profile.last_name, "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("src", ctx.profile.image_profile, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(17, _c0, ctx.appMain.topbarMenuActive));
            i0.ɵɵadvance(14);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(19, _c1));
            i0.ɵɵproperty("visible", ctx.displayEditProfile)("breakpoints", i0.ɵɵpureFunction0(20, _c2));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.formEdit);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("src", ctx.formEdit.get("image_profile").value, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(17);
            i0.ɵɵproperty("options", ctx.genders);
            i0.ɵɵadvance(7);
            i0.ɵɵstyleMap(i0.ɵɵpureFunction0(21, _c3));
            i0.ɵɵproperty("visible", ctx.displayChangePass)("breakpoints", i0.ɵɵpureFunction0(22, _c2));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.formResetPass);
        } }, dependencies: [i8.NgClass, i4.ɵNgNoValidate, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.MaxLengthValidator, i4.FormGroupDirective, i4.FormControlName, i7.PrimeTemplate, i9.ButtonDirective, i10.InputText, i11.Dialog, i12.Dropdown, i13.Toast], encapsulation: 2 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppTopBarComponent, [{
        type: Component,
        args: [{ selector: 'app-topbar', template: "<div class=\"topbar\">\n    <div class=\"topbar-wrapper\">\n        <div class=\"topbar-left\">\n            <a href=\"javascript:void(0);\" class=\"topbar-logo\">\n                <!-- <img [src]=\"app.layout === 'default' ? 'assets/layout/images/logo-black.png' : 'assets/layout/images/logo-white.png'\"\n                    style=\"border: 0 none\"> -->\n                <!-- <img src=\"assets/layout/images/login/logo.png\"> -->\n                <h1 style=\"margin-top:10px\">PuyPuy PetMart</h1>\n            </a>\n\n            <a href=\"#\" id=\"menu-button\" (click)=\"appMain.onMenuButtonClick($event)\">\n                <i class=\"pi pi-bars\"></i>\n            </a>\n\n            <!-- <label for=\"topbar-search\">\n                <i class=\"pi pi-search topbar-search-icon\"></i>\n            </label> -->\n            <!-- <input type=\"text\" class=\"topbar-search\" placeholder=\"Type your search here\" id=\"topbar-search\"/> -->\n        </div>\n\n        <div class=\"topbar-right\">\n            <a href=\"#\" id=\"user-display\" (click)=\"appMain.onTopbarMenuButtonClick($event)\">\n                <span class=\"username\">[\u0E2A\u0E32\u0E02\u0E32 {{branch_name}}] {{profile.first_name}} {{profile.last_name}}</span>\n                <img [src]=\"profile.image_profile\" style=\"border: 0px;border-radius: 25px\">\n            </a>\n\n            <ul id=\"topbar-menu\" class=\"fadeInDown\" [ngClass]=\"{'topbar-menu-visible': appMain.topbarMenuActive}\">\n                <li>\n                    <a href=\"javascript:void(0);\" (click)=\"openEditProfile()\">\n                        <i class=\"topbar-icon pi pi-fw pi-user\"></i>\n                        <span class=\"topbar-item-name\">\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27</span>\n                    </a>\n                    <a href=\"javascript:void(0);\" (click)=\"openChangePass()\">\n                        <i class=\"topbar-icon pi pi-fw pi-key\"></i>\n                        <span class=\"topbar-item-name\">\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19</span>\n                    </a>\n\n                    <a href=\"javascript:void(0);\" (click)=\"logout()\">\n                        <i class=\"topbar-icon pi pi-fw pi-sign-out\"></i>\n                        <span class=\"topbar-item-name\">\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A</span>\n                    </a>\n\n                </li>\n\n\n                <!-- <li #profile [ngClass]=\"{'menuitem-active':appMain.activeTopbarItem === profile}\">\n                    <a href=\"#\" (click)=\"appMain.onTopbarItemClick($event, profile)\">\n                        <i class=\"topbar-icon pi pi-fw pi-user\"></i>\n                        <span class=\"topbar-item-name\">Profile</span>\n                    </a>\n                    <ul>\n                        <li role=\"menuitem\">\n                            <a href=\"#\" (click)=\"appMain.onTopbarSubItemClick($event)\">\n                                <i class=\"pi pi-fw pi-user\"></i>\n                                <span>Profile</span>\n                            </a>\n                        </li>\n                        <li role=\"menuitem\">\n                            <a href=\"#\" (click)=\"appMain.onTopbarSubItemClick($event)\">\n                                <i class=\"pi pi-fw pi-lock\"></i>\n                                <span>Privacy</span>\n                            </a>\n                        </li>\n                        <li role=\"menuitem\">\n                            <a href=\"#\" (click)=\"appMain.onTopbarSubItemClick($event)\">\n                                <i class=\"pi pi-fw pi-cog\"></i>\n                                <span>Settings</span>\n                            </a>\n                        </li>\n                        <li role=\"menuitem\">\n                            <a href=\"#\" (click)=\"appMain.onTopbarSubItemClick($event)\">\n                                <i class=\"pi pi-fw pi-sign-out\"></i>\n                                <span>Logout</span>\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n                <li #settings [ngClass]=\"{'menuitem-active':appMain.activeTopbarItem === settings}\">\n                    <a href=\"#\" (click)=\"appMain.onTopbarItemClick($event, settings)\">\n                        <i class=\"topbar-icon pi pi-fw pi-cog\"></i>\n                        <span class=\"topbar-item-name\">Settings</span>\n                    </a>\n                    <ul>\n                        <li role=\"menuitem\">\n                            <a href=\"#\" (click)=\"appMain.onTopbarSubItemClick($event)\">\n                                <i class=\"pi pi-fw pi-palette\"></i>\n                                <span>Change Theme</span>\n                                <span class=\"topbar-badge\">1</span>\n                            </a>\n                        </li>\n                        <li role=\"menuitem\">\n                            <a href=\"#\" (click)=\"appMain.onTopbarSubItemClick($event)\">\n                                <i class=\"pi pi-fw pi-star\"></i>\n                                <span>Favorites</span>\n                            </a>\n                        </li>\n                        <li role=\"menuitem\">\n                            <a href=\"#\" (click)=\"appMain.onTopbarSubItemClick($event)\">\n                                <i class=\"pi pi-fw pi-lock\"></i>\n                                <span>Lock Screen</span>\n                                <span class=\"topbar-badge\">3</span>\n                            </a>\n                        </li>\n                        <li role=\"menuitem\">\n                            <a href=\"#\" (click)=\"appMain.onTopbarSubItemClick($event)\">\n                                <i class=\"pi pi-fw pi-image\"></i>\n                                <span>Wallpaper</span>\n                            </a>\n                        </li>\n                    </ul>\n                </li> -->\n            </ul>\n        </div>\n    </div>\n</div>\n\n<p-dialog header=\"\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27\" [(visible)]=\"displayEditProfile\" modal=\"modal\" showEffect=\"fade\"\n    [style]=\"{width: '25vw'}\" [breakpoints]=\"{'960px': '75vw'}\">\n    <form [formGroup]=\"formEdit\">\n        <div class=\"card p-fluid\">\n            <div class=\"grid\">\n                <div class=\"col-12 py-0 pb-5\" style=\"text-align: center;\">\n                    <img class=\"profile-img\" [src]=\"formEdit.get('image_profile')!.value\" width=\"100\" height=\"100\"\n                        style=\"cursor: pointer;\" (click)=\"fileInput.click()\">\n                    <input #fileInput type=\"file\" (change)=\"onSelectImageProfile($event)\" accept=\"image/*\" hidden />\n                </div>\n                <div class=\"col-12 py-5\">\n                    <div class=\"field\">\n                        <label htmlFor=\"first_name\">\u0E0A\u0E37\u0E48\u0E2D</label>\n                        <input pInputText type=\"text\" formControlName=\"first_name\" maxlength=\"200\" />\n                    </div>\n                </div>\n                <div class=\"col-12 py-0\">\n                    <div class=\"field\">\n                        <label htmlFor=\"last_name\">\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25</label>\n                        <input pInputText type=\"text\" formControlName=\"last_name\" maxlength=\"200\" />\n                    </div>\n                </div>\n                <div class=\"col-12 py-0\">\n                    <div class=\"field\">\n                        <label htmlFor=\"gender\">\u0E40\u0E1E\u0E28</label>\n                        <p-dropdown formControlName=\"gender\" [options]=\"genders\" optionLabel=\"name\" optionValue=\"value\"\n                            placeholder=\"\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E1E\u0E28\" appendTo=\"body\"></p-dropdown>\n                    </div>\n                </div>\n                <div class=\"col-12 py-0\">\n                    <div class=\"field\">\n                        <label htmlFor=\"member_group_name\">\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2A\u0E34\u0E17\u0E18\u0E34</label>\n                        <input pInputText type=\"text\" formControlName=\"member_group_name\" maxlength=\"200\"\n                            class=\"disabled\" readonly />\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n\n    <ng-template pTemplate=\"footer\">\n        <button pButton icon=\"pi pi-check\" (click)=\"confirmEdit()\" label=\"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\"\n            class=\"p-button-success mr-2 outline\"></button>\n        <button pButton icon=\"pi pi-times\" (click)=\"cancelEdit()\" label=\"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\"\n            class=\"p-button-danger mr-2 outline\"></button>\n    </ng-template>\n</p-dialog>\n\n<p-dialog header=\"\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\" [(visible)]=\"displayChangePass\" modal=\"modal\" showEffect=\"fade\"\n    [style]=\"{width: '20vw'}\" [breakpoints]=\"{'960px': '75vw'}\">\n    <form [formGroup]=\"formResetPass\">\n        <div class=\"card p-fluid\">\n            <div class=\"grid\">\n                <div class=\"col-12  py-0\">\n                    <div class=\"field\">\n                        <label htmlFor=\"last_name\">\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E40\u0E14\u0E34\u0E21</label>\n                        <input pInputText type=\"password\" formControlName=\"old_password\" maxlength=\"20\" />\n                    </div>\n                </div>\n                <div class=\"col-12  py-0\">\n                    <div class=\"field\">\n                        <label htmlFor=\"last_name\">\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E43\u0E2B\u0E21\u0E48</label>\n                        <input pInputText type=\"password\" formControlName=\"password\" maxlength=\"20\" />\n                    </div>\n                </div>\n                <div class=\"col-12  py-0\">\n                    <div class=\"field\">\n                        <label htmlFor=\"last_name\">\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E43\u0E2B\u0E21\u0E48</label>\n                        <input pInputText type=\"password\" formControlName=\"confirm_password\" maxlength=\"20\" />\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n\n    <ng-template pTemplate=\"footer\">\n        <button pButton icon=\"pi pi-check\" (click)=\"confirmChangePass()\" label=\"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\"\n            class=\"p-button-success mr-2 outline\"></button>\n        <button pButton icon=\"pi pi-times\" (click)=\"cancelChangePass()\" label=\"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\"\n            class=\"p-button-danger mr-2 outline\"></button>\n    </ng-template>\n</p-dialog>\n\n<p-toast position=\"top-right\"></p-toast>\n" }]
    }], function () { return [{ type: i1.AppComponent }, { type: i2.AppMainComponent }, { type: i3.Router }, { type: i4.FormBuilder }, { type: i5.AppService }, { type: i6.AuthService }, { type: i7.MessageService }]; }, null); })();
//# sourceMappingURL=app.topbar.component.js.map