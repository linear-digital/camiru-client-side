import { PlusIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Link } from 'react-router-dom';

const Records = ({ data, setData }) => {
    return (
        <div className='bg-staff-bg border-staff-pc border rounded-lg w-full lg:p-[53px] p-5 '>
            <div className="flex flex-wrap gap-10 justify-between">
                <div className="w-[281px] h-[47px] pl-[19px] pr-[18px] py-[12.59px] bg-white rounded-[5px] border border-black/20 justify-center items-center gap-[11.02px] inline-flex">
                    <div className="text-black text-base font-normal ">Curriculum Vitae  </div>
                </div>
                <div className="w-[281px] h-[47px] pl-[19px] pr-[18px] py-[12.59px] bg-white rounded-[5px] border border-black/20 justify-center items-center gap-[11.02px] inline-flex">
                    <div className="text-black text-base font-normal ">
                        Certificates
                    </div>
                </div>
                <div className="w-[281px] h-[47px] pl-[19px] pr-[18px] py-[12.59px] bg-white rounded-[5px] border border-black/20 justify-center items-center gap-[11.02px] inline-flex">
                    <div className="text-black text-base font-normal ">
                        Trainings
                    </div>
                </div>
            </div>
            <div className='flex items-center border border-staff-pc py-2  rounded gap-x-3 px-5 text-base w-[250px] justify-center cursor-pointer mt-10'

            >
                <span>
                   Add Records/ File
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

export default Records;