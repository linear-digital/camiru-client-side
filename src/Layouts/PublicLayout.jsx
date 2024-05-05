import React from 'react';
import { Outlet } from 'react-router-dom';
import { LogoWhite } from '../Components/Logo/Logo';
import { Link } from 'react-router-dom';

const PublicLayout = () => {
    return (
        <div className='grid grid-cols-12 h-screen poppins font-medium'>
            {/* Authentication Page Right Side  */}
            <div className=" col-span-3 pt-20 pb-10 bg-primary pl-[64px] h-full flex flex-col justify-between">
                <div>
                    <LogoWhite className='max-w-[224px]' />
                    <h1 class="mt-14 text-white text-4xl font-medium  leading-[48px]">
                        Camiru Content GoesHere as one line sentence
                    </h1>
                </div>
                <div>
                    <span className="text-white text-sm font-medium ">Having troubles? </span>
                    <Link to={'/contact'} className="text-white text-sm font-medium  btn-link">Get Help</Link></div>
            </div>
            {/* Authentication Page  Content  */}
            <div className="col-span-9">
                <Outlet />
            </div>
        </div>
    );
};

export default PublicLayout;