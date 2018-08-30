// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.path/landing.component';
import { LoginComponent } from './reusable.components/login/login.component';
import { NgModule } from '@angular/core';
import { LoginGuardGuard } from './services/service.index';

import { PaymentsComponent } from 'src/app/checkout.path/payments/payments.component';
import { PaymentConfirmationComponent } from './checkout.path/payment-confirmation/payment-confirmation.component';
import { DashboardComponent } from './checkout.path/checkout.component';
import { PlanSelectionComponent } from './checkout.path/plan-selection/plan-selection.component';



const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'dashboard' } },
  { path: 'login', component: LoginComponent, data: { title: 'login' } },
  // { path: 'payments', component: PaymentsComponent, data: { title: 'payments' } },
  {
    path: 'payments',
    component: DashboardComponent,
    data: { title: 'payments' },
    children: [
      {
        path: '',
        component: PlanSelectionComponent,
        canActivate: [LoginGuardGuard],
      },
      {
        path: 'card',
        component: PaymentsComponent,
        canActivate: [LoginGuardGuard],
        children: [
          {
            path: 'payment-confirmation',
            component: PaymentConfirmationComponent,
          }

        ]
      }

    ]
  },
  { path: '**', component: LandingComponent }
];

// export const APP_ROUTES = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
