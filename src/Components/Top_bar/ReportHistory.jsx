import React from 'react';
import ReportCard from '../Card/ReportCard';

const ReportHistory = () => {
    return (
        <div className='w-full h-full p-5 bg-[#F1F6FA] overflow-hidden'>
            <div className="flex justify-between items-center">
                <h2 className=" text-slate-900 text-base font-semibold ">Profile Reports</h2>
                <div className='flex gap-2 items-center'>
                    <h5 className="text-indigo-950 text-xs font-medium">Newest First</h5>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="5" viewBox="0 0 11 5" fill="none">
                            <rect width="11" height="0.6875" rx="0.34375" fill="#2E1F4F" />
                            <rect width="8.25" height="0.6875" rx="0.34375" transform="matrix(1 0 0 -1 1.375 2.75)" fill="#2E1F4F" />
                            <rect width="4.125" height="0.6875" rx="0.34375" transform="matrix(1 0 0 -1 3.4375 4.8125)" fill="#2E1F4F" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className='grid mt-5 gap-2 pr-2 h-[500px] overflow-y-auto rounded'>
                <ReportCard size={"sm"} />
                <ReportCard size={"sm"} />
                <ReportCard size={"sm"} />
                <ReportCard size={"sm"} />
                <ReportCard size={"sm"} />
                <ReportCard size={"sm"} />
                <ReportCard size={"sm"} />
                <ReportCard size={"sm"} />
                <ReportCard size={"sm"} />
                <ReportCard size={"sm"} />
                <ReportCard size={"sm"} />
                <ReportCard size={"sm"} />
            </div>
        </div>
    );
};

export default ReportHistory;