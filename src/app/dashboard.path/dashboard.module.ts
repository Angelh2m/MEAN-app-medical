import { NgModule } from '@angular/core';

import { PAGES_ROUTES } from './dashboard-routing.module';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard.component';
import { PaymentsComponent } from './payments/payments.component';
import { ReusableComponets } from '../reusable.components/reusable.componets.module';
import { PlanSelectionComponent } from './plan-selection/plan-selection.component';
import { PaymentConfirmationComponent } from './payment-confirmation/payment-confirmation.component';

@NgModule({
  imports: [
    CommonModule,
    PAGES_ROUTES,
    ReusableComponets,
  ],
  declarations: [
    HomeComponent,
    DashboardComponent,
    PaymentsComponent,
    PlanSelectionComponent,
    PaymentConfirmationComponent,
  ]
})
export class DashboardModule { }
