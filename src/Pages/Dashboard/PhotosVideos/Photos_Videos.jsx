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
        <div className='lg:p-10 p-5 bg-white rounded-lg relative'>
            <div className="lg:flex justify-between items-center">
                <div>
                    <h3 className="text-black/70 lg:text-2xl text-xl font-semibold ">Recent Photos & videos</h3>
                    <p className=" text-neutral-400 text-xs mt-1 font-normal">Uploading photos & Videos is the #1 way to engage parents.<br /></p>
                </div>
                <div className='flex flex-wrap lg:gap-5 gap-3 mt-5 lg:mt-0 items-center'>
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
                    <button className="w-[150px] h-[36px] bg-orange-400 text-xs flex items-center gap-1 px-2 rounded text-white" >
                        <span className=" text-zinc-800 text-xs font-medium ">12th January, 2022</span>
                        <FontAwesomeIcon icon={faCircleDown} />
                    </button>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 gap-5">
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