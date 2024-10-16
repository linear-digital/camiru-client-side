import { CloudUploadOutlined } from '@ant-design/icons';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { upload } from '../../../../Components/helper/axios.instance';
import { decrypt } from '../../../../Components/helper/security';
import { Spin } from 'antd';
import { Input } from 'antd';
import { Form } from 'antd';
import { Dropdown } from 'antd';
import { Popconfirm } from 'antd';
import { Popover } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Records = ({ data, setData }) => {
    const [add, setAdd] = useState(false);
    const [dragActive, setDragActive] = useState(false);
    const [loading, setLoading] = useState(false);
    const [records, setRecords] = useState([])
    useEffect(() => {
        setRecords(data.records || [])
    }, [])
    const [title, setTitle] = useState('')
    const uploadFile = async (e) => {
        const file = e.target.files[0]
        if (!file) {
            return;
        }

        const formData = new FormData();
        formData.append('document', file);

        try {
            setLoading(true)
            const response = await upload.post('/upload/document', formData)
            const data = decrypt(response.data)
            setRecords((prev) => [...prev, {
                file: data._id,
                data,
                title
            }])
            setTitle('')
            setAdd(false)
            toast.success("Record added successfully")
            setLoading(false)
        } catch (error) {
            toast.error(error?.response?.data?.message || 'Something went wrong')
            setLoading(false)
        }
    };

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            uploadFile({ target: { files: [e.dataTransfer.files[0]] } });  // Handle the dropped file
        }
    };

    const handleFileInputClick = () => {
        document.getElementById('record').click();
    };
    const navigate = useNavigate()
    const onNext = () => {
        if (records.length === 0) {
            toast.error("Please add record")
            return
        }
        setData({ records })
        navigate(`?step=${4}`)
    }
    return (
        <div className='bg-staff-bg border-staff-pc border rounded-lg w-full lg:p-[53px] p-5'>
            {
                add && <Modal open={add} footer={null}
                    width={800}
                    onCancel={() => setAdd(false)}
                    centered
                    className='border border-staff-pc rounded-lg'>
                    <Form
                        layout='vertical'
                        size='large'
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                    >
                        <Form.Item name={"title"} label="Add Title">
                            <Input placeholder='Add Title' />
                        </Form.Item>
                    </Form>
                    {
                        loading ?
                            <div className="h-[428px] w-full flex justify-center items-center">
                                <Spin size='large' />
                            </div>
                            :
                            <div
                                onClick={handleFileInputClick}
                                className={`h-[428px] w-full border-2 border-dashed border-staff-pc mt-8 flex flex-col justify-center items-center ${dragActive ? 'bg-gray-100' : ''} rounded-lg`}
                                onDragEnter={handleDrag}
                                onDragOver={handleDrag}
                                onDragLeave={handleDrag}
                                onDrop={handleDrop}>
                                <CloudUploadOutlined className='text-3xl text-primary' />
                                <h2 className='text-[32px] text-black font-normal mt-2'>
                                    Select your file or drag and drop
                                </h2>
                                <h2 className='text-[20px] text-[#C6C6C6] font-normal mt-1'>
                                    png, pdf, jpg, docx accepted
                                </h2>
                                <button
                                    className='bg-staff-pc px-10 py-2 text-white rounded-3xl mt-4'
                                >
                                    Browse
                                </button>
                                <input
                                    type="file"
                                    id='record'
                                    className='hidden'
                                    onChange={uploadFile}
                                />
                            </div>
                    }
                </Modal>
            }
            <div className="flex flex-wrap gap-10 justify-between">
                {
                    records.map((record, index) => (
                        <Dropdown key={index} trigger={['contextMenu']}
                            menu={{
                                items: [
                                    {
                                        key: '1',
                                        label: <Popover
                                            title="Update Document"
                                            trigger={"click"}
                                            content={
                                                <Form
                                                    size='small'
                                                    layout='vertical'
                                                    style={{
                                                        width: '300px',
                                                    }}
                                                    initialValues={record}
                                                    onChange={(e) => {
                                                        setRecords((prev) => prev.map((item) => item.file === record.file ? { ...item, title: e.target.value } : item))
                                                    }}
                                                >
                                                    <Form.Item name={"title"} label="Add Title">
                                                        <Input placeholder='Add Title'
                                                            size='medium'
                                                        />
                                                    </Form.Item>
                                                </Form>
                                            }
                                        >
                                            <button
                                                className='text-primary px-5 flex gap-2 py-1' >
                                                <PencilIcon className='w-5 h-5' />
                                                Update Document
                                            </button>
                                        </Popover>,
                                    },
                                    {
                                        type: 'divider',
                                    },
                                    {
                                        key: '2',
                                        label: <button
                                            onClick={() => setRecords(records.filter((item) => item.file !== record.file))}
                                            className='text-red-500 px-5 flex gap-2 py-1' >
                                            <TrashIcon className='w-5 h-5' />
                                            Remove Document
                                        </button>,
                                    },
                                ]
                            }}
                        >
                            <div className="w-[281px] pl-[19px] pr-[18px] py-[10px] bg-white rounded-[5px] border border-black/20 justify-center flex-col items-center  inline-flex">
                                <div className="text-black text-base font-normal">
                                    {record?.title}
                                </div>
                                <p className="text-neutral-400 text-[8px] font-normal">
                                    {record?.data?.file?.originalname}
                                </p>
                            </div>
                        </Dropdown>
                    ))
                }
            </div>
            <div className='flex items-center border border-staff-pc py-2  rounded gap-x-3 px-5 text-base w-[250px] justify-center cursor-pointer mt-10'
                onClick={() => setAdd(!add)}>
                <span>
                    Add Records/ File
                </span>
                <PlusIcon className='w-5 h-5' />
            </div>
            <div className="flex justify-center items-center gap-x-4 mt-10">
                <Link to={'?step=3'} className='py-2 px-10 rounded-3xl mt-3 text-black/40  font-semibold bg-transparent border border-staff-pc text-lg hover:text-staff-pc'>
                    Previous
                </Link>
                <button
                    onClick={() => {
                        if (records.length > 0) {
                            setData({ records })
                            navigate(`?step=${4}`)
                        }
                        else {
                            toast.error("Please add records")
                            return
                        }
                    }}
                    className='py-2 px-10 rounded-3xl mt-3 text-white  font-semibold bg-staff-pc border border-staff-pc text-lg'>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Records;