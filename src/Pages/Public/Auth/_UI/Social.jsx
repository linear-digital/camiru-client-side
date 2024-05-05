import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Social = () => {
    return (
        <div className='mt-5 flex justify-between items-center'>
            <button className="w-[329px] flex items-center justify-center px-5 h-12 bg-accent rounded-xl text-white relative hover:bg-white hover:text-black border border-transparent hover:border-black " >
                <div className='text-lg absolute left-5'>
                    <FontAwesomeIcon icon={faGoogle} />
                </div>
                <div className=" text-sm font-medium">Sign in with Google</div>
            </button>
            <button className="w-12 h-12  bg-white hover:bg-accent rounded-xl border border-zinc-300 flex justify-center items-center " >
                <div className="w-6 h-6  bg-accent rounded-full text-sm flex justify-center  items-center text-white ">
                    <FontAwesomeIcon icon={faFacebookF} />
                </div>
            </button>
        </div>
    );
};

export default Social;