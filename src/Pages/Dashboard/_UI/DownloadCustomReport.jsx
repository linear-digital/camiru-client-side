import { faCircleDown } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DownloadCustomReport = () => {
    return (
        <div className="w-full mt-10 h-[89px] bg-slate-50 rounded-xl border border-cyan-100 bg-[#F8FCFF] flex items-center px-10 justify-between" >
            <h3 className=" text-zinc-800 text-xs font-semibold ">Download a Custom Report</h3>
            <div className='flex gap-5 items-center'>
                <button className="w-[140px] h-[22px] bg-orange-400 rounded-sm text-xs flex items-center gap-1 px-2" >
                    <span className=" text-zinc-800 text-[10px] font-medium ">12th January, 2022</span>
                    <FontAwesomeIcon icon={faCircleDown}  className='text-[10px'/>
                </button>
                <div className="text-teal-600 text-sm font-semibold ">To</div>
                <button className="w-[150px] h-[22px] bg-orange-400 rounded-sm text-xs flex items-center gap-1 px-2" >
                    <span className=" text-zinc-800 text-[10px] font-medium ">12th January, 2022</span>
                    <FontAwesomeIcon icon={faCircleDown} className='text-[10px'/>
                </button>
                <button className='btn btn-sm btn-secondary rounded-2xl text-xs px-5 ml-5'>Download</button>
            </div>
        </div>
    );
};

export default DownloadCustomReport;