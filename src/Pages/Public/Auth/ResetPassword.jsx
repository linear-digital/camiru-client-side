import React from 'react';
import { Link } from 'react-router-dom';
import Form from './_UI/Form';

const ResetPassword = () => {
    return ( 
        <div className='p-5 w-full h-full relative'>
            <div className="flex float-end items-center">
                <h6 className="text-neutral-800 text-sm mr-1 font-medium">Just remember?</h6>
                <div className="text-neutral-800 text-sm font-medium "></div>
                <Link to={'/login'} className="text-neutral-800 text-sm font-medium btn-link">Sign in</Link>
            </div>
            <div className='flex justify-center items-center w-full h-full'>
                <Form mode={'reset'} />
            </div>
            <div className="absolute right-0 bottom-0 w-full flex justify-center pb-10">
                <span className="text-zinc-500 text-xs font-normal  leading-none">Protected by reCAPTCHA and subject to the </span><span className="text-cyan-700 text-xs font-normal  leading-none ml-1">Camiru </span><span className="text-teal-600 text-xs font-normal  leading-none ml-1">Privacy Policy</span><span className="text-zinc-500 text-xs font-normal  leading-none mx-1"> and </span><span className="text-teal-600 text-xs font-normal  leading-none">Terms of Service.</span></div>
        </div>
    );
};

export default ResetPassword;