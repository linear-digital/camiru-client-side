import React from 'react';
import { Calendar, Envelope, Notification, Task } from '../../util/icons';
import ReportHistory from './ReportHistory';
import { Link } from 'react-router-dom';

const Icons_panel = () => {
    return (
        <div className='flex items-center gap-5'>
            <Link to={'/dashboard/calendar'}>
                <Calendar className={"lg:w-auto lg:h-auto w-[17px] h-[17px]"} />
            </Link>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button">
                    <Task className={"lg:w-auto lg:h-auto w-[17px] h-[17px]"} />
                </div>
                <div tabIndex={0} className="dropdown-content  z-10 menu shadow rounded-box lg:w-[495px] w-screen  h-[600px] mt-2  bg-[#F1F6FA] border border-[#CBDFFF] profile-history"
                >
                    <ReportHistory className={"lg:w-auto lg:h-auto w-[17px] h-[17px]"} />
                </div>
            </div>
            <button>
                <Envelope className={"lg:w-auto lg:h-auto w-[17px] h-[17px]"} />
            </button>
            <Link to={'/dashboard/notifications'}>
                <Notification className={"lg:w-auto lg:h-auto w-[17px] h-[17px]"} />
            </Link>
        </div>
    );
};

export default Icons_panel;