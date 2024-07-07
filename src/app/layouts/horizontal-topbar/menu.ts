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
