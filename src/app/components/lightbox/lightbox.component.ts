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
	src: string = '/assets/profile/profile.png'; // default hack to allow animation on the first show()

	constructor(private lightboxService: LightboxService) { }

	ngOnInit() {
		this.lightboxService.lightboxBus.subscribe(params => {
			if(params.show) {
				this.src = params.url;
				this.isShowing = true;
				// this.list = params.urls; // in the future let's add the ability to pass multiple pictures with left/right navigation
			} else {
				this.isShowing = false;
			}
		});
	}

	close() {
		this.isShowing = false;
	}
}
