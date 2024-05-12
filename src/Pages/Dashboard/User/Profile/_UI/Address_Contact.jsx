import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '@material-tailwind/react';
import React from 'react';
import { useState } from 'react';

const Address_Contact = () => {

    return (
        <div className='w-full border pl-[84px] py-[55px] rounded-xl poppins'>
            <div className="flex gap-10">
                <h1 className="text-slate-900 text-2xl font-bold ">Address & Contact</h1>
                <button className='btn btn-sm bg-[#FFBB3B33] text-[#A0A0A0] text-xs font-normal px-5'>
                    Edit Profile Information
                    <FontAwesomeIcon icon={faPen} className='text-[#FFBB3B]' />
                </button>
            </div>
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