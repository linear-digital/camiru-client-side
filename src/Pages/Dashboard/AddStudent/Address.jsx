

import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import dayjs from 'dayjs';
import React from 'react';
import { useState } from 'react';
import { CheckBoxNew, CheckBoxWithLabel, Row, RowWithChild } from './Common';
import { Select } from 'antd';
import { class_rooms } from '../../../util/classrooms';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setChildFeilds } from '../../../redux/child/childSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useCountries } from 'use-react-countries';
import toast from 'react-hot-toast';

const Address = ({ open, setOpen }) => {
    const dispatch = useDispatch()
    const { countries } = useCountries();
    const { childFeilds } = useSelector(state => state.child)

    const [address, setAddress] = useState({
        address: "",
        addressLine2: ""
    })
    const [contactDetails, setContactDetails] = useState({
        city: "",
        zip: ""
    })

    const onNext = () => {
        if (!address.address ||  !contactDetails.city || !contactDetails.zip) {
            return toast.error("Please fill all the fields")
        }
        setOpen(open + 1)
    }
    useEffect(() => {
        dispatch(setChildFeilds({
            ...childFeilds,
            ...contactDetails,
            address: `${address.address} ${address.addressLine2}`
        }))
    }, [address,contactDetails])

    return (
        <div className='w-full flex flex-col lg:gap-3'>

            <Row
                label={"Address"}
                placeholder={"Street and House Number"}
                onChange={(e) => setAddress((prev) => ({ ...prev, address: e.target.value }))}
                value={address.address}
            />
            <Row
                value={address.addressLine2}
                onChange={(e) => setAddress((prev) => ({ ...prev, addressLine2: e.target.value }))}
                label={"Address Line 2"}
                placeholder={"Apt. suite, etc (optional)"}
            />
            <Row
                value={contactDetails.city}
                onChange={(e) => setContactDetails((prev) => ({ ...prev, city: e.target.value }))}
                label={"City"}
                placeholder={"City"}
            />
            <RowWithChild label={"Country"} position={"center"}>
                <div>
                    <select
                        defaultValue={"United States"}
                        value={contactDetails.country}
                        onChange={(e) => setContactDetails((prev) => ({ ...prev, country: e.target.value }))}
                        className='focus:border-gray-400 border border-gray-400 rounded-md px-2 text-xs text-gray-400 w-full lg:w-[340px] h-[40px] outline-none bg-white cursor-pointer'>
                        {
                            (countries.sort((a, b) => a - b)).map((country, index) => <option
                                value={country.name} key={index}>{country.name}
                            </option>)
                        }
                    </select>
                </div>
            </RowWithChild>
            <Row
                value={contactDetails.zip}
                onChange={(e) => setContactDetails((prev) => ({ ...prev, zip: e.target.value }))}
                label={"Zip Code"}
                placeholder={"Zip Code"}
            />

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

export default Address;

