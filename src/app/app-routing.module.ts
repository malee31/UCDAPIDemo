import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HTTP404Component } from "./http404/http404.component";
import { HomeComponent } from "./home/home.component";
import { LogsComponent } from "./logs/logs.component";
import { ChartSearchComponent } from "./chart-search/chartSearch.component";
import { ChartComponent } from "./chart/chart.component";
import { MultiChartComponent } from "./multichart/multi-chart.component";
import { CoursesComponent } from "./courses/courses.component";
import { DegreesComponent } from "./degrees/degrees.component";
import { SeatsComponent } from "./seats/seats.component";
import { OverviewComponent } from "./docs/overview/overview.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "logs", component: LogsComponent },
	{ path: "chart", component: ChartSearchComponent },
	{ path: "chart/crn/:crn", component: ChartComponent },
	{ path: "chart/name/:subject_code/:subject_number", component: MultiChartComponent },
	{ path: "degrees", component: DegreesComponent },
	{ path: "courses", component: CoursesComponent },
	{ path: "seats", component: SeatsComponent },
	{ path: "docs", component: OverviewComponent },
	{ path: "docs/degrees", component: OverviewComponent },
	{ path: "docs/courses", component: CoursesComponent },
	{ path: "docs/seats", component: SeatsComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: HTTP404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
		bindToComponentInputs: true
	})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
