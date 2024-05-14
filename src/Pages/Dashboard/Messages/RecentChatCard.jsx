import React from 'react';
import { UserAvater } from '../../../Components/Card/Avater';

const RecentChatCard = () => {
    return (
        <div className='w-full flex items-center py-[10px] border-b gap-3 '>
            <UserAvater
                className={"rounded-xl overflow-hidden min-w-11 h-11"}
            />
            <div className='w-full'>
                <div className="flex justify-between w-full items-center">
                    <h5 className=" text-slate-900 text-xs font-bold ">Samantha William</h5>
                    <p className=" text-cyan-700 text-xs font-normal ">12:45 PM</p>
                </div>
                <div className="w-44 h-6 text-cyan-700 text-xs font-normal mt-1">Lorem ipsum dolor sit amet...</div>
            </div>
        </div>
    );
};

export default RecentChatCard;