import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Card } from '@material-tailwind/react';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

const THeads = ["Age", "Gross Motor", "Self Help", "Social Help", "Emotion", "Cognitive", "Living Skill"]
const Development_evidence = () => {
    const month = useRef(null)

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className='w-full lg:px-8 px-2 lg:py-[55px] py-5 rounded-xl poppins bg-[#F1F6FA63]'>
                <div className="flex items-center gap-4">
                    <h1 className="text-gray-600 lg:text-2xl text-xl font-bold ">
                        Development Evidence
                    </h1>
                    <button
                        className=' bg-[#c6f2eccd] text-xs px-5  font-semibold text-[#24a899] h-[30px] rounded-md'
                    >
                        Add
                    </button>
                </div>
                <textarea
                    className='w-full border border-slate-300/50 rounded-md p-5 mt-10 bg-white text-xs outline-none h-[143px]'
                    placeholder='Add development evidence here'
                >
                </textarea>

                <div className="flex flex-wrap gap-y-3 justify-between items-center mt-7">
                    <div className="flex flex-col lg:flex-row gap-5 lg:items-center">
                        <h5 className="text-zinc-700 text-xs font-semibold ">Date Of Birth</h5>

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
                    </div>
                    <div className='flex gap-3 items-center'>
                        <button className='w-[126px] bg-[#FFBB3B33] text-[#FFBB3B] h-[30px] rounded-2xl text-sm'>
                            Edit
                        </button>
                        <button className='w-[126px] bg-[#C6F2EC] text-[#06A390] h-[30px] rounded-2xl text-sm'>
                            Save
                        </button>
                    </div>
                </div>
                <div className="border-2 p-5 bg-white mt-10 rounded-xl">
                    <h2 className="text-center mt-3 text-neutral-400 lg:text-lg text-sm font-bold ">Development Stage</h2>
                    <div className="lg:min-h-[450px] w-full  lg:mt-10 mt-5">
                        <div className='grid grid-cols-7'>
                            {
                                THeads.map((head, i) => {
                                    return <THead key={i} number={i} title={head} />
                                })
                            }
                        </div>
                        <div className='grid grid-cols-7 mt-7'>
                            {
                                THeads.map((head, i) => {
                                    return <TBody
                                        row={1}
                                        key={i}
                                        number={i}
                                        title={head}
                                        last={i === THeads.length - 1 && true}
                                    />
                                })
                            }
                            {
                                THeads.map((head, i) => {
                                    return <TBody
                                        key={i}
                                        number={i}
                                        title={head}
                                        last={i === THeads.length - 1 && true}
                                    />
                                })
                            }
                            {
                                THeads.map((head, i) => {
                                    return <TBody
                                        key={i}
                                        number={i}
                                        title={head}
                                        last={i === THeads.length - 1 && true}
                                    />
                                })
                            }
                            {
                                THeads.map((head, i) => {
                                    return <TBody
                                        key={i}
                                        number={i}
                                        title={head}
                                        last={i === THeads.length - 1 && true}
                                    />
                                })
                            }
                            {
                                THeads.map((head, i) => {
                                    return <TBody
                                        key={i}
                                        number={i}
                                        title={head}
                                        last={i === THeads.length - 1 && true}
                                    />
                                })
                            }

                        </div>
                    </div>
                </div>
                <h1 className="text-gray-600 lg:text-2xl text-xl mt-10 font-bold ">
                    Development List
                </h1>

                <div className='lg:mt-10 mt-5 gap-3 grid'>
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                </div>
            </div>
        </LocalizationProvider>
    );
};

export default Development_evidence;

const THead = ({ title }) => {
    return <div className='lg:text-xs text-[7px] flex justify-center items-center'>
        {title}
    </div>
}

const TBody = ({ title, number, row, last }) => {

    return <div className={`text-xs flex justify-start p-3 items-start lg:h-[90.82px] h-[60px] border-l border-b border-blue-gray-50 ${row === 1 && "border-t"} ${last && "border-r"}`}>
        {
            number === 0 ?
                <div className="text-zinc-800 lg:text-[10.31px] text-[6px] font-semibold  tracking-tight">4-5 Months</div>
                : ""
        }
    </div>
}

const ListCard = ({ title, desc }) => {
    return <Card className='shadow-none border border-[#C2E5FF] h-[85px] justify-center px-10'>
        <div className="flex items-center justify-between">
            <h1 className=" text-black lg:text-base text-xs font-medium ">Headline Topic Goes Here</h1>
            <div className="flex gap-4">
                <button className="lg:w-[50px] lg:h-[50px] w-[40px] h-[40px] bg-[#FF36361C]
                flex justify-center items-center text-[#FF3636] rounded-full
                ">
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
                <button className="lg:w-[50px] lg:h-[50px] w-[40px] h-[40px] bg-[#FFBB3B33]
                flex justify-center items-center text-[#FFBB3B] rounded-full
                ">
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </div>
        </div>

    </Card>
}