import React from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import toast from 'react-hot-toast';

import { fetcher } from '../../../Components/helper/axios.instance';
import { setSelectedSt } from '../../../redux/child/childSlice';

import Filter from './Filter';
import StaffProfileCard from './StaffProfileCard';
import StaffNavigation from './StaffNavigation';
import ClockInOut from './ClockInOut';
import Address_Contact from './Address_Contact';
import Loader from '../../../Components/Loader';
import Enrollment from './Enrollment';
import ScheduleTimeOff from './ScheduleTimeOff';
import TimeCard from './TimeCard';
import { setStaff } from '../../../redux/staff/staffSlice';

const StaffProfile = () => {
    const location = useLocation();
    const [pageName, setPageName] = React.useState("Profile Overview")
    const [isGraduate, setIsGraduate] = React.useState(false)
    const isIncluded = (path) => {
        return location.pathname.includes(path)
    }
    React.useEffect(() => {
        if (isIncluded('report')) {
            setPageName("Profile Report")
        }
        else if (isIncluded('schedule-absence')) {
            setPageName("Schedule Absence")
        }
        else if (isIncluded('health-log')) {
            setPageName("Health Log")
        }
        else if (isIncluded('development-evidence')) {
            setPageName("Development Evidence")
        }
        else if (isIncluded('timecard')) {
            setPageName("Time Card")
        }
        else {
            setPageName("Staff Profile")
        }

        if (isIncluded('graduate')) {
            setIsGraduate(true)
        }
        else {
            setIsGraduate(false)
        }
    }, [location.pathname])
    const params = useParams();
    const dispatch = useDispatch();
    const { staff } = useSelector(state => state.staff)
    const [loading, setLoading] = React.useState(false);
    useEffect(() => {
        (
            async () => {
                try {
                    setLoading(true)
                    const res = await fetcher({
                        url: `/staff/${params.id}`,
                        method: 'GET',
                    })
                    setLoading(false)
                    dispatch(setStaff(res || {}))
                }
                catch (err) {
                    setLoading(false)
                    dispatch(setStaff({}))
                    console.error(err)
                    
                }
            }
        )()
    }, [params.id])
    if (!staff || loading) {
        return <Loader />
    }
    return (
        <div className='w-full lg:p-10 p-5 bg-white'>
            <Filter
                name={pageName}
                desc={"Select your class to checkout the reports"}
            />
            <StaffProfileCard />
            <StaffNavigation />
            <section className='mt-10 flex items-start gap-5 w-full'>
                {
                    (location.search.includes('clock-in-out') || !location.search) && <ClockInOut />
                } {
                    location.search.includes('address-contact') && <Address_Contact />
                }
                {
                    location.search.includes('enrollment') && <Enrollment />
                }
                {
                    location.search.includes('schedule-absence') && <ScheduleTimeOff />
                }
                {
                    location.search.includes('time-card') && <TimeCard />
                }
            </section>
        </div>
    );
};

export default StaffProfile;