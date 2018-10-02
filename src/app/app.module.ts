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


@NgModule({
	declarations: [
		AppComponent,
		PortfolioComponent,
		ProjectComponent,
		PageNotFoundComponent,
		MainContainerComponent,
		BoxZoomComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(rootRouterConfig, { useHash: false })
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
