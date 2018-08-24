// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.path/landing.component';
import { DashboardComponent } from './dashboard.path/dashboard.component';
import { LoginComponent } from './reusable.components/login/login.component';
import { NgModule } from '@angular/core';


const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'dashboard' } },
  { path: 'login', component: LoginComponent, data: { title: 'login' } },
  { path: '**', component: LandingComponent }
];

// export const APP_ROUTES = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
