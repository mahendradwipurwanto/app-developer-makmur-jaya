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

    faq = [
        {
            "id": "1",
            "question": "How do I get started with Wedding Invitation?",
            "answer": "You can get started by creating an account and select the invitation type you want to use.",
        },
        {
            "id": "2",
            "question": "Can I customize the invitation?",
            "answer": "Yes, you can customize the invitation by changing the color, font, and background.",
        },
        {
            "id": "3",
            "question": "How do I share the invitation?",
            "answer": "You can share the invitation by sending the link to your friends and family.",
        },
        {
            "id": "4",
            "question": "Can I add my own music to the invitation?",
            "answer": "Yes, you can add your own music to the invitation.",
        }
    ]

    ngOnInit(): void {
        /**
         * BreadCrumb
         */
        this.breadCrumbItems = [
            {label: 'MENU.DASHBOARD', active: true}
        ];
    }
}
