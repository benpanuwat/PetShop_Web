import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ReceiveProductService {
    constructor(http) {
        this.http = http;
    }
    getProductTypeGroup() {
        return this.http.get(environment.url + `/product_type_group/list`);
    }
    addProductLot(formData) {
        return this.http.post(environment.url + `/add_product_lot`, formData);
    }
    static { this.ɵfac = function ReceiveProductService_Factory(t) { return new (t || ReceiveProductService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ReceiveProductService, factory: ReceiveProductService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReceiveProductService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=receive-product.service.js.map