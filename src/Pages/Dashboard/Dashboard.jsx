import { Card } from '@material-tailwind/react';
import React from 'react';
import { Button } from '../../Components/Buttons/Buttons';

const Dashboard = () => {
    return (
        <Card className='w-full bg-white h-full inter p-10'>
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
        </Card>
    );
};

export default Dashboard;