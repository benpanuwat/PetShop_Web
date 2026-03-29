import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserGroupService {

  constructor(private http: HttpClient) { }

  page(data: { perPage: number, page: number, search?: string }) {
    return this.http.get(environment.url + `/user_group/page`, {
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

  addUserGroup(formData: FormData) {
    return this.http.post(environment.url + `/add_user_group`, formData);
  }

  getUserGroup(id: any) {
    return this.http.get(environment.url + `/get_user_group/${id}`);
  }

  updateUserGroup(id: any, data: any) {
    return this.http.put(environment.url + `/update_user_group/${id}`, data);
  }

  deleteUserGroup(id: any, data: any) {
    return this.http.put(environment.url + `/delete_user_group/${id}`, data);
  }
}