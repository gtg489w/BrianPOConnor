import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContainerComponent } from './containers/main-container/main-container.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProjectComponent } from './pages/project/project.component';
import { ResumeComponent } from './pages/resume/resume.component';

const routes: Routes = [{
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



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
