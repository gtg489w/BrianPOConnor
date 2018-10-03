import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
	selector: 'app-main-container',
	templateUrl: './main-container.component.html',
	styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

	navigationOpen: boolean = false;
	url: string;

	constructor(private router: Router) { }

	ngOnInit() {
		this.url = this.router.url;

		this.router.events.distinctUntilChanged((previous: any, current: any) => {
			if(current instanceof NavigationEnd) {
				return previous.url === current.url;
			}
			return true;
		}).subscribe((route: any) => {
			this.url = route.url;
			this.navigationOpen = false;
		});
	}
}
