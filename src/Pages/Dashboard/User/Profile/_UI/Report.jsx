import { Card } from '@material-tailwind/react';
import React from 'react';
import { Pdf } from '../../../../../util/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


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

const ReportCard = ({ type }) => {
    return (
        <Card className='p-5 w-full shadow-none border '>
            <div className='flex  justify-between items-center'>
                <div className="flex gap-5">
                    <Pdf />
                    <div>
                        <h4 className=" text-black text-base font-medium ">
                            Download Check in-out Reports
                        </h4>
                        <h5 className=" text-stone-500 text-sm font-medium ">4.5Mb</h5>
                    </div>
                </div>
                <button className="w-[50px] h-[50px] bg-[#E2FFFB]
                flex justify-center items-center text-[#00C9AF] rounded-full
                ">
                    <FontAwesomeIcon icon={faDownload} />
                </button>
            </div>

        </Card>
    )
}