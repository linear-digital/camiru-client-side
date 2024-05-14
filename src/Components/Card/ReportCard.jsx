import { Card } from '@material-tailwind/react';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Pdf } from '../../util/icons';

const ReportCard = ({ type, size }) => {
    return (
        <Card className={`${size === "sm" ? "p-2" : "p-5"} w-full shadow-none border `}>
            <div className='flex  justify-between items-center'>
                <div className="flex gap-5 items-center">
                    {
                        size !== "sm" ? <Pdf />
                            :
                            <div className="avatar">
                                <div className="w-8 h-8 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                    }

                    <div>
                        <h4 className={`text-black ${size === "sm" ? "text-sm" : "text-base"} font-medium `}>
                            Download Check in-out Reports
                        </h4>
                        {
                            size === "sm" ?
                                <div className=" text-stone-500 text-xs font-medium mt-1">21 Dec, 2022</div>
                                :
                                <h5 className=" text-stone-500 text-sm font-medium ">4.5Mb</h5>
                        }
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    {
                        size === "sm" && <Pdf className={"w-7 h-8"} />
                    }
                    {
                        size !== "sm" ?
                            <button className="w-[50px] h-[50px] bg-[#E2FFFB]
                flex justify-center items-center text-[#00C9AF] rounded-full
                ">
                                <FontAwesomeIcon icon={faDownload} />
                            </button>
                            :
                            <button className="w-8 h-8 bg-[#E2FFFB]
                            flex justify-center items-center text-[#00C9AF] rounded-full
                                ">
                                <FontAwesomeIcon icon={faDownload} />
                            </button>
                    }
                </div>

            </div>

        </Card>
    )
}
export default ReportCard