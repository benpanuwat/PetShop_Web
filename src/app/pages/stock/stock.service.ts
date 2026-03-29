import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class StockService {

  constructor(private http: HttpClient) { }

  page(data: {branchId: number, perPage: number, page: number, search?: string, searchId1?: string, searchId2?: string }) {
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
      .pipe(
        map((resp: any) => {
          return resp.data;
        })
      );
  }

  getProductType() {
    return this.http.get(environment.url + `/product_type/list`);
  }

  getProductBrand(id: any) {
    return this.http.get(environment.url + `/product_brand/list/${id}`);
  }

  getStock(id: any) {
    return this.http.get(environment.url + `/get_stock/${id}`);
  }

  updateStock(id: any, data: any) {
    return this.http.put(environment.url + `/update_stock/${id}`, data);
  }

}