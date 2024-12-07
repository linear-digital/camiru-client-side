import React from 'react';
import { Outlet } from 'react-router-dom';
import { LogoWhite } from '../Components/Logo/Logo';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Cookie from 'js-cookie';
import { useNavigate } from 'react-router-dom';
const PublicLayout = () => {
    const token = Cookie.get('token-camiru2')
    const navigate = useNavigate()
    useEffect(() => {
        if (token) {
            navigate('/dashboard')
        }
    }, [token])
    return (
        <div className='lg:grid grid-cols-12 h-screen poppins font-medium'>
            {/* Authentication Page Right Side  */}
            <div className="lg:col-span-3 col-span-12 w-full lg:pt-20 lg:pb-10 bg-primary lg:pl-[44px] px-5 lg:px-0 h-full flex flex-col lg:justify-between justify-center min-h-[200px] lg:max-h-full max-h-[210px]">
                <div className='flex flex-col justify-center'>
                    <LogoWhite className='lg:max-w-[224px] max-w-[150px]' />
                    <h1 className="lg:mt-14 mt-3 text-white lg:text-[36px] text-xl font-medium  lg:leading-[48px]">
                        Camiru Content GoesHere as one line sentence
                    </h1>
                </div>
                <div className='text-sm lg:mt-5 mt-2'>
                    <span className="text-white  font-medium ">Having troubles? </span>
                    <Link to={'/contact'} className="text-white  font-medium  btn-link">Get Help</Link>
                </div>
            </div>
            {/* Authentication Page  Content  */}
            <div className="lg:col-span-9 col-span-12">
                <Outlet />
            </div>
        </div>
    );
};

export default PublicLayout;