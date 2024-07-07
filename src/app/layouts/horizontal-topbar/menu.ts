import {MenuItem} from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENU',
        isTitle: true
    },
    {
        id: 2,
        label: 'DASHBOARD',
        icon: 'ri-dashboard-line',
        link: '/',
    },
    {
        id: 3,
        label: 'THEME',
        icon: 'ri-paint-brush-line',
        link: '/theme',
    },
    {
        id: 4,
        label: 'GUESTBOOK',
        icon: 'ri-book-open-line',
        link: '/guest',
    },
    {
        id: 5,
        label: 'DONATION',
        icon: 'ri-gift-2-line',
        link: '/donation',
    },
    {
        id: 6,
        label: 'SETTINGS',
        icon: 'ri-settings-line',
        link: '/settings',
    },
    // {
    //     id: 8,
    //     label: 'MENUITEMS.APPS.TEXT',
    //     icon: 'ri-apps-2-line',
    //     subItems: [
    //         {
    //             id: 9,
    //             label: 'MENUITEMS.APPS.LIST.CALENDAR',
    //             link: '/',
    //             parentId: 8,
    //             subItems: [
    //                 {
    //                     id: 9,
    //                     label: 'MENUITEMS.APPS.LIST.MAINCALENDAR',
    //                     link: '/',
    //                 },
    //                 {
    //                     id: 9,
    //                     label: 'MENUITEMS.APPS.LIST.MONTHGRID',
    //                     link: '/',
    //                 }
    //             ]
    //         },
    //         {
    //             id: 10,
    //             label: 'MENUITEMS.APPS.LIST.CHAT',
    //             link: '/',
    //             parentId: 8
    //         },
    //     ]
    // },
];
