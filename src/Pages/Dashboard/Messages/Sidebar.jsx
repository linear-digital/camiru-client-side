import React from 'react';
import SearchBar from './SearchBar';
import Contacts from './Contacts';
import RecentChatCard from './RecentChatCard';

const Sidebar = () => {
    return (
        <div className='min-w-[347px] hidden lg:block max-w-[347px] h-full p-5 shadow overflow-hidden overflow-y-auto'>
            <h3 className="text-black/70 text-base font-bold">Messages</h3>
            <SearchBar />
            <Contacts />
            <div className="mt-10 text-cyan-700 text-xs font-semibold ">Chats</div>
            <div className='mt-5 h-full'>
                <RecentChatCard />
                <RecentChatCard />
                <RecentChatCard />
                <RecentChatCard />
                <RecentChatCard />
                <RecentChatCard />

                <RecentChatCard />
                <h2 className="text-gray-500 text-lg font-normal">No Chats Found</h2>
            </div>
        </div>
    );
};

export default Sidebar;