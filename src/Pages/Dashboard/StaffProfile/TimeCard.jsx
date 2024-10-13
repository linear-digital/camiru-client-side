import { DownOutlined } from '@ant-design/icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DatePicker } from 'antd';
import { Dropdown } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TimeCardTable from './TimeCardTable';

const TimeCard = () => {
    const items = [
        {
            key: '1',
            label: 'Weekly',
        },
        {
            type: 'divider',
        },
        {
            key: '2',
            label: 'Bi Weekly',
        },
        {
            type: 'divider',
        },
        {
            key: '3',
            label: 'Monthly',
        },
        {
            type: 'divider',
        },
        {
            key: '4',
            label: 'Yearly',
        }
    ]
    const location = useLocation();
    return (
        <div className='w-full'>
            <div className="flex justify-between items-center">
                <div className="flex gap-x-5 items-center">
                    <Dropdown menu={{ items, selectable: true }} trigger={['click']}>
                        <button className='bg-[#5CD9CA40] text-primary2 py-2 px-3 rounded-xl font-medium text-sm flex gap-x-2 items-center'>
                            <span> Weekly Timesheets</span> <DownOutlined />
                        </button>
                    </Dropdown>
                    <button className='bg-[#5CD9CA40] rounded-xl py-[6px]'>
                        <DatePicker.RangePicker
                            className='text-primary2'
                            defaultValue={[dayjs(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate() - 7}`), dayjs(),]}
                            format={'MMMM-DD'}
                            size='small'
                            placeholder={['Start Date', 'End Date']}
                            bordered={false}
                        />
                    </button>
                </div>
                {
                    <Link to={location.pathname.includes("edit") ? `${location.pathname}` : `${location.pathname}/edit`} className='btn rounded-md bg-[#FFBB3B33] text-[#A0A0A0] text-xs font-normal py-2 px-3 flex gap-x-2 items-center'>
                        <span>Edit Page</span>
                        <FontAwesomeIcon icon={faPen} className='text-[#FFBB3B]' />
                    </Link>
                }
            </div>
            <div className='w-full border overflow-hidden rounded-xl poppins bg-staff-bg border-staff-pc mt-10'>
                <TimeCardTable />

            </div>
        </div>
    );
};

export default TimeCard;