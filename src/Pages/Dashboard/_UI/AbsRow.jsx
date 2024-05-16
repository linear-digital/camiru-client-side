import React from 'react';

const AbsRow = () => {
    return (
        <div className='flex items-center justify-between'>

            <div className="flex items-center gap-3">
                <div className="avatar  border rounded-full overflow-hidden">
                    <div className="w-7 h-7 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
                <div className=" text-black text-xs font-normal leading-relaxed tracking-tight">Md Jibon Hossain Rifat</div>
            </div>
            <button className='btn gap-2 btn-secondary bg-[#96C82C] rounded-3xl btn-xs  px-6 text-[10px]'>
                View
            </button>
        </div>
    );
};

export default AbsRow;