import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Component Pages
import {SignUpComponent} from "./sign-up/sign-up.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {ResetPasswordComponent} from "./auth/reset-password/reset-password.component";
import {ForgotPasswordComponent} from "./auth/forgot-password/forgot-password.component";

const routes: Routes = [
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    },
    {
        path: 'reset-password',
        component: ResetPasswordComponent
    },
    {
        path: 'lockscreen',
        loadChildren: () => import('./auth/lockscreen/lockscreen.module').then(m => m.LockscreenModule)
    },
    {
        path: 'success-msg',
        loadChildren: () => import('./auth/success-msg/success-msg.module').then(m => m.SuccessMsgModule)
    },
    {
        path: 'twostep', loadChildren: () => import('./auth/twostep/twostep.module').then(m => m.TwostepModule)
    },
    {
        path: "sign-up",
        component: SignUpComponent
    },
    {
        path: "sign-in",
        component: SignInComponent
    },
    {
        path: '**',
        redirectTo: 'errors/404'
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule {
}
