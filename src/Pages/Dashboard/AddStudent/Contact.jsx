

import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import dayjs from 'dayjs';
import React from 'react';
import { useState } from 'react';
import { CheckBoxNew, CheckBoxWithLabel, Row, RowWithChild } from './Common';
import { Input } from 'antd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setChildFeilds } from '../../../redux/child/childSlice';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import { validateEmail } from '../../../util/emailValidator';
import { useEffect } from 'react';

const Contact = ({ open, setOpen }) => {


    const { childFeilds, contact } = useSelector(state => state.child)
    const dispatch = useDispatch()

    const [details, setDetails] = useState({
    })
    const setData = (data) => {
        dispatch(setChildFeilds({
            ...childFeilds,
            contacts: [{
                ...childFeilds.contacts[0],
                ...data
            }]
        }
        ))
    }
    const onNext = () => {
        setData(details)
        if (
            !childFeilds.contacts[0].firstName ||
            !childFeilds.contacts[0].lastName ||
            !validateEmail(childFeilds.contacts[0].email) ||
            !childFeilds.contacts[0].home ||
            !childFeilds.contacts[0].guardianType
        ) {
            toast.error("Please fill all the fields");
            return
        }

        setOpen(open + 1)
    }

    return (
        <div className='w-full flex flex-col lg:gap-2'>

            <RowWithChild label={"Name"} position={"start"}>
                <div className='flex flex-col gap-3'>
                    <Input placeholder={"First Name"}
                        className='focus:border-gray-400 w-full lg:w-[340px] h-[40px]'
                        value={childFeilds.contacts[0].firstName}
                        onChange={(e) => setData({ firstName: e.target.value })}
                    />

                    <Input placeholder={"Last Name"}
                        value={childFeilds.contacts[0].lastName}
                        onChange={(e) => setData({ lastName: e.target.value })}
                        className='focus:border-gray-400 w-full lg:w-[340px] h-[40px]'
                    />
                </div>
            </RowWithChild>
            <Row
                value={childFeilds.contacts[0].email}
                onChange={(e) => setData({ email: e.target.value })}
                type="email"
                label={"Email"}
                placeholder={"info@mail.com"}
            />
            <RowWithChild label={"Home"} position={"center"}>
                <PhoneInput
                    value={childFeilds.contacts[0].home}
                    onChange={(e) => setData({ home: e })}
                    inputStyle={{ height: 40, width: 340 }}
                    buttonStyle={{ backgroundColor: "white", }}
                    country={'us'}
                />
            </RowWithChild>
            <RowWithChild
                label={"Other Phone"}
                position={"center"}
            >
                <PhoneInput
                    value={childFeilds.contacts[0].other}
                    onChange={(e) => setData({ other: e })}
                    inputStyle={{ height: 40, width: 340 }}
                    buttonStyle={{ backgroundColor: "white", }}
                    country={'us'}
                />
            </RowWithChild>

            <RowWithChild
                label={"Guardian Type"}
                position={"center"}
            >
                <div className="flex  items-center gap-3">
                    {
                        ["parent", "guardian"].map((item, index) => {
                            return <CheckBoxWithLabel
                                key={index}
                                label={item}
                                checked={childFeilds.contacts[0].guardianType === item}
                                onChange={() => setData({ guardianType: item })}
                            />
                        })
                    }
                </div>
            </RowWithChild>

            <RowWithChild label={""}>
                <div className='flex gap-3'>
                    <button
                        onClick={() => {
                            setOpen(open - 1)
                        }}
                        className='py-2 px-5 rounded-2xl mt-3 text-sm font-semibold text-accent2'>
                        <FontAwesomeIcon icon={faArrowLeft} className='mr-2' />
                        Previous
                    </button>
                    <button
                        onClick={onNext}
                        className='py-2 px-8 rounded-2xl mt-3 text-sm font-semibold text-[#06A390] bg-[#C6F2EC]'>
                        Next
                    </button>
                </div>
            </RowWithChild>

        </div>
    );
};

export default Contact;

