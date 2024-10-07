import React from 'react';
import ProfileCard from '../../Checkin/ProfileCard';
import Header from './Header';
import Sidebar from './_UI/Sidebar';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Filter from '../../Checkin/Filter';
import { useParams } from 'react-router-dom';
import StaffProfileCard from './_UI/StaffProfileCard';
import { useEffect } from 'react';
import api, { fetcher } from '../../../../Components/helper/axios.instance';
import { useDispatch } from 'react-redux';
import { setSelectedSt } from '../../../../redux/child/childSlice';
import { useSelector } from 'react-redux';
import Loader from '../../../../Layouts/Loader';
import toast from 'react-hot-toast';

const Profile = () => {
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
            setPageName("Profile Overview")
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
                desc={"Checkout Roxie Word and take your action !!"}
            />
            {
                params.role === "staff" ?
                    <StaffProfileCard />
                    :
                    <ProfileCard user={selected} />
            }

            <section className='mt-10 flex items-start gap-5 '>
                {
                    !isGraduate && <Sidebar />
                }
                <Outlet />
            </section>
        </div>
    );
};

export default Profile;