import { Card } from '@material-tailwind/react';
import React from 'react';
import AttendanceNavigation from './AttendanceNavigation';
import AttendanceChart from './AttendanceChart';
import { Dot } from '../../User/Profile';

const Attendance = () => {
    const [type, setType] = React.useState('daily');
    return (
        <div>
            <Card className='p-5 mt-10'>
                <div className="flex justify-between items-center">
                    <h2 className="w-28 h-5 text-black text-sm font-bold poppins">Attendance</h2>
                    <AttendanceNavigation state={type} setState={setType} />
                </div>
                <div className="flex items-center justify-center gap-10 w-full">
                    <div className='flex items-start gap-3'>
                        <Dot className={"bg-primary mt-1"} size={11} />
                        <div>
                            <h2 className="mb-2 text-neutral-600 text-sm font-extrabold">Checked In</h2>
                            <p className="h-3 text-stone-500 text-xs font-normal ">81 Studnets</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-3'>
                        <Dot className={"bg-primary mt-1"} size={11} />
                        <div>
                            <h2 className="mb-2 text-neutral-600 text-sm font-extrabold">Present</h2>
                            <p className="h-3 text-stone-500 text-xs font-normal ">51 Studnets</p>
                        </div>
                    </div>
                    <div className='flex justify-center max-w-[200px] pl-14'>
                        <AttendanceChart />
                    </div>
                    <div className='flex items-start gap-3'>
                        <Dot className={"bg-secondary mt-1"} size={11} />
                        <div>
                            <h2 className="mb-2 text-neutral-600 text-sm font-extrabold">Checked Out</h2>
                            <p className="h-3 text-stone-500 text-xs font-normal ">81 Studnets</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-3'>
                        <Dot className={"bg-pink-400 mt-1"} size={11} />
                        <div>
                            <h2 className="mb-2 text-neutral-600 text-sm font-extrabold">Absent</h2>
                            <p className="h-3 text-stone-500 text-xs font-normal ">51 Studnets</p>
                        </div>
                    </div>
                </div>

            </Card>
        </div>
    );
};

export default Attendance;