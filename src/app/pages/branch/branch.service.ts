import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class BranchService {

  constructor(private http: HttpClient) { }

  page(data: { perPage: number, page: number, search?: string }) {
    return this.http.get(environment.url + `/branch/page`, {
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

  addBranch(formData: FormData) {
    return this.http.post(environment.url + `/add_branch`, formData);
  }

  getBranch(id: any) {
    return this.http.get(environment.url + `/get_branch/${id}`);
  }

  updateBranch(id: any, data: any) {
    return this.http.put(environment.url + `/update_branch/${id}`, data);
  }

  deleteBranch(id: any, data: any) {
    return this.http.put(environment.url + `/delete_branch/${id}`, data);
  }
}