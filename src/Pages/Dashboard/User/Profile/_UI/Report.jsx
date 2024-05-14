import { Card } from '@material-tailwind/react';
import React from 'react';
import { Pdf } from '../../../../../util/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import ReportCard from '../../../../../Components/Card/ReportCard';


const Report = () => {

    return (
        <div className='w-full pl-[84px] pr-[50px] py-[55px] rounded-xl poppins bg-[#F1F6FA63]'>
            <h1 className="text-slate-900 text-2xl font-bold ">
                Profile Reports
            </h1>
            <div className='mt-10 flex flex-col gap-5'>

                <ReportCard />
                <ReportCard />
                <ReportCard />
                <ReportCard />
            </div>
        </div >
    );
};

export default Report;

