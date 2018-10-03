import { Component, OnInit, Input, Directive, HostListener } from '@angular/core';
import { LightboxService } from './lightbox.service';


@Directive({selector: '[lightbox]'})
export class LightboxDirective {

	constructor(private lightboxService: LightboxService) {}

	@Input() lightbox: string;

	@HostListener('click', ['$event.target']) onClick(btn) {
		this.lightboxService.show(this.lightbox);
	}
}

@Component({
	selector: 'boc-lightbox',
	templateUrl: './lightbox.component.html',
	styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent implements OnInit {

	isShowing: boolean;
	src: string;

	constructor(private lightboxService: LightboxService) { }

	ngOnInit() {
		this.lightboxService.lightboxBus.subscribe(params => {
			this.src = params.url;
			this.isShowing = true;

			// this.list = params.urls;
		});
	}

	close() {
		this.isShowing = false;
	}
}
