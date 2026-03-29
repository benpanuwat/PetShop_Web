import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class NewOrderService {
    constructor(http) {
        this.http = http;
    }
    getPaymentType() {
        return this.http.get(environment.url + `/payment_type/list`);
    }
    getProductTypeGroup() {
        return this.http.get(environment.url + `/product_type_group/list`);
    }
    getMemberByPhone(tel) {
        return this.http.get(environment.url + `/get_member_by_phone/${tel}`);
    }
    getProductByBarcode(barcode) {
        return this.http.get(environment.url + `/get_product_by_barcode/${barcode}`);
    }
    addMember(formData) {
        return this.http.post(environment.url + `/add_member`, formData);
    }
    addOrder(formData) {
        return this.http.post(environment.url + `/add_order`, formData);
    }
    static { this.ɵfac = function NewOrderService_Factory(t) { return new (t || NewOrderService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NewOrderService, factory: NewOrderService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NewOrderService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=new-order.service.js.map