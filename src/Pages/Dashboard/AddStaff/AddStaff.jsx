import React from 'react';
import DB_Page_Layout from '../../../Layouts/DB_Page_Layout';
import { Steps } from 'antd';
import Title from './Title';
import PersonalInfo from './Forms/PersonalInfo';
import { useNavigate } from 'react-router-dom';
import Education from './Forms/Education';
import Enrollment from './Forms/Enrollment';
import Records from './Forms/Records';
import Notes from './Forms/Notes';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setStaffvalues } from '../../../redux/staff/staffSlice';
import { useEffect } from 'react';

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
    // const [allData, setAllData] = React.useState({
    //     status: "Active",
    //     shifting: "Morning",
    //     schedule: [],
    //     profilePic: ''
    // });
    const dispatch = useDispatch()
    const { staffValues: allData } = useSelector(state => state.staff)
    const setAllData = (data) => {
        dispatch(setStaffvalues(data))
    }

    console.log(allData);
    const location = useLocation()

    const query = new URLSearchParams(location.search)
    useEffect(() => {
       navigate(`?step=0`) 
    },[])
    const currentStep = query.get('step') || 0
    const navigate = useNavigate();
    return (
        <DB_Page_Layout>
            <div>
                <h1 className=" text-staff-pc lg:text-2xl text-xl font-bold ">Contacts</h1>
                <p className=" text-neutral-400 lg:mt-2 mt-1 font-normal text-sm">To add a profile, please fill out the following information</p>
            </div>
            <Steps
                current={Number(currentStep)}
                className='py-10'
                onChange={(value) => {
                    if (value < currentStep) {
                        navigate(`?step=${value}`)
                    }
                }}
                labelPlacement="vertical"
                items={steps}
            />
            <Title active={steps.find((_step, index) => index === Number(currentStep))} />
            <div className="mt-5">
                {
                    steps[currentStep].step === 1 && <PersonalInfo data={allData} setData={setAllData} />
                }
                {
                    steps[currentStep].step === 2 && <Education data={allData} setData={setAllData} />
                }
                {
                    steps[currentStep].step === 3 && <Enrollment data={allData} setData={setAllData} />
                }
                {
                    steps[currentStep].step === 4 && <Records data={allData} setData={setAllData} />
                }
                {
                    steps[currentStep].step === 5 && <Notes data={allData} setData={setAllData} />
                }
            </div>
        </DB_Page_Layout>
    );
};

export default AddStaff;