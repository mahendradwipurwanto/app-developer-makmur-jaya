import {MenuItem} from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENU.LABEL',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENU.DASHBOARD',
        icon: 'ri-dashboard-line',
        link: '/',
    },
    {
        id: 3,
        label: 'MENU.THEME',
        icon: 'ri-paint-brush-line',
        link: '/theme',
    },
    {
        id: 4,
        label: 'MENU.GUESTBOOK',
        icon: 'ri-book-open-line',
        link: '/guest',
    },
    {
        id: 5,
        label: 'MENU.DONATION',
        icon: 'ri-gift-2-line',
        link: '/donation',
    },
    {
        id: 6,
        label: 'MENU.SETTINGS',
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
