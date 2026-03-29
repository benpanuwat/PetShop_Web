import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ProductTypeService {
    constructor(http) {
        this.http = http;
    }
    page(data) {
        return this.http.get(environment.url + `/product_type/page`, {
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
    addProductType(formData) {
        return this.http.post(environment.url + `/add_product_type`, formData);
    }
    getProductType(id) {
        return this.http.get(environment.url + `/get_product_type/${id}`);
    }
    updateProductType(id, data) {
        return this.http.put(environment.url + `/update_product_type/${id}`, data);
    }
    deleteProductType(id, data) {
        return this.http.put(environment.url + `/delete_product_type/${id}`, data);
    }
    uploadImage(file) {
        const formData = new FormData();
        formData.append('file', file, file.name);
        return this.http.post(environment.url + `/upload_image`, formData);
    }
    static { this.ɵfac = function ProductTypeService_Factory(t) { return new (t || ProductTypeService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ProductTypeService, factory: ProductTypeService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductTypeService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=product_type.service.js.map