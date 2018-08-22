import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderService } from './shared/header.service';
import { LoginService } from './login/login.service';


@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    HeaderService,
    LoginService,

  ],
  declarations: []
})
export class ServicesModule { }
