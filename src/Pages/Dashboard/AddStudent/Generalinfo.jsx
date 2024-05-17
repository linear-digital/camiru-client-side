import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Checkbox } from '@material-tailwind/react';
import { Upload } from 'antd';
import { DatePicker } from 'antd';
import { Input } from 'antd';
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
                <div className='flex gap-2 items-center'>
                    <button className="w-[85.32px] h-[32.41px]  text-xs bg-white border text-gray-500">
                        Date <FontAwesomeIcon icon={faChevronDown} className='text-[10px] ml-1' />
                    </button>
                    <button className="w-[85.32px] h-[32.41px]  text-xs bg-white border text-gray-500">
                        Month <FontAwesomeIcon icon={faChevronDown} className='text-[10px] ml-1' />
                    </button>
                    <button className="w-[85.32px] h-[32.41px]  text-xs bg-white border text-gray-500">
                        Year <FontAwesomeIcon icon={faChevronDown} className='text-[10px] ml-1' />
                    </button>
                </div>
            </RowWithChild>
            <RowWithChild label={"Gender"} position={"center"}>
                <form className="flex items-center">
                    <div className='flex  items-center'>
                        <Checkbox
                            checked={gender === "Boy"}
                            onChange={() => setGender("Boy")}
                            color="red"
                            className='rounded-full w-[20px] '
                            size="xs"
                        />
                        <h5 className="opacity-60 mt-1 text-stone-600 text-base font-normal ">Boy</h5>
                    </div>
                    <div className='flex  items-center'>
                        <Checkbox color="red"
                            checked={gender === "Girl"}
                            onChange={() => setGender("Girl")}
                            className='rounded-full w-[20px] '
                            size="xs"
                        />
                        <h5 className="opacity-60 mt-1 text-stone-600 text-base font-normal ">Girl</h5>
                    </div>
                    <div className='flex  items-center'>
                        <Checkbox color="red"
                            checked={gender === "x"}
                            onChange={() => setGender("x")}
                            className='rounded-full w-[20px] '
                            size="xs"
                        />
                        <h5 className="opacity-60 mt-1 text-stone-600 text-base font-normal ">X</h5>
                    </div>
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
                <div className='flex  items-center mt-2'>
                    <Checkbox color="orange"
                        size="xs"
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