import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class LightboxService {

	@Output() lightboxBus: EventEmitter<any> = new EventEmitter();

	constructor() { }

	show(url: string, urls?: string[]) {
		this.lightboxBus.emit({ show: true, url: url, urls: urls });
	}

	hide() {
		this.lightboxBus.emit({ show: false });
	}
}
