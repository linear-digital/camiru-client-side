import React from 'react';
import { Link } from 'react-router-dom';
import Form from './_UI/Form';

const ResetPassword = () => {
    return (
        <div className='p-5 w-full h-full'>
            <div className="flex float-end items-center">
                <h6 className="text-neutral-800 text-sm mr-1 font-medium">Just remember?</h6>
                <div className="text-neutral-800 text-sm font-medium "></div>
                <Link to={'/login'} className="text-neutral-800 text-sm font-medium btn-link">Sign in</Link>
            </div>
            <div className='flex justify-center items-center h-full'>
                <Form mode={'reset'} />
            </div>

        </div>
    );
};

export default ResetPassword;