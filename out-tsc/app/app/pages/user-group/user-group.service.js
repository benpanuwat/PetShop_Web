import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class UserGroupService {
    constructor(http) {
        this.http = http;
    }
    page(data) {
        return this.http.get(environment.url + `/user_group/page`, {
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
    addUserGroup(formData) {
        return this.http.post(environment.url + `/add_user_group`, formData);
    }
    getUserGroup(id) {
        return this.http.get(environment.url + `/get_user_group/${id}`);
    }
    updateUserGroup(id, data) {
        return this.http.put(environment.url + `/update_user_group/${id}`, data);
    }
    deleteUserGroup(id, data) {
        return this.http.put(environment.url + `/delete_user_group/${id}`, data);
    }
    static { this.ɵfac = function UserGroupService_Factory(t) { return new (t || UserGroupService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UserGroupService, factory: UserGroupService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserGroupService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=user-group.service.js.map