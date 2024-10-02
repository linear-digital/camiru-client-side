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
import { Bookmark, HasTag } from '../../../../../util/icons';

const StaffProfileCard = () => {
    const days = ["M", "Tu", "Wh", "T", "F", "Sa", "Su"];
    const [selected, setSelected] = useState(["M", "Tu", "Wh"]);
    return (
        <section className='mt-10 p-5 border w-full rounded-lg lg:flex items-start gap-10 justify-between'>
            <div className="rounded-lg overflow-hidden min-w-[242px] max-w-[242px] h-[285px] ">
                <Image
                    className='rounded-lg overflow-hidden w-full h-full'
                    src="https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg"
                />
            </div>
            <section>
                <div className="flex justify-between items-center">
                    <div className="">
                        <h1 className="text-black text-[20.89px] font-semibold leading-10 tracking-tight">Mr. Albert Ward</h1>
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
                <div className='lg:flex gap-10 items-center flex-wrap'>

                    <div className='lg:ml-5'>

                        <div className='mt-5 grid gap-y-5'>
                            <Row
                                title={<FontAwesomeIcon icon={faPhone} />}
                            >
                                <h4 className="text-blue-950 text-xs font-semibold leading-3">+62 124 2123 8925</h4>
                                <p className="text-[#848FAC] mt-2 text-xs font-medium leading-3">Phone</p>
                            </Row>
                            <Row
                                title={<FontAwesomeIcon icon={faHome} />}
                            >
                                <h4 className="text-blue-950 text-xs font-semibold leading-3">Address</h4>
                                <p className="text-[#848FAC] text-xs font-medium leading-3 w-40 mt-2">
                                    4517 Washington Ave. Manchester,
                                    Kentucky 39495
                                </p>
                            </Row>
                            <Row
                                title={<FontAwesomeIcon icon={faEnvelope} />}
                            >
                                <h4 className="text-blue-950 text-xs font-semibold leading-3">alvertflore925@gmail.com</h4>
                                <p className="text-[#848FAC] text-xs font-medium leading-3 w-40 mt-2">
                                    Email
                                </p>
                            </Row>
                        </div>
                    </div>
                    <div className='lg:ml-5'>
                        <div className='mt-5 grid gap-y-4'>
                            <Row
                                title={<HasTag />}
                                center={true}
                            >
                                <div className="">
                                    <span className="text-blue-950 text-xs font-semibold leading-3">Class : </span><span className="text-amber-400 text-xs font-bold leading-3">MTWRF</span></div>
                            </Row>
                            <Row
                                title={<Bookmark />}
                                center={true}
                            >
                                <div className="">
                                    <span className="text-blue-950 text-xs font-semibold leading-3">Enrolled : </span><span className="text-[#848FAC] text-xs font-bold leading-3">12th Jan, 2021</span></div>
                            </Row>

                            <Row
                                title={<Bookmark />}
                                center={true}
                            >
                                <div className="">
                                    <span className="text-blue-950 text-xs font-semibold leading-3">Age  : </span><span className="text-[#848FAC] text-xs font-bold leading-3">32 Years</span></div>
                            </Row>
                            <Row
                                title={<Bookmark />}
                                center={true}
                            >
                                <div className="flex items-center gap-2">
                                    <p className="">
                                        <span className="text-blue-950 text-xs font-semibold leading-3">Schedule  : </span><span className="text-red-500 text-xs font-bold leading-3">Deactivate</span></p>
                                    <button className='text-cyan-700 bg-[#5CD9CA40] w-[60px] h-[22px] text-[10px] font-semibold rounded'>
                                        Active
                                    </button>
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
                                <button className='btn-link text-[#187A82] font-semibold text-xs'>Attendance</button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 lg:mt-0'>
                        <div className='flex flex-wrap gap-2 items-center w-full'>
                            <div className="lg:max-w-[300px] text-black/80 lg:text-2xl text-xl font-bold ">About Me</div>
                        </div>
                        <p className="lg:w-[391.19px] w-full mt-5 text-neutral-500 text-xs font-normal poppins">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisc</p>

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

