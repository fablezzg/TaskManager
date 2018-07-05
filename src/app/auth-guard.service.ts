import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

	constructor(private authService:AuthService, private router:Router) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
		return this.checkLogin(state.url);
	}

	canActivateChild(route:ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
		return this.canActivate(route, state)
	}

	checkLogin(url:string): boolean {
		console.log('[AuthGuard] Check Login : %s', url);

		if(this.authService.isLoggedin()) {
			return true;
		} else {
			this.authService.redirectUrl = url;
			this.router.navigate(['/login']);
			return false;
		}
	}
}

