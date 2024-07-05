import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import {SocialLoginModule, SocialAuthServiceConfig, GoogleSigninButtonModule} from '@abacritt/angularx-social-login';
import {
    GoogleLoginProvider,
    FacebookLoginProvider
} from '@abacritt/angularx-social-login';

import {NgbToastModule} from '@ng-bootstrap/ng-bootstrap';

import {ToastsContainer} from './login/toasts-container.component';

// called environment.ts
import {environment} from '../../environments/environment';

import {AccountRoutingModule} from './account-routing.module';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {en} from "@fullcalendar/core/internal-common";

@NgModule({
    declarations: [
        RegisterComponent,
        LoginComponent,
        ToastsContainer
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        AccountRoutingModule,
        NgbToastModule,
        SocialLoginModule,
        GoogleSigninButtonModule
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
                    },
                    {
                        id: FacebookLoginProvider.PROVIDER_ID,
                        provider: new FacebookLoginProvider(environment.facebook_app_id)
                    }
                ],
                onError: (err) => {
                    console.error(err);
                }
            } as SocialAuthServiceConfig,
        }
    ],
})
export class AccountModule {
}
