import { Subject } from 'rxjs';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(private http: HttpClient) { }

  private menuSource = new Subject<string>();
  private resetSource = new Subject();

  menuSource$ = this.menuSource.asObservable();
  resetSource$ = this.resetSource.asObservable();

  onMenuStateChange(key: string) {
    this.menuSource.next(key);
  }

  reset() {
    this.resetSource.next(true);
  }

  getProfile() {
    return this.http.get(environment.url + `/get_profile`);
  }

  getPermissions() {
    return this.http.get(environment.url + `/get_permission`);
  }

  changeMemberPass(data: any) {
    return this.http.put(environment.url + `/change_member_pass`, data);
  }

  uploadImage(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(environment.url + `/upload_image`, formData);
  }

  updateProfile(data: any) {
    return this.http.put(environment.url + `/update_profile`, data);
  }

}