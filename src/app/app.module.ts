import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgChartsModule } from "ng2-charts";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LogsComponent } from "./logs/logs.component";
import { ChartComponent } from "./chart/chart.component";
import { HTTP404Component } from "./http404/http404.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogDatePipe } from "./logs/LogDate.pipe";
import { ChartSearchComponent } from "./chart-search/chartSearch.component";
import { ApiService } from "./api-services/api.service";
import { ConstantsService } from "./config/constants.service";
import { CommonModule } from "@angular/common";

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LogsComponent,
		ChartSearchComponent,
		ChartComponent,
		HTTP404Component,
		LogDatePipe
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		CommonModule,
		NgChartsModule
	],
	providers: [ConstantsService, ApiService],
	bootstrap: [AppComponent]
})
export class AppModule {}
