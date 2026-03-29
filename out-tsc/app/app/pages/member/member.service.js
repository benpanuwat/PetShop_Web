import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class MemberService {
    constructor(http) {
        this.http = http;
    }
    page(data) {
        return this.http.get(environment.url + `/member/page`, {
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
    addMember(formData) {
        return this.http.post(environment.url + `/add_member`, formData);
    }
    getMember(id) {
        return this.http.get(environment.url + `/get_member/${id}`);
    }
    updateMember(id, data) {
        return this.http.put(environment.url + `/update_member/${id}`, data);
    }
    deleteMember(id, data) {
        return this.http.put(environment.url + `/delete_member/${id}`, data);
    }
    static { this.ɵfac = function MemberService_Factory(t) { return new (t || MemberService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MemberService, factory: MemberService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MemberService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=member.service.js.map