

import { DatePicker, DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import dayjs from 'dayjs';
import React from 'react';
import { useState } from 'react';
import { CheckBoxNew, CheckBoxWithLabel, Row, RowWithChild } from './Common';
import { Select } from 'antd';
import { class_rooms } from '../../../util/classrooms';
import { setChildFeilds } from '../../../redux/child/child.action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const EnrollmentForm = () => {
    const [fileList, setFileList] = useState([]);
    const { classrooms } = useSelector(state => state.classroom)
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
    const [selectedDays, setSelectedDays] = useState([...days]);
    const { childFeilds } = useSelector(state => state.child)
    const dispatch = useDispatch()
    const setData = (data) => {
        dispatch(setChildFeilds({ ...childFeilds, ...data }))
    }
    console.log(childFeilds);
    return (
        <div className='w-full flex flex-col'>
            <RowWithChild label={"Classroom"} position={"center"}>
                <Select

                    onChange={(e) => setData({ classRoom: e })}
                    className='lg:w-[340px] w-full border-[1.5px] rounded-lg border-[#00000033] text-[#58575580]'
                    variant='outlined'
                    options={[
                        { label: "Select", value: "" },
                        ...classrooms?.map((item, index) => {
                            return { label: item.name, value: item._id }
                        })
                    ]}
                />
            </RowWithChild>
            <RowWithChild label={"Status"} position={"center"}>
                <div className="flex  items-center gap-3">
                    <CheckBoxNew
                        onChange={(e) => setData({ status: "active" })}
                        label={"Active"}
                    />
                    <CheckBoxNew
                        onChange={(e) => setData({ status: "inactive" })}
                        label={"Not Active (Upcomming/Graduated)"}
                    />
                </div>
            </RowWithChild>

            <RowWithChild label={"Rotation"} position={"center"}>
                <div className="flex flex-wrap  items-center gap-3">
                    <CheckBoxNew
                        onChange={(e) => setData({ rotation: "morning" })}
                        label={"Morning"}
                    />
                    <CheckBoxNew
                        onChange={(e) => setData({ rotation: "afternoon" })}
                        label={"Afternoon"}
                    />
                    <CheckBoxNew
                        onChange={(e) => setData({ rotation: "evening" })}
                        label={"Day"}
                    />
                    <CheckBoxNew
                        onChange={(e) => setData({ rotation: "before-after" })}
                        label={"Before & Afterschools"}
                    />
                </div>
            </RowWithChild>

            <RowWithChild label={"Days"} position={"center"}>
                <div className="flex flex-wrap items-center gap-3">
                    {
                        days.map((item, index) => {
                            return <CheckBoxWithLabel
                                onChange={(e) => {
                                    if (selectedDays.includes(item)) {
                                        setSelectedDays(selectedDays.filter((i) => i !== item))
                                    } else {
                                        setSelectedDays([...selectedDays, item])
                                    }
                                    setData({ days: selectedDays })
                                }}
                                checked={selectedDays.includes(item)}
                                key={index}
                                label={item}
                            />
                        })
                    }
                </div>
            </RowWithChild>
            <RowWithChild label={"Enrollment Date"} position={"center"}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div className='flex gap-3 enroll2'>
                        <DatePicker
                            value={dayjs(childFeilds?.enrollmentDate)}
                            onChange={(e) => {
                                setData({ enrollmentDate: dayjs(e).format("YYYY-MM-DD") })
                            }} />
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

