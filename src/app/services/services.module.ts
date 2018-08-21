import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderService } from './shared/header.service';
import { LoginService } from './login/login.service';
// import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    // HttpClientModule
  ],
  providers: [
    HeaderService,
    LoginService
  ],
  declarations: []
})
export class ServicesModule { }
