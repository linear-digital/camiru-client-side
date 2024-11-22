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

export const UserAvater = ({ className, url, onClick }) => {
    return (
        <div onClick={onClick} className={`avatar overflow-hidden ${className}`}>
            <div
                className="h-full w-full">
                <Avatar src={url}
                
                    className='w-full h-full object-cover border'
                />
            </div>
        </div>
    )
}