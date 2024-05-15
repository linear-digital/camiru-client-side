import React from 'react';
import ProfileCard from '../../Checkin/ProfileCard';
import Header from './Header';
import Sidebar from './_UI/Sidebar';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Filter from '../../Checkin/Filter';

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
    return (
        <div className='w-full lg:p-10 p-5 bg-white'>
            <Filter
                name={pageName}
                desc={"Checkout Roxie Word and take your action !!"}
            />
            <ProfileCard />
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