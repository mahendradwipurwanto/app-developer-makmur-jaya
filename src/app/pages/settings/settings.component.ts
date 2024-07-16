import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit {
    // bread crumb items
    breadCrumbItems!: Array<{}>;

    ngOnInit(): void {
        this.breadCrumbItems = [
            {label: 'MENU.SETTINGS', active: true}
        ];
    }

}
