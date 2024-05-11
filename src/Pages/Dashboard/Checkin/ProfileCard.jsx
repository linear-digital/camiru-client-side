import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faLandmarkDome } from '@fortawesome/free-solid-svg-icons/faLandmarkDome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image } from 'antd';
import React from 'react';
import { useState } from 'react';

const ProfileCard = () => {
    const days = ["M", "Tu", "Wh", "T", "F", "Sa", "Su"];
    const [selected, setSelected] = useState(["M", "Tu", "Wh"]);
    return (
        <section className='mt-10 p-10 border w-full rounded-lg flex items-start gap-10 justify-between'>
            <div className="rounded-full overflow-hidden w-[200px] h-[200px] ">
                <Image
                    className='rounded-full overflow-hidden w-full h-full'
                    width={200}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
            </div>
            <div className='flex gap-10 items-center'>
                <div className='ml-5'>
                    <h1 className="text-black text-[32.89px] font-semibold leading-10 tracking-tight">Roxie Ward</h1>
                    <p className="mt-1 text-cyan-700 text-xs font-semibold">7 Years old | Boy</p>
                    <div className='mt-5'>
                        <div className="flex items-center gap-3 text-primary">
                            <FontAwesomeIcon icon={faGraduationCap} />
                            <span className='text-sm text-black'>
                                Toodlers
                            </span>
                        </div>
                        <div className="flex items-center gap-3 text-primary mt-2">
                            <FontAwesomeIcon icon={faLandmarkDome} />
                            <span className='text-sm text-black'>
                                House No: 2bhk, California, United States
                            </span>
                        </div>
                        <div className="flex items-center gap-3 text-primary mt-2">
                            <FontAwesomeIcon icon={faBook} />
                            <span className='text-sm text-black'>
                                Member Since: 7th Jan, 2019
                            </span>
                        </div>
                    </div>

                    <div className="flex mt-5 items-center gap-5">
                        <div className=" text-slate-900 text-[10.42px] font-semibold ">Parent Contacts Available</div>
                        <button className="w-[94.74px] h-[25.39px] bg-blue-600/10 rounded-[4.88px] text-primary flex items-center justify-center text-xs font-semibold" >
                            Contact
                        </button>
                    </div>
                </div>
                <div className='w-[1px] h-[178px] bg-gray-300' />
                <div>
                    <div className='flex items-center'>
                        <div className="w-[193.92px] text-slate-900 text-2xl font-bold ">About Me</div>
                        <button className="px-5 h-[25.39px] bg-blue-600/10 rounded-[4.88px] text-primary flex items-center justify-center text-xs font-semibold" >
                            Download Report
                        </button>
                    </div>
                    <p className="w-[391.19px] mt-5 text-neutral-500 text-xs font-normal poppins">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisc</p>
                    <div className="flex mt-5 gap-5 items-center">
                        <button className='btn-link text-primary text-xs'>Report History</button>

                        <div className="flex gap-[5px]">
                            {
                                days.map((day, index) => <button key={index} className={`text-[11px] ${selected.includes(day) ? "bg-amber-50 text-amber-500" : "bg-gray-100 text-gray-600"} w-[30px] rounded flex justify-center items-center px-3 py-1 `}>
                                    {day}
                                </button>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileCard;