import React from 'react';
import { Calendar, Envelope, Notification, Task } from '../../util/icons';
import ReportHistory from './ReportHistory';
import { Link } from 'react-router-dom';
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { Button } from '@material-tailwind/react';

const Icons_panel = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [openMenu, setOpenMenu] = React.useState(false);

    return (
        <div className='flex items-center gap-5'>
            <Link to={'/dashboard/calendar'}>
                <Calendar className={"lg:w-auto lg:h-auto w-[17px] h-[17px]"} />
            </Link>
            <Menu>
                <MenuHandler>
                    <Button variant="text" className='p-0'>
                        <Task className={"lg:w-auto lg:h-auto w-[17px] h-[17px]"} />
                    </Button>
                </MenuHandler>
                <MenuList>
                    <MenuItem>
                        <div className="dropdown-content  z-10 menu shadow rounded-box lg:w-[495px] w-full  h-[600px] mt-2  bg-[#F1F6FA] border border-[#CBDFFF] profile-history"
                        >
                            <ReportHistory className={"lg:w-auto lg:h-auto w-[17px] h-[17px]"} />
                        </div>
                    </MenuItem>
                </MenuList>
            </Menu>
            <Link to={'/dashboard/messages'}>
                <Envelope className={"lg:w-auto lg:h-auto w-[17px] h-[17px]"} />
            </Link>
            <Link to={'/dashboard/notifications'}>
                <Notification className={"lg:w-auto lg:h-auto w-[17px] h-[17px]"} />
            </Link>
        </div>
    );
};

export default Icons_panel;