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
                <h2 className=" text-zinc-800 text-sm font-semibold ">Staff Management</h2>
                <div className="flex gap-4 items-center">
                    <button className='text-red-500 text-sm'>
                        <FontAwesomeIcon icon={faRotateRight} />
                    </button>
                    <div className=" text-zinc-800 text-xs font-bold ">Last Refresh: 11:48:16</div>
                    <button className='btn gap-2 btn-secondary bg-[#96C82C] rounded-3xl btn-sm text-sm px-6'>
                        View Staff
                        <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                </div>
            </section>
            <div className="overflow-x-auto mt-5">
                <table className="table text-xs">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Class</th>
                            <th>Students</th>
                            <th>Teachers</th>
                            <th>Absence</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>Infants</td>
                            <td>
                                <div className="flex items-center">
                                    <Avater />
                                    <Avater />
                                    <Avater />
                                    <Avater />
                                    <div className="w-6 h-6 bg-white rounded-full border ml-[-5px] z-10 flex justify-center items-center text-[10px]">
                                        5+
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex">
                                    <Avater />
                                    <Avater />
                                </div>
                            </td>
                            <td>
                                <div className="flex">
                                    <Avater />
                                    <Avater />
                                </div>
                            </td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <td>Toddlers</td>
                            <td>
                                <div className="flex items-center">
                                    <Avater />
                                    <Avater />
                                </div>
                            </td>
                            <td>
                                <div className="flex">
                                    <Avater />
                                    <Avater />
                                </div>
                            </td>
                            <td>
                                <div className="flex">
                                    <Avater />
                                    <Avater />
                                </div>
                            </td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <td>Pre-K</td>
                            <td>
                                <div className="flex items-center">
                                    <Avater />
                                    <Avater />
                                </div>
                            </td>
                            <td>
                                <div className="flex">
                                    <Avater />
                                    <Avater />
                                </div>
                            </td>
                            <td>
                                <div className="flex">
                                    <Avater />
                                    <Avater />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>A</td>
                            <td>
                                <div className="flex items-center">
                                    <Avater />
                                    <Avater />
                                    <Avater />
                                </div>
                            </td>
                            <td>
                                <div className="flex">
                                    <Avater />
                                    <Avater />
                                </div>
                            </td>
                            <td>
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