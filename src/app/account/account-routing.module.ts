import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Component Pages
import {SignUpComponent} from "./sign-up/sign-up.component";
import {SignInComponent} from "./sign-in/sign-in.component";

const routes: Routes = [
    {
        path: 'pass-reset',
        loadChildren: () => import('./auth/pass-reset/pass-reset.module').then(m => m.PassResetModule)
    },
    {
        path: 'pass-create',
        loadChildren: () => import('./auth/pass-create/pass-create.module').then(m => m.PassCreateModule)
    },
    {
        path: 'lockscreen',
        loadChildren: () => import('./auth/lockscreen/lockscreen.module').then(m => m.LockscreenModule)
    },
    {
        path: 'logout', loadChildren: () => import('./auth/logout/logout.module').then(m => m.LogoutModule)
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
