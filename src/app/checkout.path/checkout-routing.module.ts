import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { PaymentsComponent } from './payments/payments.component';
import { LandingComponent } from '../landing.path/landing.component';


// const appRoutes: Routes = [
//   // { path: '', component: LandingComponent },
//   // { path: 'login', component: LoginComponent, data: { title: 'login' } },
//   // { path: '**', component: NopagefoundComponent }
// ];
// export const PAGES_ROUTES = RouterModule.forRoot(appRoutes);


const aboutRoutes: Routes = [
  // {
  //   path: 'about',
  //   component: PaymentsComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: LandingComponent
  //     }
  //   ]
  // }
];

export const PAGES_ROUTES = RouterModule.forChild(aboutRoutes);

