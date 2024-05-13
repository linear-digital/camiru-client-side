import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '@material-tailwind/react';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Address_Contact = ({ edit }) => {
    const location = useLocation();
    return (
        <div className='w-full border pl-[84px] py-[55px] rounded-xl poppins'>
            <div className="flex gap-10">
                <h1 className="text-slate-900 text-2xl font-bold ">Address & Contact</h1>
                {
                    !edit && <Link to={location.pathname.includes("edit") ? `${location.pathname}` : `${location.pathname}/edit`} className='btn btn-sm bg-[#FFBB3B33] text-[#A0A0A0] text-xs font-normal px-5'>
                        Advance Edit Page
                        <FontAwesomeIcon icon={faPen} className='text-[#FFBB3B]' />
                    </Link>
                }
            </div>
            {
                edit ?
                    <div className='mt-10'>
                        <RowEdit
                            title={"Parents"}
                        >
                            <div>
                                <div className="w-[350px] h-[31.50px] bg-slate-50 rounded-sm border border-slate-300/opacity-50 grid grid-cols-8 " >
                                    <div className='col-span-2 border-r px-2'>
                                        <select
                                            className='w-full h-full bg-slate-50 border-none outline-none text-xs '
                                        >
                                            <option value={"father"}>
                                                Father
                                            </option>
                                            <option value={"mother"}>
                                                Mother
                                            </option>
                                        </select>
                                    </div>
                                    <div className="col-span-2 flex items-center px-2 border-r">
                                        <select
                                            className='w-full h-full bg-slate-50 border-none outline-none text-xs'
                                        >
                                            <option value={"phone"}>
                                                Phone
                                            </option>
                                            <option value={"mother"}>
                                                Email
                                            </option>
                                        </select>
                                    </div>
                                    <div className="col-span-4 flex items-center px-2 ">
                                        <input type="text"
                                            className='w-full h-full bg-slate-50 border-none outline-none text-xs'
                                            placeholder='Write here'
                                        />
                                    </div>
                                </div>
                                <div className="w-[350px] h-[31.50px] bg-slate-50 rounded-sm border border-slate-300/opacity-50 grid grid-cols-8 mt-2" >
                                    <div className='col-span-2 border-r px-2'>
                                        <select
                                            className='w-full h-full bg-slate-50 border-none outline-none text-xs '
                                        >
                                            <option value={"mother"}>
                                                Mother
                                            </option>
                                            <option value={"father"}>
                                                Father
                                            </option>

                                        </select>
                                    </div>
                                    <div className="col-span-2 flex items-center px-2 border-r">
                                        <select
                                            className='w-full h-full bg-slate-50 border-none outline-none text-xs'
                                        >
                                            <option value={"mother"}>
                                                Email
                                            </option>
                                            <option value={"phone"}>
                                                Phone
                                            </option>

                                        </select>
                                    </div>
                                    <div className="col-span-4 flex items-center px-2 ">
                                        <input type="text"
                                            className='w-full h-full bg-slate-50 border-none outline-none text-xs'
                                            placeholder='Write here'
                                        />
                                    </div>
                                </div>
                            </div>
                        </RowEdit>

                        <RowEdit
                            title={"Address"}
                        >
                            <input type="text"
                                className='w-[350px] h-[38px] bg-slate-50 border outline-none text-xs px-2 '
                                placeholder='Address'
                            />
                        </RowEdit>

                        <RowEdit
                            title={"State of Province"}
                        >
                            <input type="text"
                                className='w-[350px] h-[38px] bg-slate-50 border outline-none text-xs px-2 '
                                placeholder='State of Province'
                            />
                        </RowEdit>

                        <RowEdit
                            title={"Country"}
                        >
                            <input type="text"
                                className='w-[350px] h-[38px] bg-slate-50 border outline-none text-xs px-2 '
                                placeholder='Country'
                            />
                        </RowEdit>
                        <RowEdit
                            title={"Zip"}
                        >
                            <input type="text"
                                className='w-[350px] h-[38px] bg-slate-50 border outline-none text-xs px-2 '
                                placeholder='Zip'
                            />
                        </RowEdit>
                        <RowEdit
                            title={""}
                        >
                            <div className="flex gap-2">
                                <button
                                    className='w-[90px] h-[32px] bg-[#5CD9CA40] text-[#187A82] rounded-md text-xs'
                                >
                                    Save
                                </button>
                                <button
                                    className='w-[90px] h-[32px] text-[#FF3636] bg-[#FF363633] rounded-md text-xs'
                                >
                                    Cencle
                                </button>
                            </div>
                        </RowEdit>
                    </div>
                    :
                    <div className='mt-10'>
                        <div className="grid grid-cols-5 gap-10 mb-8 items-start">
                            <div className="col-span-1 justify-end flex items-center">
                                <h4 className="text-zinc-700 text-sm font-semibold">
                                    Parents
                                </h4>
                            </div>
                            <div className="col-span-4 flex items-center gap-3">
                                <Gurdian
                                    name={"Father"}
                                    phone={"+001234567"}
                                    email={"father@mail.com"}
                                />
                                <Gurdian
                                    name={"Mother"}
                                    phone={"+001234567"}
                                    email={"mother@mail.com"}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-5 gap-10 mb-8 items-start">
                            <div className="col-span-1 justify-end flex items-center">
                                <h4 className="text-zinc-700 text-sm font-semibold">
                                    Guardians
                                </h4>
                            </div>
                            <div className="col-span-4 flex items-center gap-3">
                                <Gurdian
                                    name={"Grand Father"}
                                    phone={"+001234567"}
                                    email={"grandfa@mail.com"}
                                />
                                <Gurdian
                                    name={"Grand Mother"}
                                    phone={"+001234567"}
                                    email={"grandma@mail.com"}
                                />
                                <Gurdian
                                    name={"Sibling"}
                                    phone={"+001234567"}
                                    email={"sibling@mail.com"}
                                />
                            </div>
                        </div>
                        <Row
                            title={"Address"}
                            desc={"Saint Paul"}
                        />
                        <Row
                            title={"State of Province"}
                            desc={"MN"}
                        />
                        <Row
                            title={"Country"}
                            desc={"United States"}
                        />
                        <Row
                            title={"Zip"}
                            desc={"5555"}
                        />

                    </div>
            }
        </div >
    );
};

export default Address_Contact;

const Row = ({ title, desc }) => {
    return <div className="grid grid-cols-5 gap-10 mb-8">
        <div className="col-span-1 justify-end flex items-center">
            <h4 className="text-zinc-700 text-sm font-semibold">
                {title}
            </h4>
        </div>
        <div className="col-span-4 flex items-center">
            <h5 className="text-zinc-700 text-sm font-normal ">{desc}</h5>
        </div>
    </div>
}

const Gurdian = ({ name, phone, email }) => {
    return <Card className='p-4 shadow border'>
        <div className="text-xs">
            {name}
        </div>
        <div className="text-[10px] mt-1">
            {phone}
        </div>
        <div className="text-[10px] mt-1">
            {email}
        </div>
    </Card>
}

const RowEdit = ({ title, desc, children }) => {
    return <div className="grid grid-cols-5 gap-10 mb-8">
        <div className="col-span-1 justify-end flex items-start">
            <h4 className="text-zinc-700 text-sm font-semibold">
                {title}
            </h4>
        </div>
        <div className="col-span-4 flex items-center">
            {children}
        </div>
    </div>
}