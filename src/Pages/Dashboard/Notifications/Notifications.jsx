import { Tab, Tabs, TabsHeader } from '@material-tailwind/react';
import React from 'react';
import NotificationCard from './NotificationCard';
const tabs = [
    {
        label: "Updates",
        value: "updates",
    },
    {
        label: "Notification",
        value: "notification",
    },
]
const Notifications = () => {
    const [active, setActive] = React.useState("updates")
    
    return (
        <div className='p-10 bg-white rounded-lg h-full overflow-y-auto'>
            <h2 className=" text-cyan-700 text-2xl font-bold ">Notifications</h2>
            <p className="mt-2  text-neutral-400 text-xs font-normal ">Select your class to checkout the reports</p>
            <div className="border px-5 py-8 w-full h-auto mt-5 rounded-lg">
                <div className="flex justify-between">
                    <h5 className="text-slate-900 text-base font-bold">Today</h5>
                    <Tabs value={active} className="w-full md:w-max bg-[#E3EBF1] rounded-lg">
                        <TabsHeader>
                            {tabs.map(({ label, value }) => (
                                <Tab className='' key={value} value={value}
                                    onClick={() => setActive(value)}
                                >
                                    <span className={`${active === value && "text-white text-[14px] font-semibold"} `}>
                                        &nbsp;&nbsp;{label}&nbsp;&nbsp;
                                    </span>
                                </Tab>
                            ))}
                        </TabsHeader>
                    </Tabs>
                </div>
                <div className='mt-5 flex flex-col gap-4'>
                    {
                        [...Array(5)].map((_, i) => <NotificationCard key={i} />)
                    }
                </div>
                <div className="flex justify-between mt-10">
                    <h5 className="text-slate-900 text-base font-bold">Yesterday</h5>
                    
                </div>
                <div className='mt-5 flex flex-col gap-4'>
                    {
                        [...Array(5)].map((_, i) => <NotificationCard key={i} />)
                    }
                </div>
                <div className="flex justify-between mt-10">
                    <h5 className="text-slate-900 text-base font-bold">Week</h5>
                    
                </div>
                <div className='mt-5 flex flex-col gap-4'>
                    {
                        [...Array(5)].map((_, i) => <NotificationCard key={i} />)
                    }
                </div>
                <div className="flex justify-between mt-10">
                    <h5 className="text-slate-900 text-base font-bold">Month</h5>
                    
                </div>
                <div className='mt-5 flex flex-col gap-4'>
                    {
                        [...Array(5)].map((_, i) => <NotificationCard key={i} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Notifications;