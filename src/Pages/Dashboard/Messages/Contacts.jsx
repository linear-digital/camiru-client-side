import React from 'react';
import { UserAvater } from '../../../Components/Card/Avater';
import { Dropdown } from 'antd';

const Contacts = () => {
    const items = [
        {
            label: <button>Parant Message</button>,
            key: '0',
        },
        {
            type: 'divider',
        },
        {
            label: <button>Staff Message</button>,
            key: '1',
        },
    ];
    return (
        <div className='w-full mt-5'>
            <div className="flex justify-between items-center">
                <h5 className=" text-cyan-700 text-xs font-semibold ">Contacts</h5>
                <Dropdown menu={{ items }} trigger={['click']}>
                    <button className=" text-blue-600 text-xs font-bold">Filter Conversation</button>
                </Dropdown>

            </div>
            <div className="flex mt-5 gap-[10px]">
                {/* <UserAvater
                    className={"rounded-xl overflow-hidden w-11 h-11"}
                />
                <UserAvater
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
                /> */}
                 <h2 className="text-gray-500 text-lg font-normal">No Contacts</h2>
            </div>
        </div>
    );
};

export default Contacts;