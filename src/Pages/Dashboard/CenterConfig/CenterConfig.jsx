import React from 'react';
import DB_Page_Layout from '../../../Layouts/DB_Page_Layout';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const CenterConfig = () => {
    return (
        <DB_Page_Layout>
            <div>
                <h1 className=" text-[#187A82] lg:text-2xl text-xl font-bold ">Center Configuration</h1>
                <p className=" text-neutral-400 mt-2 font-normal text-sm">
                    To add a profile please fill out the following information.
                </p>
            </div>
            <section className='mt-10 flex lg:flex-row flex-col gap-10 items-start'>
                <div className='grid gap-5 w-full lg:w-[250px]'>
                    <Navigation
                        name={"Center Settings"}
                        path={"/dashboard/config"}
                        number={1}
                    />
                    <Navigation
                        name={"Classroom Settings"}
                        path={"/dashboard/config/classroom"}
                        number={2}
                    />
                    <Navigation
                        name={"Health Screening"}
                        path={"/dashboard/config/health"}
                        number={3}
                    />
                    <Navigation
                        name={"Registration Configuration"}
                        path={"/dashboard/config/reg-config"}
                        number={4}
                    />
                    <Navigation
                        name={"Logins"}
                        path={"/dashboard/config/logins"}
                        number={5}
                    />
                </div>
                <div className='lg:p-10 p-3 w-full border-[#187A82] border bg-[#F8FCFF] rounded'>
                    <Outlet />
                </div>
            </section>
        </DB_Page_Layout>
    );
};

export default CenterConfig;
const Navigation = ({ name, path, number }) => {
    const location = useLocation();
    const isIncluded = (path) => {
        return location.pathname === path
    }
    return <Link to={path} className={`flex border ${isIncluded(path) ? "border-[#FFBB3B] bg-[#FFBB3B33]" : "border-[#187A82]"} lg:w-[250px] w-full h-[50px] px-5 items-center justify-between rounded`}>
        <div className="flex gap-4 items-center">
            <div className={`w-[25px] h-[25px] bg-amber-400/opacity-25 rounded-full flex items-center justify-center text-sm font-bold border   ${isIncluded(path) ? "bg-[#FFBB3B45] text-amber-400 border-amber-400" : "bg-[#D9D9D9] text-gray-800"}`} >
                {number}
            </div>
            <div className={`${isIncluded(path) ? "text-amber-400" : "text-gray-800"} text-[10px] font-bold`}>
                {name}
            </div>
        </div>
        {
            isIncluded(path) ? <Active /> : <InActive />
        }
    </Link>
}
const Active = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
        <path d="M0.831121 15.2446C0.558246 14.9717 0.558246 14.5293 0.831121 14.2564L7.09156 7.99591L0.831121 1.7354C0.558245 1.46252 0.558245 1.02017 0.831121 0.747281C1.104 0.474397 1.54642 0.474397 1.8193 0.747281L8.57384 7.50185C8.84672 7.77473 8.84672 8.21709 8.57384 8.48997L1.8193 15.2446C1.54642 15.5174 1.104 15.5174 0.831121 15.2446Z" fill="#FFBB3B" />
    </svg>
}
const InActive = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
        <path d="M0.453924 1.12458C0.726799 0.851703 1.16923 0.851703 1.4421 1.12458L7.70258 7.38502L13.9631 1.12458C14.236 0.851703 14.6783 0.851703 14.9512 1.12458C15.2241 1.39745 15.2241 1.83988 14.9512 2.11276L8.19664 8.86729C7.92376 9.14018 7.4814 9.14018 7.20852 8.86729L0.453924 2.11276C0.181049 1.83988 0.181049 1.39745 0.453924 1.12458Z" fill="#212121" fill-opacity="0.4" />
    </svg>
}