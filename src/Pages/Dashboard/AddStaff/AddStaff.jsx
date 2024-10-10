import React from 'react';
import DB_Page_Layout from '../../../Layouts/DB_Page_Layout';
import { Steps } from 'antd';
import Title from './Title';
import PersonalInfo from './Forms/PersonalInfo';

const AddStaff = () => {
    const steps = [
        {
            step: 1,
            description: 'Information',
            full_desc: "Personal Information",
        },
        {
            step: 2,
            description: 'Education',
            full_desc: "Education",
        },
        {
            step: 3,
            description: 'Enrollment',
            full_desc: "Enrollment",
        },
        {
            step: 4,
            description: 'Records',
            full_desc: "Records",
        },
        {
            step: 5,
            description: 'Notes',
            full_desc: "Additional Notes",
        }
    ]
    const [current, setCurrent] = React.useState(0);
    const [allData, setAllData] = React.useState({});
    console.log(allData);
    const updateState = (name, value) => {
        setAllData({ ...allData, [name]: value })
    }
    return (
        <DB_Page_Layout>
            <div>
                <h1 className=" text-staff-pc lg:text-2xl text-xl font-bold ">Contacts</h1>
                <p className=" text-neutral-400 lg:mt-2 mt-1 font-normal text-sm">To add a profile, please fill out the following information</p>
            </div>
            <Steps
                current={current}
                onChange={setCurrent}
                className='py-10'
                labelPlacement="vertical"
                items={steps}
            />
            <Title active={steps[current]} />
            <div className="mt-5">
                {
                    steps[current].step === 1 && <PersonalInfo data={allData} setData={setAllData} />
                }
            </div>
        </DB_Page_Layout>
    );
};

export default AddStaff;