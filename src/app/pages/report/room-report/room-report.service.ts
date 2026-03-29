import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RoomReportService {

  constructor(private http: HttpClient) { }

  page(data: { perPage: number, page: number, search?: string, searchId?: string }) {
    return this.http.get(environment.url + `/get_room_report/page`, {
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

  getCheckupLocation() {
    return this.http.get(environment.url + `/checkup_location/list`);
  }

  getCheckupRoom(id: any) {
    return this.http.get(environment.url + `/checkup_room/list/${id}`);
  }

  getReportRoom(id: any) {
    return this.http.get(environment.url + `/get_room_report/${id}`);
  }

}