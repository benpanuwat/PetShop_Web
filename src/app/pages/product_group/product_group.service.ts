import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductGroupService {

  constructor(private http: HttpClient) { }

  page(data: { perPage: number, page: number, search?: string }) {
    return this.http.get(environment.url + `/product_group/page`, {
      params: {
        perPage: data.perPage,
        page: data.page,
        search: data?.search ?? "",
      }
    }).pipe(map((resp: any) => resp.data));
  }

  addProductGroup(data: any) {
    return this.http.post(environment.url + `/add_product_group`, data);
  }

  getProductGroup(id: any) {
    return this.http.get(environment.url + `/get_product_group/${id}`);
  }

  updateProductGroup(id: any, data: any) {
    return this.http.put(environment.url + `/update_product_group/${id}`, data);
  }

  deleteProductGroup(id: any, data: any) {
    return this.http.put(environment.url + `/delete_product_group/${id}`, data);
  }

  // reuse: types -> brands -> products (พร้อมราคาของสาขา)
  getProducts() {
    return this.http.get(environment.url + `/product_type_group/list`);
  }
}
