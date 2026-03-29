import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductBrandService {

  constructor(private http: HttpClient) { }

  page(data: { perPage: number, page: number, search?: string, searchId?: string }) {
    return this.http.get(environment.url + `/product_brand/page`, {
      params: {
        perPage: data.perPage,
        page: data.page,
        search: data?.search ?? "",
        searchId: data?.searchId ?? "",
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

  addProductBrand(formData: FormData) {
    return this.http.post(environment.url + `/add_product_brand`, formData);
  }

  getProductBrand(id: any) {
    return this.http.get(environment.url + `/get_product_brand/${id}`);
  }

  updateProductBrand(id: any, data: any) {
    return this.http.put(environment.url + `/update_product_brand/${id}`, data);
  }

  deleteProductBrand(id: any, data: any) {
    return this.http.put(environment.url + `/delete_product_brand/${id}`, data);
  }

  uploadImage(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(environment.url + `/upload_image`, formData);
  }
}