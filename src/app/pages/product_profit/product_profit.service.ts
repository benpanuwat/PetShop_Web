import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductProfitService {

  constructor(private http: HttpClient) { }

  page(data: { perPage: number, page: number, search?: string, searchId1?: string, searchId2?: string, profitRange?: string }) {
    return this.http.get(environment.url + `/product_profit/page`, {
      params: {
        perPage: data.perPage,
        page: data.page,
        search: data?.search ?? "",
        searchId1: data?.searchId1 ?? "",
        searchId2: data?.searchId2 ?? "",
        profitRange: data?.profitRange ?? "",
      }
    }).pipe(map((resp: any) => resp.data));
  }

  getProductType() {
    return this.http.get(environment.url + `/product_type/list`);
  }

  getProductBrand(id: any) {
    return this.http.get(environment.url + `/product_brand/list/${id}`);
  }

  getSuppliers() {
    return this.http.get(environment.url + `/supplier/list`);
  }

  getSupplierPriceLists(productId: any) {
    return this.http.get(environment.url + `/supplier_price_list/list/${productId}`);
  }

  getSupplierPriceHistory(productId: any) {
    return this.http.get(environment.url + `/supplier_price_list/history/${productId}`);
  }

  addSupplierPriceItem(data: { product_id: any; supplier_id: number; cost: number }) {
    return this.http.post(environment.url + `/supplier_price_list`, data);
  }

  importPreview(rows: any[]) {
    return this.http.post(environment.url + `/product_profit/import/preview`, { rows });
  }

  importProducts(data: { supplier_id: number; edit_name: boolean; rows: any[] }) {
    return this.http.post(environment.url + `/product_profit/import`, data);
  }
}
