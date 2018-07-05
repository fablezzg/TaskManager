import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	client_id: string;
	password: string;

	constructor(private router:Router) { }

	ngOnInit() {
		this.client_id = "";
		this.password = "";
	}

	onClickLogIn(): void {
		if (this.client_id && this.password) {
			this.router.navigate(['main'], {replaceUrl: true});
		} else {
			console.log("there is no id & password");
		}
	}
}
