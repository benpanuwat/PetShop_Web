import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../../service/auth.service";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/router";
import * as i4 from "primeng/api";
import * as i5 from "@angular/common";
import * as i6 from "primeng/button";
import * as i7 from "primeng/inputtext";
import * as i8 from "primeng/dropdown";
import * as i9 from "primeng/toast";
function LoginComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "form", 4)(2, "div", 5);
    i0.ɵɵelement(3, "img", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 7)(5, "label", 8);
    i0.ɵɵtext(6, "Username");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 9);
    i0.ɵɵelement(8, "input", 10)(9, "img", 11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 7)(11, "label", 12);
    i0.ɵɵtext(12, "Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 9);
    i0.ɵɵelement(14, "input", 13)(15, "img", 14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 15)(17, "button", 16);
    i0.ɵɵlistener("click", function LoginComponent_ng_container_2_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.login()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r0.loginForm);
} }
function LoginComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "form", 4)(2, "div", 5);
    i0.ɵɵelement(3, "img", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 7)(5, "div", 17)(6, "label", 18);
    i0.ɵɵtext(7, "\u0E2A\u0E32\u0E02\u0E32");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "p-dropdown", 19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 15)(10, "button", 20);
    i0.ɵɵlistener("click", function LoginComponent_ng_container_3_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.select_branch()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r1.selectForm);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("options", ctx_r1.branchs);
} }
export class LoginComponent {
    constructor(_service, _formBuilder, _router, _messageService) {
        this._service = _service;
        this._formBuilder = _formBuilder;
        this._router = _router;
        this._messageService = _messageService;
        this.step = 1;
        this.branchs = [];
    }
    ngOnInit() {
        this.loginForm = this._formBuilder.group({
            username: ["", Validators.required],
            password: ["", Validators.required],
        });
        this.selectForm = this._formBuilder.group({
            branch_id: ["", Validators.required],
        });
    }
    login() {
        if (this.loginForm.invalid) {
            this.showError("กรุณากำหนด Username และ Password");
        }
        else {
            this._service.login(this.loginForm.value).subscribe({
                next: (resp) => {
                    this.branchs = resp.data.branchs;
                    if (this.branchs.length === 1) {
                        this._service.setToken(resp.token);
                        this._service.setName(resp.data.first_name + " " + resp.data.last_name);
                        localStorage.setItem('branch', resp.data.branchs[0].id);
                        localStorage.setItem('branch_name', resp.data.branchs[0].id);
                        this._router.navigate(['/app/user_group']);
                    }
                    else {
                        this._service.setToken(resp.token);
                        this._service.setName(resp.data.first_name + " " + resp.data.last_name);
                        this.selectForm.patchValue({
                            branch_id: resp.data.branchs[0].id,
                        });
                    }
                    this.step = 2;
                },
                error: (err) => {
                    this.showError(err.error.message);
                },
            });
        }
    }
    select_branch() {
        const branch = this.branchs.find(x => x.id == this.selectForm.value.branch_id);
        localStorage.setItem('branch', this.selectForm.value.branch_id);
        localStorage.setItem('branch_name', branch?.name ?? '');
        this._router.navigate(['/app/user_group']);
    }
    showError(massage) {
        this._messageService.add({ severity: 'error', summary: 'แจ้งเตือน', detail: massage });
    }
    static { this.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i4.MessageService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["app-login"]], decls: 5, vars: 2, consts: [[1, "login-body"], [1, "login-panel", "p-fluid"], [4, "ngIf"], ["position", "bottom-center"], [1, "grid", "grid-nogutter", 3, "formGroup"], [1, "col-12", 2, "text-align", "center"], ["src", "assets/layout/images/login/logo.jpg", "width", "300"], [1, "col-12"], ["for", "username", 1, "purple"], [1, "input-wrapper"], ["type", "text", "autocomplete", "off", "pInputText", "", "formControlName", "username"], ["src", "assets/layout/images/login/user.png", 1, "user-icon"], ["for", "password", 1, "purple"], ["type", "password", "autocomplete", "off", "pInputText", "", "formControlName", "password"], ["src", "assets/layout/images/login/lock.png", 1, "lock-icon"], [1, "col-12", "button-container"], ["type", "submit", "pButton", "", "label", "Login", 1, "p-button-raised", "bg-purple", 3, "click"], [1, "field"], ["htmlFor", "gender"], ["formControlName", "branch_id", "optionLabel", "name", "optionValue", "id", "placeholder", "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2A\u0E32\u0E02\u0E32", "appendTo", "body", 3, "options"], ["type", "submit", "pButton", "", "label", "\u0E15\u0E01\u0E25\u0E07", 1, "p-button-raised", "bg-purple", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, LoginComponent_ng_container_2_Template, 18, 1, "ng-container", 2);
            i0.ɵɵtemplate(3, LoginComponent_ng_container_3_Template, 11, 2, "ng-container", 2);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(4, "p-toast", 3);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.step == 1);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.step == 2);
        } }, dependencies: [i5.NgIf, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, i6.ButtonDirective, i7.InputText, i8.Dropdown, i9.Toast], styles: [".login-body[_ngcontent-%COMP%]   .login-panel[_ngcontent-%COMP%]   .col-12.logo-container[_ngcontent-%COMP%] {\r\n    border-bottom: 0px solid #dee4e9;\r\n}\r\n\r\n.login-body[_ngcontent-%COMP%]   .login-panel[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\r\n    padding: 10px 100px;\r\n}\r\n\r\n.login-body[_ngcontent-%COMP%]   .login-panel[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   img.user-icon[_ngcontent-%COMP%] {\r\n    width: 18px;\r\n}\r\n\r\n.bg-purple[_ngcontent-%COMP%] {\r\n    background-color: rgb(0, 98, 128);\r\n}\r\n\r\n.bg-purple[_ngcontent-%COMP%]:active {\r\n    background-color: rgb(0, 98, 128);\r\n}\r\n\r\n.bg-purple[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(0, 98, 128);\r\n}\r\n\r\n\r\n.purple[_ngcontent-%COMP%] {\r\n    color: rgb(0, 98, 128);\r\n}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{ selector: 'app-login', template: "<div class=\"login-body\">\n\n    <div class=\"login-panel p-fluid\">\n\n        <ng-container *ngIf=\"step==1\">\n            <form [formGroup]=\"loginForm\" class=\"grid grid-nogutter\">\n                <div class=\"col-12\" style=\"text-align: center;\">\n                    <img src=\"assets/layout/images/login/logo.jpg\" width=\"300\">\n                </div>\n\n                <div class=\"col-12\">\n                    <label for=\"username\" class=\"purple\">Username</label>\n                    <div class=\"input-wrapper\">\n                        <input type=\"text\" autocomplete=\"off\" pInputText formControlName=\"username\">\n                        <img src=\"assets/layout/images/login/user.png\" class=\"user-icon\">\n                    </div>\n                </div>\n                <div class=\"col-12\">\n                    <label for=\"password\" class=\"purple\">Password</label>\n                    <div class=\"input-wrapper\">\n                        <input type=\"password\" autocomplete=\"off\" pInputText formControlName=\"password\">\n                        <img src=\"assets/layout/images/login/lock.png\" class=\"lock-icon\">\n\n                    </div>\n                </div>\n                <div class=\"col-12 button-container\">\n                    <button type=\"submit\" pButton label=\"Login\" class=\"p-button-raised bg-purple\"\n                        (click)=\"login()\"></button>\n                </div>\n            </form>\n        </ng-container>\n\n        <ng-container *ngIf=\"step==2\">\n            <form [formGroup]=\"selectForm\" class=\"grid grid-nogutter\">\n                <div class=\"col-12\" style=\"text-align: center;\">\n                    <img src=\"assets/layout/images/login/logo.jpg\" width=\"300\">\n                </div>\n\n                <div class=\"col-12\">\n                    <div class=\"field\">\n                        <label htmlFor=\"gender\">\u0E2A\u0E32\u0E02\u0E32</label>\n                        <p-dropdown formControlName=\"branch_id\" [options]=\"branchs\" optionLabel=\"name\" optionValue=\"id\"\n                            placeholder=\"\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2A\u0E32\u0E02\u0E32\" appendTo=\"body\"></p-dropdown>\n                    </div>\n                </div>\n\n                <div class=\"col-12 button-container\">\n                    <button type=\"submit\" pButton label=\"\u0E15\u0E01\u0E25\u0E07\" class=\"p-button-raised bg-purple\"\n                        (click)=\"select_branch()\"></button>\n                </div>\n\n            </form>\n        </ng-container>\n    </div>\n</div>\n\n<p-toast position=\"bottom-center\"></p-toast>", styles: [".login-body .login-panel .col-12.logo-container {\r\n    border-bottom: 0px solid #dee4e9;\r\n}\r\n\r\n.login-body .login-panel .col-12 {\r\n    padding: 10px 100px;\r\n}\r\n\r\n.login-body .login-panel .input-wrapper img.user-icon {\r\n    width: 18px;\r\n}\r\n\r\n.bg-purple {\r\n    background-color: rgb(0, 98, 128);\r\n}\r\n\r\n.bg-purple:active {\r\n    background-color: rgb(0, 98, 128);\r\n}\r\n\r\n.bg-purple:hover {\r\n    background-color: rgb(0, 98, 128);\r\n}\r\n\r\n\r\n.purple {\r\n    color: rgb(0, 98, 128);\r\n}\r\n"] }]
    }], function () { return [{ type: i1.AuthService }, { type: i2.FormBuilder }, { type: i3.Router }, { type: i4.MessageService }]; }, null); })();
//# sourceMappingURL=login.component.js.map