import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ReceiveProductService {

  constructor(private http: HttpClient) { }


  getProductTypeGroup() {
    return this.http.get(environment.url + `/product_type_group/list`);
  }


  addProductLot(formData: FormData) {
    return this.http.post(environment.url + `/add_product_lot`, formData);
  }

}