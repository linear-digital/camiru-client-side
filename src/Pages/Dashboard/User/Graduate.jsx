import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Graduate = () => {
    return (
        <div className='w-full flex justify-center items-center poppins'>
            <div className="w-[668px] flex flex-col justify-center items-center shadow-xl h-[570px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="138" height="138" viewBox="0 0 138 138" fill="none">
                    <path d="M69.0234 132.549C104.117 132.549 132.565 104.1 132.565 69.0066C132.565 33.9133 104.117 5.4646 69.0234 5.4646C33.9302 5.4646 5.48145 33.9133 5.48145 69.0066C5.48145 104.1 33.9302 132.549 69.0234 132.549Z" fill="white" />
                    <path d="M69.0233 133.511C104.648 133.511 133.528 104.631 133.528 69.0064C133.528 33.3815 104.648 4.50171 69.0233 4.50171C33.3983 4.50171 4.51855 33.3815 4.51855 69.0064C4.51855 104.631 33.3983 133.511 69.0233 133.511Z" stroke="#00C9AF" stroke-width="8.78947" />
                    <path d="M90.9617 58.6666L90.0655 57.7871L90.9617 58.6666C92.0474 57.5603 92.0474 55.7884 90.9617 54.6821C89.8467 53.5459 88.0164 53.5459 86.9014 54.6821L67.3951 74.5592C65.4264 76.5654 62.1945 76.5655 60.2257 74.5594L52.7219 66.9135C51.6069 65.7774 49.7767 65.7774 48.6617 66.9136C47.576 68.0199 47.576 69.7919 48.6618 70.8982L58.4334 80.855C61.3866 83.8641 66.2344 83.8641 69.1875 80.8548L90.9617 58.6666Z" fill="#00C9AF" stroke="#5CD9CA" stroke-width="2.51128" />
                </svg>
                <h1 className="mt-5 opacity-95 text-gray-900 text-[43.95px] font-bold">Graduated</h1>
                <h5 className="mt-5 opacity-95 text-stone-500 text-[25.11px] font-normal ">You mark Roxie Word as graduated</h5>
                <Link to={'/dashboard'}>
                    <Button variant="filled" color="red" className='rounded-3xl flex items-center bg-[#F8234F] gap-2 mt-5'>
                        <div style={{ width: 30.87, height: 30.73, background: 'white' }}
                            className='rounded-full flex justify-center items-center text-black'
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </div>
                        BACK TO DASHBOARD
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Graduate;