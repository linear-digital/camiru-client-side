
import React from 'react';

const RecentActivity = () => {
    return (
        <div className='mt-10'>
            <div className="flex justify-between items-center">
                <h1 className=" text-primary text-lg font-bold leading-[17.09px]">Recent Activity</h1>
                <button className="text-zinc-600 text-[11.06px] font-bold ">View All</button>
            </div>
            <div className="grid gap-y-5 mt-10">
                <RecentCard />
                <RecentCard />
                <RecentCard />
                <RecentCard />
                <RecentCard />
            </div>
        </div>
    );
};

export default RecentActivity;

export const RecentCard = () => {
    return <div className='flex items-start gap-3'>
        <div className='w-[14px] min-w-[14px] h-[14px] bg-gray-100 rounded-full border-[4px] border-secondary mt-1'>
        </div>
        <div>
            <div className="flex justify-between">
                <h5 className="text-gray-900 text-[11.06px] font-bold ">
                    Transaction Assets
                </h5>
                <div className="text-slate-500 text-[10px] font-normal">2 Hour Ago</div>
            </div>
            <p className="text-slate-400 mt-1 text-[11.06px] font-normal ">
                Ab architecto provident ex accusantium deserunt.
            </p>
        </div>
    </div>
}