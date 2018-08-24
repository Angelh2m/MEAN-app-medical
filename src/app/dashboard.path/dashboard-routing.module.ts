import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard.component';
import { PaymentsComponent } from './payments/payments.component';
import { LandingComponent } from '../landing.path/landing.component';


const pagesRoutes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { name: 'Dashboard' },
    children: [
      { path: 'payments', component: PaymentsComponent },
    ]
  },
  { path: 'payments', component: PaymentsComponent },
];


export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);

