import React from 'react';
import Sidebar from '../Pages/User/Sidebar';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Top_bar/Navbar';

const UserLayout = () => {
    return (
        <main className='w-full h-screen flex gap-10 bg-[#F1F6FA]'>
            <Sidebar />
            <section className='w-full'>
                <Navbar />
                <Outlet />
            </section>
        </main>
    );
};

export default UserLayout;