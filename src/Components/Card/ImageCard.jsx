
import React from 'react';
import SingleImage from './SingleImage';
import { useState } from 'react';

const ImageCard = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="w-full h-[160.85px] bg-sky-100 rounded-[6px] border bg-cover bg-center  overflow-hidden poppins"

            style={{
                backgroundImage: 'url("https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg")',
            }}
        >
            {
                show && <SingleImage show={show} setShow={setShow} />
            }
            <div className="w-full h-full flex flex-col justify-end items-start px-5 pb-3 bg-black/30 cursor-pointer"
             onClick={() => setShow(!show)}
            >
                <h1
                   
                    className="text-white text-sm font-semibold">Classname</h1>
                <div className="text-white text-xs font-light ">16:29, 12th Decamber, 2020</div>
            </div>
        </div>
    );
};

export default ImageCard;