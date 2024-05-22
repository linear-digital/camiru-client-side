import React from 'react';
import { Dot } from '../../User/Profile';
import { Button } from '@material-tailwind/react';

const HealthScreening = () => {
    return (
        <div className='w-full'>
            <div className="flex items-center gap-5">
                <div className={`w-[37.66px] h-[37.66px] bg-amber-400/opacity-25 rounded-full flex items-center justify-center text-base font-bold border   bg-[#D9D9D9] text-gray-800`} >
                    3
                </div>
                <div className="text-stone-500 text-[21.73px] font-bold ">Health Screening</div>
            </div>
            <div className="mt-10 lg:pl-16 w-full">
                <div className="flex items-center gap-3">
                    <Dot className={"w-2 h-2 bg-black"} />
                    <h4 className='text-xs font-semibold'>
                        Enable screening
                    </h4>
                </div>
                <div className="flex items-center gap-3 mt-2">
                    <Dot className={"w-2 h-2 bg-black"} />
                    <h4 className='text-xs font-semibold'>
                        Edit questions
                    </h4>
                </div>
                <Button variant='filled' className='mt-10 bg-[#187A82] text-white rounded-md'>
                    Go to Health Screening
                </Button>
            </div>
        </div>
    );
};

export default HealthScreening;