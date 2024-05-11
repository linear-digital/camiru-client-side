import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from 'antd';
import React from 'react';
import { useState } from 'react';

const Filter = ({ name, desc }) => {
    const [option, setOption] = useState("Infants");
    const [reportType, setReportType] = useState("Daily Reports");
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
                                    className={`${option === "Daily Reports" ? "text-primary" : ""} w-full   text-start`}
                                    onClick={() => setOption("Daily Reports")}
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
                                    className={`${option === "Weekly Reports" ? "text-primary" : ""} w-full   text-start`}
                                    onClick={() => setOption("Weekly Reports")}
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
                                    className={`${option === "Monthly Reports" ? "text-primary" : ""} w-full   text-start`}
                                    onClick={() => setOption("Monthly Reports")}>
                                    Monthly Reports
                                </button>,
                                key: '3',
                            },
                            {
                                type: 'divider',
                            },
                            {
                                label: <button
                                    className={`${option === "Yearly Reports" ? "text-primary" : ""} w-full   text-start`}
                                    onClick={() => setOption("Yearly Reports")}>
                                    Yearly Reports
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
                    <button className=" h-[47px] pl-[19px] pr-[18px] py-[12.59px] bg-white border border-amber-500 rounded-[11.02px] justify-center items-center gap-[11.02px] inline-flex text-xs text-amber-500">
                        <span className=" font-medium tracking-tight">{reportType}</span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                </Dropdown>
                <button className=" h-[47px] pl-[19px] pr-[18px] py-[12.59px] bg-white bg-[#ffbb3b33] rounded-[11.02px] justify-center items-center gap-[11.02px] inline-flex text-xs text-amber-600 font-semibold">
                    Add People
                </button>
            </div>
        </section>
    );
};

export default Filter;