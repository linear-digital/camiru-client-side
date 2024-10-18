import React from 'react';
import { useState } from 'react';

import { Children } from 'react';
import { Dropdown } from 'antd';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input } from '@material-tailwind/react';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";
import { useSelector } from 'react-redux';
import moment from 'moment/moment';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setSelectedSt } from '../../../redux/child/childSlice';
import { fetcher } from '../../../Components/helper/axios.instance';
import { ClassRoomSelector } from './Filter';

const Enrollment = ({ edit }) => {

    const days = ["M", "Tu", "Wh", "T", "F", "Sa", "Su"];
    const [status, setStatus] = useState("Active");
    const { staff: user } = useSelector(state => state.staff)
    const dispatch = useDispatch()
    const { classrooms } = useSelector(state => state.classroom)
    const [date, setDate] = useState({
        day: 0,
        month: 0,
        year: 0
    });
    const [grDate, setGrDate] = useState({
        day: 0,
        month: 0,
        year: 0
    });
    const [update, setUpdate] = useState({
        classRoom: "",
        status: "",
        enrollmentDate: "",
        graduationDate: "",
        graduate: false,
        rotation: "",
        days: []
    })
    useEffect(() => {
        const date = dayjs(user?.enrollmentDate);
        setDate({
            day: date.date(),
            month: date.month() + 1,
            year: date.year()
        })
        setUpdate({
            days: user?.days,
            classRoom: user?.classRoom,
            status: user?.status,
            enrollmentDate: user?.enrollmentDate,
            graduationDate: user?.graduationDate,
            graduate: user?.graduate,
            rotation: user?.rotation
        })
    }, [user])
    const updateHandler = async () => {
        try {
            const dt = update
            dt.enrollmentDate = new Date(date.year, date.month - 1, date.day)
            const res = await fetcher({
                url: `/student/${user?._id}`,
                method: 'PUT',
                data: dt
            })
            dispatch(setSelectedSt(res))
            toast.success("Student updated successfully")
        } catch (error) {
            toast.error(error?.response?.data?.message || 'Something went wrong');
        }
    }

    if (edit) {
        return <div className='w-full border p-10 rounded-xl poppins bg-staff-bg border-staff-pc'>
            <h1 className="text-slate-900 text-2xl font-bold ">
                Enrollment
            </h1>
            <div className='mt-10'>
                <RowEdit
                    title={"Classroom"}
                >
                    <ClassRoomSelector rooms={classrooms} selected={update.classRoom} setSelected={(e) => {
                        setUpdate({
                            ...update,
                            classRoom: e
                        })
                    }} />
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
                                        onClick={() => setUpdate({ ...update, status: "active" })}
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
                                        onClick={() => setUpdate({ ...update, status: "inactive" })}
                                    >
                                        InActive
                                    </button>,
                                    key: '1',
                                }
                            ],
                        }}
                        trigger={['click']}
                    >
                        <button className="lg:h-[47px] h-[35px] pl-[19px] pr-[18px] py-[12.59px] bg-[#187A8229] text-[#187A82] border-[#187A82] rounded-[11.02px] justify-center items-center gap-[11.02px] inline-flex text-sm font-bold">
                            <span className=" text-xs font-medium tracking-tight capitalize">
                                {update.status}
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
                                defaultValue={dayjs(user?.enrollmentDate)}
                                onChange={(e) => {
                                    setDate({
                                        ...date,
                                        day: e.$d.getDate(),
                                    })
                                }}
                            />
                            <DesktopDatePicker
                                defaultValue={dayjs(user?.enrollmentDate)}
                                views={['month',]}
                                onChange={(e) => {
                                    setDate({
                                        ...date,
                                        month: e.$M,
                                    })
                                }}
                            />
                            <DesktopDatePicker
                                defaultValue={dayjs(user?.enrollmentDate)}
                                views={['year',]}
                                onChange={(e) => {
                                    setDate({
                                        ...date,
                                        year: e.$y,
                                    })
                                }}
                            />
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
                                    defaultValue={dayjs(user?.graduationDate)}
                                    onChange={(e) => {
                                        setGrDate({
                                            ...grDate,
                                            day: e.$d.getDate(),
                                        })
                                    }}
                                />
                                <DesktopDatePicker
                                    defaultValue={dayjs(user?.graduationDate)}
                                    views={['month',]}
                                    onChange={(e) => {
                                        setGrDate({
                                            ...grDate,
                                            month: e.$M,
                                        })
                                    }}
                                />
                                <DesktopDatePicker
                                    defaultValue={dayjs(user?.graduationDate)}
                                    views={['year',]}
                                    onChange={(e) => {
                                        setGrDate({
                                            ...grDate,
                                            year: e.$y,
                                        })
                                    }}
                                />
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
                                        onClick={() => {
                                            setUpdate({
                                                ...update,
                                                rotation: "morning"
                                            })
                                        }}
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
                                        onClick={() => {
                                            setUpdate({
                                                ...update,
                                                rotation: "evening"
                                            })
                                        }}
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
                                        onClick={() => {
                                            setUpdate({
                                                ...update,
                                                rotation: "afternoon"
                                            })
                                        }}
                                    >
                                        Afternoon
                                    </button>,
                                    key: '1',
                                }
                            ],
                        }}
                        trigger={['click']}
                    >
                        <button className="lg:h-[47px] h-[35px] pl-[19px] pr-[18px] py-[12.59px] bg-[#187A8229] text-[#187A82] border-[#187A82] rounded-[11.02px] justify-center items-center gap-[11.02px] inline-flex text-sm font-bold">
                            <span className=" text-xs font-medium tracking-tight capitalize">
                                {
                                    update.rotation
                                }
                            </span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                    </Dropdown>
                </RowEdit>
                <div className="lg:grid grid-cols-5 gap-10 mb-8">
                    <div className="col-span-1 mb-3 lg:mb-0 lg:justify-end flex items-center">
                        <h4 className="text-zinc-700 text-sm font-semibold">
                            Schedule
                        </h4>
                    </div>
                    <div className="col-span-4 flex items-center gap-2">
                        {
                            days.map((day, index) => <button
                                onClick={() => {
                                    if (update.days.includes(day)) {
                                        setUpdate({
                                            ...update,
                                            days: update.days.filter((d) => d !== day)
                                        })
                                    } else {
                                        setUpdate({
                                            ...update,
                                            days: [...update.days, day]
                                        })
                                    }
                                }}
                                key={index} className={`text-[11px] ${update.days.includes(day) ? "bg-amber-50 text-amber-500" : "bg-gray-100 text-gray-600"} w-[30px] rounded flex justify-center items-center px-3 py-1 `}>
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
                            onClick={updateHandler}
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
        <div className='w-full border p-10 rounded-xl poppins bg-staff-bg border-staff-pc'>
            <div className="grid grid-cols-4">
                <div className='col-span-1 flex justify-end'>
                    <h1 className="text-[#3A3D47] lg:text-2xl text-xl font-bold ">
                        Enrollment
                    </h1>
                </div>
            </div>

            {
                user?.enrollment?.map((enrollment, index) => <div className={`mt-10 ${user?.enrollment?.length !== index + 1 && "border-b-2"}`}
                    key={index}
                >
                    <Row
                        title={"Classroom"}
                        desc={enrollment.classroom?.name}
                    />
                    <Row
                        title={"Status"}
                        desc={<span className='capitalize'>
                            {enrollment?.status}
                        </span>}
                    />
                    <Row
                        title={"Start Date"}
                        desc={moment(enrollment?.startDate).format("DD MMM YYYY")}
                    />
                    <Row
                        title={"Shift"}
                        desc={<span className='capitalize'>
                            {enrollment?.shifting}
                        </span>}
                    />
                    <div className="grid grid-cols-4 lg:gap-10 gap-5 mb-8">
                        <div className="col-span-1 justify-end flex items-center">
                            <h4 className="text-[#3A3D47] text-sm font-semibold">
                                Schedule
                            </h4>
                        </div>
                        <div className="lg:col-span-3 col-span-5 flex items-center flex-wrap gap-2">
                            {
                                days?.map((day, index) => <button key={index} className={`text-[11px] ${enrollment?.schedule?.includes(day) ? "bg-amber-50 text-amber-500" : "bg-gray-100 text-gray-600"} w-[30px] rounded flex justify-center items-center px-3 py-1 `}>
                                    {day}
                                </button>)
                            }
                        </div>
                    </div>
                </div>)
            }
        </div >
    );
};

export default Enrollment;

const Row = ({ title, desc, }) => {
    return <div className="grid grid-cols-4 lg:gap-10 gap-5 mb-8 w-full">
        <div className="col-span-1 justify-end flex items-center">
            <h4 className="text-[#3A3D47] text-sm font-semibold">
                {title}
            </h4>
        </div>
        <div className="col-span-3 flex items-center">
            <h5 className="text-[#3A3D47] text-sm font-normal ">{desc}</h5>
        </div>
    </div>
}

const RowEdit = ({ title, desc, children }) => {
    return <div className="lg:grid grid-cols-5 gap-10 lg:mb-8 mb-4 w-full">
        <div className="col-span-1 lg:justify-end flex items-start">
            <h4 className="text-[#3A3D47] text-sm font-semibold">
                {title}
            </h4>
        </div>
        <div className="col-span-4 mt-2 lg:mt-0 flex items-center">
            {children}
        </div>
    </div>
}