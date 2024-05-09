import { Image } from 'antd';
import React from 'react';

const ImageCard = () => {
    return (
        <div className="w-full h-[160.85px] bg-sky-100 rounded-[4.85px] border bg-cover bg-center cursor-pointer"
            style={{
                backgroundImage: 'url("https://classplusapp.com/growth/wp-content/uploads/2022/06/8-Tips-to-Upgrade-to-Design-Classroom.jpg")',
            }}
        >
            <div className="w-full h-full flex flex-col justify-end items-start px-5 pb-3 bg-black/20">
                <h1 className="text-white text-sm font-semibold">Classname</h1>
                <div className="text-white text-xs font-light font-['Poppins']">16:29, 12th Decamber, 2020</div>
            </div>
        </div>
    );
};

export default ImageCard;