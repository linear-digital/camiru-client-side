import React from 'react';
import Card from './Card';

const ClassRoomReport = () => {
    return (
        <div className='mt-14'>
            <h2 className="text-black text-base font-semibold ">Classroom Reports</h2>
            <div className="text-[#999999] mt-2 text-sm font-normal">Get reports for a specific classroom.</div>
            <div className="flex flex-col gap-3 mt-5">
                <Card
                    title={"Weekly Attendance"}
                />
                <Card
                    title={"Health"}
                />
                <Card
                    title={"Name to Face"}
                />
                <Card
                    title={"Sleep Check"}
                />
            </div>
        </div>
    );
};

export default ClassRoomReport;