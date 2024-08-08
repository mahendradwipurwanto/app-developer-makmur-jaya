import {Component, OnInit} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";

@Component({
    selector: 'app-teams',
    templateUrl: './teams.component.html',
    styleUrl: './teams.component.scss'
})
export class TeamsComponent implements OnInit {
    // bread crumb items
    breadCrumbItems!: Array<{}>;

    ngOnInit(): void {
        /**
         * BreadCrumb
         */
        this.breadCrumbItems = [
            {label: 'MENU.TEAMS', active: true}
        ];
    }

}
