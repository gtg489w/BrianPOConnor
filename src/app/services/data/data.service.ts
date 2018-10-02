import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from '../../classes/project';

@Injectable()
export class DataService {

	_projects: BehaviorSubject<Project[]>;

	projects: Project[] = [{
		image: '/assets/portfolio/wireless-account-management.png',
		slug: 'wireless-account-management',
		title: 'Wireless Account Management',
		subtitle: 'Arcitect | Lead'
	}, {
		image: '/assets/portfolio/true-respite.png',
		slug: 'true-respite',
		title: 'True Respite',
		subtitle: 'Owner | IT Lead'
	}, {
		image: '/assets/portfolio/impulse.png',
		slug: 'impulse',
		title: 'Impulse',
		subtitle: 'Hackathon | 1<sup>st</sup> Place'
	}, {
		image: '/assets/portfolio/level-up.png',
		slug: 'levelup',
		title: 'LevelUp',
		subtitle: 'Hackathon | 2<sup>nd</sup> Place'
	}, {
		image: '/assets/portfolio/garcon.png',
		slug: 'garcon',
		title: 'Garcon',
		subtitle: 'Hackathon | 1<sup>st</sup> Place'
	}];

	constructor() {
		this._projects = new BehaviorSubject<Project[]>(this.projects);
	}

	getProjects(): Observable<Project[]> {
		return this._projects.asObservable();
	}

}
