import React from 'react';
import DB_Page_Layout from '../../../Layouts/DB_Page_Layout';
import ChildReport from './ChildReport';
import ClassRoomReport from './ClassroomReport';
import CenterReport from './CenterReport';
import StaffReport from './StaffReport';
import BillingReport from './BillingReports';

const Reports = () => {
    return (
        <DB_Page_Layout>
            <div>
                <h1 className="text-[#187A82] lg:text-2xl text-xl font-bold ">Reports</h1>
                <p className="text-[#999999] mt-2 font-normal lg:text-sm text-xs">
                    For adding profile, please fillup bellow inforamtion
                </p>
            </div>
            <ChildReport />
            <ClassRoomReport />
            <CenterReport />
            <StaffReport />
            <BillingReport />
        </DB_Page_Layout>
    );
};

export default Reports;