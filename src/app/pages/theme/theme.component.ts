import {Component, OnInit} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";

@Component({
    selector: 'app-theme',
    templateUrl: './theme.component.html',
    styleUrl: './theme.component.scss'
})
export class ThemeComponent implements OnInit {
    // bread crumb items
    breadCrumbItems!: Array<{}>;

    data = {
        invitation: {
            type: "INVITATION.TYPE.WEDDING" || "DEFAULT.INVITATION.TYPE",
            image: "assets/images/bg-auth.jpg",
            domain: "mahendranajeng.com" || "DEFAULT.INVITATION.DOMAIN",
        },
        wedding: {
            date: new Date('2024-12-31')
        }
    }

    ngOnInit(): void {
        this.breadCrumbItems = [
            {label: 'MENU.THEME', active: true}
        ];
    }

}
