import { Card } from 'antd';
import React from 'react';

const StatisticCard = ({ title, value }) => {
    return (
        <Card className='w-full border-secondary bg-white h-[80px] inter '>
            <div className=" h-4 text-zinc-500 text-xs font-semibold">{title}</div>
            <div className=" h-6 text-amber-400 text-xl font-extrabold ">{value}</div>
        </Card>
    );
};

export default StatisticCard;