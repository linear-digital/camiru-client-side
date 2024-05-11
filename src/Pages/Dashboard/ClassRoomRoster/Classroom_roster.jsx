import React from 'react';
import NavSearchbar from '../../../Components/Top_bar/NavSearchbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Square } from '../../../util/icons';
import { Dropdown } from 'antd';
import { Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Table from '../Classroom/Table';
import Filter from './Filter';

const Classroom_roster = () => {
    const [option, setOption] = useState("Infants");
    const [reportType, setReportType] = useState("Daily Reports");
    return (
        <main className='p-10 bg-white rounded-lg poppins'>
            <Filter
                name={"Classroom Rosters"}
                desc={"Select your class to checkout the reports"}
            />
            <section className='mt-10 mb-20'>
                <Table />
            </section>
            <Filter
                name={"Upcoming"}
                desc={"Upcoming Student list donw bellow"}
            />
            <section className='mt-10 mb-20'>
                <Table />
            </section> 
             <Filter
                name={"Graduated"}
                desc={"Graduated Student list donw bellow"}
            />
            <section className='mt-10'>
                <Table />
            </section>
        </main>
    );
};

export default Classroom_roster;