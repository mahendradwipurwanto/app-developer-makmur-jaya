import {Injectable} from '@angular/core';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

// Auth Services
import {TokenStorageService} from "../services/token-storage.service";

@Injectable({providedIn: 'root'})
export class AuthGuard {
    constructor(
        private router: Router,
        private tokenService: TokenStorageService
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.tokenService.getUser();

        if (currentUser) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to sign-in page with the return url
        this.router.navigate(['/auth/sign-in'], {queryParams: {returnUrl: state.url}});
        return false;
    }
}
