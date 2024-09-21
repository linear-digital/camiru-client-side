import { Avatar } from 'antd';
import React from 'react';

const Avater = ({src}) => {
    return (
        <div className="avatar ml-[-5px]  border rounded-full overflow-hidden">
             <Avatar size={18} src={src} />
        </div>
    );
};

export default Avater;

export const UserAvater = ({ className, url }) => {
    return (
        <div className={`avatar overflow-hidden ${className}`}>
            <div
                className="h-full w-full">
                <Image src={url ? url : 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'}
                    className='w-full h-full object-cover'
                />
            </div>
        </div>
    )
}