import React from 'react';
import NavSearchbar from '../../../Components/Top_bar/NavSearchbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Square } from '../../../util/icons';
import Table from './Table';
import { Dropdown } from 'antd';
import { Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useState } from 'react';

const ClassRoom = () => {
    const [option, setOption] = useState("Toddlers");
    return (
        <main className='p-10 bg-white rounded-lg poppins'>
            <section className='flex justify-between items-center'>
                <div>
                    <h1 className="w-40 text-primary text-2xl font-bold ">Classroom</h1>
                    <p className="w-72 text-neutral-400 mt-2 font-normal text-sm">Select your class to checkout the reports</p>
                </div>
                <div className='flex gap-10 items-center'>
                    <div className="text-primary text-xs font-semibold ">21th December, 2022</div>

                    <Dropdown
                        className='option-classroom'
                        menu={{
                            items: [
                                {
                                    label: <button
                                        className={`${option === "Infants" ? "text-primary" : ""} w-full   text-start`}
                                        onClick={() => setOption("Infants")}
                                    >
                                        Infants
                                    </button>,
                                    key: '0',
                                },
                                {
                                    type: 'divider',
                                },
                                {
                                    label: <button
                                        className={`${option === "Toddlers" ? "text-primary" : ""} w-full   text-start`}
                                        onClick={() => setOption("Toddlers")}
                                    >
                                        Toddlers
                                    </button>,
                                    key: '1',
                                },
                                {
                                    type: 'divider',
                                },
                                {
                                    label: <button
                                        className={`${option === "Pre-K" ? "text-primary" : ""} w-full   text-start`}
                                        onClick={() => setOption("Pre-K")}
                                    >
                                        Pre-K
                                    </button>,
                                    key: '2',
                                },
                                {
                                    type: 'divider',
                                },
                                {
                                    label: <button
                                        className={`${option === "After Schoolers" ? "text-primary" : ""} w-full   text-start`}
                                        onClick={() => setOption("After Schoolers")}>
                                        After Schoolers
                                    </button>,
                                    key: '3',
                                },
                                {
                                    type: 'divider',
                                },
                                {
                                    label: <button
                                        className={`${option === "Floating Staff" ? "text-primary" : ""} w-full   text-start`}
                                        onClick={() => setOption("Floating Staff")}>
                                        Floating Staff
                                    </button>,
                                    key: '4',
                                }
                            ],
                        }}
                        trigger={['click']}
                    >
                        <button className="w-[135px] h-[47px] pl-[19px] pr-[18px] py-[12.59px] bg-[#15acde40] text-[#15ACDE] rounded-[11.02px] justify-center items-center gap-[11.02px] inline-flex text-sm font-bold">
                            <span className=" text-xs font-medium tracking-tight">
                                {option}
                            </span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                    </Dropdown>
                </div>
            </section>
            <section className='mt-10'>
                <Table />
            </section>
        </main>
    );
};

export default ClassRoom;