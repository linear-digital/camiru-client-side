import { Card } from '@material-tailwind/react';
import React from 'react';
import { Button } from '../../Components/Buttons/Buttons';
import StatisticCard from './_UI/StatisticCard';
import Attendance from './_UI/Attendance';

const Dashboard = () => {
    return (
        <Card className='w-full bg-white h-auto inter p-10 min-h-[80vh]'>
            <section className='flex justify-between items-center'>
                <div>
                    <h1 className="w-40 text-primary text-2xl font-bold ">Dashboard</h1>
                    <p className="w-72 text-neutral-400 mt-2 font-normal text-sm">Checkout your overview at a glance</p>
                </div>
                <div className='flex gap-5'>
                    <Button variant={"accent"} className='rounded-3xl px-10'>
                        Add Child
                    </Button>
                    <Button variant={"accent"} className='rounded-3xl px-10 text-xs'>
                        Add Classrooms
                    </Button>
                </div>
            </section>
            <section className='flex mt-10 gap-10 w-full'>
                <div className="w-full">
                    <div className="grid grid-cols-4 gap-5">
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
                </div>
                <div className="min-w-[350px] max-w-[350px]  shadow-lg p-5 rounded-md">

                </div>
            </section>
        </Card>
    );
};

export default Dashboard;