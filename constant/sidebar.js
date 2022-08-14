import {
    LogoutIcon,
    ViewGridIcon,
    UsersIcon,
    CogIcon
} from '@heroicons/react/outline';

export const sidebar = [
    {
        navItem: 'Dashboard',
        href: '/',
        icon: <ViewGridIcon />
    },
    {
        navItem: 'Users',
        href: '/users',
        icon: <UsersIcon />
    },
    {
        navItem: 'Settings',
        href: '/settings',
        icon: <CogIcon />
    },
    {
        navItem: 'Logout',
        href: '/api/auth/logout',
        icon: <LogoutIcon />
    },
];