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
    const { selected, refreshChild } = useSelector(state => state.child)
    const [loading, setLoading] = React.useState(false);
    useEffect(() => {
        (
            async () => {
                try {
                    setLoading(true)
                    const res = await fetcher({
                        url: `/student/${params.id}`,
                        method: 'GET',
                    })
                    setLoading(false)
                    dispatch(setSelectedSt(res || []))
                }
                catch (err) {
                    dispatch(setSelectedSt([]))
                    toast.error(err?.response?.data?.message || 'Something went wrong');
                }
            }
        )()
    }, [params, refreshChild])
    if (!selected || loading) {
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
                    location.search.includes('clock-in-out') && <ClockInOut />
                } {
                    location.search.includes('address-contact') && <Address_Contact />
                }
            </section>
        </div>
    );
};

export default StaffProfile;