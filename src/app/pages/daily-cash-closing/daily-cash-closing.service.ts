import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DailyCashClosingService {

  constructor(private http: HttpClient) { }

  page(data: { perPage: number, page: number, search?: string, branch_id?: number }) {
    return this.http.get(environment.url + `/daily_cash_closing/page`, {
      params: {
        perPage: data.perPage,
        page: data.page,
        search: data?.search ?? '',
        branch_id: data?.branch_id ?? 0,
      }
    });
  }

  getLastDailyCashClosing() {
    return this.http.get(environment.url + `/get_last_daily_cash_closing`);
  }

  getDailyCashClosing(id: any) {
    return this.http.get(environment.url + `/get_daily_cash_closing/${id}`);
  }

  addDailyCashClosing(data: any) {
    return this.http.post(environment.url + `/add_daily_cash_closing`, data);
  }

  updateDailyCashClosing(id: any, data: any) {
    return this.http.put(environment.url + `/update_daily_cash_closing/${id}`, data);
  }
}
