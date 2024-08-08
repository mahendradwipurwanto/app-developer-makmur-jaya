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
        label: 'MENU.TEAMS',
        icon: 'ri-team-line',
        link: '/teams',
    },
    {
        id: 4,
        label: 'MENU.PROJECTS',
        icon: 'ri-function-line',
        link: '/projects',
    },
    {
        id: 5,
        label: 'MENU.SETTINGS',
        icon: 'ri-settings-line',
        link: '/settings',
    },
];
