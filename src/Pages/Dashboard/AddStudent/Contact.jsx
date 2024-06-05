

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

const Contact = () => {
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
    const [phones, setPhones] = useState([])
    const setData = (data) => {
        dispatch(setChildFeilds({ ...childFeilds, ...data }))
    }
    return (
        <div className='w-full flex flex-col lg:gap-2'>

            <RowWithChild label={"Name"} position={"start"}>
                <div className='flex flex-col gap-3'>
                    <Input placeholder={"First Name"}
                        className='focus:border-gray-400 w-full lg:w-[340px] h-[40px]'
                        value={childFeilds?.firstName}
                        onChange={(e) => setData({ firstName: e.target.value })}
                    />

                    <Input placeholder={"Last Name"}
                        value={childFeilds?.lastName}
                        onChange={(e) => setData({ lastName: e.target.value })}
                        className='focus:border-gray-400 w-full lg:w-[340px] h-[40px]'
                    />
                </div>
            </RowWithChild>
            <Row
                value={childFeilds?.email}
                onChange={(e) => setData({ email: e.target.value })}
                type="email"
                label={"Email"}
                placeholder={"info@mail.com"}
            />
            <RowWithChild label={"Home"} position={"center"}>
                <PhoneInput
                    country={'us'}
                />
            </RowWithChild>
            <RowWithChild label={"Other Phone"} position={"center"}>
                <PhoneNumber />
            </RowWithChild>

            <RowWithChild label={"Gender"} position={"center"}>
                <div className="flex  items-center gap-3">
                    <CheckBoxNew
                        label={"Parent"}
                    />
                    <CheckBoxNew
                        label={"Gardian"}
                    />
                </div>
            </RowWithChild>

            <RowWithChild label={""}>
                <div>
                    <button className='py-2 px-8 rounded-2xl mt-3 text-sm font-semibold text-[#06A390] bg-[#C6F2EC]'>
                        Next
                    </button>
                </div>
            </RowWithChild>

        </div>
    );
};

export default Contact;

