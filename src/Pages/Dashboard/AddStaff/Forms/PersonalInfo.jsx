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
import { useNavigate } from 'react-router-dom';
import MUIDatePicker from './MUIDatePicker';

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
        setData({ [name]: value })
    }
    const navigate = useNavigate()
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
    }, [gender, date])
    useEffect(() => {
        setGender(data?.gender || "boy")
    }, [])
    const onFinish = (values) => {
        setData(values)
        navigate(`?step=${1}`)
    }
    return (
        <Form className='bg-staff-bg border-staff-pc border rounded-lg w-full lg:p-[53px] p-5 lg:grid grid-cols-2 gap-x-5'
            name='personalInfo'
            layout='vertical'
            onFinish={onFinish}

            initialValues={{
                ...data,
                dob: dayjs(data.dob),
                gender,
                profilePic: data?.profilePic || ""
            }}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
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
                rules={[{ required: true, message: 'Please enter date of birth' }]}
            >
                <MUIDatePicker
                    updater={(e) => {
                        updateState("dob", e)
                    }}
                    name={`dob`}
                    defaultValue={new Date(data.dob)} />
                <Form.Item label="Gender" className="flex  items-center gap-3 mt-3"
                    rules={[{ required: true, message: 'Please select gender' }]}
                >
                    <div className="flex ">
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
                    </div>
                </Form.Item>
            </Form.Item>
            <Form.Item
                className='col-span-2'
                label="Profile Picture"
            >
                <div>
                    <label htmlFor='profile' className={`w-[130px] p-2 border h-[133px] ${data?.profilePic ? "" : "border-red-100"} flex justify-center items-end relative box rounded`}>
                        {
                            loading ?
                                <div className='flex justify-center items-center w-full h-full'>
                                    <Spinner />
                                </div>
                                :
                                <div
                                    style={{
                                        backgroundImage: `url(${data?.profilePic ? imageUrl(data?.profilePic) : "/default-profile.png"})`
                                    }}
                                    className='w-full bg-cover bg-center h-full'
                                />
                        }
                        {
                            data?.profilePic ? <div className='absolute overlay text-xs font-semibold text-red-500 w-full h-[25px] bg-red-50 hover:bg-red-500 hover:text-white bottom-0  items-center justify-center'
                                onClick={() => updateState("profilePic", null)}
                            >
                                Remove
                            </div>
                                :
                                <div className='absolute bottom-0 overlay text-xs font-semibold text-[#0095FF] w-full h-[25px] bg-[#BDE4FF]  items-center justify-center'>
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
                </div>
            </Form.Item>
            <Form.Item className='col-span-2'>
                <div className='flex gap-2 items-center mt-2'>
                    <Checkbox color="orange"
                        size="xs"
                        className=''
                    />
                    <h5 className="opacity-60  text-stone-600 text-base font-normal ">Permitted in photos & videos with other children</h5>
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
    );
};

export default PersonalInfo;