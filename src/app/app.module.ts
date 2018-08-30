import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { ReusableComponets } from './reusable.components/reusable.componets.module';
import { DashboardModule } from './checkout.path/checkout.module';


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
    AppRoutingModule,
    // Child Routes
    DashboardModule,// Dashboard Path
    LandingModule,// Landing Path
  ],
  providers: [],
})
export class AppModule { }
