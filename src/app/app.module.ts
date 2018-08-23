import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTES } from './app-routing.module';

import { ReusableComponets } from './reusable.components/reusable.componets.module';
import { DashboardModule } from './dashboard.path/dashboard.module';

import { LandingComponent } from './landing.path/landing.component';
import { AppComponent } from './app.component';
import { LandingModule } from './landing.path/landing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    APP_ROUTES,
    ReusableComponets,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    //Paths
    DashboardModule,// Dashboard Path
    LandingModule,// Dashboard Path
  ],
  providers: [],
})
export class AppModule { }
