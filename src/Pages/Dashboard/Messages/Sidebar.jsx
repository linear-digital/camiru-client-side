/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import SearchBar from './SearchBar';
import Contacts from './Contacts';
import RecentChatCard from './RecentChatCard';
import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { fetcher } from '../../../Components/helper/axios.instance';
import { Spin } from 'antd';
import { useRootContext } from '../RootContext';
import { useState } from 'react';
import { useEffect } from 'react';

const Sidebar = () => {
    const { currentUser } = useSelector((state) => state.user);
    const { message, refetchContact } = useRootContext()
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        if (message?._id) {
            const msg = contacts.map(item => {
                if (item._id === message?.chat) {
                    return { ...item, message: message, updatedAt: new Date() }
                }
                return item
            })
            setContacts(msg)
        }
    }, [message])
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['chat-list', currentUser?._id, refetchContact],
        queryFn: async () => {
            const res = await fetcher({
                url: `/message/chat/user/${currentUser?._id}`,
                method: 'GET',
            })
            return res
        },
        enabled: !!currentUser,
    })
    useEffect(() => {
        if (data) {
            setContacts(data)
        }
    }, [data])
    return (
        <div className='min-w-[347px] hidden lg:block max-w-[347px] h-full p-5 shadow overflow-hidden'>
            <h3 className="text-black/70 text-base font-bold">Messages</h3>
            <SearchBar />
            <Contacts refetch={refetch} />
            <div className="mt-10 text-cyan-700 text-xs font-semibold ">
                Chats
            </div>
            <div className='mt-5 h-[500px] overflow-y-auto w-full'>
                {
                    contacts?.length > 0 ?
                        contacts?.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))?.map((item, index) => <RecentChatCard key={index} user={item} />)
                        :
                        <h2 className="text-gray-500 text-lg font-normal">No Chats Found</h2>
                }

            </div>
        </div>
    );
};

export default Sidebar;