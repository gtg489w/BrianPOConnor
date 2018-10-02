import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from '../../classes/project';

@Injectable()
export class DataService {

	_projects: BehaviorSubject<Project[]>;

	// Additional projects to add:
	// 		SPEDx.com
	// 		DISTILLIO
	// 		Nadex
	// 		Tailored Tee
	// 		Talentwise
	// 		eKO cooler
	// 		PERP
	// 		Goldman/Clarity
	// 		FDIC

	projects: Project[] = [{
		image: '/assets/portfolio/wireless-account-management.png',
		slug: 'wireless-account-management',
		title: 'Wireless Account Management',
		subtitle: 'Arcitect | Development Lead'
	}, {
		image: '/assets/portfolio/true-respite.png',
		slug: 'true-respite',
		title: 'True Respite',
		subtitle: 'Owner | IT Lead'
	}, {
		image: '/assets/portfolio/fantasy-wiffle.png',
		slug: 'fantasy-wiffle',
		title: 'Fantasy Wiffle',
		subtitle: 'Sole Owner | Designer | Developer'
	}, {
		image: '/assets/portfolio/impulse.png',
		slug: 'impulse',
		title: 'Impulse',
		subtitle: 'Hackathon | 1<sup>st</sup> Place'
	}, {
		image: '/assets/portfolio/almost-legendary.png',
		slug: 'almost-legendary',
		title: 'Almost Legendary',
		subtitle: 'Manager | Member'
	}, {
		image: '/assets/portfolio/level-up.png',
		slug: 'level-up',
		title: 'LevelUp',
		subtitle: 'Hackathon | 2<sup>nd</sup> Place'
	}, {
		image: '/assets/portfolio/sitter.png',
		slug: 'sitter',
		title: 'Sitter',
		subtitle: 'Hackathon | 2<sup>nd</sup> Place'
	}, {
		image: '/assets/portfolio/cruise-communication.png',
		slug: 'cruise-communication',
		title: 'Cruise Communication',
		subtitle: 'Architect | Development Lead'
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
