import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  url: string = 'https://vorp-backend.fly.dev/api/';

  register(firstName: string, lastName: string, username: string, email: string, password: string, router: Router) {
    this.http.post(this.url + 'auth/register', {
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password
    }).subscribe((response: any) => {
      if (response.status == 'success') router.navigate(['login'])
    })
  }

  login(username: string, password: string, router: Router) {
    this.http.post(this.url + 'auth/login', {
      username: username,
      password: password
    }).subscribe((res: any) => {
      if (res.token) {
        localStorage.setItem('token', res.token)
        router.navigate(['dashboard'])
      }
    })
  }

  getUsername(): string {
    const decoded: any = jwtDecode(localStorage.getItem('token') as string)
    return decoded.username
  }

  getSummaries(): Observable<any[]> {
    return this.http.get(this.url + "summary/all", { 'headers': { 'Authorization': 'Bearer ' + localStorage.getItem('token') } }) as Observable<any[]>
  }
}
