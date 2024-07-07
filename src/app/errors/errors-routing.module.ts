import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Components
import {Page404Component} from "./page404/page404.component";
import {Page500Component} from "./page500/page500.component";
import {OfflineComponent} from "./offline/offline.component";

const routes: Routes = [
    {
        path: "404",
        component: Page404Component
    },
    {
        path: "page",
        component: Page500Component
    },
    {
        path: "offline",
        component: OfflineComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Error404RoutingModule {
}
