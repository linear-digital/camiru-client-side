import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '@material-tailwind/react';
import React from 'react';
import ImageCard from '../../../Components/Card/ImageCard';
import { faCircleDown } from '@fortawesome/free-regular-svg-icons';
import { ClassRoomSelector } from '../../../Components/Card/Dropdown';
import { class_rooms } from '../../../util/classrooms';
import { Bars, Grids } from '../../../util/icons';


const Photos_Videos = () => {

    return (
        <div className='p-10 bg-white rounded-lg'>
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-zinc-800 text-2xl font-semibold ">Recent Photos & videos</h3>
                    <p className=" text-neutral-400 text-xs mt-1 font-normal">Uploading photos & Videos is the #1 way to engage parents.<br /></p>
                </div>
                <div className='flex gap-5 items-center'>
                    <ClassRoomSelector options={class_rooms}
                        color={"#FFBB3B"} border={"#FFBB3B"}
                    />
                    <ClassRoomSelector options={[
                        "Photos", "Videos"
                    ]}
                        color={"#FFBB3B"} border={"#FFBB3B"}
                    />
                    <button className='w-9 h-9 flex items-center justify-center rounded-md bg-[#FFBB3B33] border-none '>
                        <Bars />
                    </button>
                    <button className='w-9 h-9 flex items-center justify-center rounded-md bg-[#FFBB3B33] border-none '>
                        <Grids />
                    </button>
                    <button className="w-[150px] h-[36px] bg-orange-400 text-xs flex items-center gap-1 px-2 rounded" >
                        <span className=" text-zinc-800 text-xs font-medium ">12th January, 2022</span>
                        <FontAwesomeIcon icon={faCircleDown} />
                    </button>
                </div>
            </div>
            <div className="grid media-grid mt-10 gap-5">
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
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
        </div>
    );
};

export default Photos_Videos;