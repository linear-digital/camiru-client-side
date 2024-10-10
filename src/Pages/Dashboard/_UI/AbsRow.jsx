import { Avatar } from 'antd';

import React from 'react';
import nameDisplay from '../../../util/nameDisplay';
import { imageUrl } from '../../../Components/helper/axios.instance';

const AbsRow = ({ item }) => {
    return (
        <div className='flex items-center justify-between'>

            <div className="flex items-center gap-3">
                <div className="avatar  border rounded-full overflow-hidden">
                    <div className="w-7 h-7 rounded-full">
                        <Avatar
                            className='w-full h-full object-cover'
                            alt='attachment'
                            src={imageUrl(item?.profilePic)}
                        />
                    </div>
                </div>
                <div className=" text-black text-xs font-normal leading-relaxed tracking-tight">{nameDisplay(item)}</div>
            </div>
            <button className='btn gap-2 btn-secondary bg-[#96C82C] rounded-3xl btn-xs py-2  px-6 text-[10px] text-white'>
                View
            </button>
        </div>
    );
};

export default AbsRow;