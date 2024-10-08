import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import {SocialLoginModule, SocialAuthServiceConfig, GoogleSigninButtonModule} from '@abacritt/angularx-social-login';
import {
    GoogleLoginProvider
} from '@abacritt/angularx-social-login';

import {NgbToastModule} from '@ng-bootstrap/ng-bootstrap';

import {ToastsContainer} from './sign-in/toasts-container.component';

// called environment.ts
import {environment} from '../../environments/environment';

import {defineElement} from "lord-icon-element";
import lottie from "lottie-web";

import {AccountRoutingModule} from './account-routing.module';
import {TranslateModule} from "@ngx-translate/core";

import {SignInComponent} from './sign-in/sign-in.component';
import {ForgotPasswordComponent} from "./auth/forgot-password/forgot-password.component";
import {ResetPasswordComponent} from "./auth/reset-password/reset-password.component";

@NgModule({
    declarations: [
        SignInComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
        ToastsContainer
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        AccountRoutingModule,
        NgbToastModule,
        SocialLoginModule,
        GoogleSigninButtonModule,
        TranslateModule
    ],
    providers: [
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                lang: 'en',
                providers: [
                    {
                        id: GoogleLoginProvider.PROVIDER_ID,
                        provider: new GoogleLoginProvider(
                            environment.google_client_id
                        )
                    }
                ],
                onError: (err) => {
                    console.error(err);
                }
            } as SocialAuthServiceConfig,
        }
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccountModule {
    constructor() {
        defineElement(lottie.loadAnimation);
    }
}
