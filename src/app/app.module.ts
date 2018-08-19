import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTES } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';


import { LandingComponent } from './landing/landing.component';
import { AppComponent } from './app.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { HomeComponent } from './dashboard/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    // DashboardComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    SharedModule,
    DashboardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
