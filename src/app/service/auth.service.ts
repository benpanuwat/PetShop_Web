import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  pre_login(data: any) {
    return this.http.post(environment.url + `/pre_login`, data);
  }

  login(data: any) {
    return this.http.post(environment.url + `/login`, data);
  }


  logout() {
    localStorage.removeItem('token'); // ลบ Token ออกจาก Local Storage
  }

  setToken(token: string) {
    localStorage.setItem('token', token); // เก็บ Token
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }


  isAuthenticated(): boolean {
    return !!this.getToken(); // ตรวจสอบว่ามี Token หรือไม่
  }


  setName(name: string) {
    localStorage.setItem('name', name);
  }

  getName(): string | null {
    return localStorage.getItem('name');
  }
}