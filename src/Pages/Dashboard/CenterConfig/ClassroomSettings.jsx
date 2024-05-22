import React from 'react';
import { CheckBoxWithLabel, Row, RowWithChild } from './Common';
import { Button } from '@material-tailwind/react';
import { Input } from '@material-tailwind/react';


const ClassroomSettings = () => {
    return (
        <div className='w-full'>
            <div className="flex items-center gap-5">
                <div className={`w-[37.66px] h-[37.66px] bg-amber-400/opacity-25 rounded-full flex items-center justify-center text-base font-bold border   bg-[#D9D9D9] text-gray-800`} >
                    2
                </div>
                <div className="text-stone-500 text-[21.73px] font-bold ">Classroom Settings</div>
            </div>
            <div className="mt-10  w-full">
                <Row label={"Classroom Name"}
                    placeholder={"Enter Classroom Name"}
                />
                <Row label={"Age Zone"}
                    placeholder={"0-1 years"}
                />
                <RowWithChild label={"Student-Staff Ratio (Optional)"}
                >
                    <select className='focus:border-gray-400 border border-gray-400 rounded-md px-2 text-xs text-gray-400 w-full lg:w-[340px] h-[40px] outline-none bg-white cursor-pointer'>
                        <option value="No delay">Option</option>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                    </select>
                    <div className="text-gray-600 text-[10.14px] font-normal  my-2">Number of students for every 1 staff member</div>
                    <CheckBoxWithLabel
                        label={"Real-time naps & meals"}
                    />
                </RowWithChild>
                <RowWithChild label={"Display Name"}
                    position={"center"}
                >
                    <select className='focus:border-gray-400 border border-gray-400 rounded-md px-2 text-xs text-gray-400 w-full lg:w-[340px] h-[40px] outline-none bg-white cursor-pointer'>
                        <option value="No delay">Option</option>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                    </select>
                </RowWithChild>
                <RowWithChild label={"Login"}
                    position={"center"}
                >
                    <div className="flex lg:flex-row flex-col lg:items-center items-start gap-y-3 w-full lg:max-w-[480px]">
                        <Input placeholder={""}
                            className='focus:border-gray-400 lg:w-[340px] w-full text-xs h-[40px]'
                        />
                        <Button className='bg-[#187A82]  text-white rounded-md text-xs flex items-center justify-center' variant='filled'>
                            Generate
                        </Button>
                    </div>
                </RowWithChild>
                <hr className='lg:pb-6 mt-10 border-t-[#00000066]' />
                <Row label={"Classroom Name"}
                    placeholder={"Enter Classroom Name"}
                />
                <Row label={"Age Zone"}
                    placeholder={"0-1 years"}
                />
                <RowWithChild label={"Student-Staff Ratio (Optional)"}
                >
                    <select className='focus:border-gray-400 border border-gray-400 rounded-md px-2 text-xs text-gray-400 w-full lg:w-[340px] h-[40px] outline-none bg-white cursor-pointer'>
                        <option value="No delay">Option</option>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                    </select>
                    <div className="text-gray-600 text-[10.14px] font-normal  my-2">Number of students for every 1 staff member</div>
                    <CheckBoxWithLabel
                        label={"Real-time naps & meals"}
                    />
                </RowWithChild>
                <RowWithChild label={"Display Name"}
                    position={"center"}
                >
                    <select className='focus:border-gray-400 border border-gray-400 rounded-md px-2 text-xs text-gray-400 w-full lg:w-[340px] h-[40px] outline-none bg-white cursor-pointer'>
                        <option value="No delay">Option</option>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                    </select>
                </RowWithChild>
                <RowWithChild label={"Login"}
                    position={"center"}
                >
                    <div className="flex lg:flex-row flex-col lg:items-center items-start gap-y-3 w-full lg:max-w-[480px]">
                        <Input placeholder={""}
                            className='focus:border-gray-400 lg:w-[340px] w-full text-xs h-[40px]'
                        />
                        <Button className='bg-[#187A82]  text-white rounded-md text-xs flex items-center justify-center' variant='filled'>
                            Generate
                        </Button>
                    </div>
                </RowWithChild>
                <hr className='lg:pb-6 mt-10 border-t-[#00000066]' />
                <Row label={"Classroom Name"}
                    placeholder={"Enter Classroom Name"}
                />
                <Row label={"Age Zone"}
                    placeholder={"0-1 years"}
                />
                <RowWithChild label={"Student-Staff Ratio (Optional)"}
                >
                    <select className='focus:border-gray-400 border border-gray-400 rounded-md px-2 text-xs text-gray-400 w-full lg:w-[340px] h-[40px] outline-none bg-white cursor-pointer'>
                        <option value="No delay">Option</option>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                    </select>
                    <div className="text-gray-600 text-[10.14px] font-normal  my-2">Number of students for every 1 staff member</div>
                    <CheckBoxWithLabel
                        label={"Real-time naps & meals"}
                    />
                </RowWithChild>
                <RowWithChild label={"Display Name"}
                    position={"center"}
                >
                    <select className='focus:border-gray-400 border border-gray-400 rounded-md px-2 text-xs text-gray-400 w-full lg:w-[340px] h-[40px] outline-none bg-white cursor-pointer'>
                        <option value="No delay">Option</option>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                    </select>
                </RowWithChild>
                <RowWithChild label={"Login"}
                    position={"center"}
                >
                    <div className="flex lg:flex-row flex-col lg:items-center items-start gap-y-3 w-full lg:max-w-[480px]">
                        <Input placeholder={""}
                            className='focus:border-gray-400 lg:w-[340px] w-full text-xs h-[40px]'
                        />
                        <Button className='bg-[#187A82]  text-white rounded-md text-xs flex items-center justify-center' variant='filled'>
                            Generate
                        </Button>
                    </div>
                </RowWithChild>
                <hr className='lg:pb-6 mt-10 border-t-[#00000066]' />
                <Row label={"Classroom Name"}
                    placeholder={"Enter Classroom Name"}
                />
                <Row label={"Age Zone"}
                    placeholder={"0-1 years"}
                />
                <RowWithChild label={"Student-Staff Ratio (Optional)"}
                >
                    <select className='focus:border-gray-400 border border-gray-400 rounded-md px-2 text-xs text-gray-400 w-full lg:w-[340px] h-[40px] outline-none bg-white cursor-pointer'>
                        <option value="No delay">Option</option>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                    </select>
                    <div className="text-gray-600 text-[10.14px] font-normal  my-2">Number of students for every 1 staff member</div>
                    <CheckBoxWithLabel
                        label={"Real-time naps & meals"}
                    />
                </RowWithChild>
                <RowWithChild label={"Display Name"}
                    position={"center"}
                >
                    <select className='focus:border-gray-400 border border-gray-400 rounded-md px-2 text-xs text-gray-400 w-full lg:w-[340px] h-[40px] outline-none bg-white cursor-pointer'>
                        <option value="No delay">Option</option>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                    </select>
                </RowWithChild>
                <RowWithChild label={"Login"}
                    position={"center"}
                >
                    <div className="flex lg:flex-row flex-col lg:items-center items-start gap-y-3 w-full lg:max-w-[480px]">
                        <Input placeholder={""}
                            className='focus:border-gray-400 lg:w-[340px] w-full text-xs h-[40px]'
                        />
                        <Button className='bg-[#187A82]  text-white rounded-md text-xs flex items-center justify-center' variant='filled'>
                            Generate
                        </Button>
                    </div>
                </RowWithChild>
                <RowWithChild label={""}
                >
                    <div className="flex gap-5 ">
                        <Button variant='filled' className='bg-[#C6F2EC] text-[#06A390] w-[135px] rounded-3xl shadow-none'>
                            Save
                        </Button>
                        <Button variant='filled' className='bg-[#FFBB3B33] text-[#FFBB3B] w-[135px] rounded-3xl shadow-none'>
                            Save
                        </Button>
                    </div>
                </RowWithChild>
            </div>
        </div>
    );
};

export default ClassroomSettings;