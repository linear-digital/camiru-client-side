import { Card } from 'antd';
import React from 'react';

const StatisticCard = ({ title, value, onClick }) => {
    return (
        <Card onClick={onClick} className='w-full border border-[#C7F1FF] bg-[#F8FCFF] lg:h-[80px] h-[70px] inter  flex flex-col justify-center cursor-pointer'>
            <div className=" text-zinc-500 text-xs font-semibold">{title}</div>
            <div className=" lg:mt-2 mt-1 text-amber-400 lg:text-xl text-base font-extrabold ">{value}</div>
        </Card>
    );
};

export default StatisticCard;