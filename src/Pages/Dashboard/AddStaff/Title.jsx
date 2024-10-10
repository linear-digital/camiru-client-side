import React from 'react';

const Title = ({ active }) => {
    return (
        <div className='bg-[#fff8f9] border-staff-pc border rounded-lg lg:h-[66px] h-[50px] w-full flex justify-start items-center px-[20px]' >
            <div className="text-black lg:text-[22px] text-[16px] font-medium  leading-[30.96px] tracking-wide">{active.step}. {active.full_desc}</div>
        </div>
    );
};

export default Title;