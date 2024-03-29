import { isDevMode, NgModule } from "@angular/core";
import { AsyncPipe, CommonModule, NgOptimizedImage } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgChartsModule } from "ng2-charts";
import { PrismComponent } from './components/prism-highlight';

import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ConstantsService } from "./services/config/constants.service";
import { ApiService } from "./services/api-services/api.service";

import { HomeComponent } from "./home/home.component";
import { LogsComponent } from "./logs/logs.component";
import { ChartComponent } from "./chart/chart.component";
import { HTTP404Component } from "./http404/http404.component";
import { ChartSearchComponent } from "./chart-search/chartSearch.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
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
import { CollapsibleSidebarLinkComponent } from './components/sidebar/collapsible-sidebar-link/collapsible-sidebar-link.component';
import { CollapsibleSidebarLinkItemComponent } from './components/sidebar/collapsible-sidebar-link-item/collapsible-sidebar-link-item.component';
import { DocHeaderComponent } from './components/docs/doc-header/doc-header.component';
import { DocMetaComponent } from './components/docs/doc-meta/doc-meta.component';
import { DocParamsComponent } from './components/docs/doc-params/doc-params.component';
import { DocParamsTableComponent } from './components/docs/doc-params/doc-params-table/doc-params-table.component';
import { DocParamsTableRowComponent } from './components/docs/doc-params/doc-params-table/doc-params-table-row/doc-params-table-row.component';
import { DocResponseComponent } from './components/docs/doc-response/doc-response.component';
import { DocWarningsComponent } from './components/docs/doc-response/doc-warnings/doc-warnings.component';
import { DocErrorsComponent } from './components/docs/doc-response/doc-errors/doc-errors.component';
import { DocCodeBlockComponent } from './components/docs/doc-code-block/doc-code-block.component';
import { DocFooterComponent } from './components/docs/doc-footer/doc-footer.component';
import { SeatHistoryDocChunkComponent } from './docs/chunks/seat-history-doc-chunk/seat-history-doc-chunk.component';
import { SeatsCurrentDocChunkComponent } from './docs/chunks/seats-current-doc-chunk/seats-current-doc-chunk.component';
import { DegreesDocChunkComponent } from './docs/chunks/degrees-doc-chunk/degrees-doc-chunk.component';
import { DegreeTypesDocChunkComponent } from './docs/chunks/degree-types-doc-chunk/degree-types-doc-chunk.component';
import { CourseDetailsDocChunkComponent } from './docs/chunks/course-details-doc-chunk/course-details-doc-chunk.component';
import { CourseCrnsDocChunkComponent } from './docs/chunks/course-crns-doc-chunk/course-crns-doc-chunk.component';
import { FilterUiLayoutComponent } from './components/search/filter-ui-layout/filter-ui-layout.component';
import { AutocompleteFilterFieldComponent } from './components/search/filter-ui-layout/autocomplete-filter-field/autocomplete-filter-field.component';
import { CrnLookupResultComponent } from './components/search/result-items/crn-lookup-result/crn-lookup-result.component';
import { CourseLookupResultComponent } from './components/search/result-items/course-lookup-result/course-lookup-result.component';
import { DegreeLookupResultComponent } from './components/search/result-items/degree-lookup-result/degree-lookup-result.component';
import { NotificationBarComponent } from './components/notification-bar/notification-bar.component';
import { NotificationEntryComponent } from './components/notification-bar/notification-entry/notification-entry.component';
import { ChartChunkComponent } from './components/chart/chart-chunk/chart-chunk.component';
import { ChartFigureComponent } from './components/chart/chart-chunk/chart-figure/chart-figure.component';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { CourseCrnMetadataDocChunkComponent } from './docs/chunks/course-crn-metadata-doc-chunk/course-crn-metadata-doc-chunk.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FeaturesComponent } from "./components/flowbite/features/features.component";

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ChartComponent,
		HTTP404Component,
		NavbarComponent,
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
		DocsOverviewComponent,
		CollapsibleSidebarLinkComponent,
		CollapsibleSidebarLinkItemComponent,
		DocHeaderComponent,
		DocMetaComponent,
		DocParamsComponent,
		DocParamsTableComponent,
		DocParamsTableRowComponent,
		DocResponseComponent,
		DocWarningsComponent,
		DocErrorsComponent,
		DocCodeBlockComponent,
		DocFooterComponent,
		PrismComponent,
		SeatHistoryDocChunkComponent,
		SeatsCurrentDocChunkComponent,
		DegreesDocChunkComponent,
		DegreeTypesDocChunkComponent,
		CourseDetailsDocChunkComponent,
		CourseCrnsDocChunkComponent,
		CrnLookupResultComponent,
		FilterUiLayoutComponent,
		AutocompleteFilterFieldComponent,
		CourseLookupResultComponent,
		DegreeLookupResultComponent,
		NotificationBarComponent,
		NotificationEntryComponent,
		ChartChunkComponent,
		ChartFigureComponent,
		CourseCrnMetadataDocChunkComponent,
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
		MatProgressSpinnerModule,
		NgOptimizedImage,
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: !isDevMode(),
			// Register the ServiceWorker as soon as the application is stable
			// or after 30 seconds (whichever comes first).
			registrationStrategy: 'registerWhenStable:30000'
		}),
		FeaturesComponent,
	],
	providers: [ConstantsService, ApiService],
	bootstrap: [AppComponent]
})
export class AppModule {}
