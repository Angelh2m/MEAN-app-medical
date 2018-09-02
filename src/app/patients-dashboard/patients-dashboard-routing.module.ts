import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { PatientsDashboardComponent } from './patients-dashboard.component';
import { NgModule } from '@angular/core';

// const appRoutes: Routes = [
//   // { path: '', component: LandingComponent },
//   // { path: 'login', component: LoginComponent, data: { title: 'login' } },
//   // { path: '**', component: NopagefoundComponent }
// ];
// export const PAGES_ROUTES = RouterModule.forRoot(appRoutes);


const aboutRoutes: Routes = [
    // {
    //     path: 'dashboard',
    //     component: QuestionsComponent,
    //     outlet: "article-details",

    //     children: [
    //         {
    //             path: 'questions',
    //             component: QuestionsComponent,
    //             outlet: 'list'
    //         }
    //     ]
    // },
    // {
    //     path: 'questions',
    //     component: QuestionsComponent
    // }
];

@NgModule({
    imports: [
        RouterModule.forChild(aboutRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DASHBOARD_ROUTES { }
// export const DASHBOARD_ROUTES = RouterModule.forChild(aboutRoutes);

