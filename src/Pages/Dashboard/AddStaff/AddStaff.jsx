import React from 'react';
import DB_Page_Layout from '../../../Layouts/DB_Page_Layout';
import { Steps } from 'antd';
import Title from './Title';
import PersonalInfo from './Forms/PersonalInfo';
import { useNavigate } from 'react-router-dom';
import Education from './Forms/Education';

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
    const navigate = useNavigate()
    const query = new URLSearchParams(window.location.search)
    const currentStep = query.get('step') || 0
  
    return (
        <DB_Page_Layout>
            <div>
                <h1 className=" text-staff-pc lg:text-2xl text-xl font-bold ">Contacts</h1>
                <p className=" text-neutral-400 lg:mt-2 mt-1 font-normal text-sm">To add a profile, please fill out the following information</p>
            </div>
            <Steps
                current={Number(currentStep)}
                onChange={(e) => {
                    setCurrent(e)
                    navigate(`?step=${e}`)
                }}
                className='py-10'
                labelPlacement="vertical"
                items={steps}
            />
            <Title active={steps[current]} />
            <div className="mt-5">
                {
                    steps[currentStep].step === 1 && <PersonalInfo data={allData} setData={setAllData} />
                }
                {
                    steps[currentStep].step === 2 && <Education data={allData} setData={setAllData} />
                }
            </div>
        </DB_Page_Layout>
    );
};

export default AddStaff;