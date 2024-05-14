import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Messages = () => {
    return (
        <div className='p-10 bg-white rounded-lg h-full flex'>
            <Sidebar />
            <section className='h-full w-full '>
                <Topbar />
            </section>
        </div>
    );
};

export default Messages;