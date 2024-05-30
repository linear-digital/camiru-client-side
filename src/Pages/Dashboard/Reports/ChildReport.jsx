import React from 'react';
import Card from './Card';

const ChildReport = () => {
    return (
        <div className='mt-14'>
            <h2 className="text-black text-base font-semibold ">Child Reports</h2>
            <div className="text-[#999999] mt-2 text-sm font-normal">Get printable lists of information about children at your center.</div>
            <div className="flex flex-col gap-3 mt-5">
                <Card
                    title={"Allergies / Medical Notes"}
                />
                <Card
                    title={"Birthdays"}
                />
                <Card
                    title={"Immunisation Records"}
                />
            </div>
        </div>
    );
};

export default ChildReport;