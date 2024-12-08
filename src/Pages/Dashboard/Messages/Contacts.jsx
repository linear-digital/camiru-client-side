import React from 'react';
import { UserAvater } from '../../../Components/Card/Avater';
import { Dropdown } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { fetcher, imageUrl } from '../../../Components/helper/axios.instance';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Spin } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const Contacts = ({ refetch }) => {
    const [selected, setSelected] = useState('1')
    const items = [
        {
            label: <button
                onClick={() => setSelected('0')}
            >
                Parant Message
            </button>,
            key: '0',
        },
        {
            type: 'divider',
        },
        {
            label: <button
                onClick={() => setSelected('1')}
            >
                Staff Message
            </button>,
            key: '1',
        },
    ];
    const { currentUser } = useSelector(state => state.user)

    const { data, isLoading } = useQuery({
        queryKey: ['contacts', selected, currentUser?._id],
        queryFn: async () => {
            const res = await fetcher({
                url: selected === '0' ? `/student/center/${currentUser?._id}` : `/staff/center/${currentUser?._id}`,
                method: "get",
            })
            return res
        },
        enabled: !!currentUser
    })
    const router = useNavigate()
    const getChat = async (id) => {
        try {
            const newChat = {
                owner: {
                    id: currentUser?._id,
                    model: "Center",
                },
                user: {
                    id: id, // Student ID
                    model: selected === '0' ? 'Student' : "Staff",
                },
            }
            const res = await fetcher({
                url: "/message/chat",
                method: "POST",
                data: newChat
            })
            router(`?chat=${res?._id}`)
            refetch()
        } catch (error) {
            toast.error(error?.response?.data?.message || 'Something went wrong')
        }
    }
    if (isLoading) {
        return <Spin size='large' />
    }
    return (
        <div className='w-full mt-5'>
            <div className="flex justify-between items-center">
                <h5 className=" text-cyan-700 text-xs font-semibold ">Contacts</h5>
                <Dropdown
                    menu={{ items }} trigger={['click']}>
                    <button className=" text-blue-600 text-xs font-bold">Filter Conversation</button>
                </Dropdown>

            </div>
            <div className="flex mt-5 gap-[10px] ">
                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    className="h-auto w-full"
                >
                    {
                        data?.length ?
                            data?.map((item, i) =>
                                <SwiperSlide key={i}>
                                   <div className='flex flex-col items-center ml-4'>
                                   <UserAvater
                                        onClick={() => getChat(item?._id)}
                                        url={imageUrl(item?.profilePic)}
                                        key={i}
                                        className={"rounded-xl overflow-hidden min-w-11 h-11 "}
                                    />
                                    <p className='text-[8px] text-center'>
                                        {item?.firstName}
                                    </p>
                                   </div>
                                </SwiperSlide>
                            )
                            :
                            <h2 className="text-gray-500 text-lg font-normal">No Contacts</h2>
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Contacts;