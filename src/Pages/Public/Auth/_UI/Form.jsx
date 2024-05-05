import React from 'react';
import Social from './Social';
import { Input } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const Form = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
        <div class="w-[457px] h-[445px] p-5 flex flex-col justify-center">
            <h1 className="text-neutral-800 text-2xl font-medium  leading-loose">Sign in to Cuboid</h1>
            <Social />
            <div className="flex items-center gap-2 mt-5">
                <div className="divider" />
                <span>or</span>
                <div className="divider" />
            </div>
            <form action="" className='mt-7'>
                <div>
                    <Input
                        variant='outlined'
                        label='Email address'
                        type='email'
                    />
                </div>
                <div className='mt-5'>
                    <Input
                        variant='outlined'
                        label='Password'
                        type={showPassword ? 'text' : 'password'}
                        icon={<FontAwesomeIcon icon={faEye} onClick={() => setShowPassword(!showPassword)} />}
                    />
                </div>
                <div className="flex mt-5 items-center justify-between">
                    <Link to={'/reset-password'}>
                        <p className=" text-sm font-medium">Forgot password?</p>
                    </Link>
                    <Button className='bg-secondary'>
                        Sign in
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Form;