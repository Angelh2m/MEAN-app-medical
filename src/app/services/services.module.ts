import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './login/login.service';
import { LoginGuardGuard } from './service.index';
import { UserService } from './user/user.service';


@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    LoginService,
    LoginGuardGuard,
    UserService

  ],
  declarations: []
})
export class ServicesModule { }
