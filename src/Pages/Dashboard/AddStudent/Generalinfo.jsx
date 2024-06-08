

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Checkbox } from 'antd';
import { Upload } from 'antd';

import dayjs from 'dayjs';
import React from 'react';
import { useState } from 'react';
import { CheckBoxNew, Row, RowWithChild } from './Common';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Cookie from 'js-cookie';
import toast from 'react-hot-toast';
import { setChildFeilds, setProfilePic } from '../../../redux/child/childSlice';
const Generalinfo = ({ setOpen, open }) => {
    const setData = (data) => {
        dispatch(setChildFeilds({ ...childFeilds, ...data }))
    }
    const [preview, setPreview] = useState("")

    const [gender, setGender] = useState("boy")

    const { childFeilds, profile } = useSelector(state => state.child)
    const dispatch = useDispatch()

    useEffect(() => {
        !childFeilds?.dateOfBirth && setData({ dateOfBirth: dayjs().format("YYYY-MM-DD") })
        !childFeilds?.gender && setData({ gender: gender })
    }, [childFeilds])
    const onNext = async () => {

        if (
            !childFeilds?.firstName ||
            !childFeilds?.lastName ||
            !childFeilds?.dateOfBirth ||
            !childFeilds?.gender ||
            !childFeilds?.profilePic
        ) {
            toast.error("Please fill all the fields");
            return
        }

        setOpen(open + 1)
    }
    useEffect(() => {
        if (profile) {
            // create preview url
            setPreview(URL.createObjectURL(profile))
        }
    }, [profile])

    return (
        <div className='w-full flex flex-col lg:gap-3'>
            <Row
                label={"First Name"}
                placeholder={"Enter your first name"}
                value={childFeilds?.firstName}
                onChange={(e) => setData({ firstName: e.target.value })}
            />
            <Row
                value={childFeilds?.lastName}
                onChange={(e) => setData({ lastName: e.target.value })}
                label={"Last Name"}
                placeholder={"Enter your last name"}
            />
            <Row
                type={"email"}
                value={childFeilds?.email}
                onChange={(e) => setData({ email: e.target.value })}
                label={"Email Address"}

                placeholder={"Enter your email address"}
            />
            <RowWithChild label={"Date of Birth"} position={"center"}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div className='flex gap-3 enroll2'>
                        <DatePicker
                            value={dayjs(childFeilds?.dateOfBirth)}
                            onChange={(e) => {
                                setData({ dateOfBirth: dayjs(e).format("YYYY-MM-DD") })
                            }} />
                    </div>
                </LocalizationProvider>
            </RowWithChild>
            <RowWithChild label={"Gender"} position={"center"}>
                <form className="flex  items-center gap-3">
                    <CheckBoxNew
                        onChange={() => setGender("boy")}
                        label={"Boy"}
                        checked={gender === "boy"}
                    />
                    <CheckBoxNew
                        onChange={() => setGender("girl")}
                        checked={gender === "girl"}
                        label={"Girl"}
                    />
                    <CheckBoxNew
                        onChange={() => setGender("x")}
                        checked={gender === "x"}
                        label={"X"}
                    />
                </form>
            </RowWithChild>
            <RowWithChild label={"profile Picture"}>

                <label htmlFor='profile' className='w-[130px] h-[133px] border flex justify-center items-end relative box'>
                    <img src={preview || "/avater.png"} alt=""
                        className='w-[110px] object-cover h-full'
                    />
                    {
                        profile ? <div className='absolute overlay text-xs font-semibold text-red-500 w-full h-[25px] bg-red-50 hover:bg-red-500 hover:text-white  items-center justify-center'
                            onClick={() => dispatch({
                                type: 'PROFILEPIC',
                                payload: null
                            })}
                        >
                            Remove
                        </div>
                            :
                            <div className='absolute overlay text-xs font-semibold text-[#0095FF] w-full h-[25px] bg-[#BDE4FF]  items-center justify-center'>
                                Upload Image
                            </div>
                    }
                </label>
                {
                    !profile && <input type="file" className='hidden' id='profile'
                        onChange={(e) => {
                            dispatch(setProfilePic(e.target.files[0]))
                        }}
                    />
                }
                <div className='flex gap-2 items-center mt-2'>
                    <Checkbox color="orange"
                        size="xs"
                        className='add-form'
                    />
                    <h5 className="opacity-60 mt-1 text-stone-600 text-base font-normal ">Permitted in photos & videos with other children</h5>
                </div>
                <button onClick={onNext} className='py-2 px-8 rounded-2xl mt-3 text-sm font-semibold text-[#06A390] bg-[#C6F2EC]'>
                    Next
                </button>
            </RowWithChild>
        </div>
    );
};

export default Generalinfo;

