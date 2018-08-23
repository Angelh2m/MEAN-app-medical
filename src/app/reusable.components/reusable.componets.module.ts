import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
// import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    // RouterModule
    // Forms
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HeaderComponent,
    LoginComponent
  ],
  exports: [
    HeaderComponent,
    LoginComponent,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ReusableComponets { }
