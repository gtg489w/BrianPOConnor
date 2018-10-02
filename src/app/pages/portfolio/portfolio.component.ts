import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { Project } from '../../classes/project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

	projects: Project[];

	constructor(private data: DataService) { }

	ngOnInit() {
		this.data.getProjects().subscribe(projects => {
			this.projects = projects;
		});
	}
}
