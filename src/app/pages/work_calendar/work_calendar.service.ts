import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class WorkCalendarService {

  constructor(private http: HttpClient) { }

  // สรุปการเข้าสู่ระบบรายวันของทั้งเดือน (จาก tb login_logs)
  getCalendar(data: { year: number, month: number, user_id?: number }) {
    return this.http.get(environment.url + `/work_calendar`, {
      params: {
        year: data.year,
        month: data.month,
        user_id: data.user_id ?? 0,
      }
    })
      .pipe(
        map((resp: any) => resp.data)
      );
  }

  // รายละเอียดการเข้าสู่ระบบของวันที่เลือก
  getDay(data: { date: string, user_id?: number }) {
    return this.http.get(environment.url + `/work_calendar/day`, {
      params: {
        date: data.date,
        user_id: data.user_id ?? 0,
      }
    })
      .pipe(
        map((resp: any) => resp.data)
      );
  }

  getUsers() {
    return this.http.get(environment.url + `/work_calendar/users`);
  }
}
