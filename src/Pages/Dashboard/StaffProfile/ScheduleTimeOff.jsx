import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '@material-tailwind/react';
import React from 'react';
import { useState } from 'react';

import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { class_rooms } from '../../../util/classrooms';

const ScheduleTimeOff = () => {

    return (
        <div className='w-full border lg:pl-[84px] px-5 py-[55px] rounded-xl poppins bg-staff-bg border-staff-pc'>
            <div className="grid grid-cols-4">
                <div className="flex col-span-1 justify-end">
                    <h1 className="text-slate-900 lg:text-2xl text-xl font-bold ">Schedule Time Off</h1>
                </div>
            </div>
            <section className='grid grid-cols-5'>
                <div className='mt-10 col-span-3'>
                    <div className="lg:grid grid-cols-4 gap-10 mb-8 items-center">
                        <div className="col-span-1 lg:justify-end lg:mb-0 mb-2 flex items-center">
                            <h4 className="text-zinc-700 text-sm font-semibold">
                                Classroom
                            </h4>
                        </div>
                        <div className="col-span-3 flex items-center gap-3">
                            <div className="w-[300px] h-[31.50px] bg-slate-50 rounded-sm border border-slate-300/opacity-50 grid grid-cols-8" >
                                <div className='col-span-3 border-r px-1'>
                                    <select
                                        className='w-full h-full bg-slate-50 border-none outline-none text-xs'
                                    >
                                        {
                                            class_rooms.map((item, i) => <option key={i} value={item}>{item}</option>)
                                        }
                                    </select>
                                </div>
                                <div className="col-span-5 flex items-center pr-2">
                                    <input type="text"
                                        className='w-full h-full bg-slate-50 border-none outline-none text-xs px-2'
                                        placeholder='Type a note here'
                                    />
                                    <label htmlFor='calendar' className='text-primary cursor-pointer'>
                                        <FontAwesomeIcon icon={faCalendar} />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:grid grid-cols-4 gap-10 lg:mb-8 mb-5 items-center">
                        <div className="col-span-1 lg:justify-end lg:mb-0 mb-2 flex items-center">
                            <h4 className="text-zinc-700 text-sm font-semibold">
                                Reason
                            </h4>
                        </div>
                        <div className="col-span-3 flex items-center gap-3">
                            <div className="w-[300px] h-[31.50px] bg-slate-50 rounded-sm border border-slate-300/opacity-50 grid grid-cols-8" >
                                <div className='col-span-3 border-r px-1'>
                                    <select
                                        className='w-full h-full bg-slate-50 border-none outline-none text-xs'
                                    >
                                        <option value="">
                                            Select Reason
                                        </option>
                                        <option value="reason 1">
                                            Reason 1
                                        </option>
                                        <option value="reason 2">
                                            Reason 2
                                        </option>

                                        <option value="reason 3">
                                            Reason 3
                                        </option>
                                    </select>
                                </div>
                                <div className="col-span-5 flex items-center pr-2">
                                    <input type="text"
                                        className='w-full h-full bg-slate-50 border-none outline-none text-xs px-2'
                                        placeholder='Type a note here'
                                    />
                                    <label htmlFor='calendar' className='text-primary cursor-pointer'>
                                        <FontAwesomeIcon icon={faCalendar} />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Start Date  */}
                    <div className="lg:grid grid-cols-4 gap-10 lg:mb-8 mb-5 items-center">
                        <div className="col-span-1 lg:justify-end lg:mb-0 mb-2 flex items-center">
                            <h4 className="text-zinc-700 text-sm font-semibold">
                                Start Date
                            </h4>
                        </div>
                        <div className="col-span-3 flex items-center gap-3">
                            <label htmlFor='calendar' className="w-[300px] h-[31.50px] bg-slate-50 rounded-sm border border-slate-300/opacity-50 text-xs text-gray-600 flex items-center justify-start px-4" >
                                <input type="date" className='w-full h-full bg-slate-50 border-none outline-none ' id='calendar'

                                />
                                
                            </label>

                        </div>
                    </div>
                    {/* End Date  */}
                    <div className="lg:grid grid-cols-4 gap-10 lg:mb-8 mb-5 items-center">
                        <div className="col-span-1 lg:justify-end lg:mb-0 mb-2 flex items-center">
                            <h4 className="text-zinc-700 text-sm font-semibold">
                                End Date
                            </h4>
                        </div>
                        <div className="col-span-3 flex items-center gap-3">
                            <label htmlFor='calendar' className="w-[300px] h-[31.50px] bg-slate-50 rounded-sm border border-slate-300/opacity-50 text-xs text-gray-600 flex items-center justify-start px-4" >
                                <input type="date" className='w-full h-full bg-slate-50 border-none outline-none ' id='calendar'

                                />
                            </label>

                        </div>
                    </div>
                    {/* Note   */}
                    <div className="lg:grid grid-cols-4 gap-10 mb-8 items-start">
                        <div className="col-span-1 lg:justify-end lg:mb-0 mb-2 flex items-center">
                            <h4 className="text-zinc-700 text-sm font-semibold">
                                Note
                            </h4>
                        </div>
                        <div className="col-span-3 flex items-center gap-3">
                            <textarea name="" id="" className='w-[300px] border bg-white outline-none text-xs p-3 h-[131px]'
                                placeholder='Type note here'
                            >

                            </textarea>

                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-10 mt-5 items-start">
                        <div className="col-span-1 justify-end flex items-center">

                        </div>
                        <div className="col-span-3">
                            <button
                                className=' bg-[#c6f2eccd] text-xs px-5  w-[135px] font-semibold text-[#24a899] h-[30px] rounded-md'
                            >
                                Submit
                            </button>
                        </div>
                    </div>

                </div>
                <div className='flex justify-start col-span-2'>
                    <div className="lg:w-[264px] w-full mt-5 lg:mt-0 h-[136.72px] bg-teal-300/20 rounded-[9.16px] flex justify-center items-center px-5" >
                        <p className="">
                            <span className="text-teal-600 text-[9.51px] font-normal ">Set planned absences in advance for a child or teacher.
                            </span>
                            <br />
                            <span className="text-teal-600 text-[9.51px] font-semibold ">Note:</span>
                            <span className="text-teal-600 text-[9.51px] font-normal "> The person will only be marked absent for the days he/she is scheduled to be present in the designated period.</span>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ScheduleTimeOff;

const Row = ({ title, desc }) => {
    return <div className="grid grid-cols-5 gap-10 mb-8">
        <div className="col-span-1 justify-end flex items-center">
            <h4 className="text-zinc-700 text-sm font-semibold">
                {title}
            </h4>
        </div>
        <div className="col-span-4 flex items-center">
            <h5 className="text-zinc-700 text-sm font-normal ">{desc}</h5>
        </div>
    </div>
}

const Gurdian = ({ name, phone, email }) => {
    return <Card className='p-4 shadow border'>
        <div className="text-xs">
            {name}
        </div>
        <div className="text-[10px] mt-1">
            {phone}
        </div>
        <div className="text-[10px] mt-1">
            {email}
        </div>
    </Card>
}
