import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class BranchService {
    constructor(http) {
        this.http = http;
    }
    page(data) {
        return this.http.get(environment.url + `/branch/page`, {
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
    addBranch(formData) {
        return this.http.post(environment.url + `/add_branch`, formData);
    }
    getBranch(id) {
        return this.http.get(environment.url + `/get_branch/${id}`);
    }
    updateBranch(id, data) {
        return this.http.put(environment.url + `/update_branch/${id}`, data);
    }
    deleteBranch(id, data) {
        return this.http.put(environment.url + `/delete_branch/${id}`, data);
    }
    static { this.ɵfac = function BranchService_Factory(t) { return new (t || BranchService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BranchService, factory: BranchService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BranchService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=branch.service.js.map