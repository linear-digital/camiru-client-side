import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Checkbox } from 'antd';
import { Upload } from 'antd';
import { DatePicker } from 'antd';
import { Input } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import { useState } from 'react';

const Generalinfo = () => {
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
    const [gender, setGender] = useState("Boy");
    return (
        <div className='w-full flex flex-col gap-7'>
            <Row
                label={"First Name"}
                placeholder={"Enter your first name"}
            />
            <Row
                label={"Last Name"}
                placeholder={"Enter your last name"}
            />
            <RowWithChild label={"Date of Birth"}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div className='flex gap-3 enroll'>
                        <DesktopDatePicker views={['day',]}
                            defaultValue={dayjs()}
                        />
                        <DesktopDatePicker
                            defaultValue={dayjs()}
                            views={['month',]} />
                        <DesktopDatePicker
                            defaultValue={dayjs()}
                            views={['year',]} />
                    </div>
                </LocalizationProvider>
            </RowWithChild>
            <RowWithChild label={"Gender"} position={"center"}>
                <div className="flex  items-center gap-3">
                    <div className='flex  items-center gap-2'>
                        <Checkbox
                            checked={gender === "Boy"}
                            onChange={() => setGender("Boy")}
                            color="red"
                            className='rounded-full w-[20px] text-red-400 add-form'
                            size="xs"
                        />
                        <h5 className="opacity-60 mt-1 text-stone-600 text-base font-normal ">Boy</h5>
                    </div>
                    <div className='flex  items-center gap-2'>
                        <Checkbox
                            checked={gender === "Girl"}
                            onChange={() => setGender("Girl")}
                            className='rounded-full w-[20px] add-form '
                            size="xs"
                        />
                        <h5 className="opacity-60 mt-1 text-stone-600 text-base font-normal ">Girl</h5>
                    </div>
                    <div className='flex  items-center gap-2'>
                        <Checkbox color="red"
                            checked={gender === "x"}
                            onChange={() => setGender("x")}
                            className='rounded-full w-[20px] add-form'
                            size="xs"
                        />
                        <h5 className="opacity-60 mt-1 text-stone-600 text-base font-normal ">X</h5>
                    </div>
                </div>
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

const Row = ({ placeholder, label, value, onChange }) => {
    return <div className='flex gap-5 items-center'>
        <h5 className="text-zinc-700 min-w-[100px] text-end text-base font-semibold ">{label}
        </h5>
        <Input placeholder={placeholder} value={value} onChange={onChange}
            className='focus:border-gray-400 w-[340px]'
        />
    </div>
}
const RowWithChild = ({ position, label, value, onChange, children }) => {
    return <div className={`${position === "center" ? "items-center" : "items-start"} flex gap-5`}>
        <h5 className="text-zinc-700 min-w-[100px] text-end text-base font-semibold ">{label}
        </h5>
        <div>
            {children}
        </div>
    </div>
}