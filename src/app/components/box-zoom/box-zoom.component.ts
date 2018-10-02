import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'box-zoom',
  templateUrl: './box-zoom.component.html',
  styleUrls: ['./box-zoom.component.scss']
})
export class BoxZoomComponent implements OnInit {

	@Input() image: string;
	@Input() alt: string = '';
	@Input() caption: string = '';

	constructor() { }

	ngOnInit() {
	}

}
