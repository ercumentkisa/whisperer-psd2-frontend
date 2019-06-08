import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportSegmentationComponent } from './report-segmentation/report-segmentation.component';
import { HeaderComponent } from './header/header.component';
import { ReportPurchasesComponent } from './report-purchases/report-purchases.component';
import { ReportHoursComponent } from './report-hours/report-hours.component';
import { ReportMapComponent } from './report-map/report-map.component';
import { GMapModule } from 'primeng/gmap';
import { LoginComponent } from './login/login.component';
import { ReportDashboardComponent } from './report-dashboard/report-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportSegmentationComponent,
    HeaderComponent,
    ReportPurchasesComponent,
    ReportHoursComponent,
    ReportMapComponent,
    LoginComponent,
    ReportDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    GMapModule,
    FormsModule,
    HttpClientModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
