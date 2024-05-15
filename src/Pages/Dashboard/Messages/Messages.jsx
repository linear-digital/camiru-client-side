import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import ChatBox from './ChatBox';
import ChatBottom from './ChatBottom';

const Messages = () => {
    return (
        <div className='lg:p-10 p-5 bg-white rounded-lg h-full flex'>
            {/* <Sidebar /> */}
            <section className='h-full w-full flex flex-col justify-between'>
                <Topbar />
                <ChatBox />
                <ChatBottom />
            </section>
        </div>
    );
};

export default Messages;