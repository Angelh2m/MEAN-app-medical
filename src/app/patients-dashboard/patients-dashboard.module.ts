import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions/questions.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { RecomendationsComponent } from './recomendations/recomendations.component';
import { DASHBOARD_ROUTES } from './patients-dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from '../services/user/user.service';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserService],
  declarations: [QuestionsComponent,
    PaymentHistoryComponent,
    AppointmentsComponent,
    RecomendationsComponent,
    DashboardComponent]
})
export class PatientsDashboardModule { }
