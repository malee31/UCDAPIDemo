import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HTTP404Component } from "./http404/http404.component";
import { HomeComponent } from "./home/home.component";
import { LogsComponent } from "./logs/logs.component";
import { ChartSearchComponent } from "./chart-search/chartSearch.component";
import { ChartComponent } from "./chart/chart.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "logs", component: LogsComponent },
	{ path: "chart", component: ChartSearchComponent },
	{ path: "chart/:crn", component: ChartComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: HTTP404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
