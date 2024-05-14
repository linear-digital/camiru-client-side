import React from 'react';
import { UserAvater } from '../../../Components/Card/Avater';

const Contacts = () => {
    return (
        <div className='w-full mt-5'>
            <div className="flex justify-between items-center">
                <h5 className=" text-cyan-700 text-xs font-semibold ">Contacts</h5>
                <button className=" text-blue-600 text-xs font-bold">Filter Conversation</button>
            </div>
            <div className="flex mt-5 gap-[10px]">
                <UserAvater
                    className={"rounded-xl overflow-hidden w-11 h-11"}
                /><UserAvater
                    className={"rounded-xl overflow-hidden w-11 h-11"}
                /><UserAvater
                    className={"rounded-xl overflow-hidden w-11 h-11"}
                />
                <UserAvater
                    className={"rounded-xl overflow-hidden w-11 h-11"}
                />
                <UserAvater
                    className={"rounded-xl overflow-hidden w-11 h-11"}
                />
                <UserAvater
                    className={"rounded-xl overflow-hidden w-11 h-11"}
                />
            </div>
        </div>
    );
};

export default Contacts;