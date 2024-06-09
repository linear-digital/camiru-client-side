import { Card } from '@material-tailwind/react';
import React from 'react';
import { Pdf } from '../../../../../util/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import ReportCard from '../../../../../Components/Card/ReportCard';


const Report = () => {

    return (
        <div className='w-full lg:pl-[84px] lg:pr-[50px] px-2 lg:py-[55px] py-5 rounded-xl poppins bg-[#F1F6FA63]'>
            <h1 className="text-slate-900 lg:text-2xl text-xl font-bold ">
                Profile Reports
            </h1>
            <div className='lg:mt-10 mt-5 flex flex-col gap-5'>
                <ReportCard />
                {/* <ReportCard /> */}
                {/* <ReportCard /> */}
                {/* <ReportCard /> */}
            </div>
        </div >
    );
};

export default Report;

