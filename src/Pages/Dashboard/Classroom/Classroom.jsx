import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Table from './Table';
import { Dropdown } from 'antd';
import { useState } from 'react';
import {
    useQuery,
} from '@tanstack/react-query'
import { useSelector } from 'react-redux';
import api, { fetcher } from '../../../Components/helper/axios.instance';
import Loader from '../../../Components/Loader';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';
import StudentList from './StudentList';
import { useNavigate } from 'react-router-dom';
import ImportPeople from '../ClassRoomRoster/ImportPeople';


const ClassRoom = () => {

    const { currentUser } = useSelector(state => state.user)
    const { classrooms } = useSelector(state => state.classroom)

    const searchPa = useSearchParams()
    const search = searchPa[0]?.get('id')
    const [option, setOption] = useState(classrooms[0])
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['students', currentUser?._id, search],
        queryFn: async () => {

            const res = await fetcher({
                url: `/student/center/${currentUser?._id}?classroom=${search || classrooms[0]?._id}`,
                method: 'GET',
            })
            return res
        },
    })
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    if (isLoading) {
        return <Loader />
    }
    return (
        <main className='lg:p-10 p-5 bg-white rounded-lg poppins'>
            
            <section className='flex flex-col lg:flex-row lg:justify-between lg:items-center'>
                <div>
                    <h1 className=" text-primary lg:text-2xl text-xl font-bold ">Classroom
                    </h1>
                    <p className=" text-neutral-400 mt-2 font-normal text-sm">Select your class to checkout the reports</p>
                </div>
                <div className='flex gap-7 items-center mt-3 lg:mt-0'>
                    <Dropdown
                        className='option-classroom'
                        menu={{
                            items: [
                                ...classrooms?.map((item, index) => {
                                    return {
                                        label: <button
                                            className={`${search === item ? "text-primary" : ""} w-full   text-start`}
                                            onClick={() => {
                                                navigate('/dashboard/rooms?id=' + item?._id)
                                            }}>
                                            {item?.name}
                                        </button>,
                                        key: index,
                                    }
                                })
                            ],
                        }}
                        trigger={['click']}
                    >
                        <button className="w-auto lg:h-[47px] h-[35px] pl-[19px] pr-[18px] py-[12.59px] bg-[#15acde40] text-[#15ACDE] rounded-[11.02px] justify-center items-center gap-[11.02px] inline-flex text-sm font-bold">
                            <span className=" text-xs font-medium tracking-tight">
                                {search ? classrooms?.find(c => c._id === search)?.name : classrooms[0]?.name}
                            </span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                    </Dropdown>
                    <ImportPeople refetch={refetch}/>
                </div>
            </section>
            <section className='lg:mt-10 mt-5 w-full'>
                <Table data={data} refetch={refetch} />
            </section>
            <section className='flex justify-between items-center lg:mt-20 mt-10'>
                <div>
                    <h1 className=" text-primary lg:text-2xl text-xl font-bold ">Stuff
                    </h1>
                    <p className="text-neutral-400 mt-2 font-normal text-sm">Upcoming Student list donw bellow</p>
                </div>
            </section>
            <section className='lg:mt-10 mt-5 w-full'>
                <Table data={data} refetch={refetch} />
            </section>
        </main >
    );
};

export default ClassRoom;