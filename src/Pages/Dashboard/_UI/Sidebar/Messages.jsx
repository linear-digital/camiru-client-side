import { Avatar } from 'antd';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';

const Messages = () => {
    return (
        <div className='mt-10'>
            <div className="flex justify-between items-center">
                <h1 className=" text-primary text-lg font-bold leading-[17.09px]">Messages</h1>
                <button className="text-zinc-600 text-[11.06px] font-bold ">View All</button>
            </div>
            <div className="grid gap-y-5 mt-10">
                <MessageCard />
                <MessageCard />
                <MessageCard />
                <MessageCard />
                <MessageCard />
            </div>
        </div>
    );
};

export default Messages;

export const MessageCard = () => {
    return <div className='flex items-center gap-3'>
        <Avatar shape="square" size={37} icon={<UserOutlined />} />
        <div>
            <h5 className="text-slate-900 text-[11.06px] font-bold ">Samantha William</h5>
            <p className="text-slate-400 mt-1 text-[11.06px] font-normal ">Lorem ipsum dolor sit amet...</p>
        </div>
    </div>
}