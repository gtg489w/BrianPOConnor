import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { RouterModule } from '@angular/router';
import { ProjectComponent } from './pages/project/project.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MainContainerComponent } from './containers/main-container/main-container.component';
import { BoxZoomComponent } from './components/box-zoom/box-zoom.component';
import { DataService } from './services/data/data.service';
import { ResumeComponent } from './pages/resume/resume.component';
import { LightboxComponent, LightboxDirective } from './components/lightbox/lightbox.component';
import { LightboxService } from './components/lightbox/lightbox.service';
import { StopPropagationDirective } from './directives/stop-propagation/stop-propagation.directive';
import { NestedListComponent } from './components/nested-list/nested-list.component';

@NgModule({
	declarations: [
		AppComponent,
		PortfolioComponent,
		ProjectComponent,
		PageNotFoundComponent,
		MainContainerComponent,
		BoxZoomComponent,
		ResumeComponent,
		StopPropagationDirective,
		LightboxDirective,
		LightboxComponent,
		NestedListComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(rootRouterConfig, { useHash: false })
	],
	providers: [
		DataService,
		LightboxService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
