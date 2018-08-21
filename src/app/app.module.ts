import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTES } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';


import { LandingComponent } from './landing/landing.component';
import { AppComponent } from './app.component';
import { LandingModule } from './landing/landing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,

    APP_ROUTES,
    SharedModule,
    DashboardModule,
    LandingModule,
    FormsModule,

    ReactiveFormsModule,


  ],
  providers: [],
})
export class AppModule { }
