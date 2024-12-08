import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '@material-tailwind/react';
import React from 'react';
import Avater from '../../../Components/Card/Avater';
import moment from 'moment';
import { useEffect } from 'react';
import { set } from 'react-hook-form';
import { useState } from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { fetcher } from '../../../Components/helper/axios.instance';
import { Spin } from 'antd';

const StapManagement = () => {

    const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds

    const { currentUser } = useSelector(state => state.user)
    const { data, isFetching, refetch } = useQuery({
        queryKey: ['Staffs', currentUser?._id],
        queryFn: async () => {
            const res = await fetcher({
                url: `/staff/center/${currentUser?._id}`,
                method: "get",
            })
            return res
        }
    })
    useEffect(() => {
        // Set up the interval to decrease the time left every second
        const interval = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    refetch()
                    return 10 * 60
                }
                return prevTime - 1; // Decrease by 1 second
            });
        }, 1000);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    // Convert the remaining time to minutes and seconds
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;


    return (
        <Card className='p-5 w-full h-full border border-[#C7F1FF] bg-[#F8FCFF] shadow-none'>
            <section className="flex items-center justify-between">
                <h2 className=" text-zinc-800 text-xs font-semibold ">Staff Management</h2>
                <div className="flex gap-3 items-center">
                    <button className='text-red-500 text-xs'
                        onClick={() => {
                            refetch()
                            setTimeLeft(10 * 60)
                        }}
                    >
                        <FontAwesomeIcon icon={faRotateRight} />
                    </button>
                    <div className="text-zinc-800 text-xs font-bold ">Next Refresh: {`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}
                    </div>
                    <Link to={'/dashboard/staffs'} className=' text-xs px-5 flex gap-3 items-center'>
                        View Staff
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Link>

                </div>
            </section>
            {
                isFetching ? <div className='mt-5 flex justify-center'>
                    <Spin size='large' />
                </div> :
                    <div className="overflow-x-auto mt-5 ">
                        <table className="table-auto text-[10px] w-full">
                            {/* head */}
                            <thead>
                                <tr className="text-start ">
                                    <th className='text-black py-2'>Class</th>
                                    <th className='text-black py-2'>Students</th>
                                    <th className='text-black py-2'>Teachers</th>
                                    <th className='text-black py-2'>Absence</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                {/* row 1 */}
                                <tr className='mt-2'>
                                    <td className='p-2'>Infants</td>
                                    <td className='p-2'>
                                        <div className="flex items-center">
                                            <Avater />
                                            <Avater />
                                            <div className="w-6 h-6 bg-white rounded-full border ml-[-5px] z-10 flex justify-center items-center text-[10px]">
                                                5+
                                            </div>
                                        </div>
                                    </td>
                                    <td className='p-2'>
                                        <div className="flex">
                                            <Avater />
                                            <Avater />
                                        </div>
                                    </td>
                                    <td className='p-2'>
                                        <div className="flex">
                                            <Avater />
                                            <Avater />
                                        </div>
                                    </td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <td className='p-2'>Toddlers</td>
                                    <td className='p-2'>
                                        <div className="flex items-center">
                                            <Avater />
                                            <Avater />
                                        </div>
                                    </td>
                                    <td className='p-2'>
                                        <div className="flex">
                                            <Avater />
                                            <Avater />
                                        </div>
                                    </td>
                                    <td className='p-2'>
                                        <div className="flex">
                                            <Avater />
                                            <Avater />
                                        </div>
                                    </td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <td className='p-2'>Pre-K</td>
                                    <td className='p-2'>
                                        <div className="flex items-center">
                                            <Avater />
                                            <Avater />
                                        </div>
                                    </td>
                                    <td className='p-2'>
                                        <div className="flex">
                                            <Avater />
                                            <Avater />
                                        </div>
                                    </td>
                                    <td className='p-2'>
                                        <div className="flex">
                                            <Avater />
                                            <Avater />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='p-2'>A</td>
                                    <td>
                                        <div className="flex items-center">
                                            <Avater />
                                            <Avater />
                                            <Avater />
                                        </div>
                                    </td>
                                    <td className='p-2'>
                                        <div className="flex">
                                            <Avater />
                                            <Avater />
                                        </div>
                                    </td>
                                    <td className='p-2'>
                                        <div className="flex">
                                            <Avater />
                                            <Avater />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            }

        </Card>
    );
};

export default StapManagement;