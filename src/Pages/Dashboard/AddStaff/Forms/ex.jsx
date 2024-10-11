import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Select, Form, Button } from 'antd';
import dayjs from 'dayjs';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CheckBoxNew, CheckBoxWithLabel } from '../../AddStudent/Common';
import { PlusIcon } from '@heroicons/react/24/outline';

const Enrollment = ({ data, setData }) => {
    const { classrooms } = useSelector(state => state.classroom);
    const today = new Date();
    const [form] = Form.useForm();
    const [date, setDate] = useState({
        day: today.getDate(),
        month: today.getMonth(),
        year: today.getFullYear(),
    });
    const rotations = ["Morning", "Afternoon", "Evening"];
    const status = ["Active", "Not Active"];
    const days = ["M", "Tu", "Wh", "T", "F", "Sa", "Su"];
    const [classList, setclassList] = useState([1]);

    // Sync form values with external data
    useEffect(() => {
        form.setFieldsValue(data);
    }, [data, form]);

    const handleScheduleChange = (day, classIndex) => {
        const currentSchedule = form.getFieldValue(`schedule_${classIndex}`) || [];
        const updatedSchedule = currentSchedule.includes(day)
            ? currentSchedule.filter(d => d !== day)
            : [...currentSchedule, day];
        form.setFieldsValue({ [`schedule_${classIndex}`]: updatedSchedule });
        setData(prev => ({
            ...prev,
            schedule: updatedSchedule
        }));
    };

    const onFinish = (values) => {
        console.log('Form Submitted: ', values);
        setData(values);
    };

    return (
        <div className='bg-staff-bg border-staff-pc border rounded-lg w-full lg:p-[53px] p-5'>
            <Form
                form={form}
                className='grid lg:grid-cols-2 gap-x-4'
                layout='vertical'
                onFinish={onFinish}
                initialValues={{
                    classroom: '',
                    schedule: []
                }}
                onValuesChange={(changedValues, allValues) => {
                    console.log(allValues);
                }}
            >
                {
                    classList.map((i) => (
                        <div className="grid grid-cols-2 gap-x-5 col-span-2" key={i}>
                            <Form.Item
                                label="Classroom"
                                name={`classroom_${i}`}
                                rules={[{ required: true, message: 'Please select a classroom' }]}
                            >
                                <Select
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
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <div className='flex gap-3 enroll3'>
                                        <DesktopDatePicker
                                            views={['day']}
                                            label='Day'
                                            defaultValue={dayjs()}
                                            onChange={(e) => {
                                                setDate({
                                                    ...date,
                                                    day: e.$d.getDate(),
                                                });
                                                form.setFieldsValue({ [`startDate_${i}`]: e.$d });
                                            }}
                                        />
                                        <DesktopDatePicker
                                            label='Month'
                                            defaultValue={dayjs()}
                                            views={['month']}
                                            onChange={(e) => {
                                                setDate({
                                                    ...date,
                                                    month: e.$M,
                                                });
                                                form.setFieldsValue({ [`startDate_${i}`]: e.$d });
                                            }}
                                        />
                                        <DesktopDatePicker
                                            label='Year'
                                            defaultValue={dayjs()}
                                            views={['year']}
                                            maxDate={dayjs()}
                                            onChange={(e) => {
                                                setDate({
                                                    ...date,
                                                    year: e.$y,
                                                });
                                                form.setFieldsValue({ [`startDate_${i}`]: e.$d });
                                            }}
                                        />
                                    </div>
                                </LocalizationProvider>
                            </Form.Item>
                            <Form.Item
                                label="Shifting"
                                name={`shifting_${i}`}
                            >
                                <div className="flex flex-wrap  items-center gap-3 pb-2">
                                    {rotations.map((item, index) => (
                                        <CheckBoxNew
                                            onChange={() => updateState("shifting", item)}
                                            checked={data?.shifting === item}
                                            key={index}
                                            label={item}
                                        />
                                    ))}
                                </div>
                            </Form.Item>
                            <Form.Item
                                label="Status"
                                name={`status_${i}`}
                            >
                                <div className="flex flex-wrap items-center gap-3 pb-2">
                                    {status.map((item, index) => (
                                        <CheckBoxNew
                                            onChange={() => updateState("status", item)}
                                            checked={data?.status === item}
                                            key={index}
                                            label={item}
                                        />
                                    ))}
                                </div>
                            </Form.Item>
                            <Form.Item
                                label="Schedule"
                                name={`schedule_${i}`}
                            >
                                <div className="flex flex-wrap items-center gap-3 pb-2">
                                    {days.map((day, index) => (
                                        <CheckBoxWithLabel
                                            key={index}
                                            label={day}
                                            checked={form.getFieldValue(`schedule_${i}`)?.includes(day)}
                                            onChange={() => handleScheduleChange(day, i)}
                                        />
                                    ))}
                                </div>
                            </Form.Item>
                        </div>
                    ))
                }
                <Form.Item className='col-span-2 mt-5'>
                    <div className='flex items-center border border-staff-pc py-2  rounded gap-x-3 text-base w-[190px] justify-center cursor-pointer'
                        onClick={() => {
                            setclassList([...classList, classList.length + 1]);
                        }}
                    >
                        <span>Add Classroom</span>
                        <PlusIcon className='w-5 h-5' />
                    </div>
                </Form.Item>
                <Form.Item className='col-span-2'>
                    <div className="flex justify-center items-center gap-x-4">
                        <Link to={'?step=1'} className='py-2 px-10 rounded-3xl mt-3 text-black/40 font-semibold bg-transparent border border-staff-pc text-lg hover:text-staff-pc'>
                            Previous
                        </Link>
                        <Button
                            type='submit'
                            className='py-2 px-10 rounded-3xl mt-3 text-white font-semibold bg-staff-pc border border-staff-pc text-lg'
                        >
                            Next
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Enrollment;