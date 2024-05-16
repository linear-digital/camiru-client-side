import React from 'react';
import DB_Page_Layout from '../../../Layouts/DB_Page_Layout';
import Filter from '../ClassRoomRoster/Filter';
import Table from '../Classroom/Table';

const StaffList = () => {
    return (
        <DB_Page_Layout>
            <Filter
                name={"Staff List"}
                desc={"Hi Alvin, don't forget to check your property today"}
            />
            <div className='lg:mt-10 mt-5'>
                <Table />
            </div>
        </DB_Page_Layout>
    );
};

export default StaffList;