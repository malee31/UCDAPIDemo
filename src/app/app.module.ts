import { NgModule } from "@angular/core";
import { CommonModule, AsyncPipe } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgChartsModule } from "ng2-charts";

import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ConstantsService } from "./config/constants.service";
import { ApiService } from "./api-services/api.service";

import { HomeComponent } from "./home/home.component";
import { LogsComponent } from "./logs/logs.component";
import { ChartComponent } from "./chart/chart.component";
import { HTTP404Component } from "./http404/http404.component";
import { ChartSearchComponent } from "./chart-search/chartSearch.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { GraphComponent } from "./components/graph/graph.component";
import { CrnGraphComponent } from "./components/crn-graph/crn-graph.component";
import { CourseNameGraphComponent } from "./components/course-name-graph/course-name-graph.component";
import { MultiChartComponent } from "./multichart/multi-chart.component";
import { AboutUsComponent } from "./components/home/about-us/about-us.component";
import { DegreesComponent } from "./degrees/degrees.component";
import { SeatsComponent } from "./seats/seats.component";
import { CoursesComponent } from "./courses/courses.component";
import { ComingSoonComponent } from "./components/coming-soon/coming-soon.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { CloseSidebarButtonComponent } from "./components/sidebar/close-sidebar-button/close-sidebar-button.component";
import { OpenSidebarButtonComponent } from "./components/sidebar/open-sidebar-button/open-sidebar-button.component";
import { SeatsDocsComponent } from "./docs/seats-docs/seats-docs.component";
import { DegreesDocsComponent } from "./docs/degrees-docs/degrees-docs.component";
import { CoursesDocsComponent } from "./docs/courses-docs/courses-docs.component";
import { DocsOverviewComponent } from "./docs/docs-overview/docs-overview.component";

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ChartComponent,
		HTTP404Component,
		NavbarComponent,
		GraphComponent,
		CrnGraphComponent,
		ChartSearchComponent,
		CourseNameGraphComponent,
		MultiChartComponent,
		AboutUsComponent,
		DegreesComponent,
		SeatsComponent,
		CoursesComponent,
		ComingSoonComponent,
		SidebarComponent,
		CloseSidebarButtonComponent,
		OpenSidebarButtonComponent,
		SeatsDocsComponent,
		DegreesDocsComponent,
		CoursesDocsComponent,
		DocsOverviewComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		CommonModule,
		NgChartsModule,
		LogsComponent,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatAutocompleteModule,
		ReactiveFormsModule,
		AsyncPipe,
	],
	providers: [ConstantsService, ApiService],
	bootstrap: [AppComponent]
})
export class AppModule {}
