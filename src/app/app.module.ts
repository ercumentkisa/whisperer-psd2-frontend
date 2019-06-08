import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportSegmentationComponent } from './report-segmentation/report-segmentation.component';
import { HeaderComponent } from './header/header.component';
import { ReportPurchasesComponent } from './report-purchases/report-purchases.component';
import { ReportHoursComponent } from './report-hours/report-hours.component';
import { ReportMapComponent } from './report-map/report-map.component';
import { GMapModule } from 'primeng/gmap';

@NgModule({
  declarations: [
    AppComponent,
    ReportSegmentationComponent,
    HeaderComponent,
    ReportPurchasesComponent,
    ReportHoursComponent,
    ReportMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    GMapModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
