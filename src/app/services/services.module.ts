import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './login/login.service';
import { LoginGuardGuard } from './service.index';


@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    LoginService,
    LoginGuardGuard

  ],
  declarations: []
})
export class ServicesModule { }
