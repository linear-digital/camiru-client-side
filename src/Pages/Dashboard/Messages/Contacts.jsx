import React from 'react';
import { UserAvater } from '../../../Components/Card/Avater';
import { Dropdown } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { fetcher, imageUrl } from '../../../Components/helper/axios.instance';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Spin } from 'antd';
import { useState } from 'react';
const Contacts = () => {
    const [selected, setSelected] = useState('1')
    const items = [
        {
            label: <button
                onClick={() => setSelected('1')}
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
                url: selected === '0' ? `/parent/center/${currentUser?._id}` : `/staff/center/${currentUser?._id}`,
                method: "get",
            })
            return res
        },
        enabled: !!currentUser
    })
    console.log(selected);
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
            <div className="flex mt-5 gap-[10px]">
                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    className="h-auto w-full"
                >
                    {
                        data?.length ?
                            data?.map((item, i) =>
                                <SwiperSlide key={i}>
                                    <UserAvater
                                        url={imageUrl(item?.profilePic)}
                                        key={i}
                                        className={"rounded-xl overflow-hidden min-w-11 h-11 "}
                                    />
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