import {Component, OnInit} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";

@Component({
    selector: 'app-donation',
    templateUrl: './donation.component.html',
    styleUrl: './donation.component.scss'
})
export class DonationComponent implements OnInit {
    // bread crumb items
    breadCrumbItems!: Array<{}>;

    ngOnInit(): void {
        this.breadCrumbItems = [
            {label: 'MENU.DONATION', active: true}
        ];
    }

}
