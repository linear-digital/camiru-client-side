import React from 'react';
import Filter from './Filter';
import { Image } from 'antd';
import ProfileCard from './ProfileCard';


const Checkin = () => {
    return (
        <div className='bg-white p-10'>
            <Filter
                name={"Student check In - Out Report"}
                desc={"Select your class to checkout the reports"}
            />
            <ProfileCard />
        </div>
    );
};

export default Checkin;