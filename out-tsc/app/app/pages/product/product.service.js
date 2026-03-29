import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ProductService {
    constructor(http) {
        this.http = http;
    }
    page(data) {
        return this.http.get(environment.url + `/product/page`, {
            params: {
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
    addProduct(formData) {
        return this.http.post(environment.url + `/add_product`, formData);
    }
    getProduct(id) {
        return this.http.get(environment.url + `/get_product/${id}`);
    }
    updateProduct(id, data) {
        return this.http.put(environment.url + `/update_product/${id}`, data);
    }
    uploadImage(file) {
        const formData = new FormData();
        formData.append('file', file, file.name);
        return this.http.post(environment.url + `/upload_image`, formData);
    }
    static { this.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=product.service.js.map