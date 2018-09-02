// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.path/landing.component';
import { LoginComponent } from './reusable.components/login/login.component';
import { NgModule } from '@angular/core';
import { LoginGuardGuard } from './services/service.index';

import { PaymentsComponent } from 'src/app/checkout.path/payments/payments.component';
import { PaymentConfirmationComponent } from './checkout.path/payment-confirmation/payment-confirmation.component';
import { CheckoutComponent } from './checkout.path/checkout.component';
import { PlanSelectionComponent } from './checkout.path/plan-selection/plan-selection.component';
import { PatientsDashboardComponent } from './patients-dashboard/patients-dashboard.component';
import { QuestionsComponent } from './patients-dashboard/questions/questions.component';
import { PaymentHistoryComponent } from './patients-dashboard/payment-history/payment-history.component';
import { AppointmentsComponent } from './patients-dashboard/appointments/appointments.component';
import { RecomendationsComponent } from './patients-dashboard/recomendations/recomendations.component';
import { DashboardComponent } from './patients-dashboard/dashboard/dashboard.component';



const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'checkout', component: CheckoutComponent, data: { title: 'Checkout' } },
  { path: 'login', component: LoginComponent, data: { title: 'login' } },
  // { path: 'payments', component: PaymentsComponent, data: { title: 'payments' } },
  {
    path: 'payments',
    component: CheckoutComponent,
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
      },
      {
        path: 'payment-confirmation',
        component: PaymentConfirmationComponent,
        canActivate: [LoginGuardGuard],
      }
    ]
  },
  {
    path: 'dashboard',
    component: PatientsDashboardComponent,
    data: { title: 'PatientsDashboardComponent' },
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: { title: 'QuestionsComponent' }
      },
      {
        path: 'questions',
        component: QuestionsComponent,
        data: { title: 'QuestionsComponent' }
      },
      {
        path: 'payment-history',
        component: PaymentHistoryComponent,
        data: { title: 'payment-history' }
      },
      {
        path: 'appointments',
        component: AppointmentsComponent,
        data: { title: 'appointments' }
      },
      {
        path: 'recomendations',
        component: RecomendationsComponent,
        data: { title: 'recomendations' }
      },
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
