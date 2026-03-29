import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class NewOrderService {

  constructor(private http: HttpClient) { }

  getPaymentType() {
    return this.http.get(environment.url + `/payment_type/list`);
  }
  getProductTypeGroup() {
    return this.http.get(environment.url + `/product_type_group/list`);
  }

  getMemberByPhone(tel: any) {
    return this.http.get(environment.url + `/get_member_by_phone/${tel}`);
  }

  getProductByBarcode(barcode: any) {
    return this.http.get(environment.url + `/get_product_by_barcode/${barcode}`);
  }

  addMember(formData: FormData) {
    return this.http.post(environment.url + `/add_member`, formData);
  }

  addOrder(formData: FormData) {
    return this.http.post(environment.url + `/add_order`, formData);
  }

}