import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getSummary() {
    return this.http.get(environment.url + `/dashboard/summary`);
  }

  getChartDaily(year: number, month: number) {
    return this.http.get(environment.url + `/dashboard/chart/daily`, { params: { year, month } });
  }

  getChartMonthly(year: number) {
    return this.http.get(environment.url + `/dashboard/chart/monthly`, { params: { year } });
  }
}
