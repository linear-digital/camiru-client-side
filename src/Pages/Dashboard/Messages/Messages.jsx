import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import ChatBox from './ChatBox';
import ChatBottom from './ChatBottom';
import { useEffect } from 'react';

const Messages = () => {
    useEffect(() => {
        document.title = 'Messages'
    },[ ])
    return (
        <div className='lg:p-8 p-5 bg-white rounded-lg lg:h-[calc(100vh-100px)] h-[calc(100vh-80px)] flex'>
            <Sidebar />
            {/* <section className='h-full w-full flex flex-col justify-between'>
                <Topbar />
                <ChatBox />
                <ChatBottom />
            </section> */}
            <div className="flex justify-center items-center w-full text-lg">
                Select a conversation
            </div>
        </div>
    );
};

export default Messages;