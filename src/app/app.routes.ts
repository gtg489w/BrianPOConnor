import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProjectComponent } from './pages/project/project.component';
import { MainContainerComponent } from './containers/main-container/main-container.component';
import { ResumeComponent } from './pages/resume/resume.component';

export const rootRouterConfig: Routes = [{
	path: '',
	component: MainContainerComponent,
	children: [

		{ path: '', component: PortfolioComponent },
		{ path: 'resume', component: ResumeComponent },
		{ path: 'portfolio', component: PortfolioComponent },
		{ path: 'project/:slug', component: ProjectComponent },

		// Fallback
		{ path: '**', component: PageNotFoundComponent }
	]
}];

