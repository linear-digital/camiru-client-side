import React from 'react';
import { Dot } from '../Profile';
import { Input } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { Button } from '../../../Components/Buttons/Buttons';

const Contacts = () => {
    return (
        <div className='w-[550px] h-auto pt-20'>
            <div className="flex items-center gap-2">
                <Dot size={10} className={"bg-amber-400"} />
                <hr className='w-[40px] border-gray-200 border-[1px]' />
                <Dot size={10} className={"bg-red-400"} />
                <hr className='w-[40px] border-gray-200 border-[1px]' />
                <Dot size={10} className={"bg-gray-400"} />
            </div>
            <div className="mt-7 text-zinc-800 text-2xl font-bold leading-9">Profile info</div>
            <div className=" text-gray-600 text-sm font-light mt-4 leading-snug">Fill in the data for profile. It will take a couple of minutes. </div>
            <form className='w-full p-7 border mt-5 rounded-md grid grid-cols-2 gap-2'>
                <h1 className=" text-zinc-800 text-xl font-semibold  leading-7 col-span-2">Contacts</h1>
                <p className="mt-2 text-gray-600 text-xs font-light  leading-none col-span-2">These contacts are used to inform about orders</p>
                <div className='mt-5 col-span-2'>
                    <Input
                        color='black'
                        variant="static"
                        label="Email"
                        type='email'
                        placeholder='info@me.com'
                        icon={<FontAwesomeIcon icon={faEnvelope} />}
                    />
                </div>
                <div className='mt-5 col-span-2'>
                    <Input
                        color='black'
                        variant="static"
                        label="Contact Number"
                        placeholder='Enter your contact number'
                        icon={<FontAwesomeIcon icon={faPhone} />}
                    />
                </div>
                <h1 className=" text-zinc-800 text-base font-semibold  leading-7 col-span-2 mt-5">Password</h1>
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
            <div className="flex gap-5 pb-10">
                <Button variant='secondary' className='mt-8 py-4 px-7 bg-white text-black border border-gray-600 flex items-center gap-3'>
                    Save
                </Button>
                <Link to={'/dashboard/profile/address'}>
                <Button variant='white' className='mt-8 py-4 px-7 bg-white text-black border border-gray-600 flex items-center gap-3'>
                    Go Next <FontAwesomeIcon icon={faArrowRightLong} />
                </Button>
                </Link>
            </div>
        </div>
    );
};

export default Contacts;