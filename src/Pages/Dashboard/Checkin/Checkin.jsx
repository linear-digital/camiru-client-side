import React from 'react';
import Filter from './Filter';
import { Image } from 'antd';
import ProfileCard from './ProfileCard';
import Table from './Table';
import StaffProfileCard from '../StaffProfile/StaffProfileCard';



const Checkin = ({ page }) => {
    return (
        <div className='bg-white p-10'>
            <Filter
                name={`${page} check In - Out Report`}
                desc={"Select your class to checkout the reports"}
            />
            {
                page !== "staff" ?
                    <ProfileCard /> :
                    <StaffProfileCard />
            }
            <Table />
        </div>
    );
};

export default Checkin;