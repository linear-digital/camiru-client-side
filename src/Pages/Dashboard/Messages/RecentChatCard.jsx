import React from 'react';
import { UserAvater } from '../../../Components/Card/Avater';
import nameDisplay from '../../../util/nameDisplay';
import { imageUrl } from '../../../Components/helper/axios.instance';
import { useNavigate } from 'react-router-dom';

const RecentChatCard = ({ user }) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/dashboard/messages?chat=${user?._id}`)} className='w-full flex items-center py-[10px] border-b gap-3 cursor-pointer hover:shadow-lg px-2'>
            <UserAvater
                url={imageUrl(user?.user?.id?.profilePic)}
                className={"rounded-xl overflow-hidden min-w-11 h-11"}
            />
            <div className='w-full'>
                <div className="flex justify-between w-full items-center">
                    <h5 className=" text-slate-900 text-xs font-bold ">{nameDisplay(user?.user?.id)} <sup>{user?.user?.model}</sup></h5>
                    <p className=" text-cyan-700 text-xs font-normal ">12:45 PM</p>
                </div>
                <div className="w-44 h-6 text-cyan-700 text-xs font-normal mt-1">
                    {
                        user?.message?.message
                    }
                </div>
            </div>
        </div>
    );
};

export default RecentChatCard;