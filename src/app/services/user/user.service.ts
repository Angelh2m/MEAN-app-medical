import { Injectable } from '@angular/core';
import * as jwt_decode from "jwt-decode";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userToken: string = '';
  userTokenData: object;

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

  constructor(private _http: HttpClient) { }

  setToken(token) {
    localStorage.setItem('Token', JSON.stringify(token))
  }
  getToken() {
    return this.userToken = localStorage.getItem('Token') ? localStorage.getItem('Token') : null;
  }
  isLogged() {
    return (this.getToken().length > 35) ? true : false;
  }
  getUserDataTest() {
    console.log('ANy data?', this.usersPayload);
    return this.usersPayload;
  }

  fetchUserProfile() {
    this.userTokenData = jwt_decode(this.getToken());

    if (this.usersPayload.email == '') {
      console.warn('FETCH ');

      return this._http.get('/api/profile').pipe(
        map((el: any) => {
          this.usersPayload = { ...el.user }
          console.warn('API CALL FORM SERVICE', el.user);
          return el.user
        })
      )
    } else {

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
        if (el.user !== undefined) {
          this.usersPayload = { ...el.user }
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

  onLogout() {
    localStorage.removeItem('Token');
    this.userToken = '';
    this.userTokenData = null;
    this.usersPayload = null;
  }

}
