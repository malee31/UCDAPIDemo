import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LogsComponent } from "./logs/logs.component";
import { ChartComponent } from "./chart/chart.component";
import { HTTP404Component } from "./http404/http404.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogDatePipe } from "./logs/LogDate.pipe";

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LogsComponent,
		ChartComponent,
		HTTP404Component,
		LogDatePipe
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
