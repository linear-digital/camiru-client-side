import React from "react";
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonGroup } from '@material-tailwind/react';
import { Button } from '@material-tailwind/react';

import {
    Dialog,
    DialogBody,
} from "@material-tailwind/react";


const SingleImage = ({ show, setShow }) => {

    return (
        <Dialog open={show} handler={setShow} size="lg" className="p-0 bg-gradient-to-t from-[#3de2f1f3] to-[#61d8e3f9] ">
            <DialogBody className="p-0 h-screen overflow-y-auto">
                <div className='singleImage bg-gradient-to-t from-[#3de2f1f3] to-[#61d8e3f9] lg:px-10 px-5 lg:py-10 py-10 flex justify-center z-50'
                >
                    <div className="lg:max-w-[1095.92px] max-w-full ">
                        <div className="flex justify-between">
                            <h4 className="text-white text-[25px] font-semibold capitalize">photos name here</h4>
                            <button onClick={() => {
                                setShow(!show)
                            }}
                            className="text-white hover:text-red-400"
                            >
                                <FontAwesomeIcon icon={faXmarkCircle} className=" text-[25px]" />
                            </button>
                        </div>
                        <img className="w-full rounded-xl mt-7 lg:h-[731.42px]" src="/img-394.png" />
                        <div className="flex justify-between items-start mt-7">
                            <div>
                                <h4 className="text-white text-[25px] font-semibold capitalize">Photo Tags</h4>
                                <div className='flex gap-3 w-[350px] flex-wrap mt-5'>
                                    <Button className='capitalize bg-white text-[#187A82] px-5 rounded-3xl ' variant='filled'>
                                        Emily
                                    </Button>
                                    <Button className='capitalize bg-white text-[#187A82] px-5 rounded-3xl ' variant='filled'>
                                        Infants
                                    </Button>
                                    <Button className='capitalize bg-white text-[#187A82] px-5 rounded-3xl ' variant='filled'>
                                        Devin
                                    </Button>
                                    <Button className='capitalize bg-white text-[#187A82] px-5 rounded-3xl ' variant='filled'>
                                        After School
                                    </Button>
                                    <Button className='capitalize bg-white text-[#187A82] px-5 rounded-3xl ' variant='filled'>
                                        Camiru
                                    </Button>
                                    <Button className='capitalize bg-white text-[#187A82] px-5 rounded-3xl ' variant='filled'>
                                        Class Time
                                    </Button>
                                </div>
                            </div>
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
            </DialogBody>
        </Dialog>
    );
};

export default SingleImage;