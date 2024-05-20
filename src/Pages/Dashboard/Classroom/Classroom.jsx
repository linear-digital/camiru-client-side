import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Table from './Table';
import { Dropdown } from 'antd';
import { useState } from 'react';
import { class_rooms } from '../../../util/classrooms';

const ClassRoom = () => {
    const [option, setOption] = useState("Toddlers");
    return (
        <main className='lg:p-10 p-5 bg-white rounded-lg poppins'>
            <section className='flex flex-col lg:flex-row lg:justify-between lg:items-center'>
                <div>
                    <h1 className=" text-primary lg:text-2xl text-xl font-bold ">Classroom</h1>
                    <p className=" text-neutral-400 mt-2 font-normal text-sm">Select your class to checkout the reports</p>
                </div>
                <div className='flex gap-10 items-center mt-3 lg:mt-0'>
                    <div className="text-primary text-xs font-semibold ">21th December, 2022</div>
                    <Dropdown
                        className='option-classroom'
                        menu={{
                            items: [
                                ...class_rooms?.map((item, index) => {
                                    return {
                                        label: <button
                                            className={`${option === item ? "text-primary" : ""} w-full   text-start`}
                                            onClick={() => setOption(item)}>
                                            {item}
                                        </button>,
                                        key: index,
                                    }
                                })
                            ],
                        }}
                        trigger={['click']}
                    >
                        <button className="w-[135px] lg:h-[47px] h-[35px] pl-[19px] pr-[18px] py-[12.59px] bg-[#15acde40] text-[#15ACDE] rounded-[11.02px] justify-center items-center gap-[11.02px] inline-flex text-sm font-bold">
                            <span className=" text-xs font-medium tracking-tight">
                                {option}
                            </span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                    </Dropdown>
                </div>
            </section>
            <section className='lg:mt-10 mt-5 w-full'>
                <Table />
            </section>
            <section className='flex justify-between items-center lg:mt-20 mt-10'>
                <div>
                    <h1 className=" text-primary lg:text-2xl text-xl font-bold ">Stuff</h1>
                    <p className="text-neutral-400 mt-2 font-normal text-sm">Upcoming Student list donw bellow</p>
                </div>
            </section>
            <section className='lg:mt-10 mt-5 w-full'>
                <Table />
            </section>
        </main>
    );
};

export default ClassRoom;