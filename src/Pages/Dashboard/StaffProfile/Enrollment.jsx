import React from 'react';

import { useSelector } from 'react-redux';
import moment from 'moment/moment';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import EnrollmentForm from './Forms/EnrollmentForm';



const Enrollment = () => {
    const [edit, setEdit] = useState(false)
    const days = ["Mon", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    const { staff: user } = useSelector(state => state.staff)
    if (edit) {
        return <EnrollmentForm onClose={() => setEdit(!edit)}/>
    }
    return (
        <div className='w-full border p-10 rounded-xl poppins bg-staff-bg border-staff-pc'>
            <div className="flex justify-end">
                {
                    <button
                        onClick={() => setEdit(!edit)}
                        className='btn btn-sm bg-[#FFBB3B33] text-[#A0A0A0] text-xs font-normal px-5'>
                        Edit Page
                        <FontAwesomeIcon icon={faPen} className='text-[#FFBB3B]' />
                    </button>
                }
            </div>
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