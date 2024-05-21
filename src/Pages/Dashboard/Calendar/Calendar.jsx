import React from 'react';
import DB_Page_Layout from '../../../Layouts/DB_Page_Layout';
import EventCalendar from './EventCalendar';
import UpComingEvents from './UpComingEvents';

const Calendar = () => {
    return (
        <DB_Page_Layout>
            <div className='bg-[#F1F6FA] border border-[#187A82] rounded-lg lg:p-7 p-2'>
                <div className='p-5'>
                    <h1 className=" text-[#333] lg:text-2xl text-xl font-bold ">Menus & Calendars</h1>
                    <p className=" text-neutral-400 mt-2 font-normal text-sm">Uploading photos is the #1 way to engage parents.</p>
                </div>

                <section className='lg:mt-10 mt-5'>
                    <EventCalendar />
                </section>

            </div>
            <UpComingEvents />
        </DB_Page_Layout>
    );
};

export default Calendar;