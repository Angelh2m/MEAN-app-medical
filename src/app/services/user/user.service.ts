import { Injectable } from '@angular/core';
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: string = '';
  userData: object;

  constructor() { }

  setToken(token) {
    localStorage.setItem('Token', JSON.stringify(token))
  }
  getToken() {
    return this.token = localStorage.getItem('Token');
  }
  isLogged() {
    return (this.getToken().length > 35) ? true : false;
  }
  getUserData() {
    return this.userData = jwt_decode(this.getToken());
  }

}
