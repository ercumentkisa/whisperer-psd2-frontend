import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartModule } from 'primeng/chart';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportSegmentationComponent } from './report-segmentation/report-segmentation.component';
import { HeaderComponent } from './header/header.component';
import { ReportPurchasesComponent } from './report-purchases/report-purchases.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportSegmentationComponent,
    HeaderComponent,
    ReportPurchasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
