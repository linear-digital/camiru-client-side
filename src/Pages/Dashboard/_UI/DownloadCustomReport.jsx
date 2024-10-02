import { faCircleDown } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, DatePicker } from 'antd';
import dayjs from 'dayjs';
import moment from 'moment';
import React from 'react';

const DownloadCustomReport = () => {
    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current > dayjs().endOf('day');
    };
    const [startDate, setStartDate] = React.useState( dayjs().subtract(1, 'month').format('YYYY-MM-DD'));
    const [endDate, setEndDate] = React.useState( dayjs().format('YYYY-MM-DD'));
    return (
        <div className="w-full mt-10 py-4 lg:h-[89px] bg-slate-50 rounded-xl border border-[#C7F1FF] bg-[#F8FCFF] flex flex-col lg:flex-row items-center px-10 justify-between" >
            <h3 className=" text-zinc-800 text-xs font-semibold ">Download a Custom Report</h3>
            <div className='flex lg:flex-row flex-col  gap-1 mt-2 lg:mt-0 items-center'>
                <label htmlFor='startDate' className=" h-[22px] bg-orange-400 text-xs text-[#333333] rounded flex items-center gap-1 px-3 justify-center" >
                    <span className=" text-zinc-800 text-[10px] font-medium ">
                        {moment(startDate).format('DD MMMM YYYY')}
                    </span>
                    <FontAwesomeIcon icon={faCircleDown} className='text-[10px' />

                </label>
                <DatePicker
                    onChange={(date, dateString) => setStartDate(dateString)}
                    disabledDate={disabledDate}
                    className='date-picker-ant'
                    id='startDate' placeholder='12th January, 2022' renderExtraFooter={() => 'Start Date'} />
                <div className="text-teal-600 text-sm font-semibold ">To</div>
                <DatePicker
                    onChange={(date, dateString) => setEndDate(dateString)}
                    disabledDate={disabledDate}
                    className='date-picker-ant'
                    id='endDate' placeholder='12th January, 2022' renderExtraFooter={() => 'End Date'} />
                 <label htmlFor='endDate' className=" h-[22px] bg-orange-400 text-xs text-[#333333] rounded flex items-center gap-1 px-3 justify-center" >
                    <span className=" text-zinc-800 text-[10px] font-medium ">
                    {moment(endDate).format('DD MMMM YYYY')}
                    </span>
                    <FontAwesomeIcon icon={faCircleDown} className='text-[10px' />

                </label>

                <Button size='small' type='secondary' className='btn btn-sm btn-secondary text-white rounded-2xl text-xs px-5 lg:ml-5 mt-2 lg:mt-0'>Download</Button>
            </div>
        </div>
    );
};

export default DownloadCustomReport;