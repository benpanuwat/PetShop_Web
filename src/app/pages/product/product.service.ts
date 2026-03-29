import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }

  page(data: { perPage: number, page: number, search?: string, searchId1?: string, searchId2?: string }) {
    return this.http.get(environment.url + `/product/page`, {
      params: {
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

  addProduct(formData: FormData) {
    return this.http.post(environment.url + `/add_product`, formData);
  }

  getProduct(id: any) {
    return this.http.get(environment.url + `/get_product/${id}`);
  }

  updateProduct(id: any, data: any) {
    return this.http.put(environment.url + `/update_product/${id}`, data);
  }

  uploadImage(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(environment.url + `/upload_image`, formData);
  }
}