import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReportDashboardComponent } from './report-dashboard/report-dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: ReportDashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
