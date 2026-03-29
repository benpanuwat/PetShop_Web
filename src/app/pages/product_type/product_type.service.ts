import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductTypeService {

  constructor(private http: HttpClient) { }

  page(data: { perPage: number, page: number, search?: string }) {
    return this.http.get(environment.url + `/product_type/page`, {
      params: {
        perPage: data.perPage,
        page: data.page,
        search: data?.search ?? "",
      }
    })
      .pipe(
        map((resp: any) => {
          return resp.data;
        })
      );
  }

  addProductType(formData: FormData) {
    return this.http.post(environment.url + `/add_product_type`, formData);
  }

  getProductType(id: any) {
    return this.http.get(environment.url + `/get_product_type/${id}`);
  }

  updateProductType(id: any, data: any) {
    return this.http.put(environment.url + `/update_product_type/${id}`, data);
  }

  deleteProductType(id: any, data: any) {
    return this.http.put(environment.url + `/delete_product_type/${id}`, data);
  }

  uploadImage(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(environment.url + `/upload_image`, formData);
  }
}