import { NgModule } from '@angular/core';

import { PAGES_ROUTES } from './dashboard-routing.module';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard.component';
import { PaymentsComponent } from './payments/payments.component';
import { ReusableComponets } from '../reusable.components/reusable.componets.module';

@NgModule({
  imports: [
    PAGES_ROUTES,
    ReusableComponets,
  ],
  declarations: [
    HomeComponent,
    DashboardComponent,
    PaymentsComponent,


  ]
})
export class DashboardModule { }
