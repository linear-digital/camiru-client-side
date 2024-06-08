

import { DatePicker, DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import dayjs from 'dayjs';
import React from 'react';
import { useState } from 'react';
import { CheckBoxNew, CheckBoxWithLabel, Row, RowWithChild } from './Common';
import { Select } from 'antd';

import { setChildFeilds } from '../../../redux/child/childSlice';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

const EnrollmentForm = ({ setOpen, open }) => {

    const { classrooms } = useSelector(state => state.classroom)

    const days = ["M", "Tu", "Wh", "T", "F", "Sa", "Su"];
    const [selectedDays, setSelectedDays] = useState(["M", "Tu", "Wh", "T", "F", "Sa", "Su"]);
    const { childFeilds } = useSelector(state => state.child)
    const dispatch = useDispatch()
    const setData = (data) => {
        dispatch(setChildFeilds({ ...childFeilds, ...data }))
    }

    const onNext = () => {

        console.log(childFeilds);
        if (!childFeilds?.classRoom || !childFeilds?.status || !childFeilds?.rotation || !childFeilds?.days || !childFeilds?.enrollmentDate) {
            return toast.error("Please fill all the fields");
        }
        setOpen(open + 1)
    }
    useEffect(() => {
        // if status is not selected
        !childFeilds?.status && setData({ status: "active" })
        // if rotation is not selected
        !childFeilds?.rotation && setData({ rotation: "morning" })
        // if days is not selected
        !childFeilds?.days && setData({ days: selectedDays })
        // if enrollmentDate is not selected
        !childFeilds?.enrollmentDate && setData({ enrollmentDate: dayjs().format("YYYY-MM-DD") })

    }, [childFeilds])
    const rotations = ["morning", "afternoon", "evening", "before & Afterschools"]
    return (
        <div className='w-full flex flex-col'>
            <RowWithChild label={"Classroom"} position={"center"}>
                <Select
                    defaultValue={""}
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
                        checked={childFeilds?.status === "active"}
                    />
                    <CheckBoxNew
                        onChange={(e) => setData({ status: "inactive" })}
                        label={"Not Active (Upcomming/Graduated)"}
                        checked={childFeilds?.status === "inactive"}
                    />
                </div>
            </RowWithChild>

            <RowWithChild label={"Rotation"} position={"center"}>
                <div className="flex flex-wrap  items-center gap-3 pb-2">
                    {
                        rotations.map((item, index) => {
                            return <CheckBoxWithLabel
                                onChange={(e) => setData({ rotation: item })}
                                checked={childFeilds?.rotation === item}
                                key={index}
                                label={item}
                            />
                        })
                    }
                </div>
            </RowWithChild>

            <RowWithChild label={"Days"} position={"center"}>
                <div className="flex flex-wrap items-center gap-3 pb-2">
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

export default EnrollmentForm;

