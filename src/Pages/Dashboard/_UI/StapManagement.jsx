import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '@material-tailwind/react';
import React from 'react';
import Avater from '../../../Components/Card/Avater';

const StapManagement = () => {
    return (
        <Card className='p-5 w-full h-full shadow-blue-gray-50'>
            <section className="flex items-center justify-between">
                <h2 className=" text-zinc-800 text-xs font-semibold ">Staff Management</h2>
                <div className="flex gap-3 items-center">
                    <button className='text-red-500 text-xs'>
                        <FontAwesomeIcon icon={faRotateRight} />
                    </button>
                    <div className=" text-zinc-800 text-[7px] font-bold ">Last Refresh: 11:48:16</div>
                    <button className='btn gap-2 btn-secondary bg-[#96C82C] rounded-3xl btn-xs py-2 px-4 text-[10px] text-white'>
                        View Staff
                        <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                </div>
            </section>
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
        </Card>
    );
};

export default StapManagement;