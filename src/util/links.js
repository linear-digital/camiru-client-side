
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { Billing, ClassAction, Classrooms, Contacts, Home, Media, Messaging, Roaster, Settings } from "./icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";

export const links = [
    {
        id: 1,
        name: 'Dashboard',
        path: '/dashboard',
        icon: Home
    },
    {
        id: 2,
        name: 'Classrooms',
        path: '/dashboard/rooms',
        icon: Classrooms
    },
    {
        id: 3,
        name: 'Classrooms Rosters',
        path: '/dashboard/rooms-roster',
        icon: Roaster
    },
    {
        id: 2,
        name: 'Staff List',
        path: '/dashboard/staffs',
        icon: Classrooms
    },
    {
        id: 3,
        name: 'Staff Rosters',
        path: '/dashboard/staffs-roster',
        icon: Roaster
    },
    {
        id: 4,
        name: 'All Contacts',
        path: '/dashboard/contacts',
        icon: Contacts
    },
    // {
    //     id: 5,
    //     name: 'Classrooms Actions',
    //     path: '/dashboard/rooms-active',
    //     icon: ClassAction
    // },
    {
        id: 6,
        name: 'Photo & Videos',
        path: '/dashboard/media',
        icon: Media
    },
    // {
    //     id: 7,
    //     name: 'Billing',
    //     path: '/dashboard/billing',
    //     icon: Billing
    // },
    {
        id: 8,
        name: 'Messaging',
        path: '/dashboard/messages',
        icon: Messaging
    },
    {
        id: 10,
        name: 'Check in-out',
        path: '/dashboard/checkio-report',
        icon: faChartLine,
        isIcon: true
    },
    {
        id: 11,
        name: 'Support',
        path: '/dashboard/support',
        icon: faHeadset,
        isIcon: true
    },
    {
        id: 9,
        name: 'Reports',
        path: '/dashboard/reports',
        icon: faChartLine,
        isIcon: true
    },
    {
        id: 9,
        name: 'Configuration',
        path: '/dashboard/config',
        icon: Settings
    },

]