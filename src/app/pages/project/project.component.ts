import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data/data.service';
import { Project } from '../../classes/project';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ProjectComponent implements OnInit {

	projectSlug: string;
	project: Project;

	constructor(private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer, private data: DataService) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe(params => {
			this.projectSlug = params['slug'];
			this.project = this.data.getProject(this.projectSlug);
		});
	}

	getContent() {
		return this.sanitizer.bypassSecurityTrustHtml(this.project.content);
	}
}
