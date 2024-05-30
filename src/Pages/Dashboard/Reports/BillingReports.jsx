import React from 'react';


const BillingReport = () => {
    return (
        <div className='mt-14'>
            <h2 className="text-black text-base font-semibold ">Billing Reports</h2>
            <div className="text-[#999999] mt-2 text-sm font-normal">
                Get reports on all aspects of billing at your center.
            </div>
            <button className="w-[281px] h-[47px] hover:bg-cyan-700 hover:text-white rounded text-cyan-700 border border-cyan-700 justify-center items-center gap-[11.02px] inline-flex mt-5">
                <div className=" text-[19px] font-semibold ">Go to billing report</div>
            </button>
        </div>
    );
};

export default BillingReport;