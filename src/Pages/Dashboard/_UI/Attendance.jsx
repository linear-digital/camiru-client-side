import { Card } from '@material-tailwind/react';
import React from 'react';
import AttendanceNavigation from './AttendanceNavigation';
import AttendanceChart from './AttendanceChart';
import { Dot } from '../../User/Profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import WeekChart from './WeekChart';
import WeekChart2 from './WeekChart2';
import moment from 'moment';

const Attendance = () => {
    const [type, setType] = React.useState('daily');
    const [active, setActive] = React.useState(true);
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <div className='lg:p-5 p-3 mt-10 border border-[#C7F1FF] bg-[#F8FCFF] rounded-xl'>
                <div className="flex justify-between items-center">
                    <h2 className=" text-black lg:text-sm text-xs font-bold poppins">Attendance</h2>
                    <AttendanceNavigation state={type} setState={setType} />
                </div>
                <div className='flex flex-col items-center mt-5 lg:hidden'>
                    <div className='flex flex-col justify-center  max-w-[200px] pl-10'>
                        <div className='pl-2'>
                            <AttendanceChart width={200} height={100} />
                        </div>
                        <div className="flex items-center gap-4 mt-3">
                            <button className='w-4 '>
                                <FontAwesomeIcon
                                    icon={faCircleChevronLeft}
                                    className='text-base'
                                />
                            </button>
                            <h1 className="  text-neutral-600 text-sm font-extrabold ">January</h1>
                            <button className='w-4 '>
                                <FontAwesomeIcon
                                    icon={faCircleChevronRight}
                                    className='text-base'
                                />
                            </button>
                        </div>

                    </div>
                    <div className="grid grid-cols-2 w-full gap-3 justify-center px-3 pb-5 mt-4">
                        <AttCard
                            bg={"bg-primary"}
                            title={"Checked In"}
                            desc={"81 Studnets"}
                        />
                        <AttCard
                            bg={"bg-[#ffbb3b]"}
                            title={"Present"}
                            desc={"51 Studnets"}
                        />
                        <AttCard
                            bg={"bg-secondary"}
                            title={"Checked Out"}
                            desc={"81 Studnets"}
                        />
                        <AttCard
                            bg={"bg-[#FB6EB0]"}
                            title={"Absent"}
                            desc={"51 Studnets"}
                        />
                    </div>
                </div>
                <div className="lg:flex hidden items-center justify-center gap-10 w-full">
                    <AttCard
                        bg={"bg-primary"}
                        title={"Checked In"}
                        desc={`${active?.checked_in} Studnets`}
                    />
                    <AttCard
                        bg={"bg-[#ffbb3b]"}
                        title={"Present"}
                        desc={`${active?.checked_in} Studnets`}
                    />
                    <div className='flex flex-col justify-center  max-w-[200px] pl-5'>
                        <div className=''>
                            <AttendanceChart total={active?.total} height={190} width={250} />
                        </div>
                        <div className={`${type === 'monthly' ? 'flex' : 'hidden'} items-center gap-4 ml-4`}>
                            <button className='w-4 '
                            onClick={() => setDate(moment(date).subtract(1, 'month').toDate())}
                            >
                                <FontAwesomeIcon
                                    icon={faCircleChevronLeft}
                                    className='text-base'
                                />
                            </button>
                            <h1 className="  text-neutral-600 text-sm font-extrabold">
                                {moment(date).format('MMMM')}
                            </h1>
                            <button className='w-4 '
                            onClick={() => setDate(moment(date).add(1, 'month').toDate())}
                            >
                                <FontAwesomeIcon
                                    icon={faCircleChevronRight}
                                    className='text-base'
                                />
                            </button>
                        </div>
                    </div>
                    <AttCard
                        bg={"bg-secondary"}
                        title={"Checked Out"}
                        desc={"81 Studnets"}
                    />
                    <AttCard
                        bg={"bg-[#FB6EB0]"}
                        title={"Absent"}
                        desc={`${active?.absent} Studnets`}
                    />
                </div>
                <WeekChart type={type} selectedBar={active} setSelectedBar={setActive} month={date.getMonth()} year={date.getFullYear()}/>
            </div>
        </div>
    );
};

export default Attendance;


const AttCard = ({ title, desc, active, onChange, bg }) => {
    return <div className='flex lg:flex-row flex-col items-start gap-3 lg:w-auto w-full'>
        <span className='hidden lg:block'>
            <Dot className={`${bg} mt-1`} size={8} />
        </span>
        <div>
            <h2 className="mb-2 text-neutral-600 text-xs font-extrabold flex items-center gap-3">
                <span className='block lg:hidden'>
                    <Dot className={`${bg} mt-1`} size={11} />
                </span>
                {title}</h2>
            <p className=" text-stone-500 text-xs font-normal ">{desc}</p>
        </div>
    </div>
}