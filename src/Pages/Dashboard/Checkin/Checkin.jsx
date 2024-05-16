import React from 'react';
import Filter from './Filter';
import { Image } from 'antd';
import ProfileCard from './ProfileCard';
import Table from './Table';


const Checkin = ({ page }) => {
    return (
        <div className='bg-white p-10'>
            <Filter
                name={`${page} check In - Out Report`}
                desc={"Select your class to checkout the reports"}
            />
            <ProfileCard />
            <Table />
        </div>
    );
};

export default Checkin;