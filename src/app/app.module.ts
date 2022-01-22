import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxZoomComponent } from './components/box-zoom/box-zoom.component';
import { LightboxComponent, LightboxDirective } from './components/lightbox/lightbox.component';
import { LightboxService } from './components/lightbox/lightbox.service';
import { NestedListComponent } from './components/nested-list/nested-list.component';
import { MainContainerComponent } from './containers/main-container/main-container.component';
import { StopPropagationDirective } from './directives/stop-propagation/stop-propagation.directive';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProjectComponent } from './pages/project/project.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { DataService } from './services/data/data.service';

@NgModule({
  declarations: [
    AppComponent,
		PortfolioComponent,
		ProjectComponent,
		PageNotFoundComponent,
		MainContainerComponent,
		BoxZoomComponent,
		ResumeComponent,
		LightboxDirective,
		LightboxComponent,
		NestedListComponent,

		StopPropagationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
	DataService,
	LightboxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
