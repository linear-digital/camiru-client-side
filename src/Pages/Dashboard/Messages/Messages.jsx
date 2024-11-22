import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import ChatBox from './ChatBox';
import ChatBottom from './ChatBottom';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetcher } from '../../../Components/helper/axios.instance';
import { Spin } from 'antd';
import { useRootContext } from '../RootContext';

const Messages = () => {
    const searchParams = useSearchParams()
    const search = searchParams[0]?.get('chat')
    const { socket } = useRootContext()
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['chat', search],
        queryFn: async () => {
            const res = await fetcher({
                url: `/message/chat/${search}`,
                method: 'GET',
            })
            return res
        },
        refetchOnMount: false,
        enabled: !!search
    })
    return (
        <div className='lg:p-8 p-5 bg-white rounded-lg lg:h-[calc(100vh-100px)] h-[calc(100vh-80px)] flex'>
            <Sidebar />
            {
                !search ?
                    <div className="flex justify-center items-center w-full text-lg">
                        Select a conversation
                    </div>
                    :
                    isLoading ?
                        <div className="flex justify-center items-center w-full text-lg">
                            <Spin size="large" />
                        </div>
                        :
                        <section className='h-full w-full flex flex-col justify-between'>
                            <Topbar user={data} />
                            <ChatBox target={data} refetch={refetch}/>
                            <ChatBottom target={data}/>
                        </section>
            }

        </div>
    );
};

export default Messages;