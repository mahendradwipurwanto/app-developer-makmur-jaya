import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-theme',
    templateUrl: './theme.component.html',
    styleUrl: './theme.component.scss'
})
export class ThemeComponent implements OnInit {
    // bread crumb items
    breadCrumbItems!: Array<{}>;
    public isCollapsed = false;

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

    theme = [
        {
            "name": "Default",
            "image": "https://storage.wedew.id/uploads/public/642/efc/432/thumb_2103432_900_0_0_0_auto.png",
            "description": "Default theme",
            "type": 1,
            "stars": 4,
        },
        {
            "name": "Wedding",
            "image": "https://storage.wedew.id/uploads/public/636/09b/a7b/thumb_1938513_900_0_0_0_auto.png",
            "description": "Wedding theme",
            "type": 2,
            "stars": 3,
        },
        {
            "name": "Birthday",
            "image": "https://storage.wedew.id/uploads/public/621/9a3/d43/thumb_1676694_900_0_0_0_auto.png",
            "description": "Birthday theme",
            "type": 1,
            "stars": 2,
        },
        {
            "name": "Graduation",
            "image": "https://storage.wedew.id/uploads/public/636/088/d0d/thumb_1938399_900_0_0_0_auto.png",
            "description": "Graduation theme",
            "type": 2,
            "stars": 5,
        },
        {
            "name": "Anniversary",
            "image": "https://storage.wedew.id/uploads/public/652/6a3/fa2/thumb_2248577_900_0_0_0_auto.png",
            "description": "Anniversary theme",
            "type": 2,
            "stars": 2,
        },
    ]

    ngOnInit(): void {
        this.breadCrumbItems = [
            {label: 'MENU.THEME', active: true}
        ];
    }

    getRatingArray(rating: number): any[] {
        return new Array(rating);
    }

}
