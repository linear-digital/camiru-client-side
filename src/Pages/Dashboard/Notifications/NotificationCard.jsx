import React from 'react';

const NotificationCard = () => {
    return (
        <section className='flex items-center justify-between'>
            <div className="flex items-center gap-4">
                <div className="text-slate-400 text-xs font-normal">2m ago</div>
                <div className="w-1 h-8 bg-amber-400 rounded-lg" />
                <div>
                    <h2>
                        <span className="text-slate-900 text-xs font-semibold">
                            Karen Hope
                        </span>
                        <span className="text-slate-900 text-xs px-1 font-normal"> mentioned you at
                        </span>
                        <span className="text-amber-400 text-xs font-semibold ">
                            Web Projects
                        </span>
                    </h2>
                    <div className="text-[#6F96AA] text-xs font-normal">Monday, June 31 2020</div>
                </div>
            </div>
            <button className="h-8 px-4 py-2.5 bg-amber-50 rounded-md justify-center items-center gap-1.5 inline-flex text-amber-400 text-xs font-bold">
                Go to
            </button>
        </section>
    );
};

export default NotificationCard;