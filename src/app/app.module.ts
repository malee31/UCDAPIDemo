import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LogsComponent} from './logs/logs.component';
import {ChartComponent} from './chart/chart.component';
import {HTTP404Component} from './http404/http404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogsComponent,
    ChartComponent,
    HTTP404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
