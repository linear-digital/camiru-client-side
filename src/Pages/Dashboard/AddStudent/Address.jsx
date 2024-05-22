

import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import dayjs from 'dayjs';
import React from 'react';
import { useState } from 'react';
import { CheckBoxNew, CheckBoxWithLabel, Row, RowWithChild } from './Common';
import { Select } from 'antd';
import { class_rooms } from '../../../util/classrooms';
import { Input } from 'antd';

const Address = () => {
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
    const days = ["M", "Tu", "Wh", "T", "F", "Sa", "Su"];
    return (
        <div className='w-full flex flex-col lg:gap-3'>

            <Row
                label={"Address"}
                placeholder={"Street and House Number"}
            />
            <Row
                label={"Address Line 2"}
                placeholder={"Apt. suite, etc (optional)"}
            />
            <Row
                label={"City"}
                placeholder={"City"}
            />
           <Row
                label={"Zip Code"}
                placeholder={"Zip Code"}
            />
            
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

export default Address;

