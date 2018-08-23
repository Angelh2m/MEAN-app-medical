import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
// import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    // RouterModule
  ],
  declarations: [
    HeaderComponent,
    LoginComponent
  ],
  exports: [
    HeaderComponent,
    LoginComponent
  ]
})
export class ReusableComponets { }
