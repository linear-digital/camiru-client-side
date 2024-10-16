import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faLandmarkDome } from '@fortawesome/free-solid-svg-icons/faLandmarkDome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image } from 'antd';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import nameDisplay from '../../../util/nameDisplay';
import { imageUrl } from '../../../Components/helper/axios.instance';


const StaffProfileCard = () => {
    const days = ["M", "Tu", "Wh", "T", "F", "Sa", "Su"];
    const [selected, setSelected] = useState(["M", "Tu", "Wh"]);
    const { staff: user } = useSelector(state => state.staff)
    // const { selected: user, refreshChild } = useSelector(state => state.child)
    return (
        <section className='mt-10 p-5 w-full rounded-lg lg:flex items-start gap-10 justify-between bg-staff-bg'>
            <div className="overflow-hidden min-w-[242px] max-w-[235px] min-h-[255px]  p-2 bg-white border border-staff-pc">
                <img
                    className='overflow-hidden object-fill max-h-[255px] w-full h-full'
                    src={imageUrl(user?.profilePic)}
                />
            </div>
            <section>
                <div className="flex justify-between items-center">
                    <div className="">
                        <h1 className="text-black text-[20.89px] font-semibold leading-10 tracking-tight">
                            {nameDisplay(user)} <span className='text-sm text-green-500 font-normal'>
                            (Active)
                            </span>
                        </h1>
                        <p className="mt-1 text-cyan-700 text-xs font-semibold">
                            Infants
                        </p>
                    </div>
                    <div className='gap-4 flex'>
                        <button className='text-cyan-700 bg-[#5CD9CA40] w-[80px] h-[28px] text-xs font-semibold rounded'>
                            Message
                        </button>
                        <button className='text-cyan-700 bg-[#5CD9CA40] w-[80px] h-[28px] text-xs font-semibold rounded'>
                            Edit Profile
                        </button>
                    </div>
                </div>
                <div className='lg:flex gap-10 items-center lg:flex-nowrap flex-wrap'>

                    <div >

                        <div className='mt-5 grid gap-y-5'>
                            <Row
                                title={<FontAwesomeIcon icon={faPhone} />}
                            >
                                <h4 className="text-blue-950 text-xs font-semibold leading-3">{user?.phone}</h4>
                            </Row>
                            <Row
                                title={<FontAwesomeIcon icon={faHome} />}
                            >
                                <p className=" text-xs font-medium leading-3 w-40 ">
                                    {user?.address}
                                </p>
                            </Row>
                            <Row
                                title={<FontAwesomeIcon icon={faEnvelope} />}
                                center={true}
                            >
                                <h4 className="text-blue-950 text-xs font-semibold leading-3">
                                    {user?.email}
                                </h4>
                            </Row>
                        </div>
                        <button className='text-cyan-700 bg-[#5CD9CA40]  py-2 text-xs px-4 mt-4 font-semibold rounded'>
                            See Attendances
                        </button>
                    </div>
                    <div className='lg:ml-5'>
                        <div className='mt-5 grid gap-y-4'>
                            <Row
                                center={true}
                            >
                                <div className="">
                                    <span className="text-blue-950 text-xs font-semibold leading-3">Age  : </span><span className="text-[#848FAC] text-xs font-bold leading-3">32 Years</span></div>
                            </Row>
                            <Row
                                center={true}
                            >
                                <div className="">
                                    <span className="text-blue-950 text-xs font-semibold leading-3">Joined : </span>
                                    <span className="text-[#848FAC] text-xs font-bold leading-3">12th Jan, 2021</span>
                                    </div>
                            </Row>
                            <Row

                                center={true}
                            >
                                <div className="">
                                    <span className="text-blue-950 text-xs font-semibold leading-3">Class : </span><span className="text-[#848FAC] text-xs font-bold leading-3">Kinder</span></div>
                            </Row>


                            <Row
                                center={true}
                            >
                                <div className="flex items-center gap-2">
                                    <p className="">
                                        <span className="text-blue-950 text-xs font-semibold leading-3">Shift  : </span><span className="text-[#848FAC] text-xs font-bold leading-3">Morning</span></p>
                                </div>
                            </Row>
                            <div className="flex flex-wrap gap-5 items-center">
                                <div className="flex gap-[5px]">
                                    {
                                        days.map((day, index) => <button key={index} className={`text-[11px] ${selected.includes(day) ? "bg-amber-50 text-amber-700" : "bg-gray-100 text-gray-600"} w-[30px] rounded flex justify-center items-center px-3 py-1 `}>
                                            {day}
                                        </button>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 lg:mt-0'>
                        <div className='flex flex-wrap gap-2 items-center w-full'>
                            <div className="lg:max-w-[300px] text-black/80 lg:text-2xl text-xl font-bold ">About Me</div>
                        </div>
                        <p className="w-full mt-5 text-neutral-500 text-xs font-normal poppins">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisc</p>

                    </div>
                </div>
            </section>
        </section>
    );
};

export default StaffProfileCard;

const Row = ({ title, children, center }) => {
    return <div className={`flex ${center ? "items-center" : "items-start"} gap-x-3`}>
        <div className='text-[#848FAC] text-xs'>
            {title}
        </div>
        <div className="">
            {children}
        </div>
    </div>
}

