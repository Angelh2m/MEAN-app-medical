import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { ReusableComponets } from './reusable.components/reusable.componets.module';
import { CheckoutModule } from './checkout.path/checkout.module';

import { LandingComponent } from './landing.path/landing.component';
import { LandingModule } from './landing.path/landing.module';
import { PatientsDashboardComponent } from './patients-dashboard/patients-dashboard.component';
import { PatientsDashboardModule } from './patients-dashboard/patients-dashboard.module';
import { DASHBOARD_ROUTES } from './patients-dashboard/patients-dashboard-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PatientsDashboardComponent,
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    ReusableComponets,
    // MAIN Routes
    AppRoutingModule,
    DASHBOARD_ROUTES,
    // PATH Routes
    CheckoutModule,
    LandingModule,
    PatientsDashboardModule,
  ],
  providers: [],
})
export class AppModule { }
