import React from 'react';
import { Calendar, Envelope, Notification, Task } from '../../util/icons';
import ReportHistory from './ReportHistory';

const Icons_panel = () => {
    return (
        <div className='flex items-center gap-5'>
            <button>
                <Calendar />
            </button>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button"> <Task /></div>
                <div tabIndex={0} className="dropdown-content  z-[1] menu shadow rounded-box w-[495px] h-[600px] mt-2  bg-[#F1F6FA] border border-[#CBDFFF]">
                    <ReportHistory />
                </div>
            </div>
            <button>
                <Envelope />
            </button>
            <button>
                <Notification />
            </button>
        </div>
    );
};

export default Icons_panel;