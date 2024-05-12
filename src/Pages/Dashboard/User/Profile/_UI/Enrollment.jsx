import React from 'react';
import { useState } from 'react';

const Enrollment = () => {
    const days = ["M", "Tu", "Wh", "T", "F", "Sa", "Su"];
    const [selected, setSelected] = useState(["M", "Tu", "Wh"]);
    return (
        <div className='w-full border pl-[84px] py-[55px] rounded-xl poppins'>
            <h1 className="text-slate-900 text-2xl font-bold ">
                Enrollment
            </h1>
            <div className='mt-10'>

                <Row
                    title={"Classroom"}
                    desc={"Toodlers"}
                />
                <Row
                    title={"Status"}
                    desc={"Active"}
                />
                <Row
                    title={"Enrollment Date"}
                    desc={"16th March 2024"}
                />
                <Row
                    title={"Graduation Date"}
                    desc={"16th March 2024"}
                />
                <Row
                    title={"Rotation"}
                    desc={"Afternoon"}
                />
                <div className="grid grid-cols-5 gap-10 mb-8">
                    <div className="col-span-1 justify-end flex items-center">
                        <h4 className="text-zinc-700 text-sm font-semibold">
                            Schedule
                        </h4>
                    </div>
                    <div className="col-span-4 flex items-center gap-2">
                        {
                            days.map((day, index) => <button key={index} className={`text-[11px] ${selected.includes(day) ? "bg-amber-50 text-amber-500" : "bg-gray-100 text-gray-600"} w-[30px] rounded flex justify-center items-center px-3 py-1 `}>
                                {day}
                            </button>)
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Enrollment;

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