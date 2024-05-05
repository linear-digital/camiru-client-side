import React from 'react';
import { Link } from 'react-router-dom';
import Form from './_UI/Form';

const Login = () => {
    return (
        <div className='p-5 w-full h-full'>
            <div className="flex float-end items-center">
                <h6 class="text-neutral-800 text-sm mr-1 font-medium">New user?</h6>
                <div class="text-neutral-800 text-sm font-medium "></div>
                <Link to={'/signup'} class="text-neutral-800 text-sm font-medium btn-link">Create an acount </Link>
            </div>
            <div className='flex justify-center items-center h-full'>
                <Form />
            </div>
            
        </div>
    );
};

export default Login;