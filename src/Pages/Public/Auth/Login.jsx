import React from 'react';
import { Link } from 'react-router-dom';
import Form from './_UI/Form';

const Login = () => {
    return (
        <div className='p-5 w-full h-full'>
            <div className="flex float-end items-center">
                <h6 className="text-neutral-800 text-sm mr-1 font-medium">New user?</h6>
                <div className="text-neutral-800 text-sm font-medium "></div>
                <Link to={'/signup'} className="text-neutral-800 text-sm font-medium btn-link">Create an acount </Link>
            </div>
            <div className='flex justify-center items-center h-full'>
                <Form mode={'login'} />
            </div>

        </div>
    );
};

export default Login;