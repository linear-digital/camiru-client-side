import React from 'react';

import DB_Page_Layout from '../../../Layouts/DB_Page_Layout';
import Header from './Header';
import Table from './Table';

import { usePDF } from 'react-to-pdf';

const CheckInOutReport = () => {
    const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });
    return (
        <DB_Page_Layout>
            <Header
                toPDF={toPDF}
                color={"text-[#187A82]"}
                name={`Check in-out Report`}
                desc={"Hi Alvin, don't forget to check your property today"}
            />
            <Table targetRef={targetRef}/>
        </DB_Page_Layout>
    );
};

export default CheckInOutReport;