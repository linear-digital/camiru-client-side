import { Card } from 'antd';
import React from 'react';

const StatisticCard = ({ title, value }) => {
    return (
        <Card className='w-full border-secondary bg-white min-h-[80px] inter '>
            <div className=" text-zinc-500 text-xs font-semibold">{title}</div>
            <div className=" mt-2 text-amber-400 text-xl font-extrabold ">{value}</div>
        </Card>
    );
};

export default StatisticCard;