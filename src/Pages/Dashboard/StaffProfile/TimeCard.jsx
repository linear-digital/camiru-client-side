import { CalendarOutlined, DownOutlined, PlusOutlined } from '@ant-design/icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DatePicker } from 'antd';
import { Dropdown } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TimeCardTable from './TimeCardTable';
import { useState } from 'react';
import { Modal } from 'antd';
import { Card } from 'antd';
import moment from 'moment';
import { PlusOneOutlined } from '@mui/icons-material';

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
    const [update, setUpdate] = useState(false)
    return (
        <div className='w-full'>
            <Modal
                open={update}
                onCancel={() => setUpdate(false)}
                footer={<div className='px-3 pt-4 border-t flex justify-between items-center'>
                    <div className='flex flex-col items-center'>
                        <h2
                            className='text-[18px] font-medium text-[#96A0AF]'
                        >
                            Workhours
                        </h2>
                        <h2
                            className='text-[18px] font-medium '
                        >
                            4 Hours
                        </h2>
                    </div>
                    <div className="flex gap-x-6">
                        <button
                            onClick={() => setUpdate(false)}
                            className='py-2 px-7 rounded-lg text-black bg-transparent border-staff-pc border font-semibold'>
                            Cencel
                        </button>
                        <button
                            onClick={() => setUpdate(false)}
                            className='py-2 px-7 rounded-lg text-black bg-staff-pc font-semibold'>
                            Save
                        </button>


                    </div>
                </div>}
                centered
                title="Edit Timesheets"
                width={600}
                className='border-staff-pc border-2 rounded-lg '
            >
                <div className='min-h-[600px] p-5'>

                    <Card className='card-0 p-2 mt-5'>
                        <div className="flex gap-x-3">
                            <CalendarOutlined className='text-2xl' />
                            <div>
                                <h3 className='text-base'>
                                    {moment(new Date()).format('dddd')}
                                </h3>
                                <p
                                    className='text-xs text-[#C6C6C6]'
                                >
                                    {moment(new Date()).format('DD.MM.YY')}
                                </p>
                            </div>
                        </div>
                    </Card>
                    <div className="grid grid-cols-12 mt-10">
                        <h3 className='text-[18px] col-span-4 flex items-center font-medium'>
                            Regular Time
                        </h3>
                        <div className='col-span-8 flex justify-between items-center'>
                            <Card className='card-0  w-[154px] h-[52px] flex items-center justify-center'>
                                <div className="flex gap-x-5 items-center justify-between w-full">
                                    <span className='text-sm text-[#C6C6C6]'>In</span>
                                    <span className='text-base'>
                                        10.00 A.M
                                    </span>
                                </div>
                            </Card>
                            <Card className='card-0  w-[154px] h-[52px] flex items-center justify-center'>
                                <div className="flex gap-x-5 items-center justify-between w-full">
                                    <span className='text-sm text-[#C6C6C6]'>In</span>
                                    <span className='text-base'>
                                        10.00 A.M
                                    </span>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 mt-8">
                        <h3 className='text-[18px] col-span-4 flex items-center font-medium'>
                            Meal Break
                        </h3>
                        <div className='col-span-8 flex justify-between items-center'>
                            <Card className='card-0  w-[154px] h-[40px] flex items-center justify-center'>
                                <div className="flex gap-x-5 items-center justify-between w-full">
                                    <span className='text-base'>
                                        1 Hour
                                    </span>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 mt-8">
                        <h3 className='text-[18px] col-span-4 flex items-center font-medium'>
                            Over time
                        </h3>
                        <div className='col-span-8 flex justify-between items-center'>
                            <Card className='card-0  w-[154px] h-[40px] flex items-center justify-center'>
                                <div className="flex gap-x-5 items-center justify-between w-full">
                                    <span className='text-base'>
                                        Add
                                    </span>
                                    <PlusOutlined />
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 mt-8">
                        <h3 className='text-[18px] col-span-4 flex items-center font-medium'>
                            Leave
                        </h3>
                        <div className='col-span-8 flex justify-between items-center'>
                            <Card className='card-0  w-[154px] h-[40px] flex items-center justify-center'>
                                <div className="flex gap-x-5 items-center justify-between w-full">
                                    <span className='text-base'>
                                        Add
                                    </span>
                                    <PlusOutlined />
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </Modal>
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
                    <button className='btn rounded-md bg-[#FFBB3B33] text-[#A0A0A0] text-xs font-normal py-2 px-3 flex gap-x-2 items-center'
                        onClick={() => setUpdate(!update)}
                    >
                        <span>Edit Page</span>
                        <FontAwesomeIcon icon={faPen} className='text-[#FFBB3B]' />
                    </button>
                }
            </div>
            <div className='w-full border overflow-hidden rounded-xl poppins bg-staff-bg border-staff-pc mt-10'>
                <TimeCardTable />

            </div>
        </div>
    );
};

export default TimeCard;