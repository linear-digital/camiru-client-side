import React from 'react';
import Sidebar from '../Pages/User/Sidebar';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Top_bar/Navbar';
import { useLocation } from 'react-router-dom';

const UserLayout = () => {
    const location = useLocation();
    return (
        <main className='w-full h-screen flex gap-5 bg-[#F1F6FA]'>
            <div className='hidden lg:block max-w-[250px]'>
                <Sidebar />
            </div>
            <section className='w-full max-w-full h-full overflow-auto  pb-20 lg:pb-5'>
                {
                    (!location.pathname.includes('dashboard/profile') && !location.pathname.includes('dashboard/support')) && <Navbar />
                }
                <Outlet />
            </section>
        </main>
    );
};

export default UserLayout;