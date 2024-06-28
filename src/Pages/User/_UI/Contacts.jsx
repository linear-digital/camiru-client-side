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
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../../redux/user/userSlice';
import api from '../../../Components/helper/axios.instance';
import toast from 'react-hot-toast';

const Contacts = () => {
    const { currentUser } = useSelector(state => state.user)
    const [password, setPassword] = React.useState({
        current: "",
        new: "",
        confirm: ""
    })
    const [showPassword, setShowPassword] = React.useState(false)
    const dispatch = useDispatch()
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())

        try {
            const res = await api.put(`/center/${currentUser?._id}`, data)
            dispatch(setCurrentUser(res.data.user))
            toast.success(res.data.message)
        } catch (error) {
            toast.error(error?.response?.data?.message || 'Something went wrong')
        }
    }
    const updatePassword = async () => {
        try {
            const res = await api.put(`/center/${currentUser?._id}`, password)
            dispatch(setCurrentUser(res.data.user))
            toast.success(res.data.message)
        } catch (error) {
            toast.error(error?.response?.data?.message || 'Something went wrong')
        }
    }
    return (
        <div className='lg:w-[550px] w-full px-5 lg:px-0 h-auto pt-20 profile'>
            <div className="flex items-center gap-2">
                <Dot size={10} className={"bg-amber-400"} />
                <hr className='w-[40px] border-gray-200 border-[1px]' />
                <Dot size={10} className={"bg-red-400"} />
                <hr className='w-[40px] border-gray-200 border-[1px]' />
                <Dot size={10} className={"bg-gray-400"} />
            </div>
            <div className="mt-7 text-zinc-800 text-2xl font-bold leading-9">Profile info</div>
            <div className=" text-gray-600 text-sm font-light mt-4 leading-snug">Fill in the data for profile. It will take a couple of minutes. </div>
            <div className='py-5'>
                <form onSubmit={onSubmit} >
                    <div className='w-full lg:p-7 p-4 border mt-5 rounded-md grid grid-cols-2 gap-2'>
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
                                className='border-none'
                                name='email'
                                defaultValue={currentUser?.email}
                            />
                        </div>
                        <div className='mt-5 col-span-2'>
                            <Input
                                color='black'
                                variant="static"
                                label="Contact Number"
                                placeholder='Enter your contact number'
                                icon={<FontAwesomeIcon icon={faPhone} />}
                                className='border-none'
                                defaultValue={currentUser?.phone}
                                name='phone'
                            />
                        </div>
                        <h1 className=" text-zinc-800 text-base font-semibold  leading-7 col-span-2 mt-5">Password</h1>
                        <p className="mt-2 text-gray-600 text-xs font-light  leading-none col-span-2"> Your password must be at least 12 characters</p>
                        <div className='mt-7 col-span-2'>
                            <Input
                                type={showPassword ? "text" : "password"}
                                color='black'
                                variant="static"
                                label="Current Password"
                                placeholder='*******'
                                icon={<FontAwesomeIcon onClick={() => setShowPassword(!showPassword)} icon={faEye} />}
                                className='border-none'
                                value={password.current}
                                onChange={(e) => setPassword({ ...password, current: e.target.value })}
                            />
                        </div>
                        <div className='mt-7 col-span-2'>
                            <Input
                                type={showPassword ? "text" : "password"}
                                color='black'
                                variant="static"
                                label="New Password"
                                placeholder='*******'
                                icon={<FontAwesomeIcon onClick={() => setShowPassword(!showPassword)} icon={faEye} />}
                                className='border-none'
                                value={password.new}
                                onChange={(e) => setPassword({ ...password, new: e.target.value })}
                            />
                        </div>
                        <div className='mt-7 col-span-2'>
                            <Input
                                type={showPassword ? "text" : "password"}
                                color='black'
                                variant="static"
                                label="Re Type Password"
                                placeholder='*******'
                                icon={<FontAwesomeIcon onClick={() => setShowPassword(!showPassword)} icon={faEye} />}
                                className='border-none'
                                value={password.confirm}
                                onChange={(e) => setPassword({ ...password, confirm: e.target.value })}
                            />
                        </div>
                        <Button variant="error" className={"mt-2"}>
                            Update Password
                        </Button>
                    </div>
                    <div className="flex gap-5 pb-10">
                        <button>
                            <Button variant='secondary' className='mt-8 py-4 px-7 bg-white text-black border border-gray-600 flex items-center gap-3'>
                                Save
                            </Button>
                        </button>
                        <Link to={'/dashboard/profile/address'}>
                            <Button variant='white' className='mt-8 py-4 px-7 bg-white text-black border border-gray-600 flex items-center gap-3'>
                                Go Next <FontAwesomeIcon icon={faArrowRightLong} />
                            </Button>
                        </Link>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Contacts;