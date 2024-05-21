import React from 'react';
import Table from './Table';

const UpComingEvents = () => {
    return (
        <section className='bg-[#FFFFFF] border px-5 py-8 mt-10 rounded-lg'>
            <div className="flex justify-between">
                <h3 className=" text-slate-900 text-xl font-bold ">Checkout upcoming Events</h3>
                <button className="text-right text-amber-500 text-base font-bold ">Filter Class Events</button>
            </div>
            <Table />
        </section>
    );
};

export default UpComingEvents;