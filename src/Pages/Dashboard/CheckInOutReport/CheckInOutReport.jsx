import React from 'react';

import DB_Page_Layout from '../../../Layouts/DB_Page_Layout';
import Header from './Header';
import Table from './Table';

const CheckInOutReport = () => {
    return (
        <DB_Page_Layout>
            <Header
                color={"text-[#187A82]"}
                name={`Check in-out Report`}
                desc={"Hi Alvin, don't forget to check your property today"}
            />
            <Table />
        </DB_Page_Layout>
    );
};

export default CheckInOutReport;