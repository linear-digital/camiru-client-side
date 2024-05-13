import React from 'react';
import { useState } from 'react';
import { ClassRoomSelector } from '../../../Checkin/Filter';
import { Children } from 'react';
import { Dropdown } from 'antd';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input } from '@material-tailwind/react';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";
const Enrollment = ({ edit }) => {

    const days = ["M", "Tu", "Wh", "T", "F", "Sa", "Su"];
    const [selected, setSelected] = useState(["M", "Tu", "Wh"]);
    const [status, setStatus] = useState("Active");
    if (edit) {
        return <div className='w-full border pl-[84px] py-[55px] rounded-xl poppins'>
            <h1 className="text-slate-900 text-2xl font-bold ">
                Enrollment
            </h1>
            <div className='mt-10'>
                <RowEdit
                    title={"Classroom"}
                >
                    <ClassRoomSelector />
                </RowEdit>
                <RowEdit
                    title={"Status"}
                >
                    <Dropdown
                        className='option-classroom'
                        menu={{
                            items: [
                                {
                                    label: <button
                                        className={`${status === "Active" ? "text-primary" : ""} w-full   text-start`}
                                        onClick={() => setStatus("Active")}
                                    >
                                        Active
                                    </button>,
                                    key: '0',
                                },
                                {
                                    type: 'divider',
                                },
                                {
                                    label: <button
                                        className={`${status === "InActive" ? "text-primary" : ""} w-full   text-start`}
                                        onClick={() => setStatus("InActive")}
                                    >
                                        InActive
                                    </button>,
                                    key: '1',
                                }
                            ],
                        }}
                        trigger={['click']}
                    >
                        <button className=" h-[47px] pl-[19px] pr-[18px] py-[12.59px] bg-[#187A8229] text-[#187A82] border-[#187A82] rounded-[11.02px] justify-center items-center gap-[11.02px] inline-flex text-sm font-bold">
                            <span className=" text-xs font-medium tracking-tight">
                                {status}
                            </span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                    </Dropdown>
                </RowEdit>

                <RowEdit
                    title={"Enrollment Date"}
                >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <div className='flex gap-3 enroll'>
                            <DesktopDatePicker views={['day',]}
                                defaultValue={dayjs()}
                            />
                            <DesktopDatePicker
                                defaultValue={dayjs()}
                                views={['month',]} />
                            <DesktopDatePicker
                                defaultValue={dayjs()}
                                views={['year',]} />
                        </div>
                    </LocalizationProvider>
                </RowEdit>
                <RowEdit
                    title={"Graduation Date"}
                >
                    <div className="div">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <div className='flex gap-3 enroll'>
                                <DesktopDatePicker views={['day',]}
                                    defaultValue={dayjs()}
                                />
                                <DesktopDatePicker
                                    defaultValue={dayjs()}
                                    views={['month',]} />
                                <DesktopDatePicker
                                    defaultValue={dayjs()}
                                    views={['year',]} />
                            </div>
                        </LocalizationProvider>
                        <button className='text-[#187A82] text-xs mt-2'>Skip</button>
                    </div>
                </RowEdit>
                <RowEdit
                    title={"Rotation"}
                >
                    <Dropdown
                        className='option-classroom'
                        menu={{
                            items: [
                                {
                                    label: <button
                                        className={`${status === "Morning" ? "text-primary" : ""} w-full   text-start`}
                                        onClick={() => setStatus("Morning")}
                                    >
                                        Morning
                                    </button>,
                                    key: '0',
                                },
                                {
                                    type: 'divider',
                                },
                                {
                                    label: <button
                                        className={`${status === "Evening" ? "text-primary" : ""} w-full   text-start`}
                                        onClick={() => setStatus("Evening")}
                                    >
                                        Evening
                                    </button>,
                                    key: '1',
                                },
                                {
                                    type: 'divider',
                                },
                                {
                                    label: <button
                                        className={`${status === "Evening" ? "text-primary" : ""} w-full   text-start`}
                                        onClick={() => setStatus("Evening")}
                                    >
                                        Afternoon
                                    </button>,
                                    key: '1',
                                }
                            ],
                        }}
                        trigger={['click']}
                    >
                        <button className=" h-[47px] pl-[19px] pr-[18px] py-[12.59px] bg-[#187A8229] text-[#187A82] border-[#187A82] rounded-[11.02px] justify-center items-center gap-[11.02px] inline-flex text-sm font-bold">
                            <span className=" text-xs font-medium tracking-tight">
                                Morning
                            </span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                    </Dropdown>
                </RowEdit>
                <div className="grid grid-cols-5 gap-10 mb-8">
                    <div className="col-span-1 justify-end flex items-center">
                        <h4 className="text-zinc-700 text-sm font-semibold">
                            Schedule
                        </h4>
                    </div>
                    <div className="col-span-4 flex items-center gap-2">
                        {
                            days.map((day, index) => <button
                                onClick={() => {
                                    if (selected.includes(day)) {
                                        setSelected(selected.filter((d) => d !== day))
                                    } else {
                                        setSelected([...selected, day])
                                    }
                                }}
                                key={index} className={`text-[11px] ${selected.includes(day) ? "bg-amber-50 text-amber-500" : "bg-gray-100 text-gray-600"} w-[30px] rounded flex justify-center items-center px-3 py-1 `}>
                                {day}
                            </button>)
                        }
                    </div>
                </div>
                <RowEdit
                    title={""}
                >
                    <div className="flex gap-2">
                        <button
                            className='w-[90px] h-[32px] bg-[#5CD9CA40] text-[#187A82] rounded-md text-xs'
                        >
                            Save
                        </button>
                        <button
                            className='w-[90px] h-[32px] text-[#FF3636] bg-[#FF363633] rounded-md text-xs'
                        >
                            Cencle
                        </button>
                    </div>
                </RowEdit>
            </div>
        </div >
    }
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

const Row = ({ title, desc, }) => {
    return <div className="grid grid-cols-4 gap-10 mb-8 w-full">
        <div className="col-span-1 justify-end flex items-center">
            <h4 className="text-zinc-700 text-sm font-semibold">
                {title}
            </h4>
        </div>
        <div className="col-span-3 flex items-center">
            <h5 className="text-zinc-700 text-sm font-normal ">{desc}</h5>
        </div>
    </div>
}

const RowEdit = ({ title, desc, children }) => {
    return <div className="grid grid-cols-5 gap-10 mb-8">
        <div className="col-span-1 justify-end flex items-start">
            <h4 className="text-zinc-700 text-sm font-semibold">
                {title}
            </h4>
        </div>
        <div className="col-span-4 flex items-center">
            {children}
        </div>
    </div>
}