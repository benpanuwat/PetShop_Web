import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class UserService {
    constructor(http) {
        this.http = http;
    }
    page(data) {
        return this.http.get(environment.url + `/user/page`, {
            params: {
                perPage: data.perPage,
                page: data.page,
                search: data?.search ?? "",
            }
        })
            .pipe(map((resp) => {
            return resp.data;
        }));
    }
    getUserGroupList() {
        return this.http.get(environment.url + `/get_user_group_list`);
    }
    addUser(formData) {
        return this.http.post(environment.url + `/add_user`, formData);
    }
    getUser(id) {
        return this.http.get(environment.url + `/get_user/${id}`);
    }
    updateUser(id, data) {
        return this.http.put(environment.url + `/update_user/${id}`, data);
    }
    updateUserPass(id, data) {
        return this.http.put(environment.url + `/update_user_pass/${id}`, data);
    }
    deleteUser(id, data) {
        return this.http.put(environment.url + `/delete_user/${id}`, data);
    }
    static { this.ɵfac = function UserService_Factory(t) { return new (t || UserService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=user.service.js.map