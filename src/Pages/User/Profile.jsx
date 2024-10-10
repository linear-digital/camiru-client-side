import { Image } from 'antd';
import React from 'react';
import { Button } from '../../Components/Buttons/Buttons';
import Cookies from 'js-cookie';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { imageUrl } from '../../Components/helper/axios.instance';
const Profile = () => {
    const { currentUser } = useSelector(state => state.user)
    return (
        <div className='lg:grid grid-cols-9 h-screen w-full gap-1'>
            <div className='col-span-6 w-full h-full overflow-y-auto flex justify-center'>
                <Outlet />
            </div>
            <div className='col-span-3 h-full w-full pt-[110px] pl-[50px] relative z-10 '
                style={{
                    background: 'rgba(21, 172, 222, 0.05)',
                }}
            >
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                    <Image
                        src={imageUrl(currentUser?.profilePic)}
                        className='rounded-full overflow-hidden w-full h-full'
                    />
                </div>
                <h1 className="mt-10 text-slate-950 text-xl font-black">Wellcome, Khalid Sin</h1>
                <p className="text-gray-600 text-sm font-light mt-2 leading-tight">Fill in the data for profile. It will take a couple of minutes. </p>
                <section className='mt-10 flex flex-col gap-3'>
                    <Link to={"/dashboard/profile"} className="flex items-center gap-4">
                        <Dot className={"bg-amber-400"} />
                        <h4>
                            <div className="text-black text-lg font-normal">Personal Data</div>
                        </h4>
                    </Link>
                    <Link to={"/dashboard/profile/contacts"} className="flex items-center gap-4">
                        <Dot className={"bg-red-500"} />
                        <h4>
                            <div className="text-black text-lg font-normal">Contacts</div>
                        </h4>
                    </Link>
                    <Link to={"/dashboard/profile/address"} className="flex items-center gap-4">
                        <Dot className={"bg-green-500"} />
                        <h4>
                            <div className="text-black text-lg font-normal">Address</div>
                        </h4>
                    </Link>
                </section>
                <Button variant={"error"}
                onClick={()=> {
                    Cookies.remove("token-camiru")
                    window.location.href = '/login'
                }}
                className={"mt-14"}> SignOut</Button>
                <img src={'/profile-element.png'} alt=""
                    className='absolute bottom-0 right-[60px] max-w-[490px] opacity-80'
                />
            </div>
        </div>
    );
};

export default Profile;

export const Dot = ({ className, size }) => <div
    style={{ width: size || 8, height: size || 8 }}
    className={`  rounded-full ${className}`} />;

export const Hr = () => <div className='w-full bg-blue-gray-300 h-[1px]' />