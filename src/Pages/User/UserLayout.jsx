import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
    return (
        <div className='w-full h-screen flex'>
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default UserLayout;