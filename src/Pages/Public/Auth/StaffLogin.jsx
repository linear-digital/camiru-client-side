import React from 'react';
import { Link } from 'react-router-dom';
import Form from './_UI/Form';
import OtherLogin from './_UI/OtherLogin';

const StaffLogin = () => {
    return (
        <div className='lg:p-5 p-2 w-full h-full lg:relative'>
            <div className="flex lg:float-end items-center lg:px-0 px-5 mt-5 lg:mt-0">
                <div className="text-neutral-800 text-sm font-medium "></div>
                <Link to={'/login'} className="text-neutral-800 text-sm font-medium btn-link">Admin Login</Link>
            </div>
            <div className='lg:flex justify-center items-center w-full h-full flex-col'>
                <Form mode={'staff'} />
                <OtherLogin />
            </div>
            <div className="absolute lg:px-0 px-0 right-0 bottom-0 w-full lg:flex  justify-center lg:pb-10 pb-5 text-center">
                <span className="text-zinc-500 text-xs font-normal  leading-none">
                    Protected by reCAPTCHA and subject to the
                     </span><span className="text-cyan-700 text-xs font-normal  leading-none ml-1">Camiru </span><span className="text-teal-600 text-xs font-normal  leading-none ml-1">Privacy Policy</span><span className="text-zinc-500 text-xs font-normal  leading-none mx-1"> and </span><span className="text-teal-600 text-xs font-normal  leading-none">Terms of Service.</span></div>
        </div>
    );
};

export default StaffLogin;