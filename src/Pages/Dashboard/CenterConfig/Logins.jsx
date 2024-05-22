import React from 'react';

const Logins = () => {
    return (
        <div className='w-full'>
            <div className="flex items-center gap-5">
                <div className={`w-[37.66px] h-[37.66px] bg-amber-400/opacity-25 rounded-full flex items-center justify-center text-base font-bold border   bg-[#D9D9D9] text-gray-800`} >
                    5
                </div>
                <div className="text-stone-500 text-[21.73px] font-bold ">Logins</div>
            </div>
            <div className="w-full py-2 bg-[#FFBB3B33] flex items-center px-5 mt-10" >
                <p className='text-[11px]'>
                    New to Camiru? Your center's logins are listed below. Open the Launch Plan and follow the steps to get started.
                </p>
            </div>
            <div className="w-full py-2 bg-[#5CD9CA40] flex items-center px-5 mt-4" >
                <p className='text-[11px]'>
                    Additional Admin Logins Submit a request and include the director's name and email address to add administrator logins to your account.Note there may be an additional monthly cost to add administrators to your account.
                </p>
            </div>
            <h4 className="text-[#646363] text-xs font-semibold mt-7">Administrator logins</h4>
            <div className="text-[#3A3D47] text-[10px] font-normal mt-3">suad (Center Contact)<br />fivestaracademy2700@gmail.com</div>
            <hr className='mt-7 pb-2 border-t-[#00000066]' />
            <HistoryCard />
            <hr className='mt-7 pb-2 border-t-[#00000066]' />
            <HistoryCard />
            <hr className='mt-7 pb-2 border-t-[#00000066]' />
            <HistoryCard />
            <hr className='mt-7 pb-2 border-t-[#00000066]' />
            <HistoryCard />
            <hr className='mt-7 pb-2 border-t-[#00000066]' />
            <HistoryCard />
            <hr className='mt-7 pb-2 border-t-[#00000066]' />
            <HistoryCard />
            <hr className='mt-7 pb-2 border-t-[#00000066]' />
            <HistoryCard />
            <hr className='mt-7 pb-2 border-t-[#00000066]' />
            <HistoryCard />
            <div className="w-full py-3 bg-[#5CD9CA40]  px-5 mt-10" >
                <h5 className='text-xs font-semibold mb-2'>Password Reset Instructions</h5>
                <p className='text-[11px]'>
                    Additional Admin Logins Submit a request and include the director's name and email address to add administrator logins to your account.Note there may be an additional monthly cost to add administrators to your account.
                </p>
            </div>
        </div>
    );
};

export default Logins;

const HistoryCard = () => {
    return <div>
        <h4  className="text-[#646363] text-xs font-semibold mt-7" > Administrator logins</h4 >
        <p className="text-[#3A3D47] text-[11px] font-normal mt-1">
            For security reasons, passwords are never displayed in Camiru
        </p>
        <p className="text-[#3A3D47] mt-3 text-[11px] font-normal">
            Class Name : <strong>Infants</strong>
        </p>
        <p className="text-[#3A3D47] mt-1 text-[11px] font-normal">
            Login information : <strong>fsccci_infants</strong>
        </p>
        <div>
            <span className="text-cyan-700 text-xs font-semibold ">
                User has never logged in
            </span>
            <br />
            <span className="text-red-500 text-xs font-semibold ">Reset password</span>
        </div>
    </div>
}