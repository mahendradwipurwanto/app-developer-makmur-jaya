import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    NgbToastModule, NgbAccordionModule, NgbCollapseModule
} from '@ng-bootstrap/ng-bootstrap';

// Load Icons
import {defineElement} from 'lord-icon-element';
import lottie from 'lottie-web';

import {FlatpickrModule} from 'angularx-flatpickr';
import {CountUpModule} from 'ngx-countup';
import {NgApexchartsModule} from 'ng-apexcharts';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {SimplebarAngularModule} from 'simplebar-angular';
import {CommonModule} from '@angular/common';

// Swiper Slider
import {SlickCarouselModule} from 'ngx-slick-carousel';

import {LightboxModule} from 'ngx-lightbox';

// Pages Routing
import {PagesRoutingModule} from "./pages-routing.module";
import {SharedModule} from "../shared/shared.module";
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from "../core/guards/auth.guard";
import {TranslateModule} from "@ngx-translate/core";
import {FeatherModule} from "angular-feather";
import {allIcons} from "angular-feather/icons";
import {SettingsComponent} from "./settings/settings.component";
import {TeamsComponent} from "./teams/teams.component";
import {ProjectsComponent} from "./projects/projects.component";


@NgModule({
    declarations: [
        DashboardComponent,
        TeamsComponent,
        ProjectsComponent,
        SettingsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        NgbToastModule,
        FlatpickrModule.forRoot(),
        CountUpModule,
        NgApexchartsModule,
        LeafletModule,
        NgbDropdownModule,
        SimplebarAngularModule,
        PagesRoutingModule,
        SharedModule,
        SlickCarouselModule,
        LightboxModule,
        TranslateModule,
        FeatherModule.pick(allIcons),
        NgbAccordionModule,
        NgbCollapseModule,
    ],
    providers: [AuthGuard],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule {
    constructor() {
        defineElement(lottie.loadAnimation);
    }
}
