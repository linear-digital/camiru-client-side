import React from 'react';
import Social from './Social';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { Progress } from 'antd';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Input } from '@material-tailwind/react';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { api, fetcher } from '../../../../Components/helper/axios.instance';
import Cookie from 'js-cookie';
import { useEffect } from 'react';
import { isExpired, decodeToken } from "react-jwt";
const Form = ({ mode }) => {
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const navigate = useNavigate();
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const token = Cookie.get('token-camiru2');
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const formHandler = async (e) => {
        e.preventDefault();
        // get all the inputs
        const target = new FormData(e.target);
        const data = Object.fromEntries(target.entries())

        try {
            setLoading(true);

            const res = await fetcher({
                url: '/center/login',
                method: 'POST',
                data
            })
            Cookie.set('token-camiru2', res.accessToken, { expires: 30 });
            window.location.reload();
            setError('');
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error?.response?.data?.message || error?.message || 'Something went wrong');
        }

        // navigate('/dashboard');
    }
    useEffect(() => {
        if (token && !isExpired(token)) navigate('/dashboard')
    }, [token])
    return (
        <div className="lg:w-[457px] w-full h-auto p-5 flex flex-col justify-center">
            {
                mode === 'reset' ?
                    <h1 className="text-neutral-800 lg:text-2xl text-xl font-medium  leading-loose">Forgot Password?</h1>
                    :
                    <h1 className="text-neutral-800 lg:text-2xl text-xl font-medium  leading-loose">{
                        mode === "student" ?
                            "Student Login"
                            :
                            mode === 'signup' ? 'Create an account to Cuboid' : 'Sign in to Cuboid'
                    } </h1>
            }

            {
                mode !== 'reset' ? <>
                    <Social method={mode} />
                    <div className="flex items-center gap-2 lg:mt-5 mt-2">
                        <div className="divider" />
                        <span>or</span>
                        <div className="divider" />
                    </div>
                </>
                    :
                    <p className="w-96 text-zinc-700 text-sm font-normal  leading-normal">No worriest! Just enter your email and we’ll send you a reset password link.</p>
            }

            {
                mode !== 'reset' ?
                    <form onSubmit={formHandler} className='mt-7 form-auth'>
                        <div>
                            <TextField
                                fullWidth
                                size='small'
                                variant='outlined'
                                label='Email address'
                                type='email'
                                name='email'

                                required
                            />
                        </div>

                        {
                            mode === 'signup' && (
                                <div className="lg:flex mt-5 gap-2 justify-between">
                                    <div>
                                        <TextField
                                            fullWidth
                                            size='small'
                                            variant='outlined'
                                            label='First name'
                                            type='text'
                                            name='firstName'
                                            required
                                        />
                                    </div>
                                    <div className='mt-5 lg:mt-0'>
                                        <TextField
                                            fullWidth
                                            size='small'
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
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    name='password'
                                    size='small'
                                    fullWidth
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                        </div>
                        {
                            mode === 'signup' &&
                            <div>
                                <Progress
                                    percent={100}
                                    showInfo={false}
                                    strokeColor=""
                                    className='mt-1'
                                />
                                <div className="flex mt-1 justify-between">
                                    <p className="text-zinc-500 text-xs font-normal leading-none">Your password is great. Nice work!</p>
                                    <p className="text-right text-zinc-500 text-xs font-normal leading-none">Strong</p>
                                </div>
                            </div>
                        }
                        <p className='text-red-500 text-xs my-2'>{error}</p>
                        {
                            mode === "signup" ?
                                <Button type='submit' className='bg-secondary mt-5' fullWidth>
                                    Sign Up
                                </Button>
                                :
                                <div className="flex mt-5 items-center justify-between">
                                    <Link to={'/reset-password'}>
                                        <p className=" text-sm font-medium">Forgot password?</p>
                                    </Link>
                                    <Button disabled={loading} type='submit' className='bg-secondary '>
                                        Sign In
                                    </Button>
                                </div>
                        }
                    </form>
                    :
                    <form onSubmit={formHandler} >
                        <div className='mt-5'>
                            <Input
                                variant='outlined'
                                label='Email address'
                                type='email'
                                name='email'
                                required
                            />
                        </div>
                        <Button type='submit' className='bg-secondary mt-5' fullWidth>
                            Send Recovery Email
                        </Button>
                    </form>
            }
        </div>
    );
};

export default Form;