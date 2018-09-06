import { Injectable } from '@angular/core';
import * as jwt_decode from "jwt-decode";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from "rxjs"
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userToken: string = '';
  userTokenData: any;

  private avatar = new BehaviorSubject<string>(null);
  avatarObsv = this.avatar.asObservable();

  public usersPayload: any = {
    email: '',
    info: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      address: '',
      email: '',
      city: '',
      state: '',
    }
  };

  constructor(private _http: HttpClient, private router: Router) { }

  setToken(token) {
    localStorage.setItem('Token', JSON.stringify(token))
  }
  getToken() {
    return this.userToken = localStorage.getItem('Token') ? localStorage.getItem('Token') : null;
  }
  setDecodedToken() {
    this.userTokenData = jwt_decode(this.getToken());
  }

  isLogged() {
    return this.getToken() && this.getToken().length > 35 ? true : false;
  }
  getUserDataTest() {
    console.log(this.usersPayload);
  }

  fetchUserProfile() {
    this.userTokenData = jwt_decode(this.getToken());

    // IF THERE IS NO EMAIL USER DOES NOT EXIST
    if (this.usersPayload.email == '') {
      console.warn('FETCH A USER FROM API THERE IS NO EMAIL');
      return this._http.get('/api/profile').pipe(
        map((el: any) => {
          this.usersPayload = { ...el.user }
          // Broadcast the users avatar to header
          this.avatar.next(this.usersPayload.info.avatar);
          return el.user
        })
      )
    } else {
      console.warn('RETURN OBSERVABLE WITH USERS PAYLOAD', this.usersPayload);
      const simpleObservable = new Observable((observer) => {
        observer.next({ ...this.usersPayload })
        observer.complete()
      })

      return simpleObservable
    }
  }

  updateUserData(requestUserUpdate) {

    const body = new HttpParams()
      .set('updateUserData', JSON.stringify(requestUserUpdate))

    return this._http.put('/api/user', body).pipe(
      map((el: any) => {
        this.usersPayload = {
          info: {
            ...el.user
          }
        }
        return el
      })
    )
  }

  askQuestion(question) {
    const body = new HttpParams()
      .set('subject', question.subject)
      .set('content', question.content)

    return this._http.post('/api/questions', body).pipe(
      map((el: any) => {
        // if (el.user !== undefined) {
        //   this.usersPayload = { ...el.user }
        // }
        return el
      })
    )
  }

  makePayment(token) {
    const body = new HttpParams()
      .set('stripeToken', token)
    return this._http.post('/api/payments', body)
  }

  onLogout() {
    this.router.navigate(['/']);
    localStorage.removeItem('Token');
    this.userToken = '';
    this.userTokenData = null;
    this.avatar.next(null);
    // this.usersPayload.info = {};
  }

  setAvatar(img) {
    this.avatar.next(img);
  }

}
