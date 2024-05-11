import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from 'antd';
import React from 'react';
import { useState } from 'react';

const Filter = ({ name, desc }) => {
    const [option, setOption] = useState("Infants");
    return (
        <section className='flex justify-between items-center'>
            <div>
                <h1 className="text-primary text-2xl font-bold ">{name}</h1>
                <p className="w-72 text-neutral-400 mt-2 font-normal text-sm">
                    {desc}
                </p>
            </div>
            <div className='flex gap-5 items-center'>
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
                                    onClick={() => setOption("Yearly Reports")}>
                                    Floating Staff
                                </button>,
                                key: '4',
                            }
                        ],
                    }}
                    trigger={['click']}
                >
                    <button className=" h-[47px] pl-[19px] pr-[18px] py-[12.59px] bg-[#15acde40] text-[#15ACDE] rounded-[11.02px] justify-center items-center gap-[11.02px] inline-flex text-sm font-bold">
                        <span className=" text-xs font-medium tracking-tight">
                            {option}
                        </span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                </Dropdown>
                <div className="flex items-center gap-3">
                    <button className=" h-[47px] pl-[19px] pr-[18px] py-[12.59px] bg-white border border-amber-500 rounded-[11.02px] justify-center items-center gap-[11.02px] inline-flex text-xs text-amber-500">
                        Nov 21 , 2024
                        <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                    <div className='text-amber-500 text-sm'>
                        To
                    </div>
                    <button className=" h-[47px] pl-[19px] pr-[18px] py-[12.59px] bg-white border border-amber-500 rounded-[11.02px] justify-center items-center gap-[11.02px] inline-flex text-xs text-amber-500">
                        Nov 21 , 2024
                        <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                </div>

                <button className=" h-[47px] pl-[19px] pr-[18px] py-[12.59px] bg-white bg-[#ffbb3b33] rounded-[11.02px] justify-center items-center gap-[11.02px] inline-flex text-lg text-amber-600 font-semibold">
                    <FontAwesomeIcon icon={faPrint} />
                </button>
            </div>
        </section>
    );
};

export default Filter;