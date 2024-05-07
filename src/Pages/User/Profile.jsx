import { Image } from 'antd';
import React from 'react';
import { Button } from '../../Components/Buttons/Buttons';

const Profile = () => {
    return (
        <div className='grid grid-cols-10 h-full w-full'>
            <div className='col-span-7'></div>
            <div className='col-span-3 h-full w-full pt-[110px] pl-[60px]'
                style={{
                    background: 'rgba(21, 172, 222, 0.05)',
                }}
            >
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                    <Image
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        className='rounded-full overflow-hidden w-full h-full'
                    />
                </div>
                <h1 className="mt-10 text-slate-950 text-2xl font-black">Wellcome, Khalid Sin</h1>
                <p className="text-gray-600 text-sm font-light mt-2 leading-tight">Fill in the data for profile. It will take a couple of minutes. </p>
                <section className='mt-10 flex flex-col gap-3'>
                    <div className="flex items-center gap-4">
                        <Dot className={"bg-amber-400"} />
                        <h4>
                            <div className="text-black text-lg font-normal">Personal Data</div>
                        </h4>
                    </div>
                    <div className="flex items-center gap-4">
                        <Dot className={"bg-red-500"} />
                        <h4>
                            <div className="text-black text-lg font-normal">Contacts</div>
                        </h4>
                    </div>
                    <div className="flex items-center gap-4">
                        <Dot className={"bg-green-500"} />
                        <h4>
                            <div className="text-black text-lg font-normal">Address</div>
                        </h4>
                    </div>
                </section>
                <Button type={"error"} className={"mt-14"}> SignOut</Button>
            </div>
        </div>
    );
};

export default Profile;

export const Dot = ({ className }) => <div className={`w-2 h-2  rounded-full ${className}`} />;