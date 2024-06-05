

import { DatePicker, DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Checkbox } from 'antd';
import { Upload } from 'antd';
import { Input } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import { useState } from 'react';
import { CheckBoxNew, Row, RowWithChild } from './Common';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setChildFeilds } from '../../../redux/child/child.action';
import { useEffect } from 'react';

const Generalinfo = () => {
    const { childFeilds } = useSelector(state => state.child)

    const [fileList, setFileList] = useState([]);
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };
    const [gender, setGender] = useState("boy")
    const dispatch = useDispatch()
    const setData = (data) => {
        dispatch(setChildFeilds({ ...childFeilds, ...data }))
    }
    useEffect(() => {
        setData({ gender })
    }, [gender])
    return (
        <div className='w-full flex flex-col lg:gap-3'>
            <Row
                label={"First Name"}
                placeholder={"Enter your first name"}
                value={childFeilds?.firstName}
                onChange={(e) => setData({ firstName: e.target.value })}
            />
            <Row
                value={childFeilds?.lastName}
                onChange={(e) => setData({ lastName: e.target.value })}
                label={"Last Name"}
                placeholder={"Enter your last name"}
            />
            <RowWithChild label={"Date of Birth"} position={"center"}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div className='flex gap-3 enroll2'>
                        <DatePicker
                            value={dayjs(childFeilds?.dateOfBirth)}
                            onChange={(e) => {
                                setData({ dateOfBirth: dayjs(e).format("YYYY-MM-DD") })
                            }} />
                    </div>
                </LocalizationProvider>
            </RowWithChild>
            <RowWithChild label={"Gender"} position={"center"}>
                <form className="flex  items-center gap-3">
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
                </form>
            </RowWithChild>
            <RowWithChild label={"profile Picture"}>

                <Upload
                    className='object-cover'
                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                    onPreview={onPreview}
                >
                    {fileList.length < 1 && '+ Upload'}
                </Upload>
                <div className='flex gap-2 items-center mt-2'>
                    <Checkbox color="orange"
                        size="xs"
                        className='add-form'
                    />
                    <h5 className="opacity-60 mt-1 text-stone-600 text-base font-normal ">Permitted in photos & videos with other children</h5>
                </div>
                <button className='py-2 px-8 rounded-2xl mt-3 text-sm font-semibold text-[#06A390] bg-[#C6F2EC]'>
                    Next
                </button>
            </RowWithChild>
        </div>
    );
};

export default Generalinfo;

