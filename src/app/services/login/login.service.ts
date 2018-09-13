import { Injectable } from '@angular/core';
import { User } from '../../models/user.models';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { URL_ENDPOINTS } from '../../config/config';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  public loginModal = new BehaviorSubject<any>('false');
  public loginModalSwitch = this.loginModal.asObservable();

  constructor(private _http: HttpClient) { }

  loginUser(user) {
    // let url = `${URL_ENDPOINTS.aws1}/login`;
    let url = `/api/login`;
    const body = new HttpParams()
      .set('email', user.email)
      .set('password', user.password)

    return this._http.post(url, body)
  }

  registerUser(user) {
    // let url = `${URL_ENDPOINTS.aws}/register`;
    let url = `/api/register`;
    const body = new HttpParams()
      .set('name', user.name)
      .set('email', user.email)
      .set('password', user.password)

    return this._http.post(url, body)
  }

  resetPassword(user) {
    // let url = `${URL_ENDPOINTS.aws}/register`;
    let url = `/api/forgot-password`;
    const body = new HttpParams()
      .set('email', user.email)

    return this._http.post(url, body)
  }

}
