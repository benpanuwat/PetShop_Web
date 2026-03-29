import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  constructor(private http: HttpClient) { }

  page(data: { branchId: number, perPage: number, page: number, search?: string, date_start?: string, date_end?: string }) {
    return this.http.get(environment.url + `/order/page`, {
      params: {
        branchId: data.branchId,
        perPage: data.perPage,
        page: data.page,
        search: data?.search ?? "",
        date_start: data?.date_start ?? "",
        date_end: data?.date_end ?? "",
      }
    })
      .pipe(
        map((resp: any) => {
          return resp.data;
        })
      );
  }

  cancelOrder(id: any, data: any) {
    return this.http.put(environment.url + `/cancel_order/${id}`, data);
  }
}