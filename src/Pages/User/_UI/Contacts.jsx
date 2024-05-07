import React from 'react';
import { Dot } from '../Profile';
import { Input } from '@material-tailwind/react';
import { Button } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const Contacts = () => {
    return (
        <div className='w-[550px] h-auto pt-20'>
            <div className="flex items-center gap-2">
                <Dot size={12} className={"bg-amber-400"} />
                <hr className='w-[40px] border-gray-200 border-[1px]' />
                <Dot size={12} className={"bg-red-400"} />
                <hr className='w-[40px] border-gray-200 border-[1px]' />
                <Dot size={12} className={"bg-gray-400"} />
            </div>
            <div className="mt-10 text-zinc-800 text-3xl font-bold leading-9">Profile info</div>
            <div className=" text-gray-600 text-base font-light mt-4 leading-snug">Fill in the data for profile. It will take a couple of minutes. </div>
            <form className='w-full p-7 border mt-9 rounded-md grid grid-cols-2 gap-2'>
                <h1 className=" text-zinc-800 text-xl font-semibold  leading-7 col-span-2">Contacts</h1>
                <p className="mt-2 text-gray-600 text-xs font-light  leading-none col-span-2">These contacts are used to inform about orders</p>
                <div className='mt-7 col-span-2'>
                    <Input
                        color='black'
                        variant="static"
                        label="Email"
                        type='email'
                        placeholder='info@me.com'
                        icon={<FontAwesomeIcon icon={faEnvelope} />}
                    />
                </div>
                <div className='mt-7 col-span-2'>
                    <Input
                        color='black'
                        variant="static"
                        label="Contact Number"
                        placeholder='Enter your contact number'
                        icon={<FontAwesomeIcon icon={faPhone} />}
                    />
                </div>
                <h1 className=" text-zinc-800 text-xl font-semibold  leading-7 col-span-2 mt-10">Password</h1>
                <p className="mt-2 text-gray-600 text-xs font-light  leading-none col-span-2"> Your password must be at least 12 characters</p>
                <div className='mt-7 col-span-2'>
                    <Input
                        color='black'
                        variant="static"
                        label="Current Password"
                        placeholder='*******'
                        icon={<FontAwesomeIcon icon={faEye} />}
                    />
                </div>
                <div className='mt-7 col-span-2'>
                    <Input
                        color='black'
                        variant="static"
                        label="New Password"
                        placeholder='*******'
                        icon={<FontAwesomeIcon icon={faEye} />}
                    />
                </div>
                <div className='mt-7 col-span-2'>
                    <Input
                        color='black'
                        variant="static"
                        label="New Password"
                        placeholder='*******'
                        icon={<FontAwesomeIcon icon={faEye} />}
                    />
                </div>
                <div className='mt-7 col-span-2'>
                    <Input
                        color='black'
                        variant="static"
                        label="Re Type Password"
                        placeholder='*******'
                        icon={<FontAwesomeIcon icon={faEye} />}
                    />
                </div>
            </form>
            <div className="flex gap-5">
                <Link to={'/dashboard/profile'}>
                    <Button variant='fill' className='mt-8 py-4 px-7 bg-white text-black border border-gray-600 flex items-center gap-3'>
                        Go Back <FontAwesomeIcon icon={faArrowRightLong} />
                    </Button>
                </Link>
                <Button variant='fill' className='mt-8 py-4 px-7 bg-white text-black border border-gray-600 flex items-center gap-3'>
                    Go Next <FontAwesomeIcon icon={faArrowRightLong} />
                </Button>
            </div>
        </div>
    );
};

export default Contacts;