import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	today = Date.now();
	public page:string = "my-task-list";

	constructor(private router:Router) {
		this.page = this.router.url.split('/')[2];

		this.router.events.subscribe(event => {
			if(event instanceof NavigationEnd) {
				console.log('[Main] Current URL : %s', event.url);
				this.page = event.url.split('/')[2] || this.page;
			}
		})
	}

	ngOnInit() {
	}

	movePage(page) {
		this.router.navigate(['/main/'+page]);
	}
}
