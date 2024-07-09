import {Component, OnInit} from '@angular/core'


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

/**
 * Ecommerce Component
 */
export class DashboardComponent implements OnInit {
    // bread crumb items
    breadCrumbItems!: Array<{}>;

    option = {
        startVal: 0,
        useEasing: true,
        duration: 2,
        decimalPlaces: 2,
    };

    data=  {
        invitation : {
            type: "INVITATION.TYPE.WEDDING" || "DEFAULT.INVITATION.TYPE",
            domain: "mahendranajeng.com" || "DEFAULT.INVITATION.DOMAIN",
        },
        wedding : {
            date : new Date('2024-12-31')
        }
    }

    ngOnInit(): void {
        /**
         * BreadCrumb
         */
        this.breadCrumbItems = [
            {label: 'MENU.DASHBOARD', active: true}
        ];
    }
}
