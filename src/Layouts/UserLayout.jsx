import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { io } from 'socket.io-client';
import Sidebar from '../Pages/User/Sidebar';
import Navbar from '../Components/Top_bar/Navbar';
import DefaultFetch from './DefaultFetch';
import Loader from './Loader';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSocket } from '../redux/socket/socketSlice';
import Cookie from 'js-cookie'
import Login from '../Pages/Public/Auth/Login';
const UserLayout = () => {
    const location = useLocation();
    const { currentUser } = useSelector(state => state.user);
    const { width } = useSelector(state => state.settings);
    const token = Cookie.get('token-camiru')

    return (
        <main className='w-full h-screen flex lg:gap-6 bg-[#F1F6FA]'>
            <DefaultFetch />
            {
                currentUser ?
                    <>
                        {
                            !(width < 1200 && width > 1000) ?
                                <div className="hidden lg:block max-w-[250px]">
                                    <Sidebar />
                                </div>
                                :
                                null
                        }
                        <section className='w-full max-w-full h-full overflow-auto pb-20 lg:pb-5'>
                            <div className="container mx-auto">
                                {(!location.pathname.includes('dashboard/profile') && !location.pathname.includes('dashboard/support')) && <Navbar />}
                                <Outlet />
                            </div>
                        </section>
                    </>
                    : token ? <Loader /> : <Login />
            }
        </main >
    );
};

export default UserLayout;
