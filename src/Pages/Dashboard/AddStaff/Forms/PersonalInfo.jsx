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

const PersonalInfo = ({ data, setData }) => {
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
        <Form className='bg-[#fff8f9] border-staff-pc border rounded-lg w-full lg:p-[53px] p-5 grid lg:grid-cols-2 gap-x-5'
            layout='vertical'
            onFinish={onFinish}

        >
            <Form.Item label="First Name" name="firstName"
                rules={[{ required: true, message: 'Please enter first name' }]}
            >
                <Input size='large' placeholder='Enter First Name' />
            </Form.Item>
            <Form.Item label="Last Name" name="lastName"
                rules={[{ required: true, message: 'Please enter last name' }]}
            >
                <Input size='large' placeholder='Enter Last Name' />
            </Form.Item>
            <Form.Item label="Email" name="email"
                rules={[{ required: true, message: 'Please enter email' }]}
            >
                <Input size='large' placeholder='Enter Last Email' />
            </Form.Item>
            <Form.Item label="Phone" name="phone"
                rules={[{ required: true, message: 'Please enter phone' }]}
            >
                <Input size='large' placeholder='Enter Last Phone' />
            </Form.Item>
            <Form.Item label="Address" name="address" 
                rules={[{ required: true, message: 'Please enter address' }]}
            >
                <Input.TextArea size='large' placeholder='Enter your address here' rows={4} />
            </Form.Item>
            <Form.Item label="Date of Birth"
                className=''
            >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div className='flex gap-3 enroll'>
                        <DesktopDatePicker views={['day',]}
                            label='Day'
                            defaultValue={dayjs()}
                            onChange={(e) => {
                                setDate({
                                    ...date,
                                    day: e.$d.getDate(),
                                })
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
                            }}
                        />
                        <DesktopDatePicker
                            label='Year'
                            defaultValue={dayjs()}
                            views={['year',]}
                            maxDate={dayjs()}
                            onChange={(e) => {
                                setDate({
                                    ...date,
                                    year: e.$y,
                                })
                            }}
                        />
                    </div>
                </LocalizationProvider>
                <Form.Item label="Gender" className="flex  items-center gap-3 mt-3">
                    <CheckBoxNew
                        onChange={() => setGender("boy")}
                        label={"Boy"}
                        checked={gender === "boy"}
                    />
                    <CheckBoxNew
                        onChange={() => setGender("girl")}
                        checked={gender === "girl"}
                        label={"Girl"}
                    />
                    <CheckBoxNew
                        onChange={() => setGender("x")}
                        checked={gender === "x"}
                        label={"X"}
                    />
                </Form.Item>
            </Form.Item>
            <Form.Item>
                <label htmlFor='profile' className={`w-[130px] border h-[133px] ${data?.profilePic ? "" : "border-red-200"} flex justify-center items-end relative box rounded`}>
                    {
                        loading ?
                            <div className='flex justify-center items-center w-full h-full'>
                                <Spinner />
                            </div>
                            :
                            <img src={data?.profilePic ? imageUrl(data?.profilePic) : "/avater.png"} alt=""
                                className='w-[110px] object-cover h-full'
                            />
                    }
                    {
                        data?.profilePic ? <div className='absolute overlay text-xs font-semibold text-red-500 w-full h-[25px] bg-red-50 hover:bg-red-500 hover:text-white  items-center justify-center'
                            onClick={() => updateState("profilePic", null)}
                        >
                            Remove
                        </div>
                            :
                            <div className='absolute overlay text-xs font-semibold text-[#0095FF] w-full h-[25px] bg-[#BDE4FF]  items-center justify-center'>
                                Upload Image
                            </div>
                    }
                </label>
                {
                    !data?.profilePic && <input type="file" style={{ display: "none" }} id='profile'
                        onChange={(e) => {
                            uploadProfilePic(e.target.files[0])
                        }}
                    />
                }
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full">Submit</Button>
            </Form.Item>
        </Form>
    );
};

export default PersonalInfo;