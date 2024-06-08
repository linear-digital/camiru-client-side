import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faLandmarkDome } from '@fortawesome/free-solid-svg-icons/faLandmarkDome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image } from 'antd';
import React from 'react';
import { useState } from 'react';
import { imageUrl } from '../../../Components/helper/axios.instance';
import nameDisplay from '../../../util/nameDisplay';
import calculateAge from '../../../util/ageCalculator';

const ProfileCard = ({ user }) => {
    const days = ["M", "Tu", "Wh", "T", "F", "Sa", "Su"];
    const [selected, setSelected] = useState(["M", "Tu", "Wh"]);
    return (
        <section className='mt-10 lg:p-10 p-5 border w-full rounded-lg lg:flex items-start gap-10 justify-between'>
            <div className="rounded-full overflow-hidden w-[150px] h-[150px] ">
                <Image
                    className='rounded-full overflow-hidden w-full h-full'
                    width={150}
                    src={imageUrl(user?.profilePic)}
                />
            </div>
            <div className='lg:flex gap-10 items-center'>
                <div className='lg:ml-5'>
                    <h1 className="text-black text-[28px] font-semibold leading-10 tracking-tight">
                        {
                            nameDisplay(user)
                        }
                    </h1>
                    <p className="mt-1 text-cyan-700 text-xs font-semibold">{
                        calculateAge(user?.birthDate, true)
                    } Years old | Boy</p>
                    <div className='mt-5'>
                        <div className="flex items-center gap-3 text-primary">
                            <FontAwesomeIcon icon={faGraduationCap} />
                            <span className='text-sm text-black'>
                                {
                                    user?.classRoom?.name
                                }
                            </span>
                        </div>
                        <div className="flex items-center gap-3 text-primary mt-2">
                            <FontAwesomeIcon icon={faLandmarkDome} />
                            <span className='text-sm text-black max-w-[350px]'>
                                House No: 2bhk, California, United States
                                {
                                    user?.address + ", " + user?.city + ", " + user?.country
                                }
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
                        <div className=" text-black/80 text-[10.42px] font-semibold ">Parent Contacts Available</div>
                        <button className="w-[94.74px] h-[25.39px] bg-blue-600/10 rounded-[4.88px] text-primary flex items-center justify-center text-xs font-semibold" >
                            Contact
                        </button>
                    </div>
                </div>
                <div className='w-[1px] hidden lg:block h-[178px] bg-gray-300' />
                <div className='mt-5 lg:mt-0'>
                    <div className='flex flex-wrap gap-2 items-center w-full'>
                        <div className="w-[193.92px] text-black/80 lg:text-2xl text-xl font-bold ">About Me</div>
                        <button className="px-5 h-[25.39px] bg-blue-600/10 rounded-[4.88px] text-primary flex items-center justify-center text-xs font-semibold" >
                            Download Report
                        </button>
                    </div>
                    <p className="lg:max-w-[391.19px] w-full mt-5 text-neutral-500 text-xs font-normal poppins">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisc</p>
                    <div className="flex flex-wrap mt-5 gap-5 items-center">
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