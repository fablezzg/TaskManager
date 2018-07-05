import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../auth.service";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	client_id: string;
	password: string;

	constructor(private router: Router, private authService: AuthService) { }

	ngOnInit() {
		this.client_id = "";
		this.password = "";
	}

	onClickLogIn(): void {
		if (this.client_id && this.password) {
			this.authService.setLoggedin(true);
			this.router.navigate(['main'], {replaceUrl: true});
		} else {
			console.log("there is no id & password");
		}
	}
}
