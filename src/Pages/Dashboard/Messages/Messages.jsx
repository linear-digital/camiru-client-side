import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import ChatBox from './ChatBox';
import ChatBottom from './ChatBottom';

const Messages = () => {
    return (
        <div className='lg:p-8 p-5 bg-white rounded-lg lg:h-[calc(100vh-100px)] h-[calc(100vh-80px)] flex'>
            <Sidebar />
            <section className='h-full w-full flex flex-col justify-between'>
                <Topbar />
                <ChatBox />
                <ChatBottom />
            </section>
        </div>
    );
};

export default Messages;