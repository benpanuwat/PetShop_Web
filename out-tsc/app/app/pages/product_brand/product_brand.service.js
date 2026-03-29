import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ProductBrandService {
    constructor(http) {
        this.http = http;
    }
    page(data) {
        return this.http.get(environment.url + `/product_brand/page`, {
            params: {
                perPage: data.perPage,
                page: data.page,
                search: data?.search ?? "",
                searchId: data?.searchId ?? "",
            }
        })
            .pipe(map((resp) => {
            return resp.data;
        }));
    }
    getProductType() {
        return this.http.get(environment.url + `/product_type/list`);
    }
    addProductBrand(formData) {
        return this.http.post(environment.url + `/add_product_brand`, formData);
    }
    getProductBrand(id) {
        return this.http.get(environment.url + `/get_product_brand/${id}`);
    }
    updateProductBrand(id, data) {
        return this.http.put(environment.url + `/update_product_brand/${id}`, data);
    }
    deleteProductBrand(id, data) {
        return this.http.put(environment.url + `/delete_product_brand/${id}`, data);
    }
    uploadImage(file) {
        const formData = new FormData();
        formData.append('file', file, file.name);
        return this.http.post(environment.url + `/upload_image`, formData);
    }
    static { this.ɵfac = function ProductBrandService_Factory(t) { return new (t || ProductBrandService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ProductBrandService, factory: ProductBrandService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductBrandService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=product_brand.service.js.map