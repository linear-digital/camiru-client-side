import React from 'react';
import { Calendar, Clock, ClockInOut, Enrollment, PhoneBook } from './Navigation.icon';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const StaffNavigation = () => {
    const location = useLocation();
    // console.log(location.search.includes('clock-in-out'));
    return (
        <div
            className='pt-5 w-full  border-b-2 border-gray-200 relative mt-[70px] '>
            <div className="flex absolute bottom-[-2px] items-center gap-x-5 justify-between w-full ">
                <Link to={'?nav=clock-in-out'} className={`border-b-2 pb-5  ${(location.search.includes('clock-in-out') || !location.search) && "border-primary2 text-primary2"} text-base flex items-center gap-x-4 px-5`}>
                    <ClockInOut />  Clock In-Out
                </Link>
                <Link to={'?nav=address-contact'} className={`border-b-2 pb-5  ${location.search.includes('address-contact') && "border-primary2 text-primary2"} text-base flex items-center gap-x-4 px-5`}>
                    <PhoneBook /> Address & Contacts
                </Link>
                <Link to={'?nav=enrollment'} className={`border-b-2 pb-5  ${location.search.includes('enrollment') && "border-primary2 text-primary2"} text-base flex items-center gap-x-4 px-5`}>
                    <Enrollment /> Enrollment
                </Link>
                <Link to={'?nav=schedule-absence'} className={`border-b-2 pb-5  ${location.search.includes('schedule-absence') && "border-primary2 text-primary2"} text-base flex items-center gap-x-4 px-5`}>
                    <Calendar /> Schedule Absence
                </Link>
                <Link to={'?nav=time-card'} className={`border-b-2 pb-5  ${location.search.includes('time-card') && "border-primary2 text-primary2"} text-base flex items-center gap-x-4 px-5 `}>
                    <Clock /> Time Card
                </Link>
            </div>
        </div>
    );
};

export default StaffNavigation;