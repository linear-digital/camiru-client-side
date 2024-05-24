import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const TimeCard = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className="lg:w-[777px] p-10 w-full lg:h-[381px] h-auto bg-white shadow-xl">
                <h2 className='lg:text-3xl font-semibold text-xl'>Time Card</h2>
                <div className="flex justify-between">
                    <button className='btn btn-sm mt-2'>
                        <FontAwesomeIcon icon={faPrint} /> Print
                    </button>
                    <button className='btn btn-sm btn-error text-white mt-2'>
                        <FontAwesomeIcon icon={faTrashCan} /> Delete Time Card
                    </button>
                </div>
                <h4 className='lg:text-sm text-xs mt-4 font-semibold'>
                    Mr. Albert Ward
                </h4>
                <h4 className='lg:text-sm text-xs mt-2 font-semibold'>
                    Thursday, Dec 15 2024
                </h4>
                <div className="overflow-x-auto mt-4 w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead className='bg-[#187A82] text-white '>
                            <tr>
                                <th className='text-center'>In</th>
                                <th>Out</th>
                                <th>Time</th>
                                <th>Note</th>
                            </tr>
                        </thead>
                        <tbody className='my-table'>
                            {/* row 1 */}
                            <tr>
                                <td className='p-3 text-center'>02:00 PM</td>
                                <td className='p-3 text-center'>03:00 PM</td>
                                <td className='p-3 text-center'></td>
                                <td className='p-3 text-center'>Red</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td className='p-3 text-center'>02:00 PM</td>
                                <td className='p-3 text-center'>03:00 PM</td>
                                <td className='p-3 text-center'></td>
                                <td className='p-3 text-center'>Red</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td className='p-3 text-center'>02:00 PM</td>
                                <td className='p-3 text-center'>03:00 PM</td>
                                <td className='p-3 text-center'></td>
                                <td className='p-3 text-center'>Red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TimeCard;