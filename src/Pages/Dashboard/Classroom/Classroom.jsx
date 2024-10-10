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


const ClassRoom = () => {

    const { currentUser } = useSelector(state => state.user)
    const { classrooms } = useSelector(state => state.classroom)

    const searchPa = useSearchParams()
    const search = searchPa[0]?.get('id')
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
    console.log(classrooms);
    if (isLoading) {
        return <Loader />
    }
    return (
        <main className='lg:p-10 p-5 bg-white rounded-lg poppins'>
            <Modal title="Import Existing" open={open} onOk={() => setOpen(false)} 
                onCancel={() => setOpen(false)}
                footer={null}
                width={1000}
                >
                {
                    open && <StudentList id={search} refetch={refetch}/>
                }
            </Modal>
            <section className='flex flex-col lg:flex-row lg:justify-between lg:items-center'>
                <div>
                    <h1 className=" text-primary lg:text-2xl text-xl font-bold ">Classroom 
                        </h1>
                    <p className=" text-neutral-400 mt-2 font-normal text-sm">Select your class to checkout the reports</p>
                </div>
                <div className='flex gap-10 items-center mt-3 lg:mt-0'>

                    <Dropdown
                        className='option-classroom'
                        menu={{
                            items: [
                                {
                                    label: <Link to={'/dashboard/add-student'}
                                        className={`text-start`}
                                        >
                                        Add New
                                    </Link>,
                                    key: '0',
                                },
                                {
                                    label: <button
                                        className={`text-start`}
                                        onClick={() => setOpen(true)}
                                        >
                                        Import Existing
                                    </button>,
                                    key: '1',
                                }
                            ],
                        }}
                        trigger={['click']}
                    >
                        <button className="w-[135px] lg:h-[47px] h-[35px] pl-[19px] pr-[18px] py-[12.59px] bg-[#15acde40] text-[#15ACDE] rounded-[11.02px] justify-center items-center gap-[11.02px] inline-flex text-sm font-bold">
                            <span className=" text-xs font-medium tracking-tight">
                                Add People
                            </span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                    </Dropdown>
                </div>
            </section>
            <section className='lg:mt-10 mt-5 w-full'>
                <Table data={data} />
            </section>
            <section className='flex justify-between items-center lg:mt-20 mt-10'>
                <div>
                    <h1 className=" text-primary lg:text-2xl text-xl font-bold ">Stuff 
                    </h1>
                    <p className="text-neutral-400 mt-2 font-normal text-sm">Upcoming Student list donw bellow</p>
                </div>
            </section>
            <section className='lg:mt-10 mt-5 w-full'>
                <Table />
            </section>
        </main >
    );
};

export default ClassRoom;