import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
// import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// HTTP
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginInterceptor } from '../services/interceptor/login.interceptor';
import { APP_MULTI_ROUTES } from './reusable.routing.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    // RouterModule
    APP_MULTI_ROUTES,

    // Forms
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    HeaderComponent,
    LoginComponent,
    FooterComponent

  ],
  exports: [
    HeaderComponent,
    LoginComponent,
    FooterComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi: true
    }
  ],
})
export class ReusableComponets { }
