import { Injectable } from '@angular/core';
// import { ServerApiService } from './service/server-api.service';
// import { Router } from '@angular/router'

@Injectable()
export class AuthService {
	private loggedIn = false;
	redirectUrl:string = '/main';

	constructor() { }

	isLoggedin(): boolean {
		if (this.loggedIn == true) {
			return true;
		} else {
			return false;
		}
	}

	setLoggedin(response: boolean): void {
		if (response) {
			this.loggedIn = true;
		} else {
			this.loggedIn = false;
		}
	}
}
