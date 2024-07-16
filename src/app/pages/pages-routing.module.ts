import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "../core/guards/auth.guard";

// Component pages
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ThemeComponent} from "./theme/theme.component";
import {GuestBookComponent} from "./guest-book/guest-book.component";
import {DonationComponent} from "./donation/donation.component";
import {SettingsComponent} from "./settings/settings.component";

const routes: Routes = [
    {
        path: "",
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "theme",
        component: ThemeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "guest-book",
        component: GuestBookComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "donation",
        component: DonationComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "settings",
        component: SettingsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "**",
        redirectTo: "errors/404"
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {
}
