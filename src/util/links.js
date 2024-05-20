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
        name: 'Classrooms Roster',
        path: '/dashboard/rooms-roster',
        icon: Roaster
    },
    {
        id: 4,
        name: 'Contacts',
        path: '/dashboard/contacts',
        icon: Contacts
    },
    {
        id: 5,
        name: 'Classrooms Actions',
        path: '/dashboard/rooms-active',
        icon: ClassAction
    },
    {
        id: 6,
        name: 'Photo & Videos',
        path: '/dashboard/media',
        icon: Media
    },
    {
        id: 7,
        name: 'Billing',
        path: '/dashboard/billing',
        icon: Billing
    },
    {
        id: 8,
        name: 'Messaging',
        path: '/dashboard/messages',
        icon: Messaging
    },
    {
        id: 9,
        name: 'Configuration',
        path: '/dashboard/profile',
        icon: Settings
    },
]