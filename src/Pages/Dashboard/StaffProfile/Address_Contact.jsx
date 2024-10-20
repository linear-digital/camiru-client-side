import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '@material-tailwind/react';
import { Add } from '@mui/icons-material';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Address_Contact_Form from './Forms/Address_Contact_Form';


const Address_Contact = () => {
    const location = useLocation();
    const { staff: selected } = useSelector((state) => state.staff)
    const [edit, setEdit] = useState(false)
    if (edit) {
        return <Address_Contact_Form onClose={() => setEdit(!edit)} />
    }
    return (
        <div className='w-full border border-staff-pc p-10 rounded-xl poppins bg-staff-bg'>
            <div className="flex justify-end">
                {
                    <button
                        onClick={() => setEdit(!edit)}
                        className='btn btn-sm bg-[#FFBB3B33] text-[#A0A0A0] text-xs font-normal px-5'>
                        Edit Page
                        <FontAwesomeIcon icon={faPen} className='text-[#FFBB3B]' />
                    </button>
                }
            </div>
            <div className="grid grid-cols-4">

                <div className="col-span-1 flex justify-end">
                    <h1 className="text-slate-900 lg:text-2xl text-xl mb-3 lg:mb-0 font-bold ">Address & Contact</h1>
                </div>
            </div>
            <div className='mt-10'>
                <Row

                    title={"Address"}
                    desc={selected?.address || "N/A"}
                />
                <Row
                    title={"City"}
                    desc={selected?.city || "N/A"}
                />
                <Row
                    title={"State of Province"}
                    desc={selected?.state || "N/A"}
                />
                <Row
                    title={"Country"}
                    desc={selected?.country || "N/A"}
                />
                <Row
                    title={"Zip"}
                    desc={selected?.zip || "N/A"}
                />
                <Row
                    title={"Email"}
                    desc={selected?.email || "N/A"}
                />
                <Row
                    title={"Phone"}
                    desc={selected?.phone || "N/A"}
                />
            </div>
        </div >
    );
};

export default Address_Contact;

const Row = ({ title, desc }) => {
    return <div className="grid lg:grid-cols-4 grid-cols-6 gap-10 lg:mb-8 mb-5">
        <div className="lg:col-span-1 col-span-3 lg:justify-end flex items-center">
            <h4 className="text-zinc-700 text-sm font-semibold">
                {title}
            </h4>
        </div>
        <div className="col-span-3 flex items-center">
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
    return <div className="lg:grid grid-cols-5 gap-10 mb-8">
        <div className="col-span-1 lg:justify-end justify-start flex items-center">
            <h4 className="text-zinc-700 mb-2 lg:mb-0 text-sm font-semibold">
                {title}
            </h4>
        </div>
        <div className="col-span-4 flex items-center">
            {children}
        </div>
    </div>
}