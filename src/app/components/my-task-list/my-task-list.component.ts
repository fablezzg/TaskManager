import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
	selector: 'app-my-task-list',
	templateUrl: './my-task-list.component.html',
	styleUrls: ['./my-task-list.component.css']
})
export class MyTaskListComponent implements OnInit {

	constructor(private router:Router) { }

	ngOnInit() {
	}

	onClickNew() {
		this.router.navigate(['new-task'], {replaceUrl: true});
	}

	onClickHistory() {
		console.log("onClickHistory");
	}

}
