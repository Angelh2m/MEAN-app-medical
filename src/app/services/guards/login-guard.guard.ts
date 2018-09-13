import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  value = true;
  constructor(
    public router: Router,
    private _login: LoginService,
    public _userService: UserService) { }

  canActivate() {
    // console.log(this._userService.isLogged());

    if (this._userService.isLogged()) {
      return true;
    }

    this._login.loginModal.next(this.value);
    // this.value = !this.value;
    // console.warn('STREAM', this.value);

    // this.router.navigate(['/login']);
    return false

  }

}
