import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(
    public router: Router,
    public _userService: UserService) { }

  canActivate() {

    if (this._userService.isLogged()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false

  }

}
