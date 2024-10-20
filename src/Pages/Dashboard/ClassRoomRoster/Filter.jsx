import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from 'antd';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Filter = ({ name, desc }) => {
    const [reportType, setReportType] = useState("Daily Reports");

    return (
        <section className='flex flex-col lg:flex-row justify-between lg:items-center'>
            <div>
                <h1 className="text-[#187A82] lg:text-2xl text-xl font-bold ">{name}</h1>
                <p className=" text-neutral-400 mt-2 font-normal lg:text-sm text-xs">
                    {desc}
                </p>
            </div>
            <div className='flex flex-wrap mt-5 lg:mt-0 gap-5 items-center'>
                
                <Dropdown
                    className='option-classroom'
                    menu={{
                        items: [
                            {
                                label: <button
                                    className={`${reportType === "Daily Reports" ? "text-amber-500" : ""} w-full   text-start`}
                                    onClick={() => setReportType("Daily Reports")}
                                >
                                    Daily Reports
                                </button>,
                                key: '1',
                            },
                            {
                                type: 'divider',
                            },
                            {
                                label: <button
                                    className={`${reportType === "Weekly Reports" ? "text-amber-500" : ""} w-full   text-start`}
                                    onClick={() => setReportType("Weekly Reports")}
                                >
                                    Weekly Reports
                                </button>,
                                key: '2',
                            },
                            {
                                type: 'divider',
                            },
                            {
                                label: <button
                                    className={`${reportType === "Monthly Reports" ? "text-amber-500" : ""} w-full   text-start`}
                                    onClick={() => setReportType("Monthly Reports")}>
                                    Monthly Reports
                                </button>,
                                key: '3',
                            },
                            {
                                type: 'divider',
                            },
                            {
                                label: <button
                                    className={`${reportType === "Yearly Reports" ? "text-amber-500" : ""} w-full   text-start`}
                                    onClick={() => setReportType("Yearly Reports")}>
                                    Yearly Reports
                                </button>,
                                key: '4',
                            }
                        ],
                    }}
                    trigger={['click']}
                >
                    <button className=" lg:h-[47px] h-[35px] pl-[19px] pr-[18px] py-[12.59px] bg-white border border-amber-500 rounded-[11.02px] justify-center items-center gap-[11.02px] inline-flex text-[10px] text-amber-500">
                        <span className=" font-medium tracking-tight">{reportType}</span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                </Dropdown>
                <Link to="/dashboard/add-staff" className="lg:h-[47px] h-[35px] pl-[19px] pr-[18px] py-[12.59px]  bg-[#ffbb3b33] rounded-[11.02px] justify-center items-center gap-[11.02px] inline-flex text-[10px] text-amber-600 font-semibold">
                    Add People
                </Link>
            </div>
        </section>
    );
};

export default Filter;