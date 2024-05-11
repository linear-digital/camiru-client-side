import React from 'react';
import ProfileCard from '../../Checkin/ProfileCard';
import Header from './Header';

const Profile = () => {
    return (
        <div className='w-full p-10 bg-white'>
            <Header
                name={"Profile Overview"}
                desc={"Checkout Roxie Word and take your action !!"}
            />
            <ProfileCard />
            <section className='mt-10'>

            </section>
        </div>
    );
};

export default Profile;