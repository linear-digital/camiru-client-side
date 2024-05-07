import React from 'react';
import { Dot } from '../Profile';
import { Input } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Button } from '../../../Components/Buttons/Buttons';

const PersonalData = () => {
    return (
        <div className='w-[550px] h-auto pt-20'>
            <div className="flex items-center gap-2">
                <Dot size={12} className={"bg-amber-400"} />
                <hr className='w-[40px] border-gray-200 border-[1px]' />
                <Dot size={12} className={"bg-gray-400"} />
                <hr className='w-[40px] border-gray-200 border-[1px]' />
                <Dot size={12} className={"bg-gray-400"} />
            </div>
            <div className="mt-10 text-zinc-800 text-3xl font-bold leading-9">Profile info</div>
            <div className=" text-gray-600 text-base font-light mt-4 leading-snug">Fill in the data for profile. It will take a couple of minutes. </div>
            <form className='w-full p-7 border mt-9 rounded-md grid grid-cols-2 gap-2'>
                <h1 className=" text-zinc-800 text-xl font-semibold  leading-7 col-span-2">Personal data</h1>
                <p className="mt-2 text-gray-600 text-xs font-light  leading-none col-span-2">Specify exactly as in your passport</p>
                <div className='mt-7 col-span-2'>
                    <Input
                        color='black'
                        variant="static"
                        label="First Name"
                        placeholder='Enter your first name'
                    />
                </div>
                <div className='mt-6 col-span-2'>
                    <Input
                        color='black'
                        variant="static"
                        label="Last Name"
                        placeholder='Enter your last name'
                    />
                </div>
                <div className='mt-6 col-span-1'>
                    <Input
                        color='black'
                        variant="static"
                        label="Date of Birth"
                        type='date'
                    />
                </div>
                <div className='mt-6 col-span-1'>
                    <Input
                        color='black'
                        variant="static"
                        label="Place of Birth"
                        placeholder='Enter your place of birth'
                    />
                </div>
            </form>
            <div className="flex gap-5 items-center">
                <Button variant='secondary'
                    className='mt-8 py-4 px-7 bg-white text-black border border-black flex items-center gap-3'>
                    Save
                </Button>
                <Link to={'/dashboard/profile/contacts'}>
                    <Button variant='white' className='mt-8 py-4 px-7 bg-white text-black border border-black flex items-center gap-3'>
                        Go Next <FontAwesomeIcon icon={faArrowRightLong} />
                    </Button>
                </Link>
            </div>

        </div>
    );
};

export default PersonalData;