import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class StockService {
    constructor(http) {
        this.http = http;
    }
    page(data) {
        return this.http.get(environment.url + `/stock/page`, {
            params: {
                branchId: data.branchId,
                perPage: data.perPage,
                page: data.page,
                search: data?.search ?? "",
                searchId1: data?.searchId1 ?? "",
                searchId2: data?.searchId2 ?? "",
            }
        })
            .pipe(map((resp) => {
            return resp.data;
        }));
    }
    getProductType() {
        return this.http.get(environment.url + `/product_type/list`);
    }
    getProductBrand(id) {
        return this.http.get(environment.url + `/product_brand/list/${id}`);
    }
    getStock(id) {
        return this.http.get(environment.url + `/get_stock/${id}`);
    }
    updateStock(id, data) {
        return this.http.put(environment.url + `/update_stock/${id}`, data);
    }
    static { this.ɵfac = function StockService_Factory(t) { return new (t || StockService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StockService, factory: StockService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StockService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=stock.service.js.map