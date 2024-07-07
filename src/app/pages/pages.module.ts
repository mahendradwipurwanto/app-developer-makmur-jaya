import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
    NgbToastModule, NgbProgressbarModule
} from '@ng-bootstrap/ng-bootstrap';

import {FlatpickrModule} from 'angularx-flatpickr';
import {CountUpModule} from 'ngx-countup';
import {NgApexchartsModule} from 'ng-apexcharts';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {SimplebarAngularModule} from 'simplebar-angular';

// Swiper Slider
import {SlickCarouselModule} from 'ngx-slick-carousel';

import {LightboxModule} from 'ngx-lightbox';

// Load Icons
import {defineElement} from 'lord-icon-element';
import lottie from 'lottie-web';

// Pages Routing
import {PagesRoutingModule} from "./pages-routing.module";
import {SharedModule} from "../shared/shared.module";
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from "../core/guards/auth.guard";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
    declarations: [
        DashboardComponent
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
    ],
    providers: [AuthGuard],
})
export class PagesModule {
    constructor() {
        defineElement(lottie.loadAnimation);
    }
}
