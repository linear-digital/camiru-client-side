import { faCircleDown } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '@material-tailwind/react';
import React from 'react';
import ImageCard from '../../../Components/Card/ImageCard';

const RecentMedia = () => {
    return (
        <Card className='p-5 w-full mt-10 shadow-blue-gray-50'>
            <div className="lg:flex justify-between items-center">
                <div>
                    <h3 className="text-zinc-800 text-lg font-semibold ">Recent Photos & videos</h3>
                    <p className=" text-neutral-400 text-xs mt-1 font-normal">Uploading photos & Videos is the #1 way to engage parents.<br /></p>
                </div>
                <button className="w-[150px] h-[22px] bg-orange-400 rounded-sm text-xs flex items-center gap-1 px-2 mt-3 lg:mt-0" >
                    <span className=" text-zinc-800 text-[11px] font-medium ">12th January, 2022</span>
                    <FontAwesomeIcon icon={faCircleDown} />
                </button>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-2 mt-10 gap-5">
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
            </div>
        </Card>
    );
};

export default RecentMedia;