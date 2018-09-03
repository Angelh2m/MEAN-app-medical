import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { URL_ENDPOINTS } from '../../config/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private _http: HttpClient) { }

  registerUser(user) {
    let url = `${URL_ENDPOINTS.aws}/register`;
    console.log(url);

    const body = new HttpParams()
      .set('name', user.name)
      .set('email', user.email)
      .set('password', user.password)

    return this._http.post(url, body)
  }
}
