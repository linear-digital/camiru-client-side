import { Avatar } from 'antd';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
const NotificationSec = () => {
    return (
        <div className='poppins w-full py-5'>
            <h1 className="w-[121px] h-[17px] text-primary text-lg font-bold leading-[17.09px]">Notificaion</h1>
            <div className='mt-8 grid'>

                <NotificationRow
                    title={"New Message"}
                    number={10}
                />
                <NotificationRow
                    title={"Reports"}
                    number={55}
                />
                <NotificationRow
                    title={"Skill Developement"}
                    number={5}
                />
                <NotificationRow
                    title={"Parents Message"}
                    number={59}
                />
                <NotificationRow
                    title={"Comments"}
                    number={77}
                />
            </div>
        </div>
    );
};

export default NotificationSec;

const NotificationRow = ({ title, number, icon }) => {
    return <div className='flex items-center justify-between py-2 border-b border-blue-gray-50'>
        <div className="flex items-center gap-3">
            <Avatar size={30} icon={<UserOutlined />} />
            <h5 className=" text-black text-[11px] font-semibold leading-[15.20px]">{title}</h5>
        </div>
        <div className="w-[20.70px] h-[20.70px] bg-secondary text-white rounded-full text-[10px] flex justify-center items-center" >
            {number}
        </div>
    </div>
}