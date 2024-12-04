import { Card } from '@material-tailwind/react';
import React from 'react';
import { Button } from '../../Components/Buttons/Buttons';
import StatisticCard from './_UI/StatisticCard';
import Attendance from './_UI/Attendance';
import AbsentStudentList from './_UI/AbsentStudentList';
import StapManagement from './_UI/StapManagement';
import DownloadCustomReport from './_UI/DownloadCustomReport';
import RecentMedia from './_UI/RecentMedia';
import NotificationSec from './_UI/Sidebar/NotificationSec';
import Messages from './_UI/Sidebar/Messages';
import RecentActivity from './_UI/Sidebar/RecentActivity';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BlankDIalog } from '../../Components/DIalog/BlankDIalog';
import CreateClassRoom from './_UI/CreateClassRoom';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetcher } from '../../Components/helper/axios.instance';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
    const { currentUser } = useSelector((state) => state.user)
    const { classrooms } = useSelector(state => state.classroom)
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate()
    const [data, setData] = useState({
        classRooms: 0,
        students: 0,
        staffs: 0,
        withcontact: 0
    })
    const { data: db } = useQuery({
        queryKey: ["Dashboard"],
        queryFn: async () => {
            const res = await fetcher({
                url: `/student/dashboard?center=${currentUser?._id}`,
                method: 'GET',
            })
            return res
        }
    })

    React.useEffect(() => {
        if (db) {
            setData({
                classRooms: db?.classRooms,
                students: db?.students,
                staffs: db?.staffs,
                withcontact: db?.withcontact
            })
        }
    }, [db])
    const location = useLocation();
    useEffect(() => {
        if (currentUser) {
            if (currentUser?.role === "student") {
              location.pathname === '/dashboard' &&  navigate(`/dashboard/messages`)
            }
        }
    }, [currentUser])
   
    return (
        <Card className='w-full bg-white h-auto inter px-5 pt-5 pb-10  min-h-[80vh] '>
            <BlankDIalog open={open} setOpen={setOpen} size={"sm"}>
                <CreateClassRoom open={open} setOpen={setOpen} />
            </BlankDIalog>
            <section className='lg:flex justify-between items-center'>
                <div>
                    <h1 className="w-40 text-primary lg:text-2xl text-base font-bold ">Dashboard</h1>
                    <p className="w-72 text-neutral-400 mt-2 font-normal lg:text-sm text-xs">Checkout your overview at a glance</p>
                </div>
                <div className='flex gap-5 mt-3 lg:mt-0'>
                    <Link to={'/dashboard/add-student'}>
                        <Button variant={"accent"} className='lg:rounded-3xl lg:px-10 px-4  text-[8px] lg:text-xs lg:py-3'>
                            Add Child
                        </Button>
                    </Link>
                    <Button
                        onClick={() => {
                            setOpen(true)
                        }}
                        variant={"accent"} className='lg:rounded-3xl lg:px-10 px-4  text-[8px] lg:text-xs lg:py-3'>
                        Add Classrooms
                    </Button>
                </div>
            </section>
            <section className='lg:flex mt-10 gap-5 w-full'>
                <div className="w-full">
                    <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-5 gap-3">
                        <StatisticCard
                            onClick={() => {
                                navigate(`/dashboard/rooms?id=${classrooms[0]?._id}`)
                            }}
                            title={"Classrooms"}
                            value={data?.classRooms}
                        />
                        <StatisticCard
                            onClick={() => {
                                navigate('/dashboard/rooms-roster')
                            }}
                            title={"Active Children"}
                            value={data?.students}
                        />
                        <StatisticCard
                            onClick={() => {
                                navigate('/dashboard/staffs')
                            }}
                            title={"Total Staff"}
                            value={data?.staffs}
                        />
                        <StatisticCard
                            onClick={() => {
                                navigate('/dashboard/contacts')
                            }}
                            title={"Parents Contract"}
                            value={`${data?.withcontact}/${data?.students}`}
                        />
                    </div>
                    <Attendance />
                    <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 gap-10">
                        <StapManagement />
                        <AbsentStudentList />
                    </div>
                    <DownloadCustomReport />
                    {/* <RecentMedia /> */}
                </div>
                <div className="w-full mt-5 lg:mt-0 lg:max-w-[280px]  shadow-md shadow-gray-200 p-5 rounded-md">
                    <NotificationSec />
                    <Messages />
                    <RecentActivity />
                </div>
            </section>
        </Card>
    );
};

export default Dashboard;