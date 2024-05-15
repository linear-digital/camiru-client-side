import { Card } from '@material-tailwind/react';
import React from 'react';
import { Button } from '../../Components/Buttons/Buttons';
import StatisticCard from './_UI/StatisticCard';
import Attendance from './_UI/Attendance';
import AbsentStudentList from './_UI/AbsentStudentList';
import StapManagement from './_UI/StapManagement';
import DownloadCustomReport from './_UI/DownloadCustomReport';
import RecentMedia from './_UI/RecentMedia';
import NotificationSec from './_UI/Sidebar/NotificationSec';
import Messages from './_UI/Sidebar/Messages';
import RecentActivity from './_UI/Sidebar/RecentActivity';

const Dashboard = () => {
    return (
        <Card className='w-full bg-white h-auto inter lg:p-10 p-5 min-h-[80vh]'>
            <section className='lg:flex justify-between items-center'>
                <div>
                    <h1 className="w-40 text-primary lg:text-2xl text-base font-bold ">Dashboard</h1>
                    <p className="w-72 text-neutral-400 mt-2 font-normal lg:text-sm text-xs">Checkout your overview at a glance</p>
                </div>
                <div className='flex gap-5 mt-3 lg:mt-0'>
                    <Button variant={"accent"} className='lg:rounded-3xl lg:px-10 px-4  text-[8px] lg:text-xs lg:py-3'>
                        Add Child
                    </Button>
                    <Button variant={"accent"} className='lg:rounded-3xl lg:px-10 px-4  text-[8px] lg:text-xs lg:py-3'>
                        Add Classrooms
                    </Button>
                </div>
            </section>
            <section className='flex mt-10 gap-10 w-full'>
                <div className="w-full">
                    <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-5 gap-3">
                        <StatisticCard
                            title={"Classrooms"}
                            value={"10"}
                        />
                        <StatisticCard
                            title={"Active Children"}
                            value={"50"}
                        />
                        <StatisticCard
                            title={"Children Per Class"}
                            value={"10"}
                        />
                        <StatisticCard
                            title={"Parents Per Children"}
                            value={"12/40"}
                        />
                    </div>
                    <Attendance />
                    <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 gap-10">
                        <StapManagement />
                        <AbsentStudentList />
                    </div>
                    <DownloadCustomReport />
                    <RecentMedia />
                </div>
                <div className="min-w-[287px] max-w-[300px]  shadow-lg p-5 rounded-md">
                    <NotificationSec />
                    <Messages />
                    <RecentActivity />
                </div>
            </section>
        </Card>
    );
};

export default Dashboard;