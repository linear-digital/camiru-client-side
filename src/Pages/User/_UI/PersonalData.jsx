import React from 'react';
import { Dot } from '../Profile';
import { Input } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Button } from '../../../Components/Buttons/Buttons';
import { useSelector } from 'react-redux';
import moment from 'moment';
import toast from 'react-hot-toast';
import api, { fetcher } from '../../../Components/helper/axios.instance';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../../redux/user/userSlice';

const PersonalData = () => {
    const { currentUser } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        data.dob = new Date(data.dob)
        console.log(data);
        try {
            const res = await fetcher({
                url: `/center/${currentUser?._id}`,
                method: 'PUT',
                data: data
            })
            dispatch(setCurrentUser(res))
            toast.success("Data updated successfully")
        } catch (error) {
            toast.error(error?.response?.data?.message || 'Something went wrong')
        }
    }

    return (
        <div className='lg:w-[550px] w-full h-auto pt-20 outline-none px-5 lg:px-0 profile' >
            <div className="flex items-center gap-2">
                <Dot size={12} className={"bg-amber-400"} />
                <hr className='w-[40px] border-gray-200 border-[1px]' />
                <Dot size={12} className={"bg-gray-400"} />
                <hr className='w-[40px] border-gray-200 border-[1px]' />
                <Dot size={12} className={"bg-gray-400"} />
            </div>
            <div className="mt-10 text-zinc-800 text-2xl font-bold leading-9">Profile info</div>
            <div className=" text-gray-600 text-sm font-light mt-1 leading-snug">Fill in the data for profile. It will take a couple of minutes. </div>
            <form onSubmit={onSubmit} className='py-5' >
                <div className='w-full lg:p-7 p-4 border mt-5 rounded-md grid grid-cols-2 gap-2'>
                    <h1 className=" text-zinc-800 text-base font-semibold  leading-7 col-span-2">Personal data</h1>
                    <p className="mt-1 text-gray-600 text-xs font-light  leading-none col-span-2">Specify exactly as in your passport</p>
                    <div className='mt-7 col-span-2'>
                        <Input
                            color='black'
                            variant="static"
                            label="First Name"
                            placeholder='Enter your first name'
                            size="md"
                            className='border-none'
                            defaultValue={currentUser?.firstName}
                            name='firstName'
                        />
                    </div>
                    <div className='mt-6 col-span-2'>
                        <Input
                            color='black'
                            variant="static"
                            label="Last Name"
                            placeholder='Enter your last name'
                            className='border-none'
                            defaultValue={currentUser?.lastName}
                            name='lastName'
                        />
                    </div>
                    <div className='mt-6 lg:col-span-1 col-span-2'>
                        <Input
                            color='black'
                            variant="static"
                            label="Date of Birth"
                            type='date'
                            className='border-none'
                            defaultValue={moment(currentUser?.dob).format('YYYY-MM-DD')}
                            name='dob'
                        />
                    </div>
                    <div className='mt-6 lg:col-span-1 col-span-2'>
                        <Input
                            color='black'
                            variant="static"
                            label="Place of Birth"
                            placeholder='Enter your place of birth'
                            className='border-none'
                            defaultValue={currentUser?.pob}
                            name='pob'
                        />
                    </div>
                </div>
                <div className="flex gap-5 items-center">
                    <button>
                        <Button variant='secondary'
                            className='mt-8 py-4 px-7 bg-white text-black border border-black flex items-center gap-3'>
                            Save
                        </Button>
                    </button>
                    <Link to={'/dashboard/profile/contacts'}>
                        <Button variant='white' className='mt-8 py-4 px-7 bg-white text-black border border-black flex items-center gap-3'>
                            Go Next <FontAwesomeIcon icon={faArrowRightLong} />
                        </Button>
                    </Link>
                </div>
            </form>


        </div>
    );
};

export default PersonalData;