import React from 'react';
import Social from './Social';
import { Input } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const Form = ({ mode }) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const formHandler = (e) => {
        e.preventDefault();
        // get all the inputs
        const target = new FormData(e.target);
        const data = Object.fromEntries(target.entries())
        console.log(data);
    }
    return (
        <div className="w-[457px] h-auto p-5 flex flex-col justify-center">
            <h1 className="text-neutral-800 text-2xl font-medium  leading-loose">{mode === 'signup' ? 'Create an account' : 'Sign in'} to Cuboid</h1>
            <Social method={mode} />
            <div className="flex items-center gap-2 mt-5">
                <div className="divider" />
                <span>or</span>
                <div className="divider" />
            </div>
            <form onSubmit={formHandler} className='mt-7'>
                <div>
                    <Input
                        variant='outlined'
                        label='Email address'
                        type='email'
                        name='email'
                        required
                    />
                </div>

                {
                    mode === 'signup' && (
                        <div className="flex mt-5 gap-2 justify-between">
                            <div>
                                <Input
                                    variant='outlined'
                                    label='First name'
                                    type='text'
                                    name='firstName'
                                    required
                                />
                            </div>
                            <div>
                                <Input
                                    variant='outlined'
                                    label='Last name'
                                    type='text'
                                    name='lastName'
                                    required
                                />
                            </div>
                        </div>
                    )
                }
                <div className='mt-5'>
                    <Input
                        variant='outlined'
                        label='Password'
                        name='password'
                        required
                        type={showPassword ? 'text' : 'password'}
                        icon={<FontAwesomeIcon icon={faEye} onClick={() => setShowPassword(!showPassword)} />}
                    />
                </div>
                <div className="flex mt-5 items-center justify-between">
                    <Link to={'/reset-password'}>
                        <p className=" text-sm font-medium">Forgot password?</p>
                    </Link>
                    <Button type='submit' className='bg-secondary'>
                        Sign in
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Form;