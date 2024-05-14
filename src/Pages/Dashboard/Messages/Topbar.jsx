import React from 'react';
import { UserAvater } from '../../../Components/Card/Avater';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const Topbar = () => {
    return (
        <div className='w-full p-5 border-b flex items-center justify-between'>
            <div className='flex gap-3'>
                <UserAvater
                    className={"rounded-xl overflow-hidden min-w-11 h-11"}
                />
                <div>
                    <h4 className="text-slate-900 text-base font-bold ">Samantha WIlliam</h4>
                    <p className="flex items-center mt-1">
                        <FontAwesomeIcon icon={faCircle}
                        className='text-green-500 text-[10px] font-normal'
                        />
                        <span className=" text-cyan-700 text-xs font-normal ml-2">Online</span>
                    </p>
                </div>
            </div>
            <div className='flex items-center gap-6'>
                <button className='text-red-500'>
                    <FontAwesomeIcon icon={faVideo}/>
                </button>
                <button>
                    <FontAwesomeIcon icon={faEllipsisH}/>
                </button>
            </div>
        </div>
    );
};

export default Topbar;