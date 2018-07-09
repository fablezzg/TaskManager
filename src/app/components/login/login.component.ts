import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../auth.service";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	clientId: string;
	clientPw: string;

	constructor(private router: Router, private authService: AuthService) { }

	ngOnInit() {
		this.clientId = "";
		this.clientPw = "";
		if (this.authService.isLoggedin()) {
			this.router.navigate(['main'], {replaceUrl: true});
		}
	}

	onClickLogIn(): void {
		if (this.clientId && this.clientPw) {
			this.authService.setLoggedin(true);
			this.router.navigate(['main'], {replaceUrl: true});
		} else {
			console.log("there is no id & password");
		}
	}
}
