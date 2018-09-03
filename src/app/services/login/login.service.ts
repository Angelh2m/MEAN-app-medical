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
    // let url = `${URL_ENDPOINTS.aws}/login`;
    let url = `api/login`;

    // email: Angelh3m@gmail.com
    // pass: 123
    const body = new HttpParams()
      .set('email', user.email)
      .set('password', user.password)

    return this._http.post(url, body)
  }
}
