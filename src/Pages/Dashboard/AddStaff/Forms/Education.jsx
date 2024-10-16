
import { Input } from 'antd';
import { Form } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DatePicker } from 'antd';
import { PlusIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Education = ({ data, setData }) => {
    const navigate = useNavigate()
    const onFinish = (data) => {

        const educationGroup = Array.from({ length: Object.keys(data).length / 5 }, (_, i) => ({
            university: data[`university_${i + 1}`],
            degree: data[`degree_${i + 1}`],
            startDate: new Date(data[`startDate_${i + 1}`]).toISOString(),
            endDate: new Date(data[`endDate_${i + 1}`]).toISOString(),
            cgpa: data[`cgpa_${i + 1}`],
        }))
        setData({ education: educationGroup })

        navigate(`?step=${2}`)
    }
    const [education, setEducation] = useState([1])
    const [initialValues, setInitialValues] = useState([])
    useEffect(() => {
        const initialVal = []
        const eu = education

        for (let i = 1; i <= data?.education?.length; i++) {
            education.length > i &&  eu.push(i + 1)
            initialVal.push({
                name: [`university_${i}`],
                value: data?.education[i - 1]?.university
            })
            initialVal.push({
                name: [`degree_${i}`],
                value: data?.education[i - 1]?.degree
            })
            initialVal.push({
                name: [`startDate_${i}`],
                value: dayjs(data?.education[i - 1]?.startDate)
            })
            initialVal.push({
                name: [`endDate_${i}`],
                value: dayjs(data?.education[i - 1]?.endDate)
            })
            initialVal.push({
                name: [`cgpa_${i}`],
                value: data?.education[i - 1]?.cgpa
            })
        }
        setInitialValues(initialVal)
        setEducation(eu)
    }, [])
    return (
        <Form
            className='bg-staff-bg border-staff-pc border rounded-lg w-full lg:p-[53px] p-5 grid lg:grid-cols-6 gap-x-5'
            layout='vertical'
            fields={initialValues}
            onFinish={onFinish}
        >
            {
                education.map((i) => (
                    <div key={i} className="lg:grid grid-cols-6 gap-5 col-span-6">
                        <Form.Item
                            label="University"
                            name={`university_${i}`}
                            className='col-span-3'
                            rules={[{ required: true, message: 'Please University Name' }]}
                        >
                            <Input size='large' placeholder='Enter University Name' />
                        </Form.Item>
                        <Form.Item
                            label="Degree"
                            name={`degree_${i}`}
                            className='col-span-3'
                            rules={[{ required: true, message: 'Please Degree Name' }]}
                        >
                            <Input size='large' placeholder='Enter Degree Name' />
                        </Form.Item>
                        <Form.Item
                            label="Start Date"
                            name={`startDate_${i}`}
                            className='col-span-2'
                            rules={[{ required: true, message: 'Please Enter Start Date' }]}
                        >
                            <DatePicker
                                format={"DD.MM.YYYY"}
                                className='w-full'
                                size='large'
                                placeholder='Enter Start Date'
                                needConfirm
                            />
                        </Form.Item>
                        <Form.Item
                            label="End Date"
                            name={`endDate_${i}`}
                            className='col-span-2'
                            rules={[{ required: true, message: 'Please Enter End Date' }]}
                        >
                            <DatePicker
                                format={"DD.MM.YYYY"}
                                className='w-full'
                                size='large'
                                placeholder='Enter End Date'
                                needConfirm
                            />
                        </Form.Item>
                        <Form.Item
                            label="CGPA"
                            name={`cgpa_${i}`}
                            className='col-span-2'
                            rules={[{ required: true, message: 'Please Enter CGPA' }]}
                        >
                            <Input size='large' placeholder='Enter CGPA' />
                        </Form.Item>
                    </div>
                ))
            }
            <Form.Item className='col-span-6 mt-5'>
                <div className='flex items-center border border-staff-pc py-2  rounded gap-x-3 text-base w-[190px] justify-center cursor-pointer'
                    onClick={() => setEducation([...education, education.length + 1])}
                >
                    <span>
                        Add Education
                    </span>
                    <PlusIcon className='w-5 h-5' />
                </div>
            </Form.Item>
            <Form.Item className='col-span-6'>
                <div className="flex justify-center items-center gap-x-4">
                    <Link to={'?step=0'} className='py-2 px-10 rounded-3xl mt-3 text-black/40  font-semibold bg-transparent border border-staff-pc text-lg hover:text-staff-pc'>
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