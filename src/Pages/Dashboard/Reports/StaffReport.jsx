import React from 'react';
import Card from './Card';

const StaffReport = () => {
    return (
        <div className='mt-14'>
            <h2 className="text-black text-base font-semibold ">Staff Reports</h2>
            <div className="text-[#999999] mt-2 text-sm font-normal">Get center-wide reports about your staff.</div>
            
            <div className="flex flex-wrap gap-4 mt-5">
                    <Card
                        title={"Temperature Check (csv)"}
                    />
                    <Card
                        title={"Child Profile (csv)"}
                    />
                </div>
        </div>
    );
};

export default StaffReport;