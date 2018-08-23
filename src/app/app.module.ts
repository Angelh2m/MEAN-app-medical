import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { APP_ROUTES } from './app-routing.module';

import { ReusableComponets } from './reusable.components/reusable.componets.module';
import { DashboardModule } from './dashboard.path/dashboard.module';

import { LandingComponent } from './landing.path/landing.component';
import { LandingModule } from './landing.path/landing.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    ReusableComponets,
    // Routes
    APP_ROUTES,
    // Child Routes
    DashboardModule,// Dashboard Path
    LandingModule,// Landing Path
  ],
  providers: [],
})
export class AppModule { }
