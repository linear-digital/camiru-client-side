import React from 'react';

const Avater = () => {
    return (
        <div className="avatar ml-[-5px]  border rounded-full overflow-hidden">
            <div className="w-5 h-5 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    className='w-full h-full object-cover'
                />
            </div>
        </div>
    );
};

export default Avater;