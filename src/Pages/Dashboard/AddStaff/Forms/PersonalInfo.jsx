import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Button, Col, Input, Row } from 'antd';
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
        const d = new Date(date.year, date.month, date.day)
        updateState("dob", d)
    }, [gender, date])
    const onFinish = (data) => {
        setData((prev) => ({ ...prev, ...data }))
        navigate(`?step=${1}`)
    }
    return (
        <Form
      className='bg-staff-bg border-staff-pc border rounded-lg w-full lg:p-[53px] p-5'
      layout='vertical'
      onFinish={onFinish}
      initialValues={{
        ...data,
        dob: dayjs(data.dob),
        gender,
        profilePic: data?.profilePic || "",
      }}
    >
      {/* First Name and Last Name */}
      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true, message: 'Please enter first name' }]}
          >
            <Input size='large' placeholder='Enter First Name' />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: 'Please enter last name' }]}
          >
            <Input size='large' placeholder='Enter Last Name' />
          </Form.Item>
        </Col>
      </Row>

      {/* Email and Phone */}
      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please enter email' }]}
          >
            <Input size='large' placeholder='Enter Email' />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: 'Please enter phone' }]}
          >
            <Input size='large' placeholder='Enter Phone' />
          </Form.Item>
        </Col>
      </Row>

      {/* Address */}
      <Row gutter={16}>
        <Col xs={24}>
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: 'Please enter address' }]}
          >
            <Input.TextArea size='large' placeholder='Enter your address here' rows={4} />
          </Form.Item>
        </Col>
      </Row>

      {/* Date of Birth */}
      <Row gutter={16}>
        <Col xs={24}>
          <Form.Item
            label="Date of Birth"
            name="dob"
            rules={[{ required: true, message: 'Please enter date of birth' }]}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <div className='flex gap-3 enroll'>
                <DesktopDatePicker
                  views={['day']}
                  label='Day'
                  defaultValue={dayjs()}
                  onChange={(e) => setDate({ ...date, day: e.$d.getDate() })}
                />
                <DesktopDatePicker
                  views={['month']}
                  label='Month'
                  defaultValue={dayjs()}
                  onChange={(e) => setDate({ ...date, month: e.$M })}
                />
                <DesktopDatePicker
                  views={['year']}
                  label='Year'
                  defaultValue={dayjs()}
                  onChange={(e) => setDate({ ...date, year: e.$y })}
                />
              </div>
            </LocalizationProvider>
          </Form.Item>
        </Col>
      </Row>

      {/* Gender */}
      <Row gutter={16}>
        <Col xs={24}>
          <Form.Item
            label="Gender"
            className="flex items-center gap-3 mt-3"
            name="gender"
            rules={[{ required: true, message: 'Please select gender' }]}
          >
            {/* Custom Gender Component */}
            {/* Assuming CheckBoxNew is a custom component for the gender checkboxes */}
          </Form.Item>
        </Col>
      </Row>

      {/* Profile Picture */}
      <Row gutter={16}>
        <Col xs={24}>
          <Form.Item
            name="profilePic"
            label="Profile Picture"
          >
            <label htmlFor='profile' className={`w-[130px] p-2 border h-[133px] ${data?.profilePic ? "" : "border-red-100"} flex justify-center items-end relative box rounded`}>
              {/* Profile Picture Upload Logic */}
            </label>
            {!data?.profilePic && (
              <input
                type="file"
                style={{ display: "none" }}
                id='profile'
                onChange={(e) => uploadProfilePic(e.target.files[0])}
              />
            )}
          </Form.Item>
        </Col>
      </Row>

      {/* Permission Checkbox */}
      <Row gutter={16}>
        <Col xs={24}>
          <Form.Item>
            <div className='flex gap-2 items-center mt-2'>
              <Checkbox color="orange" size="xs" />
              <h5 className="opacity-60 text-stone-600 text-base font-normal">
                Permitted in photos & videos with other children
              </h5>
            </div>
          </Form.Item>
        </Col>
      </Row>

      {/* Buttons */}
      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Link
            to={'?step=1'}
            className='py-2 px-10 rounded-3xl mt-3 text-black/40 font-semibold bg-transparent border border-staff-pc text-lg hover:text-staff-pc'
          >
            Previous
          </Link>
        </Col>
        <Col xs={24} md={12}>
          <Button
            type='primary'
            htmlType='submit'
            className='py-2 px-10 rounded-3xl mt-3'
          >
            Next
          </Button>
        </Col>
      </Row>
    </Form>
    );
};

export default PersonalInfo;