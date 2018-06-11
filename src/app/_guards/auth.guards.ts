import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Angular2TokenService} from "angular2-token";
import {environment} from "../../environments/environment";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authToken: Angular2TokenService) { 
        this.authToken.init(environment.token_auth_config);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authToken.userSignedIn()) {
            console.log("hiii")
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}