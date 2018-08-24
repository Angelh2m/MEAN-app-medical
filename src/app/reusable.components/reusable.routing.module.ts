// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from '../landing.path/landing.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from '../dashboard.path/home/home.component';
import { DashboardComponent } from '../dashboard.path/dashboard.component';



const pagesRoutes: Routes = [


];


export const APP_MULTI_ROUTES = RouterModule.forChild(pagesRoutes);


