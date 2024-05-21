import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-tailwind/react';
import React from 'react';

const SingleImage = ({ show, setShow }) => {
  
        return (
            <div className='singleImage px-10 py-20 flex justify-center z-50'
            >
                <div className="max-w-[1095.92px] ">
                    <div className="flex justify-between">
                        <h4 className="text-white text-[25px] font-semibold capitalize">photos name here</h4>
                        <button  onClick={() => {
                            setShow(!show)
                        }}>
                            <FontAwesomeIcon icon={faXmarkCircle} className="text-white text-[25px]" />
                        </button>
                    </div>
                    <img className="w-full rounded-xl mt-7 h-[731.42px]" src="/img-394.png" />
                    <div className="flex justify-between mt-7">
                        <h4 className="text-white text-[25px] font-semibold capitalize">Photo Tags</h4>
                        <div className="gap-5 flex">
                            <Button className='bg-[#187A82] text-white' variant='filled'>
                                Download
                            </Button> <Button className='bg-[#FFBB3B] text-white px-10' variant='filled'>
                                Share
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        );
};

export default SingleImage;