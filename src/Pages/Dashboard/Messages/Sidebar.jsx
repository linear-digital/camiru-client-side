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
            <div className='mt-5 h-full overflow-y-auto'>
                <RecentChatCard />
                <RecentChatCard />
                <RecentChatCard />
                <RecentChatCard />
                <RecentChatCard />
                <RecentChatCard />

                <RecentChatCard />
            </div>
        </div>
    );
};

export default Sidebar;