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
import MUIDatePicker from './MUIDatePicker';
import toast from 'react-hot-toast';
export const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
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
   
    const [classList, setclassList] = useState([1]);
    const [allformData, setAllformData] = useState({
        classroom_1: "",
        startDate_1: new Date(),
        shifting_1: rotations[0],
        status_1: status[0],
        schedule_1: [...days]
    })
    const navigate = useNavigate()
    const onfinish = (data) => {
        // setAllformData((prev) => ({ ...prev, ...data }))

        const educationGroup = Array.from({ length: classList.length }, (_, i) => ({
            classroom: allformData[`classroom_${i + 1}`],
            startDate: new Date(allformData[`startDate_${i + 1}`] || new Date()).toISOString(),
            shifting: allformData[`shifting_${i + 1}`],
            status: allformData[`status_${i + 1}`],
            schedule: allformData[`schedule_${i + 1}`] || days
        }))
        setData({ enrollment: educationGroup })
        const isall = educationGroup.every((i) => i.classroom && i.startDate && i.shifting && i.status && i.schedule)
        if (isall){
            navigate(`?step=${3}`)
        }
        else {
            toast.error("Please fill all the fields")
        }
    }

    const updateDataSate = (name, value) => {
        setAllformData((prev) => ({ ...prev, [name]: value }))
    }
    // console.log(allformData, "allformData");
    useEffect(() => {
        if (data?.enrollment) {
            const initialVal = {}
            const eu = classList
            for (let i = 1; i <= data?.enrollment?.length; i++) {
                classList.length < i && eu.push(i)
                initialVal[`classroom_${i}`] = data?.enrollment[i - 1]?.classroom
                initialVal[`startDate_${i}`] = data?.enrollment[i - 1]?.startDate
                initialVal[`shifting_${i}`] = data?.enrollment[i - 1]?.shifting
                initialVal[`status_${i}`] = data?.enrollment[i - 1]?.status
                initialVal[`schedule_${i}`] = data?.enrollment[i - 1]?.schedule
            }
            setclassList(eu)
            setAllformData(initialVal)
        }
    }, [data])
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
                                name={`startDate_${i}`}
                            >
                                <MUIDatePicker
                                    updater={(e) => {
                                        updateDataSate(`startDate_${i}`, e)
                                    }}
                                    name={`startDate_${i}`}
                                    defaultValue={new Date(allformData[`startDate_${i}`]) || new Date()} />
                            </Form.Item>
                            <Form.Item
                                label="Shifting"
                                name={`shifting_${i}`}
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
                                name={`status_${i}`}
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
                                name={`schedule_${i}`}
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
                            setAllformData({
                                ...allformData,
                                [`classroom_${classList.length + 1}`]: '',
                                [`startDate_${classList.length + 1}`]: new Date(),
                                [`shifting_${classList.length + 1}`]: rotations[0],
                                [`status_${classList.length + 1}`]: status[0],
                                [`schedule_${classList.length + 1}`]: [...days],
                            })
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