import React from 'react';
import Sidebar from '../Pages/User/Sidebar';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Top_bar/Navbar';
import { useLocation } from 'react-router-dom';

const UserLayout = () => {
    const location = useLocation();
    return (
        <main className='w-full h-screen flex gap-10 bg-[#F1F6FA]'>
            <Sidebar />
            <section className='w-full h-full overflow-y-auto'>
                {
                    !location.pathname.includes('dashboard/profile') && <Navbar />
                }
                <Outlet />
            </section>
        </main>
    );
};

export default UserLayout;