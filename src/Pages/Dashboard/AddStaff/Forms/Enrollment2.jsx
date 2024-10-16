/* eslint-disable react-hooks/exhaustive-deps */

import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Select } from 'antd';
import { Form } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CheckBoxNew, CheckBoxWithLabel } from '../../AddStudent/Common';
import { PlusIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Enrollment = ({ setData, data }) => {
    const { classrooms } = useSelector(state => state.classroom)
    const today = new Date();
    const [date, setDate] = useState({
        day: today.getDate(),
        month: today.getMonth(),
        year: today.getFullYear()
    });
    const rotations = ["Morning", "Afternoon", "Evening"]
    const status = ["Active", "Not Active"]
    const days = ["Mon", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    const [classList, setclassList] = useState([1]);
    const [allformData, setAllformData] = useState({})
    const navigate = useNavigate()
    const onfinish = (data) => {
        setAllformData((prev) => ({ ...prev, ...data }))
        navigate(`?step=${3}`)
    }

    const updateDataSate = (name, value) => {
        setAllformData((prev) => ({ ...prev, [name]: value }))
    }
    useEffect(() => {
        
    }, [allformData, classList])


    useEffect(() => {
        if (!data?.enrollment?.length) {
            classList.map((i) => {
                if (!allformData[`startDate_${i}`]) {
                    updateDataSate(`startDate_${i}`, new Date())
                }
                if (!allformData[`status_${i}`]) {
                    updateDataSate(`status_${i}`, status[0])
                }
                if (!allformData[`shifting_${i}`]) {
                    updateDataSate(`shifting_${i}`, rotations[0])
                }
                if (!allformData[`schedule_${i}`]) {
                    updateDataSate(`schedule_${i}`, days)
                }
            })
        }
    }, [classList, allformData])

    return (
        <div className='bg-staff-bg border-staff-pc border rounded-lg w-full lg:p-[53px] p-5'>
            <Form className='grid lg:grid-cols-2 gap-x-4'
                layout='vertical'
                onFinish={onfinish}
            >
                {
                    classList.map((i) => (
                        <div className="grid lg:grid-cols-2 gap-x-5 col-span-2" key={i}>
                            <Form.Item

                                label="Classroom"
                                rules={[{ required: true, message: 'Please select a classroom' }]}
                            >
                                <Select
                                    onChange={(e) => {
                                        updateDataSate(`classroom_${i}`, e)
                                    }}
                                    value={allformData[`classroom_${i}`]}
                                    size='large'
                                    
                                    options={[
                                        { value: '', label: 'Select Classroom' },
                                        ...classrooms?.map(item => ({ value: item._id, label: item.name })) || []
                                    ]}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Start Date"
                            >
                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                    <div className='flex gap-3 enroll3'>
                                        <DesktopDatePicker views={['day',]}
                                            label='Day'
                                            defaultValue={dayjs()}
                                            onChange={(e) => {
                                                setDate({
                                                    ...date,
                                                    day: e.$d.getDate(),
                                                })
                                                updateDataSate(`startDate_${i}`, new Date(date.year, date.month, e.$d.getDate()))
                                            }}
                                        />
                                        <DesktopDatePicker
                                            label='Month'
                                            defaultValue={dayjs()}
                                            views={['month',]}
                                            onChange={(e) => {
                                                setDate({
                                                    ...date,
                                                    month: e.$M,
                                                })
                                                updateDataSate(`startDate_${i}`, new Date(date.year, e.$M, date.day))
                                            }}
                                        />
                                        <DesktopDatePicker
                                            label='Year'
                                            defaultValue={dayjs()}
                                            views={['year',]}
                                            onChange={(e) => {
                                                setDate({
                                                    ...date,
                                                    year: e.$y,
                                                })
                                                updateDataSate(`startDate_${i}`, new Date(e.$y, date.month, date.day))
                                            }}
                                        />
                                    </div>
                                </LocalizationProvider>
                            </Form.Item>
                            <Form.Item
                                label="Shifting"
                            >
                                <div className="flex flex-wrap  items-center gap-3 pb-2">
                                    {
                                        rotations.map((item, index) => {
                                            return <CheckBoxNew
                                                onChange={() => updateDataSate(`shifting_${i}`, item)}
                                                checked={allformData[`shifting_${i}`] === item}
                                                key={index}
                                                label={item}
                                            />
                                        })
                                    }
                                </div>

                            </Form.Item>
                            <Form.Item
                                label="Status"
                            >
                                <div className="flex flex-wrap  items-center gap-3 pb-2">
                                    {
                                        status.map((item, index) => {
                                            return <CheckBoxNew
                                                onChange={() => updateDataSate(`status_${i}`, item)}
                                                checked={allformData[`status_${i}`] === item}
                                                key={index + i}
                                                label={item}
                                            />
                                        })
                                    }
                                </div>
                            </Form.Item>
                            <Form.Item
                                label="Schedule"
                            >
                                <div className="flex flex-wrap items-center gap-3 pb-2" >
                                    {
                                        days.map((item, index) => {
                                            return (
                                                <CheckBoxWithLabel
                                                    onChange={(e) => {
                                                        // Get the current schedule for schedule_i
                                                        const currentSchedule = allformData[`schedule_${i}`] || [];

                                                        if (currentSchedule.includes(item)) {
                                                            // If the day is already in the schedule, remove it
                                                            setAllformData({
                                                                ...allformData,
                                                                [`schedule_${i}`]: currentSchedule.filter(day => day !== item)
                                                            });
                                                        } else {
                                                            // If the day is not in the schedule, add it
                                                            setAllformData({
                                                                ...allformData,
                                                                [`schedule_${i}`]: [...currentSchedule, item]
                                                            });
                                                        }
                                                    }}
                                                    checked={allformData[`schedule_${i}`]?.includes(item)}
                                                    key={index + i}
                                                    label={item}
                                                />
                                            );
                                        })
                                    }
                                </div>
                                {/* <Input className='hidden' value={}/> */}
                            </Form.Item>
                        </div>
                    ))
                }
                <Form.Item className='col-span-2 mt-5'>
                    <div className='flex items-center border border-staff-pc py-2  rounded gap-x-3 text-base w-[190px] justify-center cursor-pointer'
                        onClick={() => {
                            setclassList([...classList, classList.length + 1])
                        }}
                    >
                        <span>
                            Add Classroom
                        </span>
                        <PlusIcon className='w-5 h-5' />
                    </div>
                </Form.Item>
                <Form.Item className='col-span-2'>
                    <div className="flex justify-center items-center gap-x-4">
                        <Link to={'?step=1'} className='py-2 px-10 rounded-3xl mt-3 text-black/40  font-semibold bg-transparent border border-staff-pc text-lg hover:text-staff-pc'>
                            Previous
                        </Link>
                        <button
                            type='submit'
                            className='py-2 px-10 rounded-3xl mt-3 text-white  font-semibold bg-staff-pc border border-staff-pc text-lg'
                        >
                            Next
                        </button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Enrollment;