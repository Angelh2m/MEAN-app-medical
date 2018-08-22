import { Injectable } from '@angular/core';
import { User } from '../../models/user.models';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { URL_ENDPOINTS } from '../../config/config';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private _http: HttpClient) { }

  loginUser(user) {

    let url = URL_ENDPOINTS.aws;

    const body = new HttpParams()
      .set('email', 'Angelh3m@gmail.com')
      .set('password', '123')

    return this._http.post(url, body)
  }

  // loginUser(payload: User): Observable<any> {
  //   let url = URL_ENDPOINTS.login;

  //   let data = {
  //     email: 'Angelh3m@gmail.com',
  //     password: '123',
  //     name: 'Hello Requesr'
  //   }
  //   const body = new HttpParams()
  //     .set('email', 'Angelh3m@gmail.com')
  //     .set('password', '123')

  //   return this._http.post(url, body, {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     })
  //   }
}
