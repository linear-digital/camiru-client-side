

import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import dayjs from 'dayjs';
import React from 'react';
import { useState } from 'react';
import { CheckBoxNew, CheckBoxWithLabel, Row, RowWithChild } from './Common';
import { Select } from 'antd';
import { class_rooms } from '../../../util/classrooms';

const EnrollmentForm = () => {
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
        <div className='w-full flex flex-col'>
            <RowWithChild label={"Classroom"} position={"center"}>
                <Select
                    className='w-[340px] border-[1.5px] rounded-lg border-[#00000033] text-[#58575580]'
                    bordered={false}
                    defaultValue={class_rooms[0]}
                    options={[
                        ...class_rooms.map((item, index) => {
                            return { label: item, value: item }
                        })
                    ]}
                />
            </RowWithChild>
            <RowWithChild label={"Status"} position={"center"}>
                <div className="flex  items-center gap-3">
                    <CheckBoxNew
                        label={"Active"}
                    />
                    <CheckBoxNew
                        label={"Not Active (Upcomming/Graduated)"}
                    />
                </div>
            </RowWithChild>
            <RowWithChild label={"Date of Birth"}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div className='flex gap-3 enroll'>
                        <DesktopDatePicker views={['day',]}
                            defaultValue={dayjs()}
                        />
                        <DesktopDatePicker
                            defaultValue={dayjs()}
                            views={['month',]} />
                        <DesktopDatePicker
                            defaultValue={dayjs()}
                            views={['year',]} />
                    </div>
                </LocalizationProvider>
            </RowWithChild>

            <RowWithChild label={"Rotation"} position={"center"}>
                <div className="flex  items-center gap-3">
                    <CheckBoxNew
                        label={"Morning"}
                    />
                    <CheckBoxNew
                        label={"Afternoon"}
                    />
                    <CheckBoxNew
                        label={"Day"}
                    />
                    <CheckBoxNew
                        label={"Before & Afterschools"}
                    />
                </div>
            </RowWithChild>

            <RowWithChild label={"Days"} position={"center"}>
                <div className="flex  items-center gap-3">
                    {
                        days.map((item, index) => {
                            return <CheckBoxWithLabel
                                key={index}
                                label={item}
                            />
                        })
                    }
                </div>
            </RowWithChild>
            <RowWithChild label={"Enrollment Date"}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div className='flex gap-3 enroll'>
                        <DesktopDatePicker views={['day',]}
                            defaultValue={dayjs()}
                        />
                        <DesktopDatePicker
                            defaultValue={dayjs()}
                            views={['month',]} />
                        <DesktopDatePicker
                            defaultValue={dayjs()}
                            views={['year',]} />
                    </div>
                </LocalizationProvider>
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

export default EnrollmentForm;

