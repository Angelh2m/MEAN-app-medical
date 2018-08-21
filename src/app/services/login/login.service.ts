import { Injectable } from '@angular/core';
import { User } from '../../models/user.models';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) {
    console.log('Usuario listo');
  }

  // loginUser(user: User)
}
