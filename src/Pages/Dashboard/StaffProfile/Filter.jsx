import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from 'antd';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';

const Filter = ({ name, desc, color }) => {
    const { selected } = useSelector(state => state.child)
    const { classrooms } = useSelector(state => state.classroom)
    const [mode, setMode] = useState("view");
    const location = useLocation();
    const isIncluded = (path) => {
        return location.pathname.includes(path)
    }
    React.useEffect(() => {
        if (isIncluded("enrollment") || isIncluded("details")) {
            setMode("edit")
        }
        else if (isIncluded("health-log") || isIncluded("checkin")) {
            setMode("filter")
        }
        else {
            setMode("view")
        }
    }, [location.pathname])


    return (
        <section className='lg:flex justify-between items-center'>
            <div className='mb-4 lg:mb-0'>
                <h1 className={`${"text-staff-pc"} lg:text-2xl text-xl font-bold `}>{name}</h1>
                <p className=" text-neutral-400 mt-2 font-normal text-sm">
                    {desc}
                </p>
            </div>
            <div className='flex gap-5 items-center'>
                <ClassRoomSelector rooms={classrooms} selected={selected} />
                <div className="flex items-center gap-3">
                    
                    <DatePicker
                        format={'DD MMM, YYYY'}
                        className=" h-[47px] pl-[19px] pr-[18px] py-[12.59px] bg-white border border-amber-500 rounded-[11.02px] justify-center items-center gap-[11.02px] inline-flex text-xs text-amber-500"
                        placeholder='Start Date'
                        defaultValue={dayjs().subtract(7, 'day')}
                    />
                    <div className='text-amber-500 text-sm'>
                        To
                    </div>
                    <DatePicker
                        format={'DD MMM, YYYY'}
                        className=" h-[47px] pl-[19px] pr-[18px] py-[12.59px] bg-white border border-amber-500 rounded-[11.02px] justify-center items-center gap-[11.02px] inline-flex text-xs text-amber-500"
                        placeholder='End Date'
                        defaultValue={dayjs()}
                    />
                </div>

                <button className=" h-[47px] pl-[19px] pr-[18px] py-[12.59px] bg-white bg-[#ffbb3b33] rounded-[11.02px] justify-center items-center gap-[11.02px] inline-flex text-lg text-amber-600 font-semibold">
                    <FontAwesomeIcon icon={faPrint} />
                </button>
            </div>
        </section>
    );
};

export default Filter;

export const ClassRoomSelector = ({ rooms, selected, setSelected }) => {

    return <Dropdown
        className='option-classroom'
        menu={{
            items: [
                ...rooms?.map((item, index) => {
                    return {
                        label: <button
                            className={`${selected?.name === item?.name ? "text-primary" : ""} w-full   text-start`}
                            onClick={() => setSelected(item)}>
                            {item?.name}
                        </button>,
                        key: index,
                    }
                })
            ],
        }}
        trigger={['click']}
    >
        <button className=" lg:h-[47px] h-[35px] pl-[19px] pr-[18px] py-[12.59px] bg-[#187A8229] text-[#187A82] border-[#187A82] rounded-[11.02px] justify-center items-center gap-[11.02px] inline-flex text-sm font-bold">
            <span className=" text-xs font-medium tracking-tight">
                {selected?.classRoom?.name}
            </span>
            <FontAwesomeIcon icon={faChevronDown} />
        </button>
    </Dropdown>
}