import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {FacebookLoginProvider, SocialAuthService} from "@abacritt/angularx-social-login";
import {SocialUser} from "@abacritt/angularx-social-login";

// Login Auth
import {environment} from '../../../environments/environment';
import {AuthenticationService} from '../../core/services/auth.service';
import {ToastService} from './toast-service';
import {TokenStorageService} from "../../core/services/token-storage.service";

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})

/**
 * Login Component
 */
export class SignInComponent implements OnInit {

    // Login Form
    loginForm!: UntypedFormGroup;
    submitted = false;
    fieldTextType!: boolean;
    error = '';
    returnUrl!: string;
    toast!: false;
    year: number = new Date().getFullYear();

    user!: SocialUser;
    loggedIn!: boolean;

    constructor(
        public toastService: ToastService,
        private authenticationService: AuthenticationService,
        private router: Router,
        private route: ActivatedRoute,
        private authService: SocialAuthService,
        private tokenService: TokenStorageService,
        private formBuilder: UntypedFormBuilder
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit(): void {
        /**
         * Form Validatyion
         */
        if (sessionStorage.getItem('currentUser')) {
            this.router.navigate(['/']);
        }

        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });

        this.authService.authState.subscribe((user) => {
            this.user = user;
            this.loggedIn = (user != null);
            this.tokenService.saveUser(user);
            this.tokenService.saveToken(user.provider == 'FACEBOOK' ? user.authToken : user.idToken);

            // redirect to dashboard
            this.router.navigate(['/']);
        });

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    signInWithFB(): void {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.loginForm.controls;
    }

    /**
     * Form submit
     */
    onSubmit() {
        this.submitted = true;

        // Login Api
        this.authenticationService.login(this.f['email'].value, this.f['password'].value).subscribe((data: any) => {

            if (data.status == 'success') {
                sessionStorage.setItem('toast', 'true');
                sessionStorage.setItem('currentUser', JSON.stringify(data.data));
                sessionStorage.setItem('token', data.token);
                this.router.navigate(['/']);
            } else {
                this.toastService.show(data.data, {classname: 'bg-danger text-white', delay: 15000});
            }
        });
    }

    /**
     * Password Hide/Show
     */
    toggleFieldTextType() {
        this.fieldTextType = !this.fieldTextType;
    }

}
