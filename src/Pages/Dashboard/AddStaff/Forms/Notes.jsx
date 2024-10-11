import { PlusIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Link } from 'react-router-dom';

const Notes = () => {
    return (
        <div className='bg-staff-bg border-staff-pc border rounded-lg w-full lg:p-[53px] p-5 '>
            <div className='flex items-center border border-staff-pc py-2  rounded gap-x-3 px-5 text-base w-[250px] justify-center cursor-pointer'

            >
                <span>
                   Add Personal Notes
                </span>
                <PlusIcon className='w-5 h-5' />
            </div>
            <div className="flex justify-center items-center gap-x-4 mt-10">
                <Link to={'?step=1'} className='py-2 px-10 rounded-3xl mt-3 text-black/40  font-semibold bg-transparent border border-staff-pc text-lg hover:text-staff-pc'>
                    Previous
                </Link>
                <button
                    type='submit'
                    className='py-2 px-10 rounded-3xl mt-3 text-white  font-semibold bg-staff-pc border border-staff-pc text-lg'
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Notes;