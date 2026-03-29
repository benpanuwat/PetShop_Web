import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  page(data: { perPage: number, page: number, search?: string }) {
    return this.http.get(environment.url + `/user/page`, {
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

  getUserGroupList() {
    return this.http.get(environment.url + `/get_user_group_list`);
  }

  addUser(formData: FormData) {
    return this.http.post(environment.url + `/add_user`, formData);
  }

  getUser(id: any) {
    return this.http.get(environment.url + `/get_user/${id}`);
  }

  updateUser(id: any, data: any) {
    return this.http.put(environment.url + `/update_user/${id}`, data);
  }

  updateUserPass(id: any, data: any) {
    return this.http.put(environment.url + `/update_user_pass/${id}`, data);
  }

  deleteUser(id: any, data: any) {
    return this.http.put(environment.url + `/delete_user/${id}`, data);
  }
}