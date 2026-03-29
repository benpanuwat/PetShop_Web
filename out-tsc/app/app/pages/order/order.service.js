import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class OrderService {
    constructor(http) {
        this.http = http;
    }
    page(data) {
        return this.http.get(environment.url + `/order/page`, {
            params: {
                branchId: data.branchId,
                perPage: data.perPage,
                page: data.page,
                search: data?.search ?? "",
                date_start: data?.date_start ?? "",
                date_end: data?.date_end ?? "",
            }
        })
            .pipe(map((resp) => {
            return resp.data;
        }));
    }
    cancelOrder(id, data) {
        return this.http.put(environment.url + `/cancel_order/${id}`, data);
    }
    static { this.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OrderService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=order.service.js.map