import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Billing, ClassAction, Classrooms, Contacts, Home, Media, Messaging, Roaster, Settings } from "./icons";

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
        id: 9,
        name: 'Configuration',
        path: '/dashboard/config',
        icon: Settings
    },
]