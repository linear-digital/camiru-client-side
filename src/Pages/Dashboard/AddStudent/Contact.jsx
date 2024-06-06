

import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import dayjs from 'dayjs';
import React from 'react';
import { useState } from 'react';
import { CheckBoxNew, CheckBoxWithLabel, Row, RowWithChild } from './Common';
import { Select } from 'antd';
import { class_rooms } from '../../../util/classrooms';
import { Input } from 'antd';
import { PhoneNumber } from './CountrySelect';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setChildFeilds } from '../../../redux/child/child.action';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Contact = ({ open, setOpen }) => {
    const [fileList, setFileList] = useState([]);
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };

    const { childFeilds } = useSelector(state => state.child)
    const dispatch = useDispatch()
    const [contact, setContact] = useState({
        home: "",
        other: "",

    })
    const [details, setDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        home: "",
        other: "",
        guardianType: "parent",
    })
    const setData = (data) => {
        dispatch(setChildFeilds({
            ...childFeilds,
            contacts: [details]
        }
        ))
    }
    const onNext = () => {
        setOpen(open + 1)
        setData(details)
    }
    console.log(childFeilds);
    return (
        <div className='w-full flex flex-col lg:gap-2'>

            <RowWithChild label={"Name"} position={"start"}>
                <div className='flex flex-col gap-3'>
                    <Input placeholder={"First Name"}
                        className='focus:border-gray-400 w-full lg:w-[340px] h-[40px]'
                        value={details.firstName}
                        onChange={(e) => setDetails({ ...details, firstName: e.target.value })}
                    />

                    <Input placeholder={"Last Name"}
                        value={details.lastName}
                        onChange={(e) => setDetails({ ...details, lastName: e.target.value })}
                        className='focus:border-gray-400 w-full lg:w-[340px] h-[40px]'
                    />
                </div>
            </RowWithChild>
            <Row
                value={details.email}
                onChange={(e) => setDetails({ ...details, email: e.target.value })}
                type="email"
                label={"Email"}
                placeholder={"info@mail.com"}
            />
            <RowWithChild label={"Home"} position={"center"}>
                <PhoneInput
                    value={contact.home}
                    onChange={(e) => setContact({ ...contact, home: e })}
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
                    value={contact.other}
                    onChange={(e) => setContact({ ...contact, other: e })}
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
                                checked={details.guardianType === item}
                                onChange={() => setDetails({ ...details, guardianType: item })}
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

