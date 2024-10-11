import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Button, Input } from 'antd';
import { Form } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import { CheckBoxNew } from '../../AddStudent/Common';
import { imageUrl, upload } from '../../../../Components/helper/axios.instance';
import { Spinner } from '@material-tailwind/react';
import { decrypt } from '../../../../Components/helper/security';
import { useEffect } from 'react';
import { useState } from 'react';
import { Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { DatePicker } from 'antd';

const Education = ({ data, setData }) => {
    const today = new Date();
    const [date, setDate] = useState({
        day: today.getDate(),
        month: today.getMonth(),
        year: today.getFullYear()
    });
    const [gender, setGender] = React.useState("boy")
    const [loading, setLoading] = React.useState(false)
    const updateState = (name, value) => {
        setData({ ...data, [name]: value })
    }
    const uploadProfilePic = async (file) => {
        try {
            setLoading(true)
            // Upload the file to a server or cloud storage
            const formData = new FormData();
            formData.append('image', file);

            const response = await upload.post('/upload/profile', formData)
            setLoading(false)

            const data = decrypt(response.data)
            // Dispatch the URL and other metadata to the store
            updateState("profilePic", data?.file?.path);
        } catch (error) {
            setLoading(false)
            console.error('Error uploading file:', error);
        }
    };
    useEffect(() => {
        updateState("gender", gender)
        const d = new Date(date.year, date.month, date.day)
        updateState("dob", d)
    }, [gender, date])
    const onFinish = (data) => {
        setData((prev) => ({ ...prev, ...data }))
    }
    return (
        <Form className='bg-staff-bg border-staff-pc border rounded-lg w-full lg:p-[53px] p-5 grid lg:grid-cols-6 gap-x-5'
            layout='vertical'
            onFinish={onFinish}
            initialValues={{
                ...data,
                dob: dayjs(data.dob),
                gender,
                profilePic: data?.profilePic || ""
            }}
        >
            <Form.Item
                label="University"
                name="university"
                className='col-span-3'
                rules={[{ required: true, message: 'Please University Name' }]}
            >
                <Input size='large' placeholder='Enter University Name' />
            </Form.Item>
            <Form.Item
                label="Degree"
                name="degree"
                className='col-span-3'
                rules={[{ required: true, message: 'Please Degree Name' }]}
            >
                <Input size='large' placeholder='Enter Degree Name' />
            </Form.Item>
            <Form.Item
                label="Start Date"
                name="start-date"
                className='col-span-2'
                rules={[{ required: true, message: 'Enter Start Date' }]}
            >
                <DatePicker
                    defaultValue={dayjs()}
                    format={"YYYY/MM/DD"}
                    className='w-full'
                    size='large'
                    needConfirm
                />
            </Form.Item>
            <Form.Item
                label="End Date"
                name="end-date"
                className='col-span-2'
                rules={[{ required: true, message: 'Enter End Date' }]}
            >
                <DatePicker
                    defaultValue={dayjs()}
                    format={"YYYY/MM/DD"}
                    className='w-full'
                    size='large'
                    needConfirm
                />
            </Form.Item>
            <Form.Item
                label="CGPA"
                name="cgpa"
                className='col-span-2'
                rules={[{ required: true, message: '' }]}
            >
               <Input size='large' placeholder='E' />
            </Form.Item>
            <Form.Item className='col-span-6'>
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
    );
};

export default Education;