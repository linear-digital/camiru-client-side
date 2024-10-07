import React from 'react';
import NavSearchbar from '../../../Components/Top_bar/NavSearchbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Square } from '../../../util/icons';
import Table from './Table';
import api, { fetcher } from '../../../Components/helper/axios.instance';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../Layouts/Loader';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dropdown } from 'antd';
import { useState } from 'react';
import { Switch } from 'antd';

const All_Contacts = () => {
    const { currentUser } = useSelector(state => state.user)
    const { classrooms } = useSelector(state => state.classroom)
    const [option, setOption] = useState(null);
    const [isBlured, setIsBlured] = useState(false);
    const [search, setSearch] = useState("");
    const [withoutContact, setWithoutContact] = useState(false);
    const { data, isLoading } = useQuery({
        queryKey: ['All_students', currentUser?._id, option?._id, search,withoutContact],
        queryFn: async () => {
           
            const res = await fetcher({
                url: `/student/center/search/${currentUser?._id}?search=${search}&classroom=${option ? option?._id : ""}&wc=${withoutContact}`,
                method: 'GET',
            })
            return res
        }
    })
    if (isLoading) {
        return <Loader />
    }
    return (
        <main className='lg:p-10 p-5 bg-white rounded-lg'>
            <section className='lg:flex justify-between items-center'>
                <div>
                    <h1 className=" text-primary lg:text-2xl text-xl font-bold ">All Contacts</h1>
                    <p className=" text-neutral-400 lg:mt-2 mt-1 font-normal text-sm">Checkout your overview at a glance</p>
                </div>
                <div className='flex flex-wrap lg:flex-nowrap lg:gap-5 gap-3 items-center'>
                    <div className="">
                        <h4 className='text-sm'>
                            Kids without contacts
                        </h4>
                        <Switch  checked={withoutContact} onChange={setWithoutContact} size='small' />
                    </div>
                    <div className='mt-2 lg:mt-0 lg:w-auto w-full'>
                        <NavSearchbar variant={'borderd'} placeholder={"Search Contact"} state={search} setState={setSearch}
                            setIsBlured={setIsBlured}
                        />
                    </div>
                    <Link to={'/dashboard/add-student'} className="min-w-[135px] h-[47px] pl-[19px] pr-[18px] py-[12.59px] bg-amber-50 text-amber-500 rounded-[11.02px] justify-center items-center gap-[11.02px] inline-flex text-xs">
                        <span className="  font-medium tracking-tight">Add Profile</span>
                    </Link>

                    <Dropdown
                        className='option-classroom'
                        menu={{
                            items: [
                                {
                                    label: <button
                                        className={`${!option ? "text-primary" : ""} w-full   text-start`}
                                        onClick={() => setOption(null)}>
                                        All
                                    </button>,
                                    key: 994549859,
                                },
                                ...classrooms?.map((item, index) => {
                                    return {
                                        label: <button
                                            className={`${option === item ? "text-primary" : ""} w-full   text-start`}
                                            onClick={() => setOption(item)}>
                                            {item?.name}
                                        </button>,
                                        key: index,
                                    }
                                }),
                            ],
                        }}
                        trigger={['click']}
                    >

                        <button className="min-w-[135px] h-[47px] pl-[19px] pr-[18px] py-[12.59px] bg-white border border-amber-500 rounded-[11.02px] justify-center items-center gap-[11.02px] inline-flex text-xs">
                            <span className=" text-xs font-medium tracking-tight">
                                {option ? option?.name : "All"}
                            </span>
                            <FontAwesomeIcon icon={faChevronDown} className='text-amber-500' />
                        </button>
                    </Dropdown>
                    {/* <button className='min-w-[47px] h-[47px] bg-amber-50 rounded-xl flex justify-center items-center'>
                        <FontAwesomeIcon icon={faBars} className='text-amber-600' />
                    </button>
                    <button className='min-w-[47px] h-[47px] bg-amber-50 rounded-xl flex justify-center items-center'>
                        <Square />
                    </button> */}
                </div>
            </section>
            <section className='mt-10'>
                <Table users={data || []} />
            </section>
        </main>
    );
};

export default All_Contacts;