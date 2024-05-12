import React from 'react';
import ProfileCard from '../../Checkin/ProfileCard';
import Header from './Header';
import Sidebar from './_UI/Sidebar';
import { Outlet } from 'react-router-dom';

const Profile = () => {
    return (
        <div className='w-full p-10 bg-white'>
            <Header
                name={"Profile Overview"}
                desc={"Checkout Roxie Word and take your action !!"}
            />
            <ProfileCard />
            <section className='mt-10 flex items-start gap-5 '>
                <Sidebar />
                <Outlet />
            </section>
        </div>
    );
};

export default Profile;