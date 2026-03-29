import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class AuthService {
    constructor(http) {
        this.http = http;
    }
    login(data) {
        return this.http.post(environment.url + `/login`, data);
    }
    logout() {
        localStorage.removeItem('token'); // ลบ Token ออกจาก Local Storage
    }
    setToken(token) {
        localStorage.setItem('token', token); // เก็บ Token
    }
    getToken() {
        return localStorage.getItem('token');
    }
    isAuthenticated() {
        return !!this.getToken(); // ตรวจสอบว่ามี Token หรือไม่
    }
    setName(name) {
        localStorage.setItem('name', name);
    }
    getName() {
        return localStorage.getItem('name');
    }
    static { this.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=auth.service.js.map