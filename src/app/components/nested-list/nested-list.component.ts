import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'nested-list',
	templateUrl: './nested-list.component.html',
	styleUrls: ['./nested-list.component.scss']
})
export class NestedListComponent implements OnInit {

	@Input() list = [];

	constructor() { }

	ngOnInit() {
	}

}
