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
        label: 'MENU.PROJECT',
        icon: 'ri-paint-brush-line',
        link: '/theme',
    },
    {
        id: 6,
        label: 'MENU.SETTINGS',
        icon: 'ri-settings-line',
        link: '/settings',
    },
];
