import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class AppService {
    constructor(http) {
        this.http = http;
        this.menuSource = new Subject();
        this.resetSource = new Subject();
        this.menuSource$ = this.menuSource.asObservable();
        this.resetSource$ = this.resetSource.asObservable();
    }
    onMenuStateChange(key) {
        this.menuSource.next(key);
    }
    reset() {
        this.resetSource.next(true);
    }
    getProfile() {
        return this.http.get(environment.url + `/get_profile`);
    }
    getPermissions() {
        return this.http.get(environment.url + `/get_permission`);
    }
    changeMemberPass(data) {
        return this.http.put(environment.url + `/change_member_pass`, data);
    }
    uploadImage(file) {
        const formData = new FormData();
        formData.append('file', file, file.name);
        return this.http.post(environment.url + `/upload_image`, formData);
    }
    updateProfile(data) {
        return this.http.put(environment.url + `/update_profile`, data);
    }
    static { this.ɵfac = function AppService_Factory(t) { return new (t || AppService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=app.service.js.map