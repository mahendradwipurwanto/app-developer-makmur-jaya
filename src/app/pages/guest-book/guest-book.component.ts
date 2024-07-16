import {Component, OnInit} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";

@Component({
    selector: 'app-guest-book',
    templateUrl: './guest-book.component.html',
    styleUrl: './guest-book.component.scss'
})
export class GuestBookComponent implements OnInit {
    // bread crumb items
    breadCrumbItems!: Array<{}>;

    ngOnInit(): void {
        this.breadCrumbItems = [
            {label: 'MENU.GUESTBOOK', active: true}
        ];
    }

}
